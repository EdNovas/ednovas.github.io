---
title: 游戏代理Netch使用说明
tags: []
id: '1125'
categories:
  - - 科学上网
date: 2021-01-03 12:37:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/netch.jpg
---

## 简介

因为Clash等软件是代理不了游戏网络的，所以如果你想要去外服玩游戏，用游戏节点的话，必须得用游戏专用代理软件。

Windows端的游戏代理软件可能就SSTAP和Netch是最有名的了吧，但是SSTAP作者跑路了，已经很久没有更新了，而且配置也相对更麻烦一点点，所以选择用Netch做我们的游戏代理软件。

## 下载

Netch官方下载地址:

https://github.com/NetchX/Netch/releases

解压缩然后打开Netch.exe即可

## 添加订阅链接

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103131408.webp)

Remark备注必须填写内容，下面的link就复制上订阅连接即可，然后点击Add/Modify添加/修改。关闭这个页面就行。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103131652.webp)

然后需要再手动更新一下订阅链接：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103124204.webp)

然后选择节点（软件默认选择延迟低的节点）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103131949.webp)

## 规则

然后在rule规则中选择想要代理的游戏

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103132010.webp)

软件自带支持的游戏比较少，所以我们可以自己扫描并添加游戏

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103132129.webp)

先点击scan扫描，选择游戏安装文件夹，等待软件加载一会，会自动列出文件夹内所有.exe的游戏程序，在上方添加一个Remark备注，最后点击Save保存

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103132329.webp)

那么我们就可以看到在rule里面多出来了最后一个刚刚添加的程序规则，选择即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103132503.webp)

最后点击Start开始代理

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210103132048.webp)

## Q&A

### 部分网页视频无法正常加载/加载慢

建议尝试开启 Netch 的 TUN/TAP 模式

### TUN/TAP启动失败

仅用于解决tun2socks日志中有 CryptAcquireContext failed with error -2146893809 错误的问题

如何解决：同时按下Win键和R键，然后输入 %appdata%\Microsoft\Crypto 运行。打开后移动RSA文件夹至C盘根目录备份以防万一，然后再重启Netch，RSA文件夹在启动成功后会自动重新创建。

### Steam / 浏览器无法正常打开页面

Q：用来加速 Steam / 浏览器，结果无法正常打开页面

A：有人测试可行有人测试不可行。首先声明一下，本软件的功能主要不是用来代理 Steam / 浏览器打开页面的，建议使用专门的工具，如 SteamCommunity 302，浏览器则建议用
shadowsocks-windows， Clash for Windows 等

### UWP 应用无法代理

https://nekosc.com/technology/uwp_fiddler.html

### 为什么加速效果不明显

为什么加速效果不明显，比裸连会好些但是延迟和丢包还是挺严重

得用游戏加速节点啊亲！节点名都会写明是游戏加速节点的。如果没有游戏加速节点那就表示不适合用来打游戏。

加速效果仅能部分替代游戏加速器，要最好的体验还请使用专门的游戏加速器进行游戏。

>Q&A参考自Sabrina的万事屋https://merlinblog.xyz/wiki/netch.html