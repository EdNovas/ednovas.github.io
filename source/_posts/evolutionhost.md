---
title: Evolution Host 测评
tags: [VPS,免费,白嫖]
categories:
  - - VPS
date: 2021-11-08 17:15:12
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-41-14.png
---

## Evolution Host

<a href="https://evolution-host.com/blog/ssd-vps-hosting.php" target="_blank"><center><img src="https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-41-14.png"></center><center>提供游戏DDOS防护的大流量VPS，提供多国家选择，100% SLA保证</center><center>Evolution Host offers Game DDOS in many countries，with 100% uptime SLA</center></a>

只要你的博客有较多流量并且存在一段时间，在主页放上他们的广告就可以免费白嫖一个VPS了。

申请地址：https://evolution-host.com/free-vps.php



## 配置

看样子是博客流量越大，给的VPS配置就越好了。

我只申请到了个 3H3G 的

用的 AMD Ryzen 7 3800X

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-09-50.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-13-44.png)

IO:

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_18-16-11.png)

## IP

ip是 51.195.XXX.XX，原生英国IP

有ipv4和ipv6

## 流媒体

流媒体解锁情况，比较糟糕，但是BBC解锁还可以

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-11-08_17-15-36.png)

## 带宽

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-17-24.png)


## 线路

移动联通相对电信比较友好

https://tools.ipip.net/newping.php

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-25-59.png)

https://ping.chinaz.com/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-33-53.png)

http://ping.pe/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_17-24-49.png)

91yun脚本：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-08_18-02-53.png)

更多线路信息：

https://www.91yuntest.com/Et0bB2


## 用到的检测脚本

ZBench

```
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/ZBench/master/ZBench-CN.sh && bash ZBench-CN.sh
```

91yun

```
wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/91yuntest/master/test.sh && bash test.sh -i "io,bandwidth,chinabw,download,traceroute,backtraceroute,allping"
```

Bench

```
wget -qO- bench.sh | bash
```