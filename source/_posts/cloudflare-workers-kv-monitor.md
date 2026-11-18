---
title: Cloudflare Workers + KV 搭建零成本节点健康监控系统
tags: [Cloudflare Workers,Cloudflare KV,Serverless,节点监控,自动化]
categories:
  - - 杂
date: 2026-03-05 14:39:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

# Cloudflare Workers + KV 搭建零成本节点健康监控系统

Cloudflare Workers 是运行在全球边缘网络上的 Serverless 平台，免费套餐每天 10 万次请求，配合 KV 存储，可以零成本搭一些后端服务。

这里以一个分布式节点健康监控系统为例，用 Workers + KV 实现几个功能：接收国内服务器上报的健康检测结果，调用 Cloudflare DNS API 自动切换故障节点的 IP，通过 Telegram Bot 发送告警并响应查询命令，最新状态存在 KV 里，供 Bot 命令读取。

## 项目架构

```
┌─────────────────────────┐           ┌────────────────────────────────┐
│  🇨🇳 国内检测服务器        │   HTTP    │  ☁️ Cloudflare Worker           │
│  (detector.py)          │ ────────→ │  (node-monitor-worker.js)      │
│                         │           │                                │
│  • TCPing 检测节点端口    │           │  • 验证 Webhook 密钥            │
│  • 多端口健康检查         │           │  • 调用 Cloudflare DNS API     │
│  • EDNS 运营商分流检测    │           │  • 更新 A 记录 (切换 IP)        │
│  • 定时上报状态           │           │  • 发送 Telegram 告警通知       │
│                         │           │  • KV 存储检测状态              │
└─────────────────────────┘           │  • Telegram Bot 命令处理        │
                                      └────────────────────────────────┘
                                          │              │
                                          ▼              ▼
                                   Cloudflare DNS   Telegram API
                                   (更新 A 记录)    (告警 + Bot)
```

国内服务器无法直接访问 Cloudflare API 和 Telegram API。

Workers 部署在全球边缘节点，两边都能访问。

所以让 Workers 做中间层，接收国内的检测结果，执行 DNS 切换和告警转发。

## Cloudflare Workers 基础

Workers 是 Cloudflare 的 Serverless 函数平台，代码运行在全球 300+ 边缘节点。

和传统云函数不同，它的冷启动时间几乎为 0。

免费套餐每天 100,000 次请求，每次请求 CPU 时间 10ms。KV 每天 100,000 次读取、1,000 次写入，存储 1 GB。

### 创建 Worker

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages → Create
3. 选择 Create Worker
4. 给 Worker 命名（如 `node-monitor`）
5. 粘贴代码，点击 Deploy

### Worker 代码结构

```javascript
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // 路由分发
        if (path === '/') {
            return new Response('Monitor Service Running');
        }

        if (path === '/health') {
            return jsonResponse({ status: 'ok', timestamp: new Date().toISOString() });
        }

        if (path === '/webhook/switch' && request.method === 'POST') {
            return await handleSwitch(request, env);
        }

        return new Response('Not Found', { status: 404 });
    }
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data, null, 2), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });
}
```

`request` 是传入的 HTTP 请求对象，`env` 放环境变量和 Bindings（Secrets、KV 等），`ctx` 是执行上下文（可用于 `waitUntil` 异步任务）。

## 配置环境变量

进入 Worker 的 Settings → Variables and Secrets，添加下面这些加密变量。

`CF_API_TOKEN` 填 Cloudflare API Token，需要 DNS 编辑权限（示例 `abc123...`）。

`CF_ZONE_ID` 填域名对应的 Zone ID（示例 `0123456789abcdef`）。

`WEBHOOK_SECRET` 是 Webhook 验证密钥，自己写一串随机字符即可（示例 `my-secret-key-xxxxx`）。

`TELEGRAM_BOT_TOKEN` 填 Telegram Bot Token，可选（示例 `123456:ABC-DEF...`）。

