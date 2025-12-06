---
title: VPS 添加 WARP 解锁奈飞终极版
tags: [cloudflare,warp]
categories:
  - - VPS
date: 2021-12-14 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04lz9VVjGyhpbBMVbSJMAeQ-7..v1608587679.png
---

## 前言

cloudflare一直以来提供了十分优秀且免费的服务，希望不要被滥用。

此文是使用warp来达到奈飞解锁的目的的。该方法还请自用，请勿用于解锁服务贩卖等。

## 安装Warp

GitHub地址：https://github.com/fscarmen/warp

该一键脚本可能是最快且最完善的warp一键安装脚本

一键脚本：

```
wget -N https://cdn.jsdelivr.net/gh/fscarmen/warp/menu.sh && bash menu.sh [option] [lisence]
```

运行后选择2简体中文，然后一般是纯ipv4添加ipv6warp，所以选1（根据自己情况选择）。

如果有warp+的 license可以输入，没有的话跳过即可，使用普通的warp服务。

还会让你选择ipv4和ipv6的优先级别，一般选择3保持系统默认即可。

可以输入 `warp h`查看该脚本的帮助菜单。

![](https://user-images.githubusercontent.com/62703343/144635014-4c027645-0e09-4b84-8b78-88b41f950627.png)

### 手动安装warp

如果担心出问题可以使用[手动安装](/2021/04/15/warpipv6/)

## 解锁奈飞

更换warp的脚本很多，但是要说哪个更好用很难，这个挺看几率的，特别是香港、新加坡这些热门地区

GitHub地址们：

https://github.com/luoxue-bot/warp_auto_change_ip

https://github.com/acacia233/Project-WARP-Unlock

https://github.com/GeorgeXie2333/Project-WARP-Unlock

### Dnsmasq

如果VPS性能配置还不错，可以使用dnsmasq处理，用一键脚本：

```
curl -sL https://raw.githubusercontent.com/acacia233/Project-WARP-Unlock/main/run.sh | bash
```

该脚本的改进版：

```
curl -sL https://raw.githubusercontent.com/GeorgeXie2333/Project-WARP-Unlock/main/run.sh | bash
```

改进版的arm一键脚本：

```
curl -sL https://raw.githubusercontent.com/GeorgeXie2333/Project-WARP-Unlock/main/run_arm.sh | bash
```

### 刷IP

只是更换warp ip的刷ip脚本：


原版脚本：

```
wget https://github.com/luoxue-bot/warp_auto_change_ip/raw/main/warp_change_ip.sh && chmod +x warp_change_ip.sh && ./warp_change_ip.sh
```

如果用了上面的一键安装warp脚本，可以输入 `warp i`自动刷warp ip，该脚本的`warp i`也是改进自上面的原版脚本。

改版脚本2：

```
wget https://github.com/GeorgeXie2333/Project-WARP-Unlock/raw/main/warp_change_ip.sh && chmod +x warp_change_ip.sh && ./warp_change_ip.sh
```

#### 挂Screen后台

可以新建个screen挂在后台一直自动刷IP，否则关闭ssh窗口就会断开该程序了。

```
screen -S warp
```

运行脚本，然后按 `ctrl + a + d` 退出screen窗口。

返回该窗口

```
screen -r warp
```

结束该窗口： `ctrl + d`

更多screen安装和使用教程可见[这里](/2021/02/14/screen/)



## 更换为warp team

WARP默认分配到的通道是共享的通道，很多用户被挤在一起，导致网速变得越来越差。

这时候有两种方法。一种是使用WARP+，而另外一种就是使用CloudFlare Teams的专属通道

可以查看[这个教程](/2021/12/12/cfteams/)申请和使用warp team功能


### 获取WARP Teams的配置文件

打开[ Android Studio 官网](https://developer.android.com/studio)

点击中间的Download Android Studio，进行下载安装包

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212173345.png)

依据提示进行安装

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212173712.png)

打开Android Studio，等待下载一些配置文件。由于我这里已经安装过了，卸载重装复现不了，故不上图演示了

进入主页

点击More Actions里面的AVD Manager

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174039.png)

点击Create Virtual Device

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174141.png)

设备选择一定要选下图的平板，然后点击Next


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174159.png)


系统镜像选Lollipop，点Next

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174350.png)

名字随便输入一个，点击Finish完成创建

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174629.png)

启动虚拟机

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174809.png)

打开[ Android SDK Platform Tools 的官网](https://developer.android.com/studio/releases/platform-tools)，点击下载适用于 Windows 的 SDK Platform-Tools

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212174938.png)

解压到电脑的任意一个位置

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212175018.png)

从[此处](https://www.apkmirror.com/apk/cloudflare/1-1-1-1-faster-safer-internet/)下载1.1.1.1 APP的APK文件，然后复制到Android SDK Platform Tools的程序目录下

右键，选择在Windows 终端中打开

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212181800.png)

输入`adb.exe devices`命令检查SDK是否正确识别到虚拟机

输入以下命令在虚拟机安装warp

```
adb.exe install "xxxx.apk"
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182134.png)

打开真全局模式（例如：Clash的TUN模式），并打开WARP APP

切换为team账户，具体教程见[此处](/2021/12/12/cfteams/)

在虚拟机内连接WARP


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182701(1).png)

输入以下命令提取WARP Teams的配置文件

```
adb pull /data/data/com.cloudflare.onedotonedotonedotone/shared_prefs/com.cloudflare.onedotonedotonedotone_preferences.xml
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212182819.png)

关闭虚拟机，打开配置文件

复制`PublicKey`、`PrivateKey`，`Endpoint`地址和IP地址

![PS: 本文的配置文件格式是为了方便展示用，实际的配置文件不是这样](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212183555.png)

### VPS启用WARP Teams

SSH登录至自己的VPS

文件管理器打开 `/etc/wireguard` 目录，找到`wgcf.conf`文件，备份一份到本地

打开`wgcf.conf`文件

编辑，替换相对应的`PublicKey`、`PrivateKey`，`Endpoint`地址和IP地址

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212184612.png)

VPS内重新启动WARP

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211212184743.png)

使用以下命令查询WARP状态，如返回warp=plus即为成功

```
curl -s4m4 https://www.cloudflare.com/cdn-cgi/trace | grep warp | sed "s/warp=//g"
```

该过程视频教程（MisakaNo制作）： https://www.bilibili.com/video/BV1gU4y1K7of?p=1&share_medium=iphone&share_plat=ios&share_session_id=18DB1799-F06C-42FF-8647-E2A3322B37A3&share_source=COPY&share_tag=s_i&timestamp=1639369745&unique_k=3xHUpod


> warp team 部分转载自 小御坂的破站 https://blog.misaka.rest/202112/291.html