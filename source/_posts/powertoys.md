---
title: Powertoys——Windows官方窗口管理等多功能软件
tags: []
id: '1141'
categories:
  - - 软件
date: 2021-01-14 06:28:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/powertoys_2019.0.webp
---

## 简介

Microsoft PowerToys是一组免费的系统工具软件，由微软为Windows操作系统上的高级用户设计。这些程序为系统加入或变更了一些功能，并加入更多自定义选项以提高生产力。PowerToys可用于Windows 95、Windows XP和Windows 10。微软于2019年5月8日重启了PowerToys，Windows 10版PowerToys为自由及开放源代码软件，并使用MIT授权条款托管于GitHub。

他最早在windows 95就有了，但是后来在xp上销声匿迹了很久，这才在win10上重新大放光彩。软件更新也十分的频繁，版本迭代很快，我觉得未来很有可能作为一个windows系统内置程序出现。

GitHub下载：

https://github.com/microsoft/PowerToys/releases

蓝奏云分流（版本0.29.3）：

https://ednovas.lanzoux.com/icWi4kdgluf

下载安装即可。

软件建议以管理员权限运行，否则可能会出现自动关闭等现象。Microsoft官方发布的软件，不用担心病毒啥的。

## 功能

Windows 10版PowerToys包含以下工具程序：

### 1. Color Picker 加入了一个十六进制和RGB取色器工具。

默认取色快捷键是win + shift + c （这个c盲猜代表color）。色彩格式支持常见的HEX和RGB以外，还支持HSL\HSV\CMYK\HSB\HSI\HWB\NCol。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_06-39-53.webp)

点击色卡还能选择邻近色，以及输入、调整HSV\RGB\HEX值，十分方便。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_06-42-49.webp)

2. FancyZones 加入了一个窗口管理器，让用户可以更简单地创建并使用复杂的窗口版面配置。

默认窗口管理器打开快捷键是win + `，即可打开如下窗口，可以使用他的预设方案，也可以自定义窗口大小、个数、位置等，这个需要自己来调整。（一般推荐设置3-4个窗口足够了）

你可以选择窗口然后按住shift即可打开设置好了的窗口管理器（也可以在设置中调整至不需要按shift直接拖动）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_06-45-01.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Ya1A5zwS5w.gif)

3. File Explorer (Preview Panes) 附加组件，让用户可在资源管理器内预览SVG和Markdown文件。

这个功能略显鸡肋，因为有更好用的软件可以显示markdown和svg文件。quicklook不香嘛！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_06-55-59.webp)

4. Image Resizer 在资源管理器加入了一个右键菜单选项，用以重新调整图像尺寸。

这个就很实用了，右键快速调整图片尺寸、压缩图片。不过貌似不支持webp格式。如下图可以进行设置，添加自定义大小、图片质量等。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-07-18.webp)

选择png\jpg等格式的图片，右键选择resize image调整图片尺寸，即可打开如下窗口进行调整。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-09-40.webp)

5. Keyboard Manager 允许用户重新对应按键并创建自己的键盘快捷键。

这个功能说实用很实用，说鸡肋也挺鸡肋。看自己的个人使用体验吧。

比如你想要按一个A键就可以实现ctrl+c，就可以使用这个功能进行设置。左边输入A键，右边输入ctrl+c即可完成设置。以后再用ctrl+c的时候直接按A键即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-13-22.webp)

6. PowerRename 在资源管理器加入了一个选项，允许用户使用搜索和取代或正则表达式来重命名文件。

批量重命名工具，十分好用。批选文件，搜索想要替换的内容，下方输入想要替换的内容，即可实现批量重命名。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-16-29.webp)

7. PowerToys Run 一个类似Spotlight的工具，允许用户搜索文件夹、文件、应用程序及其他项目。

微软真的是“有心”了，终于知道自己的搜索功能有多菜鸡了。按alt+space（空格键）即可打开这个搜索窗口。效果肯定不如everything。这个功能有待提升。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-18-06.webp)

8. Shortcut Guide 一个全面屏重叠，允许用户查看在当前窗口可用的Windows键快捷键。

长按win键即可打开此窗口。可以显示所有win键 + （如图的各种默认键）的提示，比如你想要打开文件管理器，根据上面的提示，再按E键即可。松开win键自动关闭此窗口，这简直是健忘症福音。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-14_07-22-57.webp)

9. 更多功能还在加入...

Topbook youtube演示视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/frRSH4VlQCc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 加入插件

> 感谢revenge提醒,软件还可加入everything和浏览器搜索插件让他变得更强大

浏览器关键词搜索GitHub地址: https://github.com/masi456/PowerToys

内置everything本地搜索神器GitHub地址: https://github.com/IzaiahSun/PowerToys

releases界面可以直接下载已经内置版本,或者可以手动安装

下载 https://onecloud.ednovas.xyz/s/zYCK

放在/modules/launcher/Plugins里面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210620170001.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210620170047.png)