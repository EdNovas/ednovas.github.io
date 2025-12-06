---
title: 图片隐形工具outguess
tags: []
categories:
  - - 软件
date: 2022-04-23 21:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Decoy.webp
---

## 安装

可以直接 `apt install outguess` 或者 `yum install outguess`

或者自行编译

```
git clone https://github.com/crorvick/outguess
cd outguess
./configure && make && make install
```

## 使用帮助

输入 `outguess -h` 可获得help帮助页面

图片格式需要 jpg 格式

## 加密


```
outguess -k "secret key" -d input.txt pic.jpg pic_output.jpg
```

其中 -k 命令是加上密码用的，`secret key`就是密码。 -d 就是加密了，input.txt是需要隐藏的txt文件，pic.jpg是原始图片，pic_output.jpg是最后输出的包含隐藏内容的图片。

如果不加密码就是

```
outguess -d input.txt pic.jpg pic_output.jpg
```

## 解密

```
outguess -k "secret key" -r input.jpg output.txt
```

-r 就是解密， input.jpg是包含隐藏内容的、需要解密的图片文件，而output.txt就是隐藏内容的输出txt文件。

如果不加密码就是

```
outguess -r input.jpg output.txt
```