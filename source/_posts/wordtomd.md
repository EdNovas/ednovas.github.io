---
title: 一键将 Word 转换为 Markdown
tags: 
  - markdown
  - word
categories:
  - 杂
date: 2021-05-13 18:12:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.sspai.com/2018/07/24/088eaabe3a61a2bb4b57739a5b744636.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1
---

## 方法一：Writage + Pandoc -- 双剑合璧！

1. 下载并安装 Writage，下载地址：http://www.writage.com/

    打开 [Writage网页](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.writage.com%2F)，点击Download，再点击Download Now完成下载

    ![](https://upload-images.jianshu.io/upload_images/7692714-0dea7d7aeeffba56.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

    ![](https://upload-images.jianshu.io/upload_images/7692714-6ce19b9714bb0336.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

    运行安装程序，一般按照默认选项安装就好啦

    ![](https://upload-images.jianshu.io/upload_images/7692714-b10e96c9c32e0026.png?imageMogr2/auto-orient/strip|imageView2/2/w/569/format/webp)

    重启电脑，新建或打开任一 Word 文档，在 文件 菜单栏下选 另存为，查看 【保存类型】 中是否有 Markdown 格式。
    （如果插件安装成功，就会自动出现Markdown选项；否则，重新安装一遍吧~）

    ![](https://upload-images.jianshu.io/upload_images/7692714-180fec4da16b8f9f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

2. 下载并安装 Pandoc：官方下载地址 http%3A%2F%2Fpandoc.org%2Finstalling.html

运行安装程序，一般按照默认选项安装就好啦

![](https://upload-images.jianshu.io/upload_images/7692714-200a8ac8072f02c2.png?imageMogr2/auto-orient/strip|imageView2/2/w/668/format/webp)

3. 准备好工具啦，我们开始尝试将word文档转换为markdown文档吧！
    首先设置 word 文档中的标准样式，如一级、二级标题，项目符号或编号等，如此才能与 markdown 的格式对应
    
    （稍微有点繁琐的前期准备，如果文档一开始就是按照标准样式排版，就没有这个烦恼啦）
    
    ![](https://upload-images.jianshu.io/upload_images/7692714-abb1b0c891b37773.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
    
    Word 格式 另存为 Markdown（这是最关键的一步~）
    
    ![](https://upload-images.jianshu.io/upload_images/7692714-783e08901ab25077.png?imageMogr2/auto-orient/strip|imageView2/2/w/674/format/webp)
    
    markdown 文档在 Word 中的显示效果：
    
    ![](https://upload-images.jianshu.io/upload_images/7692714-e545bfbe49f09069.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
    
    由于markdown中的图片无法设置大小，因此在word中排布的图片格式不标准，需要人工调整
    
    其他格式，如一级、二级标题，项目列表等基本没有问题，其中表格显示如下

    ![](https://upload-images.jianshu.io/upload_images/7692714-80ae8d0c8d8f306d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

    将markdown文档上传至码云等平台并提交，对应的内容预览效果如下

    ![](https://upload-images.jianshu.io/upload_images/7692714-570250456c4049f4.png?imageMogr2/auto-orient/strip|imageView2/2/w/999/format/webp)

    ![](https://upload-images.jianshu.io/upload_images/7692714-99c848242acc487a.png?imageMogr2/auto-orient/strip|imageView2/2/w/999/format/webp)

## 更加快捷（有时略坑）的方法二：Word to Markdown Converter在线转换网页！

1. 设置word文档中的标准样式，如一级、二级标题，项目符号或编号等，如此才能与markdown的格式对应

    （稍微有点繁琐的前期准备，如果文档一开始就是按照标准样式排版，就没有这个烦恼啦）

    ![](https://upload-images.jianshu.io/upload_images/7692714-9dfa2efd15ca0a63.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

2. 打开网页Word to Markdown Converter：https://word-to-markdown.herokuapp.com/


![](https://upload-images.jianshu.io/upload_images/7692714-a8bc48ed32e7907e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


3. 选择需要转换的Word文件,点击Convert

![](https://upload-images.jianshu.io/upload_images/7692714-a2998ff04f5745ab.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

4. 大功告成啦！ :yum: 页面左边显示的是Markdown文档的内容，右边显示的是预览出来的样子

![](https://upload-images.jianshu.io/upload_images/7692714-692e722f34b3be99.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


那么坑在哪里呢？ 我们会发现，表格转换出来是这样子的 :disappointed:

Markdown文档

![](https://upload-images.jianshu.io/upload_images/7692714-235cbd951c925c95.png?imageMogr2/auto-orient/strip|imageView2/2/w/563/format/webp)


预览出来

![](https://upload-images.jianshu.io/upload_images/7692714-ea29513995c11fea.png?imageMogr2/auto-orient/strip|imageView2/2/w/561/format/webp)

因此还需要进一步手动编辑整理完善表格

（如果，Word文档本身不包括表格，Word to Markdown Converter使用体验可谓相当便捷稳妥啦！）

## 图片的下载与存储

除了标准格式设置与表格调整问题， 图片的下载与存储也会是我们可能会遇到的问题

Markdown转换为Word ：在Markdown文档中，图片以网络超链接的形式保存,如果markdown文档中有这一类图片，那么需要在网络连接的情况下，才能正常输出有图片的word文档。否则，图片处显示空白

Word转换为Markdown ：Word转换为Markdown文档之后，文档中的图片输出到本地文件夹下，将该文件夹与输出的Markdown文档在同一目录下，在Markdown文档中图片引用本地相对路径，也就是说，必须保证

Markdown文档与存放图片的本地文件夹在一起，才能完整的在markdown编辑器中显示图片

> 作者：stata连享会
> 链接：https://www.jianshu.com/p/df6a136d06d8
> 来源：简书