`TELEGRAM_CHAT_ID` 填接收通知的 Chat ID，可选（示例 `-1001234567890`）。

**所有 Secrets 都使用 Encrypt 加密存储，部署后无法查看原始值。**

### 获取 Cloudflare API Token

1. 进入 Cloudflare Dashboard → My Profile → API Tokens
2. 点击 Create Token
3. 选择模板 Edit zone DNS
4. 在 Zone Resources 中选择你的域名
5. 创建后复制 Token

## 核心功能实现

### Webhook 接收与密钥验证

所有 Webhook 请求都需要验证密钥，防止未授权调用：

```javascript
async function handleSwitch(request, env) {
    const body = await request.json();

    // 密钥验证
    if (body.secret !== env.WEBHOOK_SECRET) {
        console.warn('[Webhook] ⚠️ 密钥验证失败');
        return jsonResponse({ success: false, message: 'Invalid secret' }, 401);
    }

    // 参数校验
    if (!body.node || !body.next_ip) {
        return jsonResponse({
            success: false,
            message: 'Missing required fields: node, next_ip'
        }, 400);
    }

    console.log(`[Webhook] 📥 收到切换请求: ${body.node} -> ${body.next_ip}`);

    // 执行 DNS 切换
    const success = await switchNodeIP(env, body.node, body.next_ip);

    // 发送 Telegram 通知
    if (success) {
        await sendTelegram(env,
            `🔄 <b>节点 IP 已切换</b>\n\n` +
            `📍 节点: <code>${body.node}</code>\n` +
            `❌ 旧 IP: <code>${body.current_ip}</code>\n` +
            `✅ 新 IP: <code>${body.next_ip}</code>\n` +
            `📝 原因: ${body.reason}\n` +
            `⏰ 时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`
        );
    }

    return jsonResponse({
        success,
        message: success ? 'DNS 切换成功' : 'DNS 切换失败',
        node: body.node,
        newIP: body.next_ip
    });
}
```

### 调用 Cloudflare DNS API

Worker 中可以直接使用 `fetch` 调用 Cloudflare API 修改 DNS 记录：

```javascript
// 查询 DNS 记录 ID
async function getDnsRecordId(env, recordName) {
    const url = `https://api.cloudflare.com/client/v4/zones/${env.CF_ZONE_ID}/dns_records?type=A&name=${recordName}`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${env.CF_API_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (data.success && data.result && data.result.length > 0) {
        return data.result[0].id;
    }
    return null;
}

// 更新 DNS A 记录
async function updateDnsRecord(env, recordId, recordName, newIP) {
    const url = `https://api.cloudflare.com/client/v4/zones/${env.CF_ZONE_ID}/dns_records/${recordId}`;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${env.CF_API_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'A',
            name: recordName,
            content: newIP,
            ttl: 60,       // 短 TTL 确保快速生效
            proxied: false  // 直接 DNS，不走 CF 代理
        })
    });

    const data = await response.json();
    return data.success;
}

