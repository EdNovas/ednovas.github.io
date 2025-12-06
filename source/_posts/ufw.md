---
title: UFW 简单防火墙安装、配置、禁Ping
tags: 
  - UFW
  - linux
  - VPS
categories:
  - VPS
date: 2021-08-15 15:25:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/vfiufomeykte9vrqrfri.png
---

## 前言

UFW 是一个 Arch Linux、De­bian 或 Ubuntu 中管理防火墙规则的前端，可大大简化防火墙的配置过程。

## 安装 UFW

如还没有安装，可以使用 apt 命令来安装

```bash
apt-get update && apt-get install ufw
```

在使用前，你应该检查下 UFW 是否已经在运行。

```bash
ufw status
```


如果你发现状态是 `inactive` ，意思是没有被激活或不起作用。

## 启用/禁用

```bash
ufw enable  #启用
ufw disable  #禁用
```

## 使用与配置

### 列出当前UFW规则

```bash
ufw status verbose
```


### 添加规则

#### 允许入站（allow）

默认情况，没有允许就是拒绝（入站），使用 `ufw allow <端口>` 来添加允许访问的端口或协议。

```bash
ufw allow ssh  #添加22端口

ufw allow http  #添加80端口

ufw allow https  #添加443端口

ufw allow 2333/tcp   #添加2333端口，仅TCP协议

ufw allow 6666/udp   #添加6666端口，仅UDP协议

ufw allow 8888:9999  #添加8888到9999之间的端口
```


#### 拒绝访问（deny）

使用 `ufw deny <端口>` 来添加拒绝入站的端和协议，与添加允许的类似。

### 删除规则

先使用 `ufw status` 查看规则，再使用 `ufw delete [规则] <端口>` 来删除规则。

```
ufw delete allow 2333/tcp
```


如果你有很多条规则，使用 numbered 参数，可以在每条规则上加个序号数字。

然后使用 `ufw delete <序号>` 来删除规则。

```bash
root@p3terx:~# ufw status numbered  #列出规则，并加上序号。
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 20,21,22,80,888,8888/tcp   ALLOW IN    Anywhere
[ 2] 39000:40000/tcp            ALLOW IN    Anywhere
[ 3] 8896/tcp                   ALLOW IN    Anywhere
[ 4] 8896/udp                   ALLOW IN    Anywhere
[ 5] 443/tcp                    ALLOW IN    Anywhere
[ 6] 20,21,22,80,888,8888/tcp (v6) ALLOW IN    Anywhere (v6)
[ 7] 39000:40000/tcp (v6)       ALLOW IN    Anywhere (v6)
[ 8] 8896/tcp (v6)              ALLOW IN    Anywhere (v6)
[ 9] 8896/udp (v6)              ALLOW IN    Anywhere (v6)
[10] 443/tcp (v6)               ALLOW IN    Anywhere (v6)

root@p3terx:~# ufw delete 4  #删除上面的第4条规则
Deleting:
 allow 8896/udp
Proceed with operation (y|n)? y  #最后会询问你是否进行操作
```

以上都是一些简单常用的一些命令，想要深入了解，可以输入 man ufw 查看 ufw 用户手册。


## 禁 Ping

### 打开 UFW 配置文件

```bash
vim /etc/ufw/before.rules
```

### 修改配置

允许 ping

```
-A ufw-before-input -p icmp --icmp-type echo-request -j ACCEPT
```

禁止 ping

```
-A ufw-before-input -p icmp --icmp-type echo-request -j DROP
```

### 让配置生效

```bash
ufw reload
```

## 参考资料

[Debian/Ubuntu 系统中安装和配置 UFW－简单的防火墙](https://linux.cn/article-2489-1.html)

[ufw 禁用 ping](http://blog.xiaozan.me/552.html)

> 转载自 P3TREX 
> https://p3terx.com/archives/installing-and-configuring-ufw-in-debian.html
> https://p3terx.com/archives/use-ufw-to-disable-icmp-protocol-access.html