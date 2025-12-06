---
title: FTP——网盘的绝佳代替品
tags: [FTP,网盘,下载]
id: '1148'
categories:
  - - VPS
  - - 下载
date: 2021-01-14 21:28:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ftp.webp
---

## 简介

文件传输协议（英语：File Transfer Protocol，缩写：FTP）是一个用于在计算机网络上在客户端和服务器之间进行文件传输的应用层协议。

文件传送（file transfer）和文件访问（file access）之间的区别在于：前者由FTP提供，后者由如NFS等应用系统提供。

FTP是一个8位的客户端-服务器协议，能操作任何类型的文件而不需要进一步处理，就像MIME或Unicode一样。

但是，FTP有着极高的延时，这意味着，从开始请求到第一次接收需求数据之间的时间，会非常长；并且不时的必须执行一些冗长的登录进程。

## 优劣

网盘大多使用的都是HTTP协议传输

### HTTP的优缺点

HTTP上载提供了一种非常简单的将文件上载到服务器的方法，而对文件传输的了解却很少。下载文件也非常容易。

但是，缺点在于HTTP缺乏文件上传功能。另外，程序员需要具备以HTML创建表单所需的知识，以便上传相关文件。如果文件用于与他们正在创建的Myspace或Facebook类似的社交网络，则尤其如此。

### FTP的优缺点

使用FTP服务器具有其自身的优势。例如，用户可以使用程序执行向服务器的批量上传，而不必担心反复需要重新浏览文件并使用一种形式重新上传文件。也可以批量下载。

不幸的是，FTP服务器仍然需要使用FTP客户端，对于只想上传一两张图片的用户来说，使用一个FTP客户端特别麻烦。

### 一句话总结

大文件、多文件、文件夹传输FTP更方便，HTTP更适合电影和图片等。

>HTTP与FTP文件传输|eHow.com http://www.ehow.com/about_5435784_http-vs-ftp-file-transfer.html#ixzz0wlUSkVIY

## 客户端

如上文所说，FTP需要客户端来访问。Windows和Mac推荐使用FileZilla，手机端推荐使用ES文件浏览器。

### FileZilla

国际站：https://filezilla-project.org/

下载：https://filezilla-project.org/download.php?type=server

国内站：https://www.filezilla.cn/

下载：https://www.filezilla.cn/download/client

### ES文件浏览器

官网下载：http://www.estrongs.com/

酷安下载：https://www.coolapk.com/apk/com.estrongs.android.pop

安卓破解版：https://ednovas.lanzoux.com/islYukelb3e

## 使用说明

这里以FileZilla为例。打开软件，点击左上角的site manager，新建一个site，输入对应的IP、port端口（默认21，没有特别说明留空即可）、user用户名、password密码。最后点击connect连接。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_21-40-41.webp)

可以在transfer传输中设置默认文件下载位置。transfer传输-manual transfer手动传输（传输配置）-local file（默认本地文件下载位置）

此外还需要使用强制utf-8编码才能正确显示中文。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_21-44-15.webp)

使用也很简单，左边就是你的本地电脑，右边是连接到的FTP服务器。

拖动文件上传，双击自动下载到默认位置。


## 免费FTP服务器

### EdNovas的自建FTP服务器（甲骨文韩国）

FTP自动支持断点续传，所以不用担心丢包率高

总空间大小23TB。只可以上传和下载，无法删除文件，如果需要删除请联系[EdNovas](http://wpa.qq.com/msgrd?v=3&uin=180099495&site=qq&menu=yes)

Host（ip，服务器）：
```
193.123.251.99
```
Username（用户名）：
```
ednovas
```
Password（密码）：
```
321473113
```

### 小麦网盘公共FTP

[FTP地址]
```
ftp://box.u-file.cn:21
```
[FTP用户名]
```
ftp/pub-ftp
```
[FTP密码]
```
eA2taYB3yWVlRQvkKneFy1c6y6brkC0w
```
只可以上传和下载，无法删除文件。

不定期更换，如失效，微信关注麦小客，回复204获最新账号密码 

单文件大小限制：2 GB

## 在线观看

### 电脑

可以使用[potplayer](/2021/01/10/potplayer/)在线观看。

新建一个Album专辑，取个名字，选择第三个，FTP连接，输入Host、username、password点击ok即可建立连接。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-16_21-44-54.webp)

在右侧选择你想要在线观看的视频文件，双击打开在线观看。

### 手机

使用ES文件浏览器，选择视频文件打开方式用splayer

Splayer官方下载连接:

https://play.google.com/store/apps/details?id=com.ttee.leeplayer

蓝奏云下载：

https://ednovas.lanzoux.com/ilpNqkewpvc