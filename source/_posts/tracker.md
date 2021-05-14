---
title: Tracker 和 qBitorrent Enhanced说明
tags: [下载,tracker,qbitorrent]
id: '1176'
categories:
  - - 下载
  - - 软件
date: 2021-01-27 19:14:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1116506071,4272746750&fm=26&gp=0.jpg
#highlight_shrink: true
---

> https://zhuanlan.zhihu.com/p/43568669
> https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md
> https://github.com/XIU2/TrackersListCollection
> http://blog.sina.com.cn/s/blog_65637f130102zbno.html


## 什么是BT下载

不同于p2p是点对点的下载方式，bittorrent协议下载时用户群对用户群的下载，下载同一文件的人越多，下载速度越快。

下载完成后维持上传状态，将文件分享给别的用户，就称之为做种。所有的BT下载软件都支持做种（迅雷除外）。

## 什么是Tracker

* 因为 BT 下载的文件都是其他用户上传给你的。

* 所以 BT 下载速度就等于其他用户的上传速度。

而Tracker是BT下载中必不可少的角色，它可以有效提高BT下载速度。 

一个Tracker服务器负责储存并处理提交到本服务器的BT种子所有用户的相关信息

因为Tracker服务器并没有官方一说，所有人都可以建立自己的Tracker服务器。

因此，在下载BT文件的时候，通过添加优质的Tracker服务器地址，便可以与更多的客户端进行数据交换，从而提高下载速度。

而使用这些 Tracker 的人越多，用户数量就越多，大家的下载速度就越快，这也就是为什么说BT下载精神就是人人为我，我为人人。

## 吸血雷

而迅雷呢，则是反其道而行之，在别的用户上传的时候，将那些资源上传到自己的服务器，但是却不做种，也就是上传到了自己的服务器以后就不再提供上传，不再分享给别的用户。

这样一来，大家辛辛苦苦做种那么久的资源全到了迅雷自己的服务器里，这样也导致迅雷下载的速度越来越快，而其他BT下载软件根本没有速度，迅雷就这么渐渐的改变了国内BT下载的环境。

群友之前下载某较大文件的时候，他家的网络是500兆网络，理论上传速度大概十5MB/s上下，可能更高点。因为下载的是很新的种子，才在互联网公布一天，所以更需要大量的做种。那一天晚上他就做种上传了几个G。其中，他侦测到了数个迅雷用户来吸血，用软件直接屏蔽掉IP了。国内迅雷的用户基数还是一个庞大的数字。

## 推荐的BT下载软件

1. 首推Motrix，只是因为其高颜值。

   Motrix使用和做种方法可以参考[这里](/2020/12/21/免费简约清爽下载器motrix（吸血雷/)

   [Motrix 添加 tracker方法](##Motrix添加tracker方法)

2. 还推荐qBittorrent Enhanced Edition（增强版）相比原版增加了很多实用功能，例如 自带反吸血，订阅 Tracker URL，屏蔽ip等

    GitHub下载地址：https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases

    蓝奏云分流 4.3.3.10 版本：https://ednovas.lanzous.com/i8SX7l8ufze

    [qB 添加 tracker 方法](##qB添加tracker方法)

> 都支持简中

## qBitoorent Enhanced Edition 使用说明

下载安装完成后建议先修改一下设置

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-19-12.webp)

下方可以添加 tracker

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-29-30.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-26-15.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-20-52.webp)

可以用ubuntu系统种子（全球最火的种子应该没有之一了吧）做下载文件测试

[ubuntu 20.10 系统种子](https://releases.ubuntu.com/20.10/ubuntu-20.10-desktop-amd64.iso.torrent?_ga=2.147213751.180498898.1607932660-677982881.1607496447)

下载方法也和其他软件一个样，选择保存的位置，并下载。这里还提供了一些其他下载设置，一般来说保持默认即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-37-56.webp)

下载连接的tracker

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-39-43.webp)

别的用户分享给我供我下载

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-03_07-39-55.webp)

## 一些精选Tracker列表

源自GitHub项目 https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md

### 精选列表：(111 个)

```
https://trackerslist.com/best.txt
```

### 完整列表：(360 个)

```
https://trackerslist.com/all.txt
```

### HTTP(S)列表：(154 个)
```
https://trackerslist.com/http.txt
```
## Aria2 格式的Tracker 列表
精选列表：
```
https://trackerslist.com/best_aria2.txt
```
完整列表：
```
https://trackerslist.com/all_aria2.txt
```
HTTP(S)列表：
```
https://trackerslist.com/http_aria2.txt
```
### Aria2 添加tracker方法

复制 Aria2 格式 Tracker 文件中内容后，粘贴到配置文件 aria2.conf 中 bt-tracker= 的后面，示例如下：

```
bt-tracker=http://xxx.xx:80/announce,udp://yyy.yy:80/announce
```

注意： 粘贴前请先删除旧 Tracker 内容，避免格式错误！


## Motrix添加tracker方法

选项(左下角) - 进阶设置 - Tracker 服务器 - ﹀
勾选任意一个选项（如 all.txt），然后点击 [保存并应用] 保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f584955322f547261636b6572734c697374436f6c6c656374696f6e2f696d672f7a682d31302e706e67.png)

## qB添加tracker方法

选项[齿轮图标] - BitTorrent
勾选下图蓝框内的选项并填写 Tracker URL 后点击 [Apply] 保存，然后重启 qBittorrentEE。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f584955322f547261636b6572734c697374436f6c6c656374696f6e2f696d672f7a682d31332e706e67.png)

<!-- # 懒得写了，有空再写

tracker说明

https://zhuanlan.zhihu.com/p/85135793


trackerlist

https://trackerslist.com/#/


GitHub tracker

https://github.com/XIU2/TrackersListCollection


qBittorrent参数详细设置教程（v4.2.1）

http://blog.sina.com.cn/s/blog_65637f130102zbno.html


qb enhanced

https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases -->