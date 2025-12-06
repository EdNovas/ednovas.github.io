---
title: Linux端口转发的几种常用方法
tags: [VPS,linux]
categories:
  - - VPS
date: 2021-12-05 17:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/allthings.how-how-to-change-the-sftp-port-on-linux-coomand-prompt.png
---

## SSH 端口转发

SSH 提供了一个非常有意思的功能，就是端口转发，它能够将其他 TCP 端口的网络数据通过 SSH 链接来转发，并且自动提供了相应的加密及解密服务。

### （1）本地端口转发

```
ssh -fgN -L 2222:localhost:22 localhost
```

### （2）远程端口转发

```
ssh -fgN -R 2222:host1:22 localhost
```


### （3）动态转发

```
ssh -fgN -D 12345 root@host1
```

## iptables 端口转发

可以通过iptables实现数据包的转发。

### （1）开启数据转发功能

```
vi /etc/sysctl.conf   
  #增加一行 net.ipv4.ip_forward=1
//使数据转发功能生效
sysctl -p
```


### （2）将本地的端口转发到本机端口

即可以通过2222端口也能访问到22端口

```
iptables -t nat -A PREROUTING -p tcp --dport 2222 -j REDIRECT --to-port 22
```


### （3）将本机的端口转发到其他机器

```
iptables -t nat -A PREROUTING -d 192.168.172.130 -p tcp --dport 8000 -j DNAT --to-destination 192.168.172.131:80
iptables -t nat -A POSTROUTING -d 192.168.172.131 -p tcp --dport 80 -j SNAT --to 192.168.172.130

#清空nat表的所有链
iptables -t nat -F PREROUTING
```

## firewall 端口转发

CentOS 7.0以上使用的是firewall，通过命令行配置实现端口转发。

### （1）开启伪装IP

```
firewall-cmd --permanent --add-masquerade
```

### （2）配置端口转发，将到达本机的12345端口的访问转发到另一台服务器的22端口。

```
firewall-cmd --permanent --add-forward-port=port=12345:proto=tcp:toaddr=192.168.172.131:toport=22
```

### （3）重新载入，使其失效。

```
firewall-cmd --reload
```

## rinetd 端口转发

rinetd是一个轻量级TCP转发工具，简单配置就可以实现端口映射/转发/重定向。

### （1）源码下载

```
wget https://li.nux.ro/download/nux/misc/el7/x86_64/rinetd-0.62-9.el7.nux.x86_64.rpm
```


### （2）安装rinetd

```
rpm -ivh rinetd-0.62-9.el7.nux.x86_64.rpm
```

### （3）编辑配置文件

```
vi rinetd.conf 
    0.0.0.0 1234 127.0.0.1 22
```

### （4）启动转发

```
rinetd -c /etc/rinetd.conf
```

## ncat 端口转发

netcat（简称nc）被誉为网络安全界的”瑞士军刀“，一个简单而有用的工具，这里介绍一种使用netcat实现端口转发的方法。

### （1）安装ncat


```
yum install nmap-ncat -y
```


### （2）监听本机 9876 端口，将数据转发到 192.168.172.131的 80 端口

```
ncat --sh-exec "ncat 192.168.172.131 80" -l 9876  --keep-open
```

## socat 端口转发

socat是一个多功能的网络工具，使用socat进行端口转发。

### （1）socat安装

```
yum install -y socat
```

### （2）在本地监听12345端口，并将请求转发至192.168.172.131的22端口。


```
socat TCP4-LISTEN:12345,reuseaddr,fork TCP4:192.168.172.131:22
```

## portmap 端口转发

Linux 版的lcx，内网端口转发工具。

### （1）下载地址：

http://www.vuln.cn/wp-content/uploads/2016/06/lcx_vuln.cn_.zip


### （2）监听本地1234端口，转发给192.168.172.131的22端口

```
./portmap -m 1 -p1 1234 -h2 192.168.172.131 -p2 22
```

## portfwd端口转发


portfwd是meterpreter中内置的功能，也提供了单机版，用于TCP/UDP端口转发服务


Github 项目地址：
https://github.com/rssnsj/portfwd


### （1）下载编译

```
git clone https://github.com/rssnsj/portfwd.git
cd portfwd/src
make
```

### （2）将本地的12345端口转发到192.168.172.131：22

```
./tcpfwd 0.0.0.0:12345 192.168.172.131:22
```

## NATBypass端口转发


一款lcx（htran）在golang下的实现


Gihub项目地址：
https://github.com/cw1997/NATBypass


### （1）内网主机主动连接外网主机打通隧道

在目标机器上执行：nb -slave 127.0.0.1:3389 公网IP:51

在公网的机器执行：nb -listen 51 3340

在公网主机上连接 127.0.0.1:3340，即可连接上内网机器的3389端口。

> 本文分享自微信公众号 - Bypass（Bypass--），作者：Bypass