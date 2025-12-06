---
title: 图种制作
tags: [软件,图片,压缩包,隐藏]
id: '1194'
categories:
  - - 软件
date: 2021-02-04 18:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/hidden_logo.png
highlight_shrink: true
---

> https://www.abc.net.au/chinese/2019-07-18/wechat-censorship-image-filtering/11322654
> https://www.cnblogs.com/lzhu/p/8014703.html
> https://www.zhihu.com/question/31140164/answer/283929097
> https://zhuanlan.zhihu.com/p/25924908

## 图种是什么呢

图种定义如下：

一种采用特殊方式将图片文件（如jpg格式）与某些文件结合起来的文件。该文件一般输出为jpg图片文件，可以正常预览图片。

当有人将该图片下载到本地后，可以通过修改文件的后缀，将.jpg改为.zip或者rar，并用解压缩软件即可查看得到图片背后隐藏的文件。

由于这种方式有利于某些网友(老司机)传播种子文件，故称为图种，又叫作内涵图。

## 怎么做到的

这是因为jpg的内容结束标志为：FF D9 ，其后是否有其他内容jpg算法不关心

而rar的内容开始标志为：52 61 72 21，其前面是否有其他内容rar算法也不关心

因此，将一个jpg和一个rar连接成一个文件，这个文件就既是jpg也是rar了。同理，png 和 zip 格式也类似，所以也同样可行。

### PNG 16进制分析

这篇文章就分析很到位

https://www.cnblogs.com/lzhu/p/8014703.html

该文章具体分析了 PNG 的16进制文件结构，结构如下

|数据块符号|数据块名称|多数据块|可选否|位置限制|
|:----|:----|:----|:----|:----|
|_IHDR|文件头数据块|否|否|第一块|
|cHRM|基色和白色点数据块|否|是|在PLTE和IDAT之前|
|gAMA|图像γ数据块|否|是|在PLTE和IDAT之前|
|sBIT|样本有效位数据块|否|是|在PLTE和IDAT之前|
|_PLTE|调色板数据块|否|是|在IDAT之前|
|bKGD|背景颜色数据块|否|是|在PLTE之后IDAT之前|
|hIST|图像直方图数据块|否|是|在PLTE之后IDAT之前|
|tRNS|图像透明数据块|否|是|在PLTE之后IDAT之前|
|oFFs|(专用公共数据块)|否|是|在IDAT之前|
|pHYs|物理像素尺寸数据块|否|是|在IDAT之前|
|sCAL|(专用公共数据块)|否|是|在IDAT之前|
|_IDAT|图像数据块|是|否|与其他IDAT连续|
|tIME|图像最后修改时间数据块|否|是|无限制|
|tEXt|文本信息数据块|是|是|无限制|
|zTXt|压缩文本数据块|是|是|无限制|
|fRAc|(专用公共数据块)|是|是|无限制|
|gIFg|(专用公共数据块)|是|是|无限制|
|gIFt|(专用公共数据块)|是|是|无限制|
|gIFx|(专用公共数据块)|是|是|无限制|
|_IEND|图像结束数据|否|否|最后一个数据块|

我们这里主要看一下最后一个 IEND 数据块

### IEND

图像结束数据IEND(image trailer chunk)：它用来标记PNG文件或者数据流已经结束，并且必须要放在文件的尾部。

如果我们仔细观察PNG文件，我们会发现，文件的结尾12个字符看起来总应该是这样的：
00 00 00 00 49 45 4E 44 AE 42 60 82

不难明白，由于数据块结构的定义，IEND数据块的长度总是0（00 00 00 00，除非人为加入信息），数据标识总是IEND（49 45 4E 44），因此，CRC码也总是AE 42 60 82

因为这个数据块的长度总是0，这个IEND后面添加多少东西都没有关系。

## 腾讯审查图片机制

同理，也可以通过这种方法来绕过QQ和微信的图片审查。

他的即时屏蔽机制是将图片的MD5值收集在一起，组成哈希索引（黑名单），从而来实现审查。如果一张图片的MD5值没有被收入哈希索引，那么这张图片就不会遭到屏蔽。

因此，只要在图片的最后面随意加上符合16进制的随意数字即可改变该图片的性质，腾讯就会重新审核效验该图片了。类似的方法还有改变图片四个角的一个像素块来达到该目的，这样也可以在不影响视觉的前提下改变图片的数据块。

## 制作图种

讲了那么多基础内容，那么怎么制作一个图种呢？首先你需要准备好一张 jpg 或 png 格式的图片和一个已经打好 zip 或 rar格式压缩包的想要隐藏的内容。（其他如webp,7z等格式不了解16进制数据块，可以自行尝试）

### 方法一：硬核复制黏贴16进制数据

#### 下载

使用 wxMEdit 等可以编辑16进制数据的软件

wxMEdit官网：

https://wxmedit.github.io/

官方GitHub：

https://github.com/wxMEdit/wxMEdit/

官网下载链接（windows/reactos版本）：

http://downloads.sourceforge.net/project/wxmedit/3.1/wxMEdit-3.1-win32-bin.7z

蓝奏云分流（版本3.1）：

https://ednovas.lanzoux.com/iOmHUlbb2fa

#### 复制黏贴另存为

把两个文件直接拖进来

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-04_19-34-01.webp)

`ctrl + a` 全选 `ctrl + c` 复制 `zip/rar` 文件全部内容

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-04_19-34-13.webp)

来到图片文件的最底下，`ctrl + v` 黏贴

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-04_19-34-40.webp)

建议另存为新文件，随意命名，记得要符合你的图片后缀格式

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-04_19-35-21.webp)

最终效果如下，可以下载该图片然后修改后缀名为 `.zip` 并解压

### 方法二：bat copy

如果文件太大，使用上一种方法很容易让软件卡死崩溃而闪退。

这时候就可以使用bat来处理他们

将两个文件放在同文件夹下，新建一个 txt 文档，打开以后，输入以下内容，需要严格按照格式来输入，该空格的空格，输入法切换成英文（根据你自己的图片和压缩包名字进行修改）

`copy/b 你的图片名字.png+你的压缩包名字.zip = 你的输出图片的名字.png`

然后保存，修改该txt文件的后缀为 `.bat`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-04_19-50-42.webp)

最后双击运行 bat 文件即可。等待片刻就会在同文件夹下生成输出图片了。

同样，将输出文件的后缀名改为 `.zip`，你就可以解压并查看隐藏的内容了

这种方法能够很快速的合并大文件，如图，一张5G的隐藏内容图片就这么做好了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210204195237.png)