// 组合：切换节点 IP
async function switchNodeIP(env, nodeName, newIP) {
    const recordId = await getDnsRecordId(env, nodeName);
    if (!recordId) return false;
    return await updateDnsRecord(env, recordId, nodeName, newIP);
}
```

### Telegram 通知

通过 Telegram Bot API 发送告警消息：

```javascript
async function sendTelegram(env, message) {
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
        console.log('[Telegram] 通知未配置，跳过');
        return;
    }

    const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'  // 支持 HTML 格式化
        })
    });
}
```

国内服务器无法直接访问 `api.telegram.org`，通过 Worker 中转最合适。

## KV 存储检测状态

Workers KV（Key-Value）是 Cloudflare 的全球分布式键值存储，读取性能很高。

### 创建 KV 命名空间

1. 进入 Workers 页面 → KV
2. 点击 Create a namespace，命名为 `NODE_MONITOR_KV`
3. 在 Worker 的 Settings → Bindings 中添加 KV 绑定，Variable name 写 `KV`，KV namespace 选择刚创建的 `NODE_MONITOR_KV`

### 存储检测状态

国内检测脚本每 5 分钟上报一次最新状态到 Worker，Worker 存入 KV：

```javascript
async function handleReport(request, env) {
    const body = await request.json();

    if (body.secret !== env.WEBHOOK_SECRET) {
        return jsonResponse({ success: false, message: 'Invalid secret' }, 401);
    }

    // 存入 KV
    const kvData = {
        status: body.status,        // 各节点端口检测结果
        timestamp: body.timestamp,  // 检测时间
        updated_at: Date.now()      // 存储时间（用于计算新鲜度）
    };

    await env.KV.put('detector_status', JSON.stringify(kvData));
    return jsonResponse({ success: true });
}
```

### 读取状态

Telegram Bot 的 `/check` 命令从 KV 读取：

```javascript
async function handleCheckCommand(env) {
    const raw = await env.KV.get('detector_status');
    if (!raw) {
        await sendTelegram(env, '⚠️ 暂无检测数据，请确认检测脚本正在运行');
        return;
    }

    const data = JSON.parse(raw);
    const status = data.status;

    // 计算数据新鲜度
    const ageMins = Math.floor((Date.now() - data.updated_at) / 60000);
    const freshness = ageMins < 10 ? '🟢 实时'
                    : ageMins < 30 ? `🟡 ${ageMins}分钟前`
                    : `🔴 ${ageMins}分钟前 (过旧)`;

    // 构建状态报告
    let lines = [];
    for (const [name, info] of Object.entries(status)) {
        const icon = info.healthy ? '✅' : '❌';
        let line = `${icon} <b>${name}</b>\n   IP: <code>${info.ip}</code>`;

        // 显示每个端口状态
        if (info.port_results) {
            const portLines = Object.entries(info.port_results)
                .map(([port, ok]) => `${ok ? '✅' : '❌'} ${port}`)
                .join('  ');
            line += `\n   端口: ${portLines}`;
        }
        lines.push(line);
    }

    await sendTelegram(env,
        `🔍 <b>端口检测结果</b> (${freshness})\n\n` +
        lines.join('\n\n') +
        `\n\n📍 来源: 国内服务器\n⏰ 检测时间: ${data.timestamp}`
    );
}
```

## Telegram Bot 集成

### 注册 Telegram Webhook

将 Telegram Bot 的 Webhook 设置为 Worker 地址：

```bash
# 通过浏览器访问以下 URL 注册（替换为你自己的值）
https://your-worker.workers.dev/setup-webhook?secret=你的WEBHOOK密钥
```

### Bot 命令处理

```javascript
async function handleTelegramWebhook(request, env) {
    const update = await request.json();
    const message = update.message;

    if (!message || !message.text) return new Response('ok');

    // 安全验证：只响应配置的 chat_id
    if (String(message.chat.id) !== String(env.TELEGRAM_CHAT_ID)) {
        return new Response('ok');
    }

    const command = message.text.trim().split('@')[0].toLowerCase();

    switch (command) {
        case '/test':
        case '/ping':
            await sendTelegram(env, '✅ <b>节点监控运行正常</b>');
            break;

        case '/status':
            // 查询 Cloudflare DNS 当前记录
            await handleStatusCommand(env);
            break;

        case '/check':
            // 从 KV 读取最新检测结果
            await handleCheckCommand(env);
            break;

        case '/help':
            await sendTelegram(env,
                `📚 <b>节点监控 Bot 命令</b>\n\n` +
                `/test - 测试 Bot 连接\n` +
                `/status - 查看 DNS 状态\n` +
                `/check - 查看端口检测结果\n` +
                `/help - 显示此帮助`
            );
            break;
    }

    return new Response('ok');
}
```

支持的命令有四个。

`/test` 测试 Bot 连接是否正常。

`/status` 查询当前 DNS A 记录（调用 CF API 实时查询）。

`/check` 查看国内服务器上报的端口检测结果（从 KV 读取）。

`/help` 显示帮助信息。

## 国内检测脚本 detector.py

### 核心检测逻辑

检测脚本运行在国内服务器，通过 TCPing 检测节点端口可用性：

```python
import socket
import time
import json
import urllib.request
from datetime import datetime

