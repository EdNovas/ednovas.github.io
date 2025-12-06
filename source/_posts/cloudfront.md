---
title: 使用 Cloudfront CDN
tags: [建站, VPS, CDN, Cloudfront, AWS]
categories:
  - - VPS
  - - 建站
date: 2022-10-28 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/cloudfront.png
---

## Amazon Cloudfront

Cloudfront是Amazon提供的CDN服务，有每月免费1T的流量，该流量不可累计。个人小站的话，这个CDN是足够用的了，而且主要是国内访问的速度还不错。但是需要注意不要被攻击了，不然AWS的扣费还是很贵的。

https://aws.amazon.com/cn/cloudfront/

## 解析域名

首先先解析个三级域名到你的需要加CDN的网站的VPS IP上，比如

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-10-28_15-50-23.jpg)

这里的 8.8.8.8 就是你的VPS IP。这里的cdn就是你的三级域名前缀，这个域名是看不到的，这是回源域名用的。用户访问的是后面Cloudfront生成的域名地址或者是自己加的CNAME域名地址。

## 创建账号

前往 https://aws.amazon.com/cn/cloudfront/ 注册个账号，并且绑定个信用卡，建议绑定小额的或者限额，否则扣起费来吃不消。

创建个Distributions

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_15-54-24.png)

然后填入你刚刚解析的那个回源域名，比如刚刚解析的 cdn.ednovas.blog

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_15-55-04.png)

Protocol一般选择https only保证TLS。不过如果不清楚的话，可以选择Match viewer。

然后此页面其他全部默认就行

如果有TLS的https，还是建议开启https强跳。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_15-58-07.png)

下面这里Price class选择默认即可，或者按需选择

下面的HTTP versions可以把HTTP/3也勾选上

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_15-58-22.png)

如果不想用cloudfront默认的奇怪的长长的三级域名的话，这里可以加个CNAME，当然还需要用AWS自己的证书才行。

CNAME这里输入你想让用户访问用的CNAME域名，比如 user.ednovas.blog，用户访问这个地址就会访问你加了CDN的网站了。

然后如果要用CNAME的话，必须使用AWS的证书才可以，需要点下面的request certicificate来获取一个证书

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-01-14.png)

直接选择Next即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-04-24.png)

然后输入你要加证书的域名，然后选择默认的DNS验证即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-04-52.png)

点进去

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-05-42.png)

然后在域名中解析对应的CNAME名字和值


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-06-02.png)

记得把小云朵关上

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-06-56.png)

然后过几分钟就可以验证成功申请下来了

然后在CDN的页面，选择刚刚申请的这个证书（如果一直没有，可以先保存当前的CDN设置，然后再点击Edit编辑加上这个CNAME和证书）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-08-09.png)

需要等待生效的时间比较久，可能需要几十分钟

然后访问CNAME地址就可以了！

## 添加限制

然后在Distributions中，还可以设置其他的一些Behaviors，Error pages，Geopraphic restrictions等，这里以Geopraphic restrictions 为例，屏蔽除了中国以外的所有用户访问

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-10-21.png)

Allow list仅选择国内然后保存，等待几分钟生效即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-11-36.png)

## 效果

用 ping.pe 测试CDN的效果还可以

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-12-36.png)

## 开启费用提醒

右上角账户这里选择billing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-13-31.png)

可以把这几个全都打开，然后设置提醒免费资源用尽提醒邮箱

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-14-21.png)