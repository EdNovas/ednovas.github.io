---
title: Premium URL Shortener 短网址网站搭建
tags: [url,短网址,url shortener,网站]
id: '1236'
categories:
  - - 建站
date: 2021-04-19 12:38:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/rebrandlyurlshortener010.png
# highlight_shrink: true
---

Premium URL Shortener是一个高级短网址缩短程序，带API功能，可以整合到自有其他平台。

## 下载

网站程序下载：https://ednovas.lanzous.com/igqhSo9roti

## 伪静态规则

Nginx伪静态规则

```
if (!-e $request_filename)
    { 
        rewrite ^/admin/(.*)?$ /admin/index.php?a=$1 break;
        rewrite ^/(.*)$ /index.php?a=$1 last;
        break; 
    }
```

Apache伪静态规则

```
<IfModule mod_rewrite.c>
<IfModule mod_negotiation.c>
    Options -MultiViews -Indexes
</IfModule>
```

## DEMO

https://url.ednova.xyz
