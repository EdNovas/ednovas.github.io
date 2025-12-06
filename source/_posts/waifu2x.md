---
title: Waifu2X图片GIF视频放大
tags: []
id: '1126'
categories:
  - - 软件
date: 2021-01-03 20:54:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/icon_main.webp
---

## 简介

### 一句话

Waifu2x Extension GUI，是一个借助深度卷积神经网络对图片、GIF、视频进行超分辨率放大(即放大与降噪)。

### 主要特性:

#### 自动化处理多种媒体

支持处理 图片 的同时,实现了自动化处理 GIF 和 视频。

#### 全图像风格支持

内置多种算法, 无论是 二次元动漫 还是 您日常拍摄的照片&录像 ,都可以进行清晰化处理。

#### 强大的兼容性

内置多个引擎, 几乎与所有现代 Windows PC 兼容。

#### 灵活的多线程设定

在为每个引擎提供完备的设置项的同时,您也可以自由调整线程数量,充分利用PC的一切性能。

#### 多GPU支持

内置的所有引擎均可支持多显卡,充分利用您的PC的所有性能。

#### 众多自定义设置

您可以通过调整软件内的众多自定义设置实现自动化的工作流。

#### 智能设定

本软件可根据您的PC硬件信息和您要处理文件的信息自动调整部分软件设定。

#### 易于使用的图形用户界面。

#### 持续的维护与更新。

#### 内置图像处理算法:

Waifu2x / SRMD / RealSR / Anime4K / ACNet

#### 内置图像处理引擎:

Waifu2x-caffe / Waifu2x-converter / Waifu2x-ncnn-vulkan / SRMD-ncnn-vulkan / RealSR-ncnn-vulkan / Anime4KCPP

>转载自https://github.com/AaronFeng753/Waifu2x-Extension-GUI/blob/master/README_CN.md

## 使用

界面虽然好像简陋了些，但是功能是绝对的强大的。

第一次打开软件后会让你同意检查一下系统信息，这是为了自动设置成符合你硬件的设定，同意即可。

所以一般来说设置就不用去动了，他检测完成后会自动配置，我们只需要修改主页上的内容。

### 主页如下所示

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-03_20-49-41.webp)

### 文件列表

拖入或者打开文件列表或者单文件，图片不支持webp格式。

### 自定义分辨率

这个选择默认的1920x1080即可，我用的是3840x2160，或者按照你需要放大的尺寸来调整，可以在附加设置中调整纵横比（自定义分辨率）相关设置。

### 输出路径

这个就是文件保存的位置，这个自己设定就没问题。没有启用即输出到原文件同文件夹。

### 图像样式

任何矢量图、平面图、动漫图等2D的图片都选择2D动漫，而拍的照片、风景、有景深的图片都选择3D写实。

### 放大倍数与降噪等级（GIF\视频同理）

#### 放大倍数

这个软件说的是 1~999999999 倍，不过真要填999999999估计你的电脑直接卡死了吧，不敢尝试。一般来说默认是2，推荐选择2-16倍之间，不过一般2-5倍效果就已经很好了，最好不要超过16倍。特别是视频不宜超过6倍。

#### 降噪等级

这个就是给图片降噪用的，默认是2，推荐2-5之间，不宜过大。

### 进度条

单文件处理的时候这个就是个摆设，多文件处理的时候才有用。全部设置完毕以后点击开始即可。根据电脑性能和你的放大设置，会有不同的处理速度。

按照我这个设置来说单张图片会处理个1-2分钟左右，期间电脑最好不要处理其他事情，否则容易引起软件崩溃。

## 例子

### 官方例子

对比(3D写实)(使用内置的RealSR-NCNN-Vulkan引擎)
原照片来自Unsplash,由Jonatan Pie拍摄.

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/blob/master/Samples/image/Comparison_3D_Real-life.png)

对比(2D动漫)(使用内置的Waifu2x-NCNN-Vulkan引擎)

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/raw/master/Samples/image/Comparison.png)

原图 2D动漫图片 480x300 (.jpg 93.2 KB):

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/raw/master/Samples/image/Original_%5B480x300%5D.jpg)

经过8x放大, 3级降噪和压缩后 3840x2400 (.jpg 525 KB):
(使用内置的Waifu2x-NCNN-Vulkan引擎)

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/raw/master/Samples/image/Waifu2x_8x_%5B3840x2400%5D.jpg)

原图 GIF 500 x 372 (493 KB):

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/raw/master/Samples/gif/2_original.gif)

经过2x放大,2级降噪和gif优化后 1000 x 744 (3.77 MB):
(使用内置的Waifu2x-NCNN-Vulkan引擎)

![](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/raw/master/Samples/gif/2_waifu2x_compressed.gif)

github不支持在线播放视频, 请点击下方链接查看视频示例:
视频 : https://github.com/AaronFeng753/Waifu2x-Extension-GUI/tree/master/Samples/video)

### 自己测试

还有我自己放大的图片效果，这里是原图：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/888849-colorful-wallpaper-hd-2880x1800-for-hd-1080p.webp)

然后这个是对眼睛放大以后的对比图，左图为未放大原图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-03_08-58-50.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-03_09-09-41.webp)

可以看到放大效果相当的惊人，那么是不是一千三百万的手机拍了照片以后一放大就成了一亿像素效果了呢/狗头

但是问题也有，放大以后一个图片就几百个MB，这个时候就可以配合使用[无损压缩软件Imagine](/2021/01/01/compress/)使用了