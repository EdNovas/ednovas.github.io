---
title: E5 自动续订
tags: [云盘, office e5,onedrive,5t]
id: '1206'
categories:
  - - 杂
date: 2021-02-13 05:41:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Microsoft-365.jpg
# highlight_shrink: true
---

上篇介绍了怎么薅E5订阅戳[这里](/2021/02/10/officee5/)查看

随之而来的问题就是只有90天的免费试用，这肯定是不符合我们薅羊毛的理念的，要薅就要狠狠的薅

我们可以使用API自动订阅或者搭建oneindex的方法来实现自动续期

以下是使用API自动订阅的方法。以下方法均可行，可以自行选择或者全选（原理是一样的）

## Telegram Bot （可能是最简单的）

tgbot [@E5Sub_bot](https://t.me/E5Sub_bot)

[@CRE5bot](https://t.me/CRE5bot)

[@EUe5bot](https://t.me/EUe5bot)

@E5_subbot

@kre5_bot

@E5subot

@raindev_bot

@rldsBot

@NawE5SubBot

@officeE5_bot  (@kingyii:  唯一一个使用 kubernetes 运行的e5机器人) 

@SubE5_Bot

@subfore5_bot

@My_e5_bot

@One365E5_bot

更多bot加tg群组 https://t.me/e5subbot

telegram bot 源码 https://github.com/iyear/E5SubBot

使用的时候给bot发送 `/bind` 然后复制那个secret密码，登录你需要续订的e5账号，获取ID

根据他给的格式填入信息并发送。

然后再去跳转连接复制那个localhost...的网址 + 空格 + 随便一个别名（用于管理）并发送即可绑定成功

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/02-13_05-34-58.png)

## 软件 

![](https://img-blog.csdnimg.cn/20200930162211460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzMjEyMDIw,size_16,color_FFFFFF,t_70#pic_center)

### 说明：

https://blog.csdn.net/qq_33212020/article/details/106837905

主要优点 

使用简单方便，无需购买服务器部署，本地应用程序即开即用

### V1.7.2 正式版下载链接：
https://sundayrx.lanzoux.com/i5oa5kq0trc

### 压缩包默认解压密码

SundayRX

### 使用说明

https://blog.csdn.net/qq_33212020/article/details/106837905#t12

## 软件Plus版

同上，不过是高级版，有更多的功能，界面也好看了许多

下载地址：https://ednovas.lanzous.com/ivaGOlma6fe

或者加作者QQ群 254058945 获取最新版

## 网页版1

https://e5.sundayrx.net/Account/Login?ReturnUrl=%2F

（由SundayRX运营）

使用说明

https://blog.csdn.net/qq_33212020/article/details/109437936#t11

![](https://img-blog.csdnimg.cn/20201101220234430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzMjEyMDIw,size_16,color_FFFFFF,t_70#pic_center)

## 网页版2

https://ms-e5-renew.leeskyler.top:11015/Account/Login?ReturnUrl=%2F

使用说明同上，一个东西（由leeskyler运营）


## GitHub AutoApi项目

根据大佬的教程一步步走即可，部署在GitHub的actions里即可自动续订

GitHub AUTOAPI稳定版 https://github.com/wangziyingwen/AutoApiP

GitHub AUTOAPI最新版 https://github.com/wangziyingwen/AutoApi

## Oneindex个人网盘搭建

[Oneindex个人网盘搭建](/2021/02/15/oneindex/)