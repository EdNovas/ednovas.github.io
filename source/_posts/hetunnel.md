---
title: 使用 HE Tunnel Broker 给 IPv4 VPS 免费添加公网 IPv6 支持
tags: [he tunnel,vps,ipv4,ipv6]
id: '1235'
categories:
  - - VPS
date: 2021-04-15 15:38:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210225051254.jpg
# highlight_shrink: true
---

> 转载自P3TERX大佬 https://p3terx.com/archives/use-he-tunnel-broker-to-add-public-network-ipv6-support-to-ipv4-vps-for-free.html

## 前言
[Hurricane Electric](https://p3terx.com/go/aHR0cHM6Ly9oZS5uZXQ) (简称：HE) 是一家位于美国的全球互联网服务提供商。该公司运营了世界上以对等数目计算的最大 IPv6 网络，同时也提供免费的 IPv6 隧道服务。早在 IPv6 还未普及的时代，博主曾用它家的服务给家里的宽带接入了 IPv6 网络，优先体验了一把，同时也积累了一些 IPv6 网络的使用经验。虽然经过多年的发展 IPv6 已经相当普及，但依然还是有部分 VPS 商家由于各种各样的原因没有给 VPS 标配 IPv6 地址，有的需要加钱、有的甚至不给加钱。当我们有访问 IPv6 网络的需求，就比如给 IPv6 Only VPS 主机做 SSH 跳板，则可以使用 HE Tun­nel Bro­ker 提供的 IPv6 隧道免费给 IPv4 VPS 主机添加一个公网 IPv6 地址来获得 IPv6 网络的访问能力。

## 创建 Tunnel Broker IPv6 隧道
注册 [Tunnel Broker](https://p3terx.com/go/aHR0cHM6Ly93d3cudHVubmVsYnJva2VyLm5ldA) 账号
点击左侧的Create Regular Tunnel(创建常规隧道)
输入 VPS 的公网 IP 地址
根据 VPS 的位置选择一个合适的节点
页面拉到最下方，点击Create Tunnel(创建隧道)


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210214034651.png)

在 Tunnel Details 页面可以看到创建的 IPv6 隧道的详细信息，其中 Client IPv6 Address 是申请到公网 IPv6 地址。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210214040003.png)

## 获取配置示例

在 Tunnel Details 页面有个 Example Configuration 选项卡，在这里你可以选择合适的配置示例。就比如这里有 De­bian/​Ubuntu 的 interfaces 配置文件示例：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20210214040002.png)

只要基于 De­bian 的发行版和使用 interfaces 配置文件的系统理论上都可以使用。其它不兼容的发行版则可以使用 Linux-net-tools 或 Linux-route2 示例手动输入命令。

由于博主使用的是 De­bian ，所以后面只会讲 De­bian 系发行版的详细操作步骤。~~不会真的有人在用 CentOS 吧？~~

## 添加网络接口
将 he-ipv6 配置文件添加到 /etc/network/interfaces.d/ 目录下。下面是一把梭命令示例，根据实际情况替换文本。

```
sudo tee /etc/network/interfaces.d/he-ipv6 <<EOF
auto he-ipv6
iface he-ipv6 inet6 v4tunnel
        address 2001:xxx:xxxx:xxxx::2
        netmask 64
        endpoint 216.66.84.46
        local 233.233.233.233
        ttl 255
        gateway 2001:xxx:xxxx:xxxx::1
EOF
```


TIPS: 如果是 NAT VPS 则需要替换local字段后面的公网 IP 地址为内网 IP 地址。

## 启用 IPv6 隧道
安装网络工具包
```
sudo apt update
sudo apt install net-tools iproute2 -y
```
启动 he-ipv6 网络接口
```
sudo ifup he-ipv6
```
启用后执行 ifconfig 命令，这时应该有一个 he-ipv6 接口，类似下面这样：
```
he-ipv6: flags=209<UP,POINTOPOINT,RUNNING,NOARP>  mtu 1480
          inet6 2001:xxx:xxxx:xxxx::2  prefixlen 64  scopeid 0x0<global>
          inet6 fe80::xxxx:xxxx  prefixlen 64  scopeid 0x20<link>
          sit  txqueuelen 1000  (IPv6-in-IPv4)
          RX packets 11605  bytes 3127821 (3.1 MB)
          RX errors 0  dropped 0  overruns 0  frame 0
          TX packets 13811  bytes 2403522 (2.4 MB)
          TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

若没有生效可以尝试重启网络
```
sudo systemctl restart networking
```

## DNS 设置
编辑 /etc/resolv.conf 文件，更改 DNS 解析服务器为支持查询 AAAA 记录的 DNS 服务器，比如 [Google Public DNS](https://p3terx.com/go/aHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vc3BlZWQvcHVibGljLWRucw)。
```
nameserver 8.8.8.8
nameserver 8.8.4.4
```
TIPS: 不建议使用 IPv6 地址的 DNS ，因为通过 IPv6 隧道去请求可能会拖慢 DNS 解析速度。

## 检测 IPv6 支持

执行 ping6 google.com 命令，能 ping 通说明 VPS 已经支持 IPv6 网络了。

如果是 NAT VPS ，除了前面提到的替换 IP 操作以外，可能还需要一些额外的设置，否则可能还是无法访问 IPv6 网络。

### NAT VPS 设置

配置防火墙允许 41 端口入站
```
ufw allow 41
```
添加相关的路由规则
```
route -A inet6 add ::/0 dev he-ipv6
```

### 优先使用 IPv4 网络

默认情况下 IPv6 网络优先级会高于 IPv4 ，为了防止 IPv6 隧道拖慢 VPS 的正常网速，可以设置优先使用 IPv4 网络。同时也能减轻了对 HE Tun­nel Bro­ker 节点的网络压力，合理使用宝贵的免费资源。

编辑 /etc/gai.conf 文件，在末尾添加下面这行配置：
```
precedence  ::ffff:0:0/96   100
```
一键添加命令如下：
```
echo 'precedence  ::ffff:0:0/96   100' | sudo tee -a /etc/gai.conf
```
完事执行 `curl ip.p3terx.com` 命令，显示 VPS 的 IPv4 地址则代表成功。

TIPS: 这仅限于 VPS 本身发起的网络访问。如果 VPS 用于科学上网，则还取决于本地科学上网工具的 DNS 策略，如有必要可以设置丢弃 AAAA 记录。

## 删除 IPv6 隧道

当你不想用了，或者想使用其它方式访问 IPv6 网络时，记得先删除。

停用隧道
```
sudo ifdown he-ipv6
```
删除 he-ipv6 网络接口配置文件（若没有删除重启后会自动启用）

```
sudo rm -f /etc/network/interfaces.d/he-ipv6
```

> 转载自P3TERX大佬 https://p3terx.com/archives/use-he-tunnel-broker-to-add-public-network-ipv6-support-to-ipv4-vps-for-free.html