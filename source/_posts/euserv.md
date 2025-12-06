---
title: 白嫖 Euserv VPS（理论永久）
tags: []
id: '1151'
categories:
  - - VPS
date: 2021-01-16 13:22:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/euserv.webp
---

## 简介

老牌的VPS服务商了，仅存的少数免费的VPS。但最近也推出要每个月手动续期这样的要求，虽然EUserv是免费的，但因为配置不高速度有快有慢所以很多都是当一个备用vps来使用，但作为备用vps总是手动续期很麻烦，可以配合GitHub项目来自动续期来达到自动理论永久白嫖的效果。

## 注册和购买

注册需要确定你注册的IP地理位置是哪里，这会影响到你后面的信息填写和审核是否通过。

起飞链接：

https://www.euserv.com/en/virtual-private-server/root-vserver/v2/vs2-free.php

购买这个vServer VS2-free v2.1的免费机型，加入购物车。

邮箱验证需要使用谷歌邮箱，其他大部分邮箱都不支持。

如果是香港或者中国IP，就如实填写国内的信息。需要输入手机号、地理位置、邮编信息。其中手机号为+86开头，区号为手机号的前三位，比如 +86 (150) 12345678。

然后就在control panel 控制面板等待那个 State 下的小漏斗就表示已经在审核中了。耐心等待就行了，等待时间不定。他会发邮箱告诉你结果的。

到手以后就会像这样一样

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-16_16-50-05.webp)

安装完系统以后root密码会出的很慢，一定要耐心等待！

## VPS配置

由于是纯IPV6的VPS，所以需要支持IPV6的网络环境。可以上 https://test-ipv6.com/index.html.zh_CN 查看自己的网络是否支持IPV6。如果不支持，可以使用手机流量开热点，然后电脑连接（手机默认支持IPV6）。

在SSH连接上以后，需要先输入以下代码来让纯IPV6 VPS可以通过IPV4下载更新等。

```
echo -e "nameserver 2001:67c:2b0::4\nnameserver 2001:67c:2b0::6" > /etc/resolv.conf
```
echo -e "nameserver 2001:67c:2b0::4•\nnameserver 2001:67c:2b0::6" > /etc/resolv.conf
然后执行系统环境依赖安装升级命令

CentOS系统安装命令：
```
yum -y install wget
yum update -y && yum install curl -y
```

Ubuntu/Debian系统安装命令：
```
apt-get install wget
apt-get update -y && apt-get install curl -y
```

## 自动续期脚本

GitHub地址：

https://github.com/CokeMine/EUserv_extend

根据脚本使用说明修改编辑使用。

## 参考视频

白嫖注册参考

<iframe width="560" height="315" src="https://www.youtube.com/embed/MPAP1jabQgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

自动续期参考

<iframe width="560" height="315" src="https://www.youtube.com/embed/YvY4ldjFVO4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>