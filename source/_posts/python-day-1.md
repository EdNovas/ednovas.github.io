---
title: Python Day 1
tags: []
id: '1027'
categories:
  - - 编程
date: 2020-12-26 17:14:58
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/heybox/day1/V1.webp
---

Python最近几年有多火相信大家也有所耳闻，因为其简单易上手还有极其丰富的各种库让他成为了新手容易上手，上限也不低的热门编程语言。我学习python也没有很长时间，还算是个菜鸟新手，在这里只是和大家分享一下我作为一个新手学习python的历程。

因为我注意到很多python新手入门教程书和网站写的有点苦涩难懂，所以我尝试着从一个新手的角度来从最基础说起。并且我相信作为一个新手，我更能清楚在学习的伊始会遇到哪些大佬们编写教程时只是顺带一提的各种问题。

本人技术欠缺，如果有各种问题，还请大佬指出并改正，我会虚心接受并学习的，毕竟这也是一个很好的学习过程。

![](https://cdn.max-c.com/heybox/dailynews/img/330247f759e11b3c2a55132f9e16a648.jpg)

## 基础要求

懂一点电脑基础知识。英文要好，或者至少要一般水平。需要一定的逻辑思维能力。

## **python安装**

要编程先得下软件吧，我这里用的是anaconda + wing 101 ide作为例子，你也可以自己选择你想用的ide，都大同小异。注意，wing不支持中文，如果想要用中文ide还请自行选择其他ide。

“Anaconda是一个免费开源的Python和R语言的发行版本，用于计算科学，Anaconda致力于简化软件包管理系统和部署。Anaconda的包使用软件包管理系统Conda进行管理。”（某基百科）总的来说anaconda就相当于python软件本身+自带了很多的包。而wing ide就是个python的可视化窗口，方便输入、管理、测试代码，常见的ide还有pycharm、idle等。

## 下载anaconda

官方安装地址：[https://www.anaconda.com/products/individual#macos](https://www.anaconda.com/products/individual#macos)

![](https://cdn.max-c.com/heybox/dailynews/img/3fdc09598aac1b6f437fe76893ee9de3.jpg)

国内下载速度可能会比较慢，可以选择度盘：

https://pan.baidu.com/s/1OPlRfPOAhKyoX\_7RH7V3dg 提取码: 6r4g

度盘不限速下载可以参考我这篇文章：[https://www.xiaoheihe.cn/community/1/list/50255598](https://www.xiaoheihe.cn/community/1/list/50255598)

感谢盒友Brx86的提醒，可以从清华大学开源软件镜像站下载国内镜像：[https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)

## 下载Wing101

官方安装地址：[https://wingware.com/downloads](https://wingware.com/downloads)

![](https://cdn.max-c.com/heybox/dailynews/img/94f899598593486b2588698f8b322108.jpg)

度盘：

[https://pan.baidu.com/s/1OPlRfPOAhKyoX\_7RH7V3dg](https://pan.baidu.com/s/1OPlRfPOAhKyoX_7RH7V3dg) 提取码: 6r4g

## 安装

正常软件安装流程。先安装Anaconda，注意在安装Anaconda软件的时候，右击安装软件然后选择以管理员的身份运行。安装时间可能较长，还请耐心等待。

![](https://cdn.max-c.com/heybox/dailynews/img/36de29087ac8e368517bc1cd78a515f7.png)

再安装wing 101。

## 使用

全部安装完成后，打开wing，看看python shell里是否已经正确显示python版本号。ide主要分为两大部分，左边的代码文件区域，可以输入代码并保存为py本地文件；还有右边的python shell，是Python的命令行，也就是说是个暂时的命令输入框和执行框，代码文件的运行结果都会出现在这里。

![](https://cdn.max-c.com/heybox/dailynews/img/c6ef822f2169809db5780c6891a4b389.jpg)

正确显示了以后，软件左上角选择黄色的文件，打开下载好的如下文件：setup.py（在上方度盘下载链接中）会出现如下界面（我设置了两个文件窗口，设置方法如下面第二张图右键选择split side by side）

![](https://cdn.max-c.com/heybox/dailynews/img/7a48e1a00fcbfc08e0f5b6c1cb2970f1.jpg)

![](https://cdn.max-c.com/heybox/dailynews/img/fe1c540ab06d1cd6b6992ef5203f69c2.jpg)

然后点击上方绿色三角形脚本运行按钮，应该会出现一个函数图像，并且右边的python shell会出现一句话，让你输入你的名字，输入以后会如下第二张图。那么就此证明你的anaconda安装正常并且能正常调用库。

![](https://cdn.max-c.com/heybox/dailynews/img/fadfdf6fbcb9477d9103516527126e0b.jpg)

![](https://cdn.max-c.com/heybox/dailynews/img/81e562e4997ad2d4bd3be7e43f2d221d.png)

那么接下来在shell里面输入一行代码print("Hello, heybox!")（建议所有的代码手动输入！可能会有中英文转换问题导致bug）并且按回车。（建议在写代码的时候按win+space键，切换输入法为英文输入法，没有英文输入法的可以在设置语言中添加一个）

![](https://cdn.max-c.com/heybox/dailynews/img/f858e95193440d6f0075b92b8ecb5233.png)

那么他就会打印出你输入的内容

![](https://cdn.max-c.com/heybox/dailynews/img/16ddd6fb0c0ebb4e74407890e5ac360f.png)

这里的这个print（）函数就是打印的意思，就是直接把你在后面输入的内容给复制黏贴出来。需要用引号来开始和结束。例如 print("任何你想输入的内容") ，引号中的内容中文也可。在python里面单引号和双引号在这里没有区别，所以 print('任何你想输入的内容') 也是可以的。

![](https://cdn.max-c.com/heybox/dailynews/img/00acafacfec52b1920f96efd6bf1aadd.png)

今天就先到这里，今天你学到的可不仅仅是hello, world了哦！