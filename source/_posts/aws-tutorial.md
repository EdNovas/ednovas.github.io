---
title: AWS 使用教程
date: 2025-07-01 00:00:00
updated: 2025-07-01 00:00:00
tags:
  - AWS
  - 教程
  - 入口
categories:
  - 教程
keywords:
  - AWS
  - 小助理
  - 入口教程
  - DDNS
  - Cloudflare
description: AWS 小助理使用教程 & AWS 当入口教程，包含完整的配置步骤和注意事项。
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/awslogo-image.webp
---

# AWS 使用教程

> 本教程包含两部分内容：**AWS 小助理使用教程** 和 **AWS 当入口教程**。请按照顺序操作，图片看不清可以点击放大。

---

## 一、AWS 当入口教程

### 1.1 原理说明

由于大陆的服务器当入口，2025 年七月份开始大面积通报和拔线，导致现在没有入口了。因此我们可以使用 AWS（亚马逊云服务）当入口。

### 1.2 需要准备的脚本

AWS 当入口需要准备 **两个脚本**：

#### 脚本一：Cloudflare DDNS 脚本

原理很简单：亚马逊的入口 IP 变了以后，Cloudflare 入口域名会帮你自动切换到新的 IP。

#### 脚本二：NY 面板入口服务器安装脚本

这个脚本最简单了，就是 NY 面板的入口服务器安装脚本。需要使用**海外的安装线路**。

> 这两个脚本弄好以后发给租机客服，让他帮忙对接，机器就可以上线了。

### 1.3 获取 Cloudflare API 密钥

