---
title: Oracle Cloud 甲骨文云用 TG bot 刷 ARM 
tags: [oracle,vps,tg,bot]
categories:
  - - VPS
date: 2022-04-13 19:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/blog_post_20.webp
---


## 前言


甲骨文云服务在上一年更新了ARM配置，那么时至今日，很多用户发现热门地区无法手动创建ARM，因为每个区域的ARM是有限的，其他用户已经抢先一步开好，自己点的话是大力出不了奇迹的，那么这个时候就需要找一个代刷了。网上有很多，这里介绍一个朋友 R佬 开发的甲骨文账号管理Bot，这个已经不单单是刷机使用了，还有很多管理功能。

## R-Bot

### 项目地址

https://github.com/semicons/java_oci_manage

### 运行环境

[JDK] 11

[LINUX] Ubuntu20.04(已测试).Debian(未测试，但是应该可以).Centos(需手动安装jdk11)

[Windows]未适配

### 已实现功能

 - 开机(amd和刷arm intel 支持自定义开机)
 - 一键查询和更改ip
 - 修改硬盘大小和性能
 - 升级、降级实例、修改实例名称、打开/关闭实例监控
 - 删除硬盘
 - tg通知
 - 终止实例
 - 开放云面板安全组(控制台放行所有ipv4端口)
 - 云账户管理（修改租户名、修改邮箱、添加管理员用户、删除用户、重置密码）
 - bot操作
 - CF快捷操作 cloudflare快速给ip绑定域名
 - 上传代理快捷操作
 - 用户快捷开机操作
 - 查询账户已用流量
 - 一键附加IPV6(自动放开ipv6安全组)
 
### 正在开发的功能

 - 上传API快捷操作
 - 定制功能请TG频道留言
 - 
### 配置

这款BOT脚本需要一台Linux机器+TG账号，有机器和TG后先获取甲骨文账号的API，然后机器上配置安装，对接上TG上的BOT来开始懒人刷机了；

## 使用

### 获取甲骨文账号的API

获取API很简单，进去账号控制台，以新加坡为例，如下图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/0ef000ffe2c9050.png)

下滑，找到API

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c90e95e9fbf3572.png)

点击添加API

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/dbc5d012e73f20c.png)

下载API信息的一对Key，点Add，在桌面新建一个txt，复制内容在txt里面


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/951c86575b8c65e.png)



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/f94c2c251edec3a.png)

最后点击关闭，就完成了获取API这个步骤。

## 配置脚本

需要注意，脚本要用到9527端口，安装脚本前提前开放机器的端口。
我直接找一台免费的DO来装，充分发扬白嫖精神，安装指令：

```
wget -O gz_client_bot.tar.gz  https://github.com/semicons/java_oci_manage/releases/download/latest/gz_client_bot.tar.gz && tar -zxvf gz_client_bot.tar.gz --exclude=client_config && tar -zxvf gz_client_bot.tar.gz --skip-old-files client_config && chmod +x sh_client_bot.sh && bash sh_client_bot.sh
```


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/b1871d332828781.png)

安装完成后，进去/root文件夹内，会发现多了一个client_config文件，这个文件就是配置信息的文件


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4d8af9201efbe7c.png)



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/92b4e3d3990687d.png)

打开文件后，内容如图所示，将TXT复制进去的内容，黏贴进去配置文件中

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/faba83db69fd8d3.png)


将下载下来的PrivateKey，传进去机器的/root文件夹内，我为了方便，直接将PrivateKey名字改为1.pem，所以路径也是/root/1.pem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ca7bc97fe4bd34e.png)



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3fdfc7e3d81271f.png)

接下来，配置文件中还需要获取TG上懒人界面的账号与密码，这个更简单，网页打开t.me/radiance_helper_bot
进去BOT中，输入/raninfo获得账号密码，再输入/getflash获得加钱VIP等级，搞定。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/242fe9365084b0e.png)

配置文件完成后，保存，在装了脚本的机器中，运行：

```
screen -S sh_client_bot bash sh_client_bot.sh
```


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/f0107c7e1f11a77.png)

随后移步到TG中的BOT进行操作，输入/oracle即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/986690bff2f8e81.png)


刷的过程可以在机器SSH中输入`Screen -r`查看进程，当刷到机器后，还需要开放端口，否则是无法Ping通的，bot中输入/oracle，选7，开放云面板端口，点击第二次后，稍等1分钟就端口全开。

> 转载自 CNBOY https://cnboy.org/archives/2545