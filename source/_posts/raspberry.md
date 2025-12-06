---
title: Raspberry Pi 入门使用指南
tags: [raspberry,vps]
categories:
  - - 杂
date: 2023-02-19 21:28:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/0cc8c5e08fec84612b045e561fc39f4a.webp
#highlight_shrink: true
---

## Raspberry Pi

树莓派（英语：Raspberry Pi）英国树莓派基金会开发的微型单板计算机，目的是以低价硬体及自由软体促进学校的基本电脑科学教育。

树莓派系列计算机每一代均使用博通（Broadcom）出产的ARM架构处理器，如今生产的机型（树莓派4B）内存在2GB和8GB之间，主要TF卡作为系统存储媒体（初代使用SD卡），配备USB接口和HDMI的视频输出（支持声音输出），内置Ethernet/WLAN/Bluetooth网络链接的方式（依据型号决定），并且可使用多种操作系统。产品线型号分为A型、B型、Zero型和ComputeModule计算卡。


## 用途

Raspberry Pi 实际上就是一个超级便捷的小型电脑，通常用来装linux系统，可以用作服务器的一些功能。

例如：搭建个人网站，Git服务器，远程BT下载器，小型家庭NAS，AirPlay服务，闹钟，DNSmasq服务（内网DNS），Adguard Home，等等功能。

这是作为服务器的用途，还可以用作一些机械结构的模块，用来做树莓派飞行器，机器人，遥控坦克等等。

https://www.adafruit.com/ 这个网站上有很多树莓派的开源有趣的项目可以用作参考

还有一本书也很推荐 https://book.douban.com/subject/25856712/ （京东有售。不想买书的话可以从Z-lib找免费的PDF版本）

## 购买

一般个人（博主）用途就是用作家庭服务器了。博主买的是raspberry pi 4，带着蓝牙和无线wifi。一般购买只是纯一个板子，当然这是肯定不够的。建议需要购买的材料：

必需：
- Raspberry Pi板子
- MicroSD卡（用做硬盘，至少8G+，博主这里用的是64G的）
- MicroSD卡读取器（写入系统）

可选：
- 盒子（如果觉得仅一块板子容易弄脏弄灰弄坏，可以买个金属盒子）
- 充电器（注意充电接口是什么的，比如Pi 4是type-c电源口）
- 网线（用来连接网络的，比如Pi 4有无线Wifi会方便些，但推荐还是网线连接）
- 显示器（不接显示器也可以，但是会稍麻烦点）
- 显示器转换器（要注意你买的Raspberry Pi的视频接口是什么样的，注意不要买错了。比如Pi 4是micro HDMI接口的。）

## 安装系统

### 系统下载

这里安装的，也是推荐安装的是Raspberry官方系统，基于Debian的Raspberry OS系统。

Windows/Mac/Ubuntu 下可以下个安装器 https://www.raspberrypi.com/software/

安装后，打开软件。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-35-18.png)

### 初始化SD卡

把SD插入SD卡读卡器，然后插入电脑的USB接口。电脑应该会自动读取出一个硬盘。

格式化它。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-37-01.png)

这里选择FAT，别的默认就行。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-37-23.png)

### 选择系统

系统处选择Raspberry Pi OS，博主这里选择的是64-bit。一般默认32-bit即可。

然后Storage处选择你插入的SD卡硬盘即可，如果有多个外接硬盘，别选错了！

打开右下角的设置，

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-39-59.png)

设置中打开SSH，然后打开设置用户名，默认用户名保持`pi`就行，然年后自行设置个密码。

下面是设置无线WIFI的配置，输入你家的WIFI名（SSID），然后输入密码，下方国家如果在国内就选择CN，最下面一个是设置系统时区的，国内的话选择 Asia/Shanghai 时区。最后保存。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-41-26.png)

点击Write开始写入

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-44-02.png)

选择YES，然后耐心等待写入完成。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-19_22-44-21.png)

### 新建SSH

安装完成系统后，可能需要先拔出再插入一次SD卡才行。

在SD卡根目录下创建一个文件，名字改成`ssh`，并删除文件后缀。不执行该操作的话会连不上SSH。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_00-22-26.png)

## SSH连接

先接通电源，这就相当于一台台式电脑，需要时刻接着电源。

如果有显示器的话，直接接上显示器和键盘鼠标即可，没有的话我们可以使用ssh连接进行初始化。

先下个advanced ip scanner 用来扫描Raspberry的内网IP

https://www.advanced-ip-scanner.com/

如果和电脑处于同一网络下，直接选择Subnet然后点击Scan即可。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_00-29-10.png)

然后Manufacturer这里会显示Raspberry的就是他的内网IP地址了，我们复制即可。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_00-30-19.png)

然后输入刚刚设置的账号和密码，用默认SSH 22端口即可。如果连接不上，可能是没有在根目录添加ssh文件或者账号密码不正常，或者Raspberry没有正确连接到网络。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_00-58-59.png)

## 远程控制VNC

SSH输入`sudo raspi-config`进入设置页面。如果有询问是要为哪位用户进行设置的，直接用默认的回车即可。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_02-17-32.png)

选择第三个 `Interface options`

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_02-18-50.png)

选择 `VNC` 回车

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_02-19-44.png)

选择 `Yes` 确定回车。就会开始自动安装VNC了，如果有询问是否安装的一路默认y即可

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_02-20-19.png)

安装完成后回车OK即可。

## VNC

选择你自己常用的VNC软件。（Realvnc据说是树莓派官方推荐的VNC，这里就用RealVNC作为示例）

https://www.realvnc.com/en/connect/download/viewer/


输入Raspberry的内网IP地址进行VNC连接，输入之前设置的SSH账密。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-20_02-31-04.png)

如果要修改树莓派的分辨率，可以在SSH运行 `sudo raspi-config` 进入设置界面设置操作，在`Display options`中可以选择更改分辨率等屏幕设置。

## 小结

至此，树莓派的基础设置已经结束，一般使用ssh即可。更多的玩法可以参考上文 `用途` 处或者自行谷歌。

> https://zh.wikipedia.org/zh-hans/%E6%A0%91%E8%8E%93%E6%B4%BE