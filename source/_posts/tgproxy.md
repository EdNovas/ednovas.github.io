---
title:  Telegram 客户端 Proxy 代理设置
tags: [软件,tg]
categories:
  - - 软件
date: 2021-12-20 15:12:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/66d0-article-210212-telegram-body-text.jpg
---

## Telegram Desktop 客户端

Telegram Desktop 默认并没有勾选"使用系统代理", 所以很多人觉得需要开全局才能用,  其实不然, 可以手动勾选"使用系统代理"或使用自定义代理.

### 步骤

情况A: 未登录账号: 界面左下角按钮

情况B: 已登录账号: Telegram Desktop 客户端 → 左上角三短线 → 设置 → 高级 → 网络和代理 → 代理类型 → 勾选"使用系统代理"或"使用自定义代理"

#### 使用自定义代理添加方法

添加代理: SOCKS5/HTTP (这俩均可)

服务器: `127.0.0.1`

端口: `端口`需查看你的代理软件(SS/SSR/Clash for Windows/V2RayN...)

不需要填写用户名和密码。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-20_18-40-10.png)

### 代理软件查看本地端口的方法

1. Clash for Windows: 主界面→General→Port(默认是: 7890)

2. Clash.NET: 主界面→右侧→混合端口(Mixe-Port)

3. SS/SSD→右键状态栏SS/SSD图标→服务器→编辑服务器→本地端口(默认是: 1080)

4. SSR→右键状态栏SSR图标→选项设置→本地端口(默认是: 1080)

5. V2RayN: 主界面→左下角→SOCKS5(或者参数设置→本地监听端口)(默认是: 10808)

6. Trojan-Qt5: 打开Trojan-Qt5主界面→双击一个节点→本地端口(默认是1080)

7. Netch: 打开Netch主界面→设置→本地端口SOCKS5(默认是2801)

有可能你或你用的规则修改了代理软件的本地SOCKS5/HTTP端口, 具体以你的代理客户端为准

不能乱设置乱猜测, 乱设置可能导致 Telegram Desktop 连不上网络

备注: Windows, macOS, Linux 系统的电脑都可以使用  Telegram Desktop 版本客户端

(macOS 上 Mac App Store 中的"Telegram Desktop"已更名为"Telegram Lite" )


## Telegram macOS 客户端

Telegram macOS 客户端不遵从系统代理, 所以需要设置自定义代理, 也可以用Surge/ClashX Pro 开启"增强模式"

(Surge/ClashX Pro 的"增强模式"就是针对这类不遵从系统代理的软件做的功能)

### 自定义代理设置步骤

情况A: 未登录账号: 界面右上角按钮

情况B: 已登录账号: Telegram macOS 客户端 → 设置 → 数据 → 使用代理

添加代理: SOCKS5/HTTP (这俩均可)

服务器: `127.0.0.1`

端口: `端口`需查看你的代理软件(Surge/ClashX/ShadowsocksX...)

不需要填写用户名和密码

### 代理软件查看本地端口的方法


1. Surge→点击状态栏Surge图标→显示主界面→SOCKS5(默认是: 6153)

2. Clash for Windows: 主界面→General→Port(默认是: 7890)

3. ClashX→点击状态栏ClashX图标→帮助→端口→Socks Port(默认是: 7891)

4. ShadowsocksX: 点击状态栏ShadowsocksX图标→高级设置→本地Socks5监听端口(默认是: 1086)

5. V2RayX: 点击状态栏V2RayX图标→Configure→Local Socks5 Port(默认是: 1081)

6. V2rayU: 点击状态栏V2rayU图标→偏好设置→Advance→本机 Sock 监听端口(默认是: 1080)


设置完成保存后, 记得重启 Telegram macOS 客户端! 记得重启! 记得重启!

有可能你或你用的规则修改了代理软件的本地SOCKS5/HTTP端口, 具体以你的代理客户端为准

不能乱设置乱猜测, 乱设置可能导致 Telegram macOS 连不上网络



## Telegram iOS/Android 客户端

iOS/Android 设备上开启代理软件即可, 不需要单独在 Telegram 中设置代理.

Telegram iOS 端是IP直连访问服务器的, 所以需要代理软件做单独的规则处理才行; iOS上有些代理软件并没有针对性的对此做处理, 所以即使开启了这类代理软件, Telegram iOS 也会提示无网络链接, 比如"Wingy"

## 其他

也可以用VPS自建SOCKS5/HTTP/MTProto代理, 只用于Telegram 上使用,具体教程可查看[此处](/2021/02/24/mtproxy/)

网络也有很多公开的SOCKS5/HTTP/MTProto代理, 个人不建议使用这种方式, 依然建议用代理软件

更不要使用某些内置代理的 Telegram 第三方客户端软件, 存在安全隐患

> 转载编辑自 https://telegra.ph/Telegram-Proxy-02-15