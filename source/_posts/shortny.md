---
title: Shortny PHP短网址汉化版
tags: [建站]
categories:
  - - 建站
date: 2021-10-01 22:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/5ca4b074e9c52631fc36f901_Schedule-Time.png
# highlight_shrink: true
---

## 下载

https://ednovas.cloud/s/3Ajtv

## 简介

Shortny是一款国外的PHP短网址源码，程序非常小巧，但是功能是很多的，支持自定义后缀、加密访问，查看链接统计，而且还支持放广告，这个广告功能相信有些人会喜欢。界面也比较好看，支持白天/夜晚切换模式，由于官方的程序是收费的，所以这里博主提供的是由顶点网破解的最新版Shortny v2.0.1，顺便说下安装方法和一些细节处理。

## 安装

### 伪静态

#### Nginx

```
rewrite ^/about /about.php last;
rewrite ^/api-about /api-about.php last;
rewrite ^/contact /contact.php last;
rewrite ^/tos /tos.php last;
rewrite ^/([^/.]+)/?$ /link.php?id=$1 last;
rewrite ^/404 /404.php last;
error_page 404 http://d.iowen.cn/404;
error_page 403 http://d.iowen.cn/404;
```



#### Apache

```
RewriteEngine on 
RewriteRule ^about                about.php [L]
RewriteRule ^<a class="external balloon" href="https://www.iowen.cn/tag/api/" title="查看与 api 相关的文章" target="_blank"><span data-balloon="查看与 api 相关的文章" data-balloon-pos="up">api</span></a>-about            api-about.php [L]
RewriteRule ^contact              contact.php [L]
RewriteRule ^tos                  tos.php [L]
RewriteRule ^([^/.]+)/?$          link.php?id=$1 [L]
RewriteRule ^404                  404.php [L]


Options -Indexes
ErrorDocument 404 http://d.iowen.cn/404
ErrorDocument 403 http://d.iowen.cn/404
```


最后开始安装，由于伪静态问题，只能通过具体路径安装，链接如下：

#安装路径，记得修改下面域名地址
https://www.iowen.cn/install/index.html
#后台路径
https://www.iowen.cn/admin/index.php

后台用户名密码均为admin

## DEMO

https://shortny.ednovas.xyz


> https://www.iowen.cn/shortny-v2-0-1-phpduanwangzhiyuanmahanhuaban/