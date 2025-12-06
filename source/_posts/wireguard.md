---
title: Debian Linux VPS 服务器 WireGuard 安装教程
tags: 
  - wireguard
  - debian
  - linux
  - vps
categories:
  - VPS
date: 2021-05-24 11:08:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/WireGuard-logo.png
---

## 前言

https://www.wireguard.com/

WireGuard 想必不用过多介绍了，目前网上的 Wire­Guard 教程有的是一键脚本、有的是老方法，安装慢而且会带入了一堆乱七八糟的东西，而官方文档并没有详细说明安装方法。对于 VPS 而言则还要考虑一些实际因素，不然随意安装只有报错等着你。所以博主根据实际经验写了这篇适用于通用操作系统 De­bian 的通用 Wire­Guard 安装教程，适合有手动配置 Wire­Guard 需求的小伙伴。

## 准备工作

### 添加 back­ports 源

```
echo "deb http://deb.debian.org/debian $(lsb_release -sc)-backports main" | sudo tee /etc/apt/sources.list.d/backports.list
sudo apt update
```

## 安装依赖组件

### 安装网络工具包

```
sudo apt install net-tools iproute2 openresolv dnsutils -y
```

### 安装 wireguard-tools (Wire­Guard 配置工具：wg、wg-quick)

```
sudo apt install wireguard-tools --no-install-recommends
```

## 安装 WireGuard
先执行 `uname -r` 命令查看内核版本。如果是 5.6 以上内核则已经集成了 Wire­Guard ，就不需要安装了。

当然看到这篇教程的小伙伴肯定大多数都不是这个情况，因为目前 De­bian 10 自带的内核版本是 4.19 。所以有如下几个安装方法可供选择：

1. 安装版本高于 5.6 的内核
2. 安装 wireguard 内核模块
3. 安装 wireguard-go
4. 
网络性能方面内核集成＞内核模块＞wireguard-go，至于如何选择还要看实际情况：

* KVM / HyperV / XEN HVM 等完整虚拟化的 VPS 主机，以上都是可选项，根据实际情况任选其一，后面有相关说明。
OpenVZ / LXC 等非完整虚拟化 VPS 主机，由于是共享宿主机内核，故无法对内核进行修改，就只能安装 wireguard-go。
如果只要安装方便快捷，对网络性能没有极致追求，又或者对以上信息一脸懵逼，请直接移步到 安装 wireguard-go 章节。

### 安装新内核

KVM / Hy­perV / XEN HVM 等完整虚拟化的 VPS 主机，且如果你能应对更换内核可能带来的不良后果，或者是全新安装的系统，那么最为推荐这个方式。

为了稳定性推荐安装 back­ports 仓库中的内核 (截止发文版本为 5.9)。以下是一把梭命令：

```
sudo apt -t $(lsb_release -sc)-backports install linux-image-$(dpkg --print-architecture) linux-headers-$(dpkg --print-architecture) --install-recommends -y
```

安装完重启，并执行 `uname -r` 命令查看内核版本来确认新内核是否被启用。

### 安装 wireguard 内核模块

内核版本 5.6 以下，且没有瞎改过乱七八糟的 “BBR 减速内核”，则可以执行以下命令安装 wire­guard 动态内核模块。

```
sudo apt install wireguard-dkms -y
```

安装后执行 `modprobe wireguard` 命令加载 Wire­Guard 内核模块。

然后执行 `lsmod | grep wireguard` 命令检查是否成功加载。

### 安装 wireguard-go
OpenVZ/​LXC VPS 或者不想折腾内核的小伙伴可以安装 wireguard-go，只不过网络性能较低。

自己编译或者使用博主写的一把梭脚本来安装已编译好的最新稳定版 wireguard-go 二进制文件：

```
curl -fsSL git.io/wireguard-go.sh | sudo bash
```

> TIPS: 对于 OpenVZ/​LXC 的 VPS 需要执行 `lsmod | grep tu` n命令来检查 TUN 模块是否正常加载，若没有请自行咕鸽搜索开启方法，否则是不能正常使用的。

## 尾巴

安装完成你就可以开始你的 Wire­Guard 折腾之旅了。

> 转载自P3TREX大佬 https://p3terx.com/archives/debian-linux-vps-server-wireguard-installation-tutorial.html