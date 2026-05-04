---
title: AWS 完整使用教程（入口搭建 + 小助理操作）
date: 2026-04-28 00:00:00
updated: 2026-05-04 00:00:00
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
description: AWS 完整使用教程，包含入口搭建和小助理操作的详细步骤。
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-cover.png
hidden: true
---

### 一、背景说明

自 2025 年 7 月起，国内网络入口出现大规模拔线、通报，政策持续收紧。截至 2026 年 4 月，常规国内入口已基本无法稳定使用，市面上残留入口多存在割韭菜、跑路风险。**当前稳定方案：使用 AWS 作为入口**。

AWS租机TG：[@television666](https://t.me/television666)

---

### 二、核心原理

依靠两个脚本实现**全自动 IP 切换**，保证入口稳定运行：

1. **CF DDNS 脚本**：AWS 入口 IP 变动时，自动将域名解析切到新 IP，1 分钟检测一次。
2. **NY 面板入口安装脚本**：部署入口服务器，使用海外线路。

机器上线后自动检测、自动切 IP，全程无人值守。

---

### 三、准备工作

- Cloudflare 账号（已绑定域名并完成解析）
- Cloudflare Global API Key
- 主域名、二级域名

---

### 四、操作步骤

#### 1. 获取 Cloudflare Global API Key

1. 登录 Cloudflare 官网
2. 点击右上角头像 → 我的个人资料
3. 进入配置文件
4. 找到 API 密钥区域
5. 复制第一个 **Global API Key**（不要用其他密钥）

![cfapi](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-entry-image1.png)

#### 2. 配置 CF DDNS 脚本

**脚本模板**

```bash
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron CF邮箱 CF密钥 主域名 二级域名
```

**参数说明**

- CF邮箱：Cloudflare 注册邮箱
- CF密钥：Global API Key
- 主域名：如 ceshi.com
- 二级域名：如 awss.ceshi.com

**示例**

```bash
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron 123456789@qq.com 70980a7e4s340f7ddsadab32748028e6df6b62 ceshi.com awss.ceshi.com
```

#### 3. NY 面板入口安装脚本（海外主线路）

进入NY面板后台管理，点击"管理"-"设备组管理"，添加一个入口/出口地址后，复制对接命令（海外），将会得到如下类似的脚本：

```bash
bash <(curl -fLSs https://dl.nyafw.com/download/nyanpass-install.sh) rel_nodeclient "-t dd0b03c1-89b9-46be-8594-15254525810a -u https://zhima.520666.best"
```

![duijie](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-entry-image0.png)

#### 4. 提交客服对接

将**配置好的 DDNS 脚本** + **NY 入口脚本**一起发给租机客服，完成对接后机器自动上线。

---

### 五、注意事项

1. 必须使用 **Global API Key**，不要用其他 API 令牌
2. 域名需提前在 Cloudflare 解析完成
3. 脚本参数不要错填、多空格、漏填
4. 脚本与密钥仅发给租机客服，切勿公开；客服TG：[@television666](https://t.me/television666)

---

## 第二部分：AWS 小助理使用教程

### 一、使用前提（必看）

必须使用以下协议，其他协议易被封禁（基本上秒死）：

- Hysteria2
- VLESS + Reality + Vision
- Anytls

---

### 二、常见正常现象

1. 连续开到问题 IP、封禁账号 → 新服务器 IP 上线慢、掉线几分钟，**属于正常情况**
2. 启动提示：**AWS 接口错误、超出 EC2 配额、余额不足** → 全部忽略，多刷新网页即可

---

### 三、手动更换 IP 步骤

#### 第 1 步：停止机器

找到实例 → 点击 **停止**，等待状态变为「已停止」

![停止机器](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-assistant-5.png)

#### 第 2 步：编辑开机脚本

状态停止后 → 点击 **开机脚本**，进入编辑界面

![编辑开机脚本](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-assistant-6.png)

#### 第 3 步：标准开机脚本（可直接复制使用）

> ⚠️ 使用前请将第 09 行的 **邮箱、密钥、主域名、二级域名** 和第 10 行的 **Token、面板地址** 替换为你自己的信息。

```bash
echo root:'@television666' | sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo rm -rf /etc/ssh/sshd_config.d;
sudo systemctl restart sshd;
sudo apt update
sudo apt install -y cron
sudo systemctl enable --now cron
bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron 你的邮箱 你的密钥 主域名 二级域名
printf "\ny\n\n"| bash <(curl -fLSs https://dl.nyafw.com/download/nyanpass-install.sh) rel_nodeclient "-t 你的Token -u 你的面板地址"
bash <(curl -L -s www.hlspeed.cc/bbr/123.sh)
```

**各行说明：**

| 序号 | 说明 | 代码 |
|------|------|------|
| 01 | 修改 root 密码，设置为 @television666 | `echo root:'@television666' \| sudo chpasswd root` |
| 02 | 开启 root SSH 登录，允许 root 账号通过 SSH 登录 | `sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;` |
| 03 | 开启 SSH 密码登录，允许使用密码方式登录 SSH | `sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;` |
| 04 | 删除额外 SSH 配置目录，避免覆盖主配置 | `sudo rm -rf /etc/ssh/sshd_config.d;` |
| 05 | 重启 SSH 服务，让前面的配置立即生效 | `sudo systemctl restart sshd;` |
| 06 | 更新软件源，刷新 apt 软件包列表 | `sudo apt update` |
| 07 | 安装 cron，用于定时任务执行 | `sudo apt install -y cron` |
| 08 | 设置 cron 开机自启并立即启动服务 | `sudo systemctl enable --now cron` |
| 09 | 安装 DDNS 脚本（使用前请替换邮箱、密钥、主域名和二级域名） | `bash <(curl -sSL https://ddns.8245454.xyz/aws.sh) --install-cron 你的邮箱 你的密钥 主域名 二级域名` |
| 10 | 对接 NY 面板，执行面板对接安装命令 | `printf "\ny\n\n" \| bash <(curl -fLSs https://dl.nyafw.com/download/nyanpass-install.sh) rel_nodeclient "-t 你的Token -u 你的面板地址"` |
| 11 | 运行 BBR 优化脚本，用于网络加速优化 | `bash <(curl -L -s www.hlspeed.cc/bbr/123.sh)` |

![开机脚本示例](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-assistant-7.png)

##### 脚本修改注意事项

1. 顶部 SSH 登录、root 密码代码 **绝对不能动**（大佬除外）
2. DDNS 部分：邮箱、密钥、域名**前后必须加空格**
3. NY 对接脚本：只改后面参数，**前面固定代码不动**（`printf "\ny\n\n" |`）
4. 小白不懂脚本 → 改完立即联系客服TG：[@television666](https://t.me/television666)，禁止私自操作

#### 第 4 步：启动机器

脚本修改保存 → 点击 **启动**

### 四、IP 被墙 / 不想要 IP

直接点击：**更换IP**，即可快速更换新 IP

---

## 完整流程总结

1. 准备 CF 信息 → 配置 DDNS 脚本 + NY 脚本 → 发给客服对接
2. 使用小助理管理机器 → 支持手动换 IP、重装镜像
3. 全程自动检测 IP、自动切换，稳定运行

---

## 联通 4K 晚高峰测试（仅供参考）

YouTube 测速

![联通4K测速](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-speed-unicom.png)

## 电信 4K 晚高峰测试（仅供参考）

YouTube 测速

![电信4K测速](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-speed-telecom.png)

## 移动 4K 晚高峰测试（仅供参考）

YouTube 测速

![移动4K测速](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/aws-speed-mobile.png)
