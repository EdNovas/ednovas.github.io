---
title: MTProxy TLS 稳定不被墙一键安装脚本
tags: [telegram,tg,代理,科学上网,tg代理,telegram代理]
id: '1217'
categories:
  - - 科学上网
  - - VPS
date: 2021-02-24 12:28:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1_PGWf028GLDgCjO8s-jMQ1A.png
# highlight_shrink: true
---

## MTProxy TLS 一键安装绿色极简脚本

这个脚本相对于之前其他人发的，额外集成了 `mtproxy` 的新特性，根据指定的域名自动进行伪装。能够有效减少被运营商检测的风险，更优于普通的代理或者随机字串数据包的形式。

需要注意的是，这里的 TLS 是假的（Fake TLS）这会让你的 IP 访问起来更像是一个正常的网站，在被主动探测时可以返回伪装的网站内容。

所以，在这里推荐你使用默认端口：`443`，如果端口被占用或者 NAT 内网主机，可以设置其他端口。

除过 443 以外，还推荐你使用如下端口，都是常见的 `https` 端口，也可以进行一定程度的伪装：

如：443、2053、2083、2087、2096、8443

## 安装方式

```
mkdir /home/mtproxy && cd /home/mtproxy
curl -s -o mtproxy.sh https://raw.githubusercontent.com/ellermister/mtproxy/master/mtproxy.sh && chmod +x mtproxy.sh && bash mtproxy.sh
```

## 使用方式

运行服务
```
bash mtproxy.sh start
```

调试运行
```
bash mtproxy.sh debug
```

停止服务

```
bash mtproxy.sh stop
```

重启服务

```
bash mtproxy.sh restart
```

## 卸载安装

因为是绿色版卸载极其简单，直接删除所在目录即可。
```
rm -rf /home/mtproxy
```

## 性能优化

如果你所配置的代理需要公开分享或者给大量人使用，那么你可能会遇到 VPS 最大文件描述符的错误提示。

编辑文件 `vi /etc/security/limits.conf` 在文件尾或者对应段加入内容，对用户级进行配置

```
* soft nofile 655350
* hard nofile 655350
```
表示对任何用户的软硬限制提升到 655350 个

接下来对系统级进行配置，`vi /etc/sysctl.conf` 加入配置

```
fs.file-max = 655350
```

用户打开的最大文件描述符总数不会超过系统级的总数。

将内核参数生效
```
sysctl -p
```

（注意，你需要新开一个 ssh，在新 session 中启动 mtproxy，来保证上述参数生效）

## gost中转

鉴于伊朗用户的MTProxy使用率比较高，封锁程度也越来越强。半实现 tls 的 mtp 也难以长时间支撑大量用户的连接。

在这里经过自测被封锁的现象，给予两点原因参考：

1. 同一IP被大量用户长时间访问会被运营商检测到。
2. 半 tls 未能完全骗过运营商。

目前测试中，经由 gost 提供的 tls 完整协议来封装 mtproxy 流量到 MTP 服务器会相对稳定。

即：client --> iran server --> mtproxy server

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/eJaHj3l59czTReQdBwcFqKAm1XdTwWb44Q8kXnKX.png)

这个方法解决了同一IP被大量用户同时访问连接的问题，在 firewall 看来，只有一台服务器对外提供服务。

而对于在伊朗境内的流量被封锁的规则和程度都很小，这种方式也是目前比较稳定的做法。

下载 gost:
```
wget https://github.com/ginuerzh/gost/releases/download/v2.11.1/gost-linux-amd64-2.11.1.gz
gzip -d gost-linux-amd64-2.11.1.gz
mv gost-linux-amd64-2.11.1  gost
chmod +x gost
```

iran server (45.93.168.1):

```
./gost -L=tcp://:443 -L=udp://:443 -F=forward+mtls://1.1.1.1:8443?mbind=true>/dev/null 2>&1 &
```

监听 443 端口的 TCP 和 UDP 数据，并将其转发给 1.1.1.1 服务器的 8443 端口。

mtproxy server (1.1.1.1):

```
./gost -L=mtls://:8443/127.0.0.1:443>/dev/null 2>&1 &
```

监听 8443 端口数据，并将其转发给443端口 (mtproxy)

用户只需要在 Telegram 中配置伊朗的服务器 IP 和端口就可以实现连接到 mtproxy 代理服务器。

## 写在最后

关于封锁的问题，如果你通过上文方式部署 mtproxy 还会被检测，那么建议使用冷门 IP 段的数据中心会降低封锁的可能。也可以通过 gost 转发中转机到你的 mtproxy 服务器之间的流量，这一段是实现真正的 tls 传输，以此骗过防火墙并放行流量 (上文已补充)。

## 脚本地址

GitHub 地址：https://github.com/ellermister/mtproxy

> 转载自 https://eller.tech/post/40