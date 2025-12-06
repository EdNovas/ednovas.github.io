---
title: cmd设置代理
tags: [科学上网,梯子,cmd,代理]
id: '1162'
categories:
  - - 科学上网
date: 2021-01-21 20:23:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/hack-like-pro-windows-cmd-remote-commands-for-aspiring-hacker-part-1.1280x600.jpg
#highlight_shrink: true
---
## 设置代理
打开cmd设置代理：
```
set http_proxy=http://0.0.0.0:8000
set https_proxy=http://0.0.0.0:8000
```
### 永久设置方案

先设置好IE代理。

cmd执行如下命令：
```
netsh winhttp import proxy source=ie
```
## 取消代理
解决代理产生的Failed to connect to 127.0.0.1 port (端口号): Connection refused问题

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```
如果不生效，运行以下重置代理
```
unset http_proxy
unset https_proxy
```

```
env|grep -I proxy
```
(未输出任何东西)