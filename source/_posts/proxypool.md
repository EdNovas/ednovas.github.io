---
title: 搭建Proxypool抓取免费节点网站
tags: [VPS,proxypool,免费节点,抓取,网站]
id: '1175'
categories:
  - - 科学上网
  - - VPS
  - - 建站
date: 2021-01-27 17:30:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://api.ixiaowai.cn/gqapi/gqapi.php
#highlight_shrink: true
---

## Demo

长期更新/添加抓取源，目前大概4000可用节点（2021.02.23）

https://proxypool.ednovas.xyz


***

以下是搭建说明，没有特殊需要使用Demo就够用

***

## 视频地址

<iframe width="560" height="315" src="https://www.youtube.com/embed/VPczX5xVjIo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Fork项目地址：https://github.com/xiaofei-ya/proxypool

源项目地址：https://github.com/zu1k/proxypool

## VPS安装宝塔

https://www.bt.cn/bbs/thread-19376-1-1.html

## 下载相关文件

在宝塔根目录新建一个文件夹，名字随意

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-37-12.webp)

进入新建的文件夹，远程下载主程序

```
https://github.com/xiaofei-ya/proxypool/releases/download/v0.5.3/proxypool-linux-amd64-v0.5.3.gz
```
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-37-53.webp)

解压在当前文件夹并重命名为proxypool，并确定权限为755

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-38-09.webp)

同样远程下载另外两个配置文件

```
https://raw.githubusercontent.com/xiaofei-ya/proxypool/master/config/config.yaml
```
```
https://raw.githubusercontent.com/xiaofei-ya/proxypool/master/config/source.yaml
```
## 解析域名

cloudflare或者别的域名解析到自己的VPS地址
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-42-01.webp)

## 配置文件

双击打开配置文件config

domain就是你解析的域名，source-files这里把前面的文件夹去掉，留下`./source.yaml`即可

cral-interval是爬虫爬取间隔，设置为720即可，不必过于频繁

下方speedtest可以打开或者关闭速度测试

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-41-00.webp)

## 网站反代

宝塔网站里添加一个网站，域名为刚刚解析好并填入配置文件的网址。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-43-18.webp)

申请一个ssl证书，并打开强制https

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-43-41.webp)

然后添加一个反向代理，代理到本机的12580端口（配置文件默认端口）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_17-44-31.webp)

## 增加/删除抓取源

根据他给的格式自己进行添加/删除

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_18-10-18.webp)

## 运行程序

ssh启动命令
```
nohup ./proxypool -c config.yaml 1>>run.log 2>>run.log &
```

## 更新配置/重启程序

```
cd /123 # cd后面是你自己设置的根目录路径
ps -ef
```

然后输入kill -s 9 `./proxypool -c config.yaml`对应的PID

比如我这里就是 `kill -s 9 595199` # 每个人的PID是不一样的！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-27_18-02-41.webp)

这样就结束进程了

再次启动使用启动命令即可
```
nohup ./proxypool -c config.yaml 1>>run.log 2>>run.log &
```
程序有启动时间，请在3分钟后刷新页面查看是否生效

## Demo

https://proxypool.ednovas.xyz

无法访问或者需要账户密码就是暂时闭站了