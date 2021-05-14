---
title: V2RayN电脑端使用说明
tags: [v2rayn,pc,vpn,科学上网,v2ray]
id: '546'
categories:
  - - 科学上网
date: 2020-12-19 20:15:24
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/45726700-df29-11ea-96f1-0813cffea4ca.webp
---

## 下载地址

V2RayN-core github官方下载地址：

[https://github.com/2dust/v2rayN/releases](https://github.com/2dust/v2rayN/releases)

找到v2rayN-Core.zip并下载解压，双击v2rayN.exe运行软件。

蓝奏云分流（不是最新版，极力建议GitHub下载最新版）：https://ednovas.lanzous.com/iFMi9ijl2wh

## v2ray更换内核

首先更新v2rayn客户端和xray-core

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210501102300.png)

选择 设置-参数设置-v2rayn设置-core类型，换成`xray-core`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-01_10-27-08.png)

## 添加订阅

打开订阅设置

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-01_11-35-45.png)

新加一个订阅，然后黏贴你的订阅链接并点击确定

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-01_11-36-33.png)

更新订阅，获取节点

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-01_11-36-49.png)

## 开启，关闭

点击右下角系统代理，自动配置系统代理即可开启，清除系统代理即可关闭

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-01_11-37-10.png)


## 单节点使用

如果你有vmess:// ss:// ssr:// trojan://等类似的单节点开头的链接

直接复制节点连接，软件内ctrl+v即可导入，会有成功导入链接提示。

右键节点，设为活动服务器，即可选择节点

开启和关闭代理同上

## 分流

https://github.com/Loyalsoldier/v2ray-rules-dat

前往GitHub地址下载 geoip.dat 和 geosite.dat

替换v2rayn文件夹下的同名文件，然后重启软件即可

如果有更多分流需求可以观看以下视频或自行谷歌

## 新版v2rayn分流规则使用视频（源自youtube，使用梯子观看）

<iframe width="560" height="315" src="https://www.youtube.com/embed/4D-6A0qRuv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://www.jamesdailylife.com/new_v2rayn-windows

geoip.dat 和 geosite.dat 替换：

https://github.com/Loyalsoldier/v2ray-rules-dat

白名单：

https://raw.githubusercontent.com/2dust/v2rayCustomRoutingList/master/custom_routing_rules_whitelist

黑名单：

https://raw.githubusercontent.com/2dust/v2rayCustomRoutingList/master/custom_routing_rules_blacklist