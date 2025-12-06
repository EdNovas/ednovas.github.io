---
title: Raspberry + 外接硬盘 用内网穿透 WebDav 作公网 NAS
tags: [cloudflare,tunnel,内网穿透,vps,nas,docker]
categories:
  - - 杂
date: 2023-02-24 22:28:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/home_assistant_diskstation_banner.07cc2b7.39e6bea3f2d2daed4bd405d3c7816312.png
#highlight_shrink: true
---

## 准备工作

- Raspberry（别的支持docker的软路由/家庭服务器等也可以）
- cloudflare账号（用cloudfalre tunnel）
- 用作nas的硬盘（插到raspberry上的外接硬盘，需要自供电，raspberry的电量带不动不插电的移动硬盘）

## 初期

raspberry初始化可以看 [https://ednovas.xyz/2023/02/19/raspberry/](/2023/02/19/raspberry/)

注意本教程安装的OMV NAS系统，不能有桌面UI，安装系统的时候请选择没有桌面的lite版本系统。如果选择了有桌面的系统，我们也需要卸载。可以执行以下命令卸载完全各种桌面：

```
sudo apt purge xserver* lightdm* raspberrypi-ui-mods vlc* lxde* chromium* desktop* gnome* gstreamer* gtk* hicolor-icon-theme* lx* mesa*
sudo apt autoremove
```

cloudflare tunnel设置可以看 [https://ednovas.xyz/2023/02/24/cloudflaretunnel/](2023/02/24/cloudflaretunnel/)

## 安装OMV

https://www.openmediavault.org/

openmediavault 是一个免费的十分优秀的NAS管理系统，我们可以用来装在raspberry上的。

安装：

```
wget -O - https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/installScript/master/install | sudo bash
```

安装过程会很慢，可能最长30分钟，根据你的机器配置决定的。安装完成后，他还会更改内网IP地址，所以需要你重新用ipscanner去扫描下新的内网IP地址是多少。

默认用户名为`admin`，默认密码为`openmediavault`

## 初始化磁盘

建议是用一个全新的磁盘来，或者已经备份好数据的，因为我们需要格式化硬盘到EX4。

在磁盘中，选中你挂载的磁盘，选中高亮以后，点击擦除，然后确定，使用快速擦除即可。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-19-55.png)

擦除完成后，关闭那个擦除小窗口即可。

然后创建文件系统，就是挂载上硬盘。

在文件系统中，选择挂载文件系统

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-22-36.png)

选择EXT4

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-22-54.png)

然后在设备中选中刚刚格式化完的磁盘，并保存。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-23-22.png)


耐心等待文件系统创建并挂载成功。

默认应该是会自动挂载上的，如果没有挂载上的话，就手动挂载下该磁盘即可。如果有需要应用的设置，选择保存并应用即可。

## 共享文件夹

创建一个共享文件夹，这里一般默认就是用挂载的硬盘根目录了。文件系统选择挂载好的磁盘，相对路径留空，权限保持默认（管理员和用户有读写权限），然后保持并应用即可。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-27-32.png)

## SMB 

我们可以先开个SMB测试下内网效果怎么样。服务-SMB-共享里可以添加刚刚共享的文件夹，然后公开选择允许访客，两个继承都需要勾选上。保持并应用。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-29-56.png)

然后在SMB-设置中，开启SMB服务，接下来，电脑上可以在 我的电脑-添加磁盘映射，然后输入设置的用户名和密码登录访问，可以测试下读写更改文件等权限是否正常。

## WebDav

这里使用的是docker搭建的一个webdav服务。我们先安装docker。

在系统-omv-extras-Docker中可以直接安装docker，有需要的还可以安装下Portainer（docker的一个web
管理面板，个人觉得挺方便的）

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_04-36-32.png)

博主用的是 https://hub.docker.com/r/ugeek/webdav 这个docker的webdav程序，他支持raspberry就很友好。

普通amd64安装就 

```
docker pull ugeek/webdav:amd64
```

如果是raspberry这样的arm64就用以下命令安装

```
docker pull ugeek/webdav:arm
```

然后运行docker配置如下（amd64的配置）：
其中8096是随意设置的端口，可以自行更改。把 <你的硬盘挂载路径> 更换成你的硬盘实际挂载路径，可以在 存储器-共享文件夹-绝对路径 那里找到，直接复制路径即可。时区马德里是作者写的，懒得改了，影响不大。

```
docker run --name webdav \
  --restart=unless-stopped \
  -p 8096:80 \
  -v <你的硬盘挂载路径>:/media \
  -e USERNAME=<设置个webdav用户名> \
  -e PASSWORD=<设置个webdav密码> \
  -e TZ=Europe/Madrid  \
  -e UDI=1000 \
  -e GID=1000 \
  -d  ugeek/webdav:amd64
```

或者运行（arm64，raspberry的配置）：

其中8096是随意设置的端口，可以自行更改。把 <你的硬盘挂载路径> 更换成你的硬盘实际挂载路径，可以在 存储器-共享文件夹-绝对路径 那里找到，直接复制路径即可。时区马德里是作者写的，懒得改了，影响不大。

```
docker run --name webdav \
  --restart=unless-stopped \
  -p 8096:80 \
  -v <你的硬盘挂载路径>:/media \
  -e USERNAME=<设置个webdav用户名> \
  -e PASSWORD=<设置个webdav密码> \
  -e TZ=Europe/Madrid  \
  -e UDI=1000 \
  -e GID=1000 \
  -d  ugeek/webdav:arm
```


运行以后，webdav就会在8096端口运行，输入raspberry的内网`ip:8096`就可以访问webdav了。

配合cloudflare tunnel的内网穿透8096端口（协议选择http即可，即 `http://localhost:8096`），我们就可以直接在公网访问webdav了。

## WebDav软件

Windows用RaiDrive，可以直接挂载webdav到本地磁盘里，就和SMB映射硬盘类似。记得用了cf的隧道后，就是走的https和443端口了，不要填http和80端口，会连不上的。

Linux可以直接添加网络位置

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/0a2a925bd4105f27d0f662d4aa01fe8d.png)

Mac上，转到Finder > 前往 > 连接服务器，输入Webdav地址连接。

安卓可以用ES文件浏览器访问。

如果遇到webdav软件没有读/写权限的问题，可以去 存储器-共享文件夹 下，选中共享的文件夹，然后调整`特权`和`访问控制列表`。

## 拓展

博主为了进一步的同步，让谷歌云盘与webdav随时双向同步数据了。

博主是买了个multcloud永久会员，添加了我的google drive workspace无限空间云盘和webdav，然后让他们俩互相双向同步。请不要学习博主去买multcloud，我只是为了贪图能转移百度云盘才买的。rclone更香！而且免费，就是需要一个服务器（有raspberry了也算是一个服务器了）和一点点配置。

## 结语

就此一个能在公网访问的家庭NAS就搭建好了。

博主考虑过frp，但是相较于cloudflare的简单上手，还是更倾向与cloudflare了。对于cloudfalre的smb公网访问，觉得配置会比较繁琐，不如Webdav来的直接，配置好了哪里都能用，不需要再额外下载cloudflared了。至于其他基于tcp的协议就也同样不做考虑了，还是基于http的webdav最香。

不过webdav在处理大文件的时候还是有可能会出点问题的。不过我觉的日常使用上已经足够了。

总的来说，这么一个低成本高效率的家庭nas就这么做好了，~~这不比群晖香？~~