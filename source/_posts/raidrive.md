---
title: Raidrive 多云盘挂载本地
tags: [云盘, raidrive,挂载]
id: '1204'
categories:
  - - 软件
date: 2021-02-10 07:23:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/raidrive.jpg
# highlight_shrink: true
---

## 简介

RaiDrive 是一款能够将一些网盘映射为本地网络磁盘的工具，支持 Google Drive、Google Photos、Dropbox、OneDrive、FTP、SFTP、WebDAV

RaiDrive 可以方便的将网盘映射为本机的网络磁盘，对于使用来说更加方便。

而在支持的网盘中，目前国内还可以正常使用的有 OneDrive、FTP、SFTP 以及 WebDAV，其中 WebDAV 支持坚果云。

## 下载

官网：https://www.raidrive.com/

下载：https://raidrive.en.uptodown.com/windows/download

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot 2021-02-10 073801.jpg)

软件是完全免费的，但是又些限制而已，不过并不影响使用。

## 使用/挂载

如果使用的是国内的云盘，那么就不用设置。如果使用的是如谷歌云盘等，还需要将设置中的代理设置好。

如图，代理设置为127.0.0.1 (意为本机IP)，端口选择代理软件监听的端口，比如clash是7890，v2ray是10808。

此外，默认缓存是C盘，不过我觉得可能用云盘的对缓存要求都会比较大吧，建议换到别的盘。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot%202021-02-10%20074016.jpg)

然后点击上方的`add`添加，注意要区别个人云盘和business商用/教育用云盘，否则会登录报错。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot%202021-02-10%20074258.jpg)

如图就是正常登录上了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot%202021-02-10%20073943.jpg)

等待软件加载片刻，就会生成本地挂载

那么这样子就是已经挂在成功了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot%202021-02-10%20074416.jpg)

现在就可以直接在资源管理器里快速上传/下载/编辑不同云盘里的内容了，十分的方便。