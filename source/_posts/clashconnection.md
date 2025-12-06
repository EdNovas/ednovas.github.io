---
title: Clash实现任何平台不用代理软件科学上网
tags: [vpn,科学上网,代理,手机]
id: '1199'
categories:
  - - 科学上网
date: 2021-02-06 09:29:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/93264e9bf3a10632a0fd7798af53dc8c.webp
# highlight_shrink: true
---

这个有点标题党的意思了啊嘿嘿嘿，还是需要电脑上有Clash或者其他可以实现本地代理的软件的

这种方法类似软路由代理一样，只要一台设备开着就可以让全家的设备科学上网（前提是要同wifi），当然，电脑关机就会断开代理了。

这里就以windows端的Clash和Android手机来作为例子

## 电脑端设置

Windows Clash使用说明和一些Q&A看[这里](/2020/11/29/clash-windows/)

首先打开Clash的Allow LAN功能，然后下方应该会出现你的局域网IP连接地址，如果没有，那把鼠标移到Allow LAN这个选项就能显示。

记下这个IP地址， `192.168.2.105`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-06_09-24-12.webp)

还需要记下端口号，如果未经过修改的话一般默认端口号是 `7890`

## 其他设备设置

这里以安卓手机为例，别的设备基本都大同小异，支持 Android，iOS，mac，Linux，Android TV等设备

在和电脑连接的同WiFi环境下，打开连接的WiFi设置，应该会有如下设置，找到proxy代理设置，并设置为 Manual 手动。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-06_09-28-07.webp)

这里的host就填刚刚记下的主机 IP，端口号就是 `7890` ，保存

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-06_09-27-21.webp)

然后就可以连接科学上网了，注意上方任务栏没有VPN连接标志

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210206092728.webp)

## 理论

所以理论来说，只要你能找到一台旧电脑，能带的动clash并且WiFi功能还不错，就可以当一个一直开机的“软路由代理”用了。