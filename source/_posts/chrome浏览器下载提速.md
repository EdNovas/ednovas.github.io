---
title: Chrome浏览器下载提速
tags: []
id: '843'
categories:
  - - 下载
date: 2020-12-21 12:23:01
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/googlechrome.webp
---

## Chrome浏览器（edge也可以）自带下载功能提速

在谷歌浏览器，或者edge，或者chrome源的浏览器网址那里里输入如下内容并回车
```
chrome://flags/#enable-parallel-downloading
```
![](https://cdn.max-c.com/heybox/dailynews/img/e0bc9c9db8f8dc1e234c8c5c3027f75a.png)

会进入如下页面，让那个黄不拉几的文字，右边选择enable（允许），关闭此页面即可。

![](https://cdn.max-c.com/heybox/dailynews/img/7764ce601c8038ff0137e102e0802ac5.png)

下图是edge示例，edge在地址栏输入
```
edge://flags/#enable-parallel-downloading
```
一样允许。

![](https://cdn.max-c.com/heybox/dailynews/img/72976d7373aa0193dbe08d3906e6a2db.png)

##   这个功能是什么呢

就是各种下载工具常用的**多线程下载**，可以将一个要下载的文件分割成多份，如IDM最多分割成32份，32线程同时下载。相比浏览器原来的单线程下载，自然会提速不少。假设单线程下载速度为1MB/s，那么32线程就是32MB/s（理论速度！并非实际网速，这个就别杠了）。虽然这个浏览器自带的速度还是不如idm等专业下载工具快，但也够用。

未打开此功能前的速度图如下，大概是800-900kb/s左右，峰值不过1000多kb/s

![](https://cdn.max-c.com/heybox/dailynews/img/1b0acdaff46e91fb7e8e38920420054e.png)

而打开了此功能后的效果，稳定在3.5-4.0MB/s之间，可以看出下载速度提升是很明显了。

![](https://cdn.max-c.com/heybox/dailynews/img/34c0bb770b91ed60ef7cd5c52be1a065.png)

![](https://cdn.max-c.com/heybox/dailynews/img/0978aa8836f93b26eaca9ad2730f64db.png)

##   为什么打开了却没有什么效果

必须要能显示总大小的文件，才能分割文件并提速。如果总大小未知，那么是无法加速的。

此外，部分文件可能不支持多线程下载。

##  为什么下载完了会等一会

因为他是把文件分割开来以后同时下载的，所以需要给他点合并文件的时间吧，不过不会让你等待很久的。

今天的小鸡巧分享就到这里，明天可能会再见的吧？应该？毕竟老鸽鸽了