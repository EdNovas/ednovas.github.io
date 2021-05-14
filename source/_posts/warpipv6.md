---
title: 使用 Cloudflare WARP 给 VPS 服务器免费添加 IPv4 或 IPv6 网络支持
tags: [cloudflare,warp,vps,ipv4,ipv6]
id: '1234'
categories:
  - - VPS
date: 2021-04-15 15:37:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210225024426.jpg
# highlight_shrink: true
---

> 转载自P3TERX大佬 https://p3terx.com/archives/use-cloudflare-warp-to-add-extra-ipv4-or-ipv6-network-support-to-vps-servers-for-free.html

## 前言

[WARP](https://p3terx.com/go/aHR0cHM6Ly8xLjEuMS4xLw) 是 Cloud­flare 提供的一项基于 Wire­Guard 的网络流量安全及加速服务，能够让你通过连接到 Cloud­flare 的边缘节点实现隐私保护及链路优化。其连接入口为双栈 (IPv4/​IPv6)，因此单栈服务器可以连接到 WARP 来获取额外的网络连通性支持。

比如可以让仅具有 IPv6 的服务器直接访问 IPv4 网络，不再局限于 DNS64 的束缚，能自定义任意 DNS 解析服务器，对于科学上网会有很大的帮助；也能让仅具有 IPv4 的服务器获得 IPv6 网络的访问能力，可以作为 IPv6 Only VPS 的 SSH 跳板。另外科学上网通过 WARP 网络可以实现解锁 Net­flix 、绕过 Google 验证码等骚操作。

与之前介绍的 [Hurricane Electric IPv6 Tunnel Broker](https://p3terx.com/archives/use-he-tunnel-broker-to-add-public-network-ipv6-support-to-ipv4-vps-for-free.html) 不同，WARP 并不提供公网 IP 地址，而是以 NAT 的方式去访问外部网络。此外 Cloud­Flare WARP 的网络质量目前要比 HE 好非常多的。

## 安装 WireGuard

既然 WARP 是基于 Wire­Guard 的，那么我们首先就需要安装 Wire­Guard 。由于博主使用的是 De­bian ，所以只写了 De­bian 的 Wire­Guard 详细安装方法，其它系统可以参考[官方文档](https://p3terx.com/go/aHR0cHM6Ly93d3cud2lyZWd1YXJkLmNvbS9pbnN0YWxsLw)来进行安装。

首先安装一些必要的工具，防止接下来的操作出问题。

```
apt update
apt install curl sudo lsb-release -y
```
按照《[Debian Linux VPS WireGuard 安装教程](https://p3terx.com/archives/debian-linux-vps-server-wireguard-installation-tutorial.html)》中简单的几个步骤完成安装工作。

## 使用 wgcf 生成 WireGuard 配置文件
[wgcf](https://p3terx.com/go/aHR0cHM6Ly9naXRodWIuY29tL1ZpUmIzL3dnY2Y) 是 Cloud­flare WARP 的非官方 CLI 工具，它可以模拟 WARP 客户端注册账号，并生成通用的 Wire­Guard 配置文件。

安装 wgcf

```
curl -fsSL git.io/wgcf.sh | sudo bash
```

注册 WARP 账户 (将生成 `wgcf-account.toml` 文件保存账户信息)

```
wgcf register
```
生成 Wire­Guard 配置文件 (`wgcf-profile.conf`)

```
wgcf generate
```

生成的两个文件记得备份好，尤其是 wgcf-profile.conf，万一未来工具失效、重装系统后可能还用得着。

## 编辑 WireGuard 配置文件

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224211008.png)

将配置文件中的节点域名 engage.cloudflareclient.com 解析成 IP。不过一般都是以下两个结果：

```
162.159.192.1
2606:4700:d0::a29f:c001
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224061043.png)

这样做是因为后面的操作要根据 VPS 所配备的网络协议的不同去选择要连接 WARP 的节点是 IPv4 或 IPv6 协议。

## 为 IPv4 Only 服务器添加 IPv6 网络支持

将配置文件中的 engage.cloudflareclient.com 替换为 162.159.192.1，并删除 AllowedIPs = 0.0.0.0/0。即配置文件中 \[Peer\] 部分为：

```
[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = ::/0
Endpoint = 162.159.192.1:2408
```

原理：AllowedIPs = ::/0参数使得 IPv6 的流量均被 Wire­Guard 接管，让 IPv6 的流量通过 WARP IPv4 节点以 NAT 的方式访问外部 IPv6 网络。
此外配置文件中默认的 DNS 是 1.1.1.1，博主实测其延迟虽然很低，但解析结果并不理想。由于它将替换掉系统中的 DNS 设置 (/etc/resolv.conf)，同时为了防止单 DNS 服务器故障导致无法解析，建议使用不同组织提供的公共 DNS 服务器组合。以下配置供参考，小伙伴们请根据实际情况来填写。
```
DNS = 9.9.9.10,8.8.8.8,1.1.1.1
```
## 为 IPv6 Only 服务器添加 IPv4 网络支持
将配置文件中的 engage.cloudflareclient.com 替换为 [2606:4700:d0::a29f:c001]，并删除 AllowedIPs = ::/0。即配置文件中 \[Peer\] 部分为：
```
[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0
Endpoint = [2606:4700:d0::a29f:c001]:2408
```
原理：`AllowedIPs = 0.0.0.0/0`参数使得 IPv4 的流量均被 Wire­Guard 接管，让 IPv4 的流量通过 WARP IPv6 节点以 NAT 的方式访问外部 IPv4 网络。
此外配置文件中默认的 DNS 是 `1.1.1.1`，由于是 IPv4 地址，故查询请求会经由 WARP 节点发出。由于它将替换掉系统中的 DNS 设置 (/etc/resolv.conf)，为了防止当节点发生故障时 DNS 请求无法发出，建议修改为 IPv6 地址的 DNS 。以下配置供参考，小伙伴们请根据实际情况来填写。

```
DNS = 2620:fe::10,2001:4860:4860::8888,2606:4700:4700::1111
```

### 双栈服务器置换网络
有时服务器本身就是双栈的，但是由于种种原因我们可能并不想使用其中的某一种网络，这时也可以通过 WARP 接管其中的一部分网络连接隐藏自己的 IP 地址。至于这样做的目的，最大的意义是减少一些滥用严重机房出现验证码的概率；同时部分内容提供商将 WARP 的落地 IP 视为真实用户的原生 IP 对待，能够解除一些基于 IP 识别的封锁。

⚠️ 需要注意的是双栈流量在默认配置的情况下均被 WARP 接管后就无法连接到服务器了。因此在 IPv4 与 IPv6 之间必须做一个取舍，以防这样的情况发生。。
配置方法参考以上两种情况，需要使用 WARP 接管哪一个网络就使用哪种方案。


## 启用 WireGuard 网络接口
将 Wire­Guard 配置文件复制到 /etc/wireguard/ 并命名为 wgcf.conf。
```
sudo cp wgcf-profile.conf /etc/wireguard/wgcf.conf
```
开启网络接口（命令中的 wgcf 对应的是配置文件 wgcf.conf 的文件名前缀）。
```
sudo wg-quick up wgcf
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224055351.png)

执行执行ip a命令，此时能看到名为wgcf的网络接口，类似于下面这张图：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224054306.png)

执行以下命令检查是否连通。同时也能看到正在使用的是 Cloud­flare 的网络。
```
# IPv4 Only VPS
curl -6 ip.p3terx.com
# IPv6 Only VPS
curl -4 ip.p3terx.com
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224050013.png)

测试完成后关闭相关接口，因为这样配置只是临时性的。
```
sudo wg-quick down wgcf
```
正式启用 Wire­Guard 网络接口
```
# 启用守护进程
sudo systemctl start wg-quick@wgcf
# 设置开机启动
sudo systemctl enable wg-quick@wgcf
```

## IPv4 与 IPv6 网络优先级设置

> TIPS: 这不是一定要设置的，小伙伴们请根据实际需求来选择。

当访问的网站是双栈且服务器也是双栈，默认情况下 IPv6 优先级高于 IPv4，应用程序优先使用 IPv6 地址。

理论上应该是如下情况：

IPv4 Only 服务器优先通过新增的 WARP 网络去访问外部网络。
IPv6 Only 服务器优先通过原来的 IPv6 网络去访问外部网络。
然而 WARP 的情况有点特殊，现实的情况有可能是：

IPv4 Only 服务器优先通过原来的 IPv4 网络去访问外部网络。
IPv6 Only 服务器优先通过原来的 IPv6 网络去访问外部网络。
所以根据实际的需求就要手动去设置优先级。

### IPv4 优先
编辑 /etc/gai.conf 文件，在末尾添加下面这行配置：
```
precedence ::ffff:0:0/96  100
```
一键添加命令如下：

```
# IPv4 优先
grep -qE '^[ ]*precedence[ ]*::ffff:0:0/96[ ]*100' /etc/gai.conf || echo 'precedence ::ffff:0:0/96  100' | sudo tee -a /etc/gai.conf
```

### IPv6 优先
编辑 /etc/gai.conf 文件，在末尾添加下面这行配置：

```
label 2002::/16   2
```

一键添加命令如下：
```
# IPv6 优先
grep -qE '^[ ]*label[ ]*2002::/16[ ]*2' /etc/gai.conf || echo 'label 2002::/16   2' | sudo tee -a /etc/gai.conf
```

### 验证优先级
执行 curl ip.p3terx.com 命令，显示 IPv4 地址则代表 IPv4 优先，否则为 IPv6 优先。

### 优先级设置在某些使用场景中的局限性
若 VPS 用于科学上网，则还取决于本地科学上网工具的 DNS 策略。就比如某些路由器上的科学上网客户端不会发送 DNS 请求给科学上网服务端，而是在本地直接处理 DNS ，那么可能因为屏蔽了 AAAA 记录，就只会去访问 IPv4 网络。有关科学上网的 DNS 设置网上已经有很多资料了，小伙伴们可自行咕鸽，所以博主在这里就不多赘述了。

## Cloudflare WARP 网速测试
博主目前暂时还未找到很好的方法来测试指定网络接口的速度，而目前已知 speedtest.net 提供的测速是 IPv4 Only 的，那么就可以使用其提供的 CLI 工具在 IPv6 Only 的 VPS 上来测试通过 WARP 访问外部网络的极限网速。

安装 [Ookla Speedtest CLI](https://p3terx.com/go/aHR0cHM6Ly93d3cuc3BlZWR0ZXN0Lm5ldC9hcHBzL2NsaQ)
```
curl -fsSL git.io/speedtest-cli.sh | sudo bash
```
执行speedtest命令测速。
博主测速使用的是 EU­serv 德国 IPv6 Only 小鸡，即使使用的是 wireguard-go 其网速依然很猛，几轮测试下来速度都在 500M 上下。可以预见的是这个速度应该远未达到 WARP 的极限。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210224050001.png)

## 尾巴
Cloud­flare 一直以来为广大人民群众免费提供优秀的网络服务，希望大家善待它，不要肆意滥用。

> 转载自P3TERX大佬 https://p3terx.com/archives/use-cloudflare-warp-to-add-extra-ipv4-or-ipv6-network-support-to-vps-servers-for-free.html