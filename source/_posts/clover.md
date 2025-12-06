---
title: Clover 多标签资源管理器拓展
tags: [Clover,资源管理器,windows,多标签]
id: '1185'
categories:
  - - 软件
date: 2021-02-02 11:58:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/clover.jpg
#top: true
#highlight_shrink: true
---

> 转载自官网说明 http://cn.ejie.me/

## Clover 3

Clover 是 Windows Explorer 资源管理器的一个扩展，为其增加类似谷歌 Chrome 浏览器的多标签页功能。

## 官网

http://cn.ejie.me/

官网下载链接

http://cn.ejie.me/download.html

### 方便的 Tab 页功能

要掌握功能强大，操作简单的标签页，只需记住Ctrl+T新开页面，Ctrl+W关闭页面，Ctrl+Tab切换页面，工作效率提高何止一倍！

### 操作系统无缝集成

Clover 通过插件的形式集成到 Windows Explorer，保留您通常的使用习惯，无需学习新的文件管理操作，马上就可以使用啦。

### 快如闪电的书签栏

按Ctrl+D添加当前路径，或者直接将文件夹拖入书签栏。再也不用到处寻找要访问的文件夹了，瞬间到达，何等痛快！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/clover.jpg)

## Q & A

Q: Clover 是否支持Windows2000系统？
A: Clover 目前只支持Windows XP及之后各个Windows版本 （32bit/64bit），同时支持英文和中文等大部分常用语言。

Q: 安装时360安全卫士提示 regsvr32 进程安装浏览器插件，这个软件安全吗？
A: Clover 通过Windows Explorer插件的形式集成到系统资源管理器中，获取资源管理器新开窗口的消息，能够自动将外部打开的资源管理器窗口吸附到Clover窗口中。 Clover 程序不会获取用户的任何消息。

Q: ：安装后会自动吸附Windows Explorer，但是现在不行了？
A: 有些用户安装后，通过优化软件禁用了ExplorerWatcher插件，会造成这种情况，解除插件的禁用即可（请从IE浏览器–>管理加载项菜单中查看，是否被禁用）。

Q: 我确认ExplorerWatcher已经启用了，为何还是无法自动吸附？
A: 请检查注册表的下列选项，检查浏览器扩展功能是否被禁用了。
[HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main]
“Enable Browser Extensions”=”yes”

Q: 您会把Clover开源吗?
A:很多朋友咨询这个问题，因为以下几个原因，暂时不会:
1. 代码仓促写就，还有很多问题。
2. 长期的开发计划和开发方向还不清晰。
3. Clover品牌还不够突出，为避免被山寨，暂时不能公开源码。

Q: 能不能把任务栏上的Clover三叶草图标换回资源管理器的图标？
A: 有些人不喜欢Clover的图标，也有一些人很喜欢。所以我暂时不修改Clover的图标，直到我发现一个更好的，或者有人帮我做出一个更漂亮的图标。网友3man和nick提供了一个图标(by 3man)[http://ejie.me/images/Windows_Explorer_Clover.ico] (by nick)[http://ejie.me/images/clover3_32.ico]，你暂时可以用来修改下面这个快捷方式的图标:
`C:\Users\YOUR_USERNAME\AppData\Roaming\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar\Clover.lnk`