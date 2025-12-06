---
title: mklink 文件夹链接清理C盘空间
tags: [cmd,清理,c盘,空间,存储,mklink]
id: '1202'
categories:
  - - 杂
date: 2021-02-07 16:07:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/12702684.png
# highlight_shrink: true
---

## 命令参数

```
mklink [[/d] | [/h] | [/j]] <Link> <Target>
```

## 参数

|参数|描述|
|:----|:----|
|/ d|创建目录符号链接。默认情况下，mklink会创建文件符号链接。|
|/H|创建硬链接而不是符号链接。|
|/ J|创建目录连接。|
|<链接>|指定正在创建的符号链接的名称。|
|<目标>|指定新符号链接引用的路径（相对或绝对）。|
|/？|在命令提示符下显示帮助。|

## 使用场景

应用程序下有一个文件 `C:\Upload`，但是C盘空间不多了，就想把这个文件夹转移到D盘，但是直接剪切过去肯定行不通，应用程序会报错，所以首先把文件夹`C:\Upload` 整个剪切到d盘(`D:\Upload`)，再执行命令：

```
mklink /j  "C:\Upload"  "D:\Upload"
```

这样c盘下面就会多出一个带快捷方式图标的文件夹 `C:\Program Files`.

`C:\Program Files` 这个文件夹是对应用程序透明的，也就是说，除了windows自己，应用程序并不知道 `C:\Program Files` 下面的东西其实已经转移到d盘了，还当它们仍然在c盘。这样就不影响原来`C:\Program Files` 下的应用程序的使用了。