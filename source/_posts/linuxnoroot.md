---
title: Linux非root用户登录
tags: 
  - root
  - linux
  - bash
categories:
  - 编程
date: 2021-07-20 10:27:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/root.png
---

## 创建非root用户

```
useradd -m ednovas
```

## 给ednovas用户设置密码

```
passwd ednovas
```

## 切换用户到ednovas

```
su ednovas
```

## cd到ednovas的当前目录

```
cd
```

## 在ednovas的目录下创一个.ssh的文件夹并给它的权限设为700

```
mkdir .ssh
chmod 700 .ssh
```

## cd到当前目录的.ssh

```
cd .ssh
```

## 在.ssh里创建authorized_keys文件权限为600

```
touch authorized_keys
chmod 600 authorized_keys
```

## 生成密钥

```
ssh-keygen -t rsa -b 3072
```

执行命令后，直接回车，待命令执行完毕，会在.ssh里生成id_rsa(私钥：需要下载到自己的电脑好好保存)和id_rsa.pub(公钥)

## 将公钥id_rsa.pub文件的内容加入到authorized_keys中

```
cat id_rsa.pub >> authorized_keys
```

## 切换到root用户更改sshd的配置

```
su root
cd ..
```

```
vim /etc/ssh/sshd_config (重点)
```

打开sshd_config文件后 确认以下配置的值

```
RSAAuthentication yes
PubkeyAuthentication yes
PermitRootLogin no (禁止root登陆)
PasswordAuthentication no（禁用密码登录：确认可以密钥登陆在进行更改）
```

## 重新启动sshd服务

```
service sshd restart
```

退出远程连接，在用密钥登陆看是否能用密钥登陆

> 转载自 衔于彼寄 https://blog.csdn.net/qq_44755953/article/details/96187265