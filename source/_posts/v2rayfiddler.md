---
title: 使用 Fiddler 代理 UWP 软件
tags: [科学上网,梯子]
categories:
  - - 科学上网
date: 2021-12-31 19:12:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Progress_Telerik.jpg
---

## 问题

微软为UWP软件预设了沙箱，而这个沙箱默认阻断与本地网络（localhost，或者127.0.0.1）的连接

因此，UWP软件的流量无法通过代理软件。

## 官网

下载Fiddler

https://www.telerik.com/download/fiddler-everywhere

打开Fiddler，点击左上角的WinConfig按钮（需要UAC授权）。成功打开程序后，如果弹出警告，点击No按钮。

软件会列出全部UWP应用，我们可以发现，很多Windows系统组件也是UWP应用，这就难怪我们开启全局代理时，会出现部分Windows功能联网失败的情况。

在显示出来的列表中勾选你想要解除网络限制的UWP软件，勾选完毕后，注意点击上方的保存按钮以启用更改。

## 注意

一定要找到一个含有乱码的选项，microsoft.windows.authhost.*******************（一串乱码），此选项必须勾选，否则UWP软件在涉及账户授权的时候仍然无法通过系统代理，会出现非常尴尬的情况。

## 典型场景

UWP版本的Outlook无法添加Gmail账号，原因就是没有让microsoft.windows.authhost.*******************(一串乱码)通过代理。

## 全部勾选

如果你不在乎安全性，或者不知道勾选哪些程序能够保证正常使用，可以选择全部勾选。在软件的最上方有个Exempt All按钮，点击这个按钮即可全部勾选，然后点击保存按钮。其实微软搞这项措施也只针对UWP，然而UWP应用基本都来自微软的应用商店，所以安全性基本是有保证的，解锁全部程序的联网限制没什么大问题。

## Clash

Clash客户端自带的`Loopback插件`就是截取自Fiddler的，如果你下载安装了Clash，就不用再另外安装Fiddler了。

或者Clash也可以使用TUN模式

## V2rayn

v2rayN最新版客户端也自带该程序，可以在文件夹根目录内找到，文件名为`EnableLoopback.exe`，双击即可打开。

> 转载编辑自 Jaylin Wu https://jaylinwu.wordpress.com/2020/10/30/%E4%BD%BF%E7%94%A8fiddler%E8%A7%A3%E5%86%B3uwp%E8%BD%AF%E4%BB%B6%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87v2rayn%E3%80%81shadowsocks%E4%BB%A3%E7%90%86/