# ==================== 配置 ====================

# Worker Webhook 地址
WEBHOOK_URL = "https://your-worker.workers.dev/webhook/switch"
WEBHOOK_NOTIFY_URL = "https://your-worker.workers.dev/webhook/notify"
WEBHOOK_SECRET = "你的webhook密钥"

# 节点配置
# monitor_domain: 要监控的域名
# backup_domain: 备用域名（故障时从这里获取替换 IP）
NODES = {
    "node1.example.com": {
        "ports": [443, 8443],
        "backup_domain": "node1-backup.example.com",
    },
}

CHECK_INTERVAL = 60   # 检测间隔（秒）
TCPING_TIMEOUT = 5    # 超时时间（秒）
FAIL_THRESHOLD = 3    # 连续失败次数阈值
```

### TCPing 检测函数

```python
def tcping(host: str, port: int, timeout: float = 5) -> tuple:
    """
    TCPing 检测端口是否可达

    Returns:
        (是否成功, 延迟毫秒数或错误信息)
    """
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(timeout)

        start_time = time.time()
        sock.connect((host, port))
        latency = (time.time() - start_time) * 1000

        sock.close()
        return True, latency
    except socket.timeout:
        return False, "timeout"
    except socket.error as e:
        return False, str(e)
```

### 多端口检测

只有当所有端口都不通时才判定节点故障（单个端口不通可能是后端服务问题）：

```python
def check_node_all_ports(ip: str, ports: list, attempts: int = 2) -> tuple:
    """
    检测节点的所有端口
    只有所有端口都不通才算不健康

    Returns:
        (是否健康, 失败的端口列表)
    """
    failed_ports = []

    for port in ports:
        port_healthy = False
        for _ in range(attempts):
            success, result = tcping(ip, port)
            if success:
                port_healthy = True
                break
            time.sleep(0.5)

        if not port_healthy:
            failed_ports.append(port)

    is_healthy = len(failed_ports) < len(ports)
    return is_healthy, failed_ports
```

### 调用 Webhook 触发切换

```python
def call_switch_webhook(node_name: str, current_ip: str, next_ip: str, reason: str) -> bool:
    """调用海外 Worker 触发 IP 切换"""
    payload = {
        "secret": WEBHOOK_SECRET,
        "action": "switch",
        "node": node_name,
        "current_ip": current_ip,
        "next_ip": next_ip,
        "reason": reason,
        "timestamp": datetime.now().isoformat(),
        "source": "domestic_detector"
    }

    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        WEBHOOK_URL,
        data=data,
        headers={
            'Content-Type': 'application/json',
            'User-Agent': 'NodeDetector/1.0'
        },
        method='POST'
    )

    with urllib.request.urlopen(req, timeout=30) as response:
        result = json.loads(response.read().decode('utf-8'))
        return result.get('success', False)
