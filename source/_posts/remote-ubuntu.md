---
title: 使用 Chrome Remote Desktop 远程控制 Ubuntu 服务器
tags: [远程控制,vps,ubuntu,Chrome Remote Desktop]
categories:
  - - VPS
date: 2023-01-07 11:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/chromeremtoedesktop.png
---

## 准备工作

众所周知，Chrome Remote Desktop 是一款十分出色的完全免费远程控制软件。其易用性和功能的强大性，以及连接的稳定性都给这款软件加分不少，唯一的缺点可能就是国内无法使用了，需要开梯子才可使用。

首先，先准备一个需要远程控制的VPS，要求 Debian或者 Ubuntu系统。还需要另一个控制端，手机电脑均可，登录你的 Google 账户：

https://remotedesktop.google.com/support/

## 安装（Ubuntu为例）

### 下载

控制端前往 https://remotedesktop.google.com/headless

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2023-01-07_15-50-47.png)

Ubuntu被控端下载程序包

```
wget https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb
```

用wget可以直接下载该程序包。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2023-01-07_15-52-25.png)

### 安装

安装该程序包（默认是下载在了/root路径，就在/root路径安装）

```
sudo apt-get install -y /root/chrome-remote-desktop_current_amd64.deb
```

然后安装桌面图形，这里推荐 Xfce，因为他是最轻量的。你也可以选择其他的，可以参考（Cinnamon, Gnome, Gnome-Classic, KDE Plasma）：

https://cloud.google.com/architecture/chrome-desktop-remote-on-compute-engine#install_an_x_windows_system_desktop_environment

### 安装Xfce

安装Xfce本体

```
sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes xfce4 desktop-base dbus-x11 xscreensaver
```

设置Xfce为默认桌面

```
sudo bash -c 'echo "exec /etc/X11/Xsession /usr/bin/xfce4-session" > /etc/chrome-remote-desktop-session'
```

（可选）安装桌面套件，包括Firefox，LibreOffice，PDF viewer等

```
sudo apt install --assume-yes task-xfce-desktop
```

禁止默认的桌面显示

```
sudo systemctl disable lightdm.service
```

（可选）安装Chrome

```
curl -L -o google-chrome-stable_current_amd64.deb \
   https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install --assume-yes ./google-chrome-stable_current_amd64.deb
```

### 新建用户

由于它不支持root用户（安全起见），所以我们需要新加一个用户

```
adduser ednovas
```

然后填入信息即可。后面User Information全部跳过即可。

（可选，不建议，安全第一）如果想要把用户权限提为管理员，可以使用以下命令。

```
adduser ednovas sudo
```

### 校验

控制端，点击下一步，然后会出现类似下图的内容，选择最后一个复制黏贴到被控端。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2023-01-07_15-54-36.png)

记得在最后添加一个 `--user-name=ednovas` ，这样就可以指定以`ednovas`用户运行了。

这个黏贴的校验码要尽快使用，几分钟就会过期，而且只能使用一次，如果出了任何bug或者报错，就要在控制端点重来。

运行正常以后，就可以查看是否正常运行了。

### 状态

`$USER` 就是刚刚创建且运行的用户名

```
sudo systemctl status chrome-remote-desktop@$USER
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2023-01-07_16-30-21.png)

如上图即运行正常。

## 连接

https://remotedesktop.google.com/access 页面选择刚刚新加的，然后输入设置的PIN码连接即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2023-01-07_16-31-27.png)


> 参考 https://cloud.google.com/architecture/chrome-desktop-remote-on-compute-engine