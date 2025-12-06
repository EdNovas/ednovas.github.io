---
title: Ubuntu 用 vsftp 搭建 ftp 服务器
tags: []
id: '1144'
categories:
  - - VPS
date: 2021-01-14 18:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/vsftpd-servidor-ftp-para-linux.webp
---

## Ubuntu 用 vsftp 搭建 ftp 服务器

先更新一下
```
sudo apt-get update
```
安装vsftpd
```
sudo apt-get install vsftpd
```
这时候 vsftp 应该就开始运行了，用这个命令查看其状态：
```
sudo service vsftpd status
```

要是看到有个 Active: active (running)就说明你成功了

接下来别忘记配置你的防火墙，每个防火墙软件用法不同我就不赘述了

这时候我们需要添加一个 ftp 用户，请注意，直接使用 root 登陆 ftp 是不明智的

在接下来的示例中，我将以 ednovas 为用户名，这个你可以自行修改
```
sudo adduser ednovas
```
那么它登陆以后进入的目录就是/home/ednovas

然后配置 vsftpd.conf

打开配置文件
```
sudo nano /etc/vsftpd.conf
```
接下来在配置文件中找到如下内容，并把它们行首的注释（#）去掉

（在 nano 中你能用 Ctrl+W 进行搜索）

    #write_enable=YES（这将允许 ftp 用户将文件写入服务器）
    #chroot_local_user=YES（这将限制 ftp 用户只能访问自己的文件夹）
    #local_umask=022（这将为文件夹提供正确的权限）

最后在配置文件末尾添加如下内容：
```
pasv_min_port=40000
pasv_max_port=50000
allow_writeable_chroot=YES
```
其中第一行表示被动模式的第一个端口，第二行表示被动模式的最后一个端口，在它们之间的所有端口都将被 ftp 服务使用，请在防火墙中打开它们

第三行是 vsftp 的奇怪问题的解决，新版 vsftp 在把用户限制在自己的文件夹中后会让该文件夹无法写入，添加这一行就能解决

Ctrl+o 保存，ctrl+x退出，最后重启服务即可
```
sudo service vsftpd restart
```

>转载自Remmina https://www.mina.moe/archives/12405