```

这里用 `urllib` 而不用 `requests` 库，可以减少外部依赖，方便在轻量服务器上部署。

### 主循环逻辑

```python
def main():
    fail_counts = {name: 0 for name in NODES}
    alerted_nodes = set()  # 已告警节点，防止重复告警

    while True:
        for node_name, config in NODES.items():
            # 1. 解析当前域名 IP
            current_ip = socket.gethostbyname(node_name)

            # 2. 检测所有端口
            is_healthy, failed_ports = check_node_all_ports(current_ip, config["ports"])

            if is_healthy:
                # 恢复正常 → 清零 + 发恢复通知
                if node_name in alerted_nodes:
                    alerted_nodes.discard(node_name)
                    send_alert_webhook(f"✅ 节点 {node_name} 已恢复")
                fail_counts[node_name] = 0
            else:
                # 检测失败 → 计数
                fail_counts[node_name] += 1

                # 3. 达到阈值 → 触发切换
                if fail_counts[node_name] >= FAIL_THRESHOLD:
                    if node_name in alerted_nodes:
                        continue  # 已告警，等待恢复

                    # 从备用域名获取替换 IP
                    next_ip = socket.gethostbyname(config["backup_domain"])

                    # 验证备用 IP 也可达
                    backup_ok, _ = check_node_all_ports(next_ip, config["ports"])
                    if not backup_ok:
                        alerted_nodes.add(node_name)
                        send_alert_webhook(f"🚨 主备节点均不可达: {node_name}")
                        continue

                    # 调用 Worker 切换 DNS
                    call_switch_webhook(node_name, current_ip, next_ip,
                        f"端口 {failed_ports} 连续 {FAIL_THRESHOLD} 次失败")
                    fail_counts[node_name] = 0

        time.sleep(CHECK_INTERVAL)
```

### systemd 后台运行

```bash
cat > /etc/systemd/system/node-detector.service << 'EOF'
[Unit]
Description=Node Health Detector
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/node-monitor
ExecStart=/usr/bin/python3 /opt/node-monitor/detector.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl start node-detector
systemctl enable node-detector
```

## API 接口汇总

| 路径 | 方法 | 说明 | 认证方式 |
| :-- | :-: | :-- | :-: |
| `/` | GET | 服务信息 | 无 |
| `/health` | GET | 健康检查 | 无 |
| `/webhook/switch` | POST | 接收自动切换请求 | `secret` 字段 |
| `/webhook/notify` | POST | 接收告警通知（转发到 TG） | `secret` 字段 |
| `/webhook/report` | POST | 接收状态上报（写入 KV） | `secret` 字段 |
| `/manual/switch` | POST | 手动切换 IP | `secret` 字段 |
| `/telegram` | POST | Telegram Bot Webhook | TG 验证 |
| `/setup-webhook` | GET | 注册 TG Webhook | `secret` 参数 |

### 手动测试切换

```bash
curl -X POST https://your-worker.workers.dev/manual/switch \
  -H "Content-Type: application/json" \
  -d '{"secret":"你的密钥","node":"node1.example.com","newIP":"1.2.3.4"}'
```

## 与传统 VPS 对比

Workers + KV 免费（10 万次/天），VPS 需要购买服务器。

全球延迟低于 50ms（边缘节点），VPS 取决于服务器位置。

运维上零运维，自动扩缩容，VPS 需要自己管理操作系统。

高可用是自动多区域容灾，VPS 需要自建。

冷启动近乎 0ms，VPS 不适用。

适合 API、Webhook 这类轻逻辑，复杂运算和长连接还是用 VPS。

## 常见问题

### 免费额度

对于监控场景完全够用。以每 60 秒检测一次、5 分钟上报一次计算，切换请求极少（仅故障时触发），上报请求每天 288 次，Telegram 命令按需，通常每天几十次。

总计每天 < 500 次请求，远低于 10 万次免费额度。

### KV 写入限制

免费套餐 KV 写入为 1000 次/天。每 5 分钟上报一次 = 288 次/天，完全足够。

### 调试 Worker

在 Cloudflare Dashboard 的 Worker 页面可以用 Quick Edit 在线编辑测试。

使用 `console.log` 输出日志，在 Logs 标签页实时查看。

本地开发使用 `wrangler dev` 命令。

### WebSocket

Workers 支持 WebSocket，但免费套餐有连接时间限制。

监控这种请求-响应模式，HTTP 已经足够。

## 参考资料

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Workers KV 文档](https://developers.cloudflare.com/kv/)
- [Cloudflare API 文档](https://developers.cloudflare.com/api/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
