---
title: Cloudflare 反代优选提速
tags: [cloudflare, cf]
categories:
  - - VPS
date: 2021-10-28 10:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/cloudflare_workers_full.png
# highlight_shrink: true
---

## 前言

cloudflare一向以提供免费的优质服务为名，cf的反代优选就是利用workers反代然后优选IP来达到一个节点提速的效果。

目测移动带宽反代优选效果最佳，电信联通效果也很好，但可能不是那么显著（仅目测，请以实际效果为准）

反代优选一般是给如racknerd，heroku等这类线路不佳的搭建节点提速用的。

其中racknerd最为明显，反代优选前一般是 3mb/s - 5mb/s的速度，而反代优选后可以达到 70mb/s 的速度（毕竟racknerd机器是G口的，理论上限可达 128mb/s）

## 准备工作

* cloudflare账号，一个已经解析到VPS的域名

* v2rayn（本地配置节点信息用的，使用别的类似软件也可）

* 一个已经搭建好的节点，要求必须是 `vmess+ws+tls` 等这类可以反代优选或使用CDN的协议

* 优选IP软件，项目地址:

  1. 我比较常用的： https://github.com/badafans/better-cloudflare-ip
     release界面中下载`windows.zip` 解压即可（目前也推出了linux和安卓端）

  2. https://github.com/XIU2/CloudflareSpeedTest
     realease界面中下载`CloudflareST_windows_amd64.zip`即可（其他版本自行看说明下载对应版本）

## CF反代

这个时候就需要我们的Cloudflare的workers来进行一个反代加速了。

在主页点击Workers。可能会让你输入一个你的域名，有的话可以输入你freenom的域名或者你自己的域名，没有的话瞎填一个也没事。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-54-15.webp)

进入workers界面以后点击Create a worker创建一个worker

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-55-22.webp)

把左边Script脚本的内容清空，然后复制下面的代码进去

```
addEventListener(
	"fetch",event => {
		let url=new URL(event.request.url);
		url.hostname="域名";
		let request=new Request(url,event.request);
		event. respondWith(
			fetch(request)
		)
	}
)
```

然后把`域名`改成你解析的域名，同样要去掉https等那些东西，如 `jiedian.ednovas.xyz`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-58-36.webp)

然后点击Save and Deploy保存和部署。等待几秒部署完成后点击send发送。如果右边出现400 Bad Request说明配置成功。如果出现如502等其他错误代码说明配置失败(其实出现了也问题不大，直接略过这里即可)。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-00-55.webp)

在这里把这个HTTP下面的这个地址复制到V2ray里刚刚配置的那个文件里的地址和伪装域名这里。（双击刚刚配置的节点可以再次打开这个配置界面）点击确定保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-02-58.webp)

再来测速，好家伙，直接几百kbps的速度了，这速度还不如刚才呢。不要急，有速度说明刚刚的配置没有问题。下面还需要使用优选IP来实现完全的加速。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-04-25.webp)

## 优选IP

将下载好了的CF优选IP软件解压后，打开CF优选`IP.bat`，在弹出的cmd窗口中输入你家的带宽大小。不建议直接输入你家实际带宽总大小，会导致程序没法正确找到合适的IP。

如果不知道自己家的带宽是多少的，可以上 https://speedtest.net 测速，看下载带宽速度是多少Mbps。

这里是建议先选择你家IP一半的带宽大小。比如我家是 100兆 的带宽，那么我这里就选择50兆。如果你对测出来的IP速度不满意，那么可以逐渐加大这个数字，下次测速60、在下次70，总之切勿超过自家最大带宽。

一般来说，100M选择70-80M，200M选择160-180M，300M选择260-280M，差不多个值就行，也不用非得填100M和200M这样填满，否则有可能会一直循环跑脚本。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-08-36.webp)

我这里输入50以后直接按Enter回车，然后等待一段时间，不会超过5分钟，他会自动测速并且筛选优选IP，耐心等待即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-12-03.webp)

那么测试出来以后，把上方的优选IP复制下来，我这里也就是104.19.71.197。注意不要复制到空格。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-13-00.webp)

再次打开V2ray的节点配置界面，把刚刚的优选出来的IP复制黏贴到地址里，并点击确定保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-14-28.webp)

现在再来看这个节点的速度，十分可观啊，直接上了3w，甚至直逼4w。看个4k视频没有什么压力的高速度了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-15-38.webp)
