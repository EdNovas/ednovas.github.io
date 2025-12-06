---
title: OneMark————让Onenote支持Markdown
tags: [软件,onenote]
categories:
  - - 软件
date: 2021-12-24 19:12:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/onemark.jpg
---

## 简介

众所周知，Onenote作为一款优秀的笔记软件，就是总是这个不支持那个不支持，比如Markdown，LATEX等。GEM等插件又要花钱，烦恼的很啊

[OneMark](https://onemark.neuxlab.cn/)是[V2EX](https://www.v2ex.com/t/822262)一位大佬ccyixia的杰作————一个Onenote的Markdown支持插件

目前只支持 OneNote Windows 桌面版，不支持 UWP 版本


官网：https://onemark.neuxlab.cn/

不需要多余操作，每一次按`Enter`都见证文字的变身

汲取新世代编辑器的精华设计，完美融入 OneNote 之中

随心增删编辑，可切换源码状态，数据双向更新

支持主流 `Markdown` 语法，更为你带来真正好用的`代码块`、`LaTex` 以及 `TOC`

## 使用说明

官网下载安装重启Onenote即可。不会重启Onenote？直接重启电脑即可。

## 支持版本

OneNote 2013 及以上版本，不支持 UWP 版本。安装成功后会在界面上添加 OneMark 菜单。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ribbon.png)

## 64位 or 32 位？

请选择与当前 OneNote 一致的版本。如何查看 OneNote 的位元：

点击`文件` - `账户` - `关于 OneNote`，弹出的对话框第一行末尾。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bit.png)

## 安装后没有显示菜单

请点击 `文件` - `选项` - `加载项`，如果 `非活动应用程序加载项` 中没有 OneMark，则参考 [OneMark 没有出现在加载项中](#onemark-没有出现在加载项中)

如果列表中存在 OneMark，则点击左下角的 `转到`，然后勾选 `OneMark`， 点击 `确定`。

正常操作后界面上会显示 OneMark 菜单。如果没有显示，则参考 [加载 COM 选项时出现运行错误](#加载-com-选项时出现运行错误)。

## 加载 COM 选项时出现运行错误

请按照以下顺序依次进行尝试。每步操作完后如确认 OneMark 已正常显示，则不用继续尝试。

* 尝试重启 OneNote。
* 尝试重启电脑。
* 去`控制面板` - `程序和功能` 中，找到 Office（或OneNote），点击右键 - `修复` - `联机修复`。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/repair.png)

运行 `OneMark` 安装程序，先点 `Remove OneMark` 卸载。然后再运行安装程序，在第三步选择安装路径的左下方，勾选`Everyone`，再继续。

## OneMark 没有出现在加载项中

请按照以下顺序依次进行尝试。每步操作完后如确认 OneMark 已正常显示，则不用继续尝试。

* 查看 OneNote 是32位还是64位，确认安装程序与其是一致的。如果不一致，先卸载，再安装正确的版本。
* 如果电脑上装有杀毒软件，暂时关闭一下。
* 运行 OneMark 安装程序，先点 `Remove OneMark` 卸载。然后再运行安装程序，在第三步选择安装路径的左下方，勾选`Everyone`，再继续。

## 效果

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/668c882egy1gxe077edp1g20m80ay7lh.gif)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/668c882egy1gxe077922hg20m80780y1.gif)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/668c882egy1gxe0779yqmg20m807s7b6.gif)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/668c882egy1gxe0783rohg20m80gohdx.gif)

双向更新，在Markdown和渲染前的内容间自由切换

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/668c882egy1gxe077bwaqg20m808cwvt.gif)

被吐槽无数的英文自动变成 Calibri 字体的问题好像也因为这种二次渲染模式的引入无意中解决了

## 使用快捷键

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-24_17-20-05.png)

## 结语

感谢Onenote免费提供了如此好用的笔记软件，也感谢Onemark作者ccyixia的优秀作品！

> 转载编辑自 https://www.v2ex.com/t/822262
> https://onemark.neuxlab.cn/docs/setup/