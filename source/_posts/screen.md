---
title: Linux 下 screen 命令基本用法
tags: [linux,screen,命令]
id: '1207'
categories:
  - - 编程
date: 2021-02-14 11:32:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/img_5cc898db4e3d3.png
# highlight_shrink: true
---

> https://blog.csdn.net/weixin_42181200/article/details/84141484

CentOS下安装

```
yum install screen
```

Ubuntu/Debian下安装

```
apt-get install screen
```


screen是一个可以在多个进程（通常是交互式shell）之间复用一个物理终端的全屏幕窗口管理器。即linux下使用多窗口


|**常用screen参数** | **效果**|
|:----|:----|
|`screen -S session_name`         |     # 新建一个叫session_name的session|
|`screen -ls`（或者screen -list） |  # 列出当前所有的session|
|`screen -r session_name`          |   # 回到session_name这个session|
|`screen -d session_name`        |     # 远程detach某个session|
|`screen -d -r session_name`     |     # 结束当前session并回到session_name这个session|

进入screen窗口后，想暂时退出（等会还想连接这个screen窗口）
`crtl+a+d`
退出当前screen窗口，结束当前screen窗口，不想再连接回来（即杀死会话）
exit或者 `ctrl+d`