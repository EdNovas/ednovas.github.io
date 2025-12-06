---
title: Cloudflare Teams 团队 Warp
tags: [cloudflare]
categories:
  - - 杂
date: 2021-12-12 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screen-Shot-2020-01-07-at-1.53.14-PM.png
---

> 部分图片文字转载自 小御坂的破站 https://blog.misaka.rest/202112/291.html

WARP默认分配到的通道是共享的通道，很多用户被挤在一起，导致网速变得越来越差。

这时候有两种方法。一种是使用WARP+，而另外一种就是使用CloudFlare Teams的专属通道

## CF开启Teams

登入CF https://dash.cloudflare.com/

选择Teams

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-12-12_19-24-09.png)

输入组织名称（后面可以随意更改），点击Next

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185134.png)

选择Free Plan

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185215.png)

直接Proceed to payment

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185231.png)

有支付方式的可以绑定然后next，没有的也可以直接不用管

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185302.png)

Devices 选项，点击Connect a device

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185426.png)


输入你邮箱的后缀，这里以Gmail为例，然后点击Save
（这个邮箱后缀无所谓，后续可以随意添加和修改）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212185558.png)

在设置中的Devices中可以随意切换并且添加邮箱后缀规则等

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-12_19-28-09.png)


## Warp改为Teams

打开右上角设置选项卡

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182311.png)

打开Account

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182348.png)


点击最后的Login with CloudFlare Teams

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182409.png)


输入组织名称（即你一开输入的那个`XXX.cloudflareaccess.com`的域名的`XXX`部分）

如果忘记了组织名称也可以在Cloudflare Teams的设置中查看和修改

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182440.png)

随便输入一个Gmail结尾的邮箱（即刚刚设定的邮箱后缀，也可以在设置中修改和添加）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182539.png)

输入发给你邮箱的验证码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182616.png)

即可使用Cloudflare Teams

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182701.png)

> 部分图片文字转载自 小御坂的破站 https://blog.misaka.rest/202112/291.html