**第一步**：打开你的 [Cloudflare](https://dash.cloudflare.com/) 控制台。

**第二步**：点击右上角的头像 → **我的个人资料** → **API 令牌**。

**第三步**：找到 **Global API Key**，点击查看并复制。

![Cloudflare API 令牌页面](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Aspose.Words.41a3cbd2-c2b8-4366-b21d-badce552e761.001.png)

### 1.4 配置 DDNS 脚本

DDNS 脚本格式如下：

```bash
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron CF邮箱 CF的GlobalAPIKey密钥 主域名 二级域名
```

**示例**（请替换为你自己的信息）：

```bash
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron 123456789@qq.com 75740a7a4e34sdjskdjb2787828e6df6b62 ceshi.com awss.ceshi.com
```

> ⚠️ 将上面的邮箱、API Key、域名替换为你自己的真实信息。

### 1.5 配置 NY 入口脚本

NY 入口脚本示例：

```bash
bash <(curl -fLSs https://dl.nyafw.com/download/nyanpass-install.sh) rel_nodeclient "-t ed07669e-459d-43fe-9fc9-4d68e1f09a18 -u https://zhima.520666.best"
```

> 将脚本中的 token（`-t` 后面的值）和 URL（`-u` 后面的值）替换为你自己的。

### 1.6 完成对接

将改好的 **DDNS 脚本** 和 **NY 入口脚本** 一起发给租机客服，由客服帮你完成对接即可。

---

## 二、AWS 小助理使用教程

> 看图就行了，按照顺序来。

### 2.1 协议要求

{% note warning %}
**友情提示**：必须使用以下协议之一，其他协议封的很快：
- **Hysteria 2 (hy2)**
- **VLESS + Reality + Vision**
- **AnyTLS**
{% endnote %}

### 2.2 注意事项

{% note info %}
- 有时候可能会连续开到有问题的 IP，有时候开机会遇到被封禁的账号，所以新开的服务器的 IP 上线会慢一点。
- 有时候可能一下掉线好几分钟，这个是**正常的**，不用担心。
- 可以**手动更换一下 IP**，然后其他操作不需要，再去看 Cloudflare 的 IP 变了没有。
- AWS 小助理有点 Bug，启动过程中可能会提示「AWS 接口错误」或「余额不足」，**不用管**，忽略就行，多刷新网页、多操作几次即可。
{% endnote %}

### 2.3 开机脚本说明

{% note danger %}
**重要提醒**：如果你要改开机脚本，除非你是懂 AWS 小助理的老手，不然小白别乱动！某些代码是必须要有的。如果不懂开机脚本，脚本改了以后**马上联系租机的人工客服处理售后**，不要乱操作！
{% endnote %}

### 2.4 完整开机脚本示例

以下是一个完整的开机脚本示例（请根据你的实际情况修改对应参数）：

```bash
#!/bin/bash

# ====== 第一部分：开启 Root SSH 登录（必须保留）======
echo root:'@television666' |sudo chpasswd root
sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo rm -rf /etc/ssh/sshd_config.d;
sudo systemctl restart sshd;

# ====== 第二部分：安装 Cron 定时任务（必须保留）======
sudo apt update
sudo apt install -y cron
sudo systemctl enable --now cron

# ====== 第三部分：安装 Cloudflare DDNS（修改为你的信息）======
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron 你的CF邮箱 你的GlobalAPIKey 你的主域名 你的二级域名

# ====== 第四部分：安装 NY 入口节点（修改为你的信息）======
printf "\\ny\\n\\n" |bash <(curl -fLSs https://dl.nyafw.com/download/nyanpass-install.sh) rel_nodeclient "-t 你的Token -u 你的面板地址"

# ====== 第五部分：BBR 加速（可选）======
bash <(curl -L -s www.hlspeed.cc/bbr/123.sh)
```

**脚本各部分说明**：

| 部分 | 说明 | 是否必须 |
|------|------|----------|
| 第一部分 | 开启 Root SSH 登录，设置密码 | ✅ 必须 |
| 第二部分 | 安装 Cron 定时任务服务 | ✅ 必须 |
| 第三部分 | Cloudflare DDNS 自动切换 IP | ✅ 必须 |
| 第四部分 | NY 面板入口节点安装 | ✅ 必须 |
| 第五部分 | BBR 网络加速脚本 | ⭕ 可选 |

### 2.5 需要修改的参数

在脚本中，你需要修改以下参数为你自己的信息：

| 参数 | 说明 | 示例 |
|------|------|------|
| `CF邮箱` | 你的 Cloudflare 注册邮箱 | `123456789@qq.com` |
| `GlobalAPIKey` | Cloudflare 全局 API 密钥 | `75740a7a4e34sdjskdjb...` |
| `主域名` | 你在 Cloudflare 托管的域名 | `ceshi.com` |
| `二级域名` | 用于 DDNS 解析的二级域名 | `awss.ceshi.com` |
| `Token` | NY 面板的节点 Token | `e50fc8ad-5aba-479f-...` |
| `面板地址` | NY 面板的地址 | `https://zhima.520666.best` |

### 2.6 操作步骤（图文）

**如果你是改了 DDNS 的 CF 邮箱/密钥/域名**，按照以下步骤操作即可：

1. 修改开机脚本中的对应参数
2. 保存脚本
3. 在 AWS 小助理中启动实例
4. 等待实例启动完成
5. 检查 Cloudflare 的 DNS 记录是否已自动更新

> 改完以后，就按照下图启动就行了，按照顺序来：

![操作步骤示意图](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture5.png)

---

## 三、常见问题 FAQ

### Q: 启动后提示「AWS 接口错误」怎么办？
**A:** 不用管，这是小助理的 Bug，多刷新几次页面即可。

### Q: 提示「余额不足」怎么办？
**A:** 同样忽略即可，多刷新网页、多操作几次。

### Q: IP 被封了怎么办？
**A:** 手动更换一下 IP，DDNS 脚本会自动将新 IP 更新到 Cloudflare。

### Q: 掉线了怎么办？
**A:** 有时候可能掉线几分钟，这是正常现象。AWS 小助理会自动处理 IP 更换和重新连接。

### Q: 开机脚本可以随便改吗？
**A:** **不可以！** 脚本中的前两部分（Root SSH 登录和 Cron 安装）是必须保留的。如果不懂，请联系客服处理。

---

> 📌 如有更多问题，请联系租机客服获取帮助。
