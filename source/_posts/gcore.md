---
title: 使用 Gcore CDN
tags: [建站, VPS, CDN, Cloudfront, Gcore]
categories:
  - - VPS
  - - 建站
date: 2022-10-28 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/v2-cdf7751ea1ef9db8d3073a857f493c4e_720w.jpg
---

## Gcorelab CDN

类似AWS的Cloudfront CDN，提供每月1T的免费流量。效果不如Cloudfront但是也还不错

https://cdn.gcore.com/

## 注册账号

Gcore 地址

https://cdn.gcore.com/

Porkbun购买域名（便宜）

https://porkbun.com

因为Gcore的CDN需要更改Nameservers，所以比较建议买个新的域名然后专用CDN

## 使用CDN

输入要加CDN的域名

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-32-18.png)

解析个根域名到你的网站所在的VPS的IP（必须是跟域名）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-33-41.png)

更改nameserver为Gcore的nameservers

nameserver生效需要等待比较久的时间，最长大概可能需要几小时，快的话几分钟。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-35-03.png)

这几个全开就行

这个选择http和https

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-39-39.png)

可以把 Browser caching开启

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-40-20.png)

并开启https强跳

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_16-40-49.png)

然后允许SSL证书，他就会给该根域名自动申请一个证书

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_23-50-42.png)

然后保存就行了。

## 修改回源地址

回到主页面，选择Origins groups，

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_23-51-45.png)

修改为你需要加CDN的地址，注意这个回源地址不能开CDN，要直接解析到那个VPS网站的IP。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_23-52-48.png)

等待一段时间生效即可。

## 流量

注意每月免费流量只有1T。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-10-28_23-55-24.png)