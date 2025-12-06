---
title: Linux 服务器更换镜像源
tags: [linux,vps]
categories:
  - - VPS
date: 2022-04-13 20:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Comparision-CentOS-vs-Debian-vs-Ubuntu.jpg
---

# 修改镜像源

手动更改的话

## Ubuntu

Ubuntu 打开并修改 `/etc/apt/sources.list` 文件即可

通用源:

```
deb mirror://mirrors.ubuntu.com/mirrors.txt focal main restricted universe multiverse
deb-src mirror://mirrors.ubuntu.com/mirrors.txt focal main restricted universe multiverse

deb mirror://mirrors.ubuntu.com/mirrors.txt focal-updates main restricted universe multiverse
deb-src mirror://mirrors.ubuntu.com/mirrors.txt focal-updates main restricted universe multiverse

deb mirror://mirrors.ubuntu.com/mirrors.txt focal-security main restricted universe multiverse
deb-src mirror://mirrors.ubuntu.com/mirrors.txt focal-security main restricted universe multiverse

deb mirror://mirrors.ubuntu.com/mirrors.txt focal-backports main restricted universe multiverse
deb-src mirror://mirrors.ubuntu.com/mirrors.txt focal-backports main restricted universe multiverse

deb http://archive.canonical.com/ubuntu focal partner
deb-src http://archive.canonical.com/ubuntu focal partner
```

阿里源：

```
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse 

deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse focal
```

## Debian

阿里源：

```
deb mirrors.aliyun.com/debi stretch main non-free contrib
deb-src mirrors.aliyun.com/debi stretch main non-free contrib
deb mirrors.aliyun.com/debi stretch/updates main
deb-src mirrors.aliyun.com/debi stretch/updates main
deb mirrors.aliyun.com/debi stretch-updates main non-free contrib
deb-src mirrors.aliyun.com/debi stretch-updates main non-free contrib
deb mirrors.aliyun.com/debi stretch-backports main non-free contrib
deb-src mirrors.aliyun.com/debi stretch-backports main non-free contrib
```

Debian官方全球镜像站列表地址：

[https://www.debian.org/mirror/list](https://www.debian.org/mirror/list)

## CentOS

CentOS打开并修改 `/etc/yum.repos.d/CentOS-Base.repo` 文件

### 阿里源

#### CentOS6

```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo
```


#### CentOS7

```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

### 官方源

#### Centos6

```
cd /etc/yum.repos.d/
rm -rf CentOS-*
rpm -Uvh --force https://vault.centos.org/6.10/os/x86_64/Packages/centos-release-6-10.el6.centos.12.3.x86_64.rpm
yum clean all
yum makecache
yum update -y
```


#### Centos7

```
cd /etc/yum.repos.d/
rm -rf CentOS-*
rpm -Uvh --force http://mirror.centos.org/centos-7/7.9.2009/os/x86_64/Packages/centos-release-7-9.2009.0.el7.centos.x86_64.rpm
yum clean all
yum makecache
yum update -y
```

#### Centos8

```
cd /etc/yum.repos.d/
rm -rf CentOS-*
rpm -Uvh --force http://mirror.centos.org/centos-8/8/BaseOS/x86_64/os/Packages/centos-linux-release-8.3-1.2011.el8.noarch.rpm
yum clean all
yum makecache
yum update -y
```

## 一键脚本


Github仓库地址：

https://github.com/SuperManito/LinuxMirrors

GNU/Linux 一键更换国内软件源脚本

本项目旨在为从事计算机相关行业的朋友们提供便利

理论支持所有架构的环境，arm64 环境已经过测试

一键脚本：

```
bash <(curl -sSL https://cdn.jsdelivr.net/gh/SuperManito/LinuxMirrors@main/ChangeMirrors.sh)
```

## 更新

最后别忘了更新，这才是我们换源的目的，不是吗？

### Ubuntu

```
apt update -y
apt-get update -y && apt-get install curl -y
```

### CentOS

```
yum update -y                                                                                                
yum update -y && yum install curl -y
```