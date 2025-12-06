---
title: Ubuntu简单安装使用指北
tags: 
  - linux
categories:
  - 杂
date: 2021-10-15 00:07:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ubuntu-impish1.jpg
---


# 安装双系统

准备一个至少4GB的U盘，最好是USB3.0以上的。磁盘预留至少60G空间。

博主双系统安装版本为 Windows11 + Ubuntu21（GPT分区表+UEFI引导启动模式）（文中图片是win10 + Ubuntu 18.04LTS）

首先确认电脑已经预装Windows10操作系统（即使是空盘，安装顺序也是推荐先正确安装Windows），如果是近年来的新买笔记本、台式机电脑，默认安装Windows10采用的引导模式都为UEFI引导，硬盘分区表为GPT(GUID)分区表，这种引导模式与分区表与之前的Win7系统（MBR分区表+legacy引导）有所区别

需要注意的是，Win10也是可以在旧的 `MBR分区表+legacy引导模式` 下安装的，如果是自行安装的Windows系统，请确认是通过UEFI模式引导安装的Win10（比如电脑之前是win7系统再重装win10，因为硬盘分区表为MBR，很可能安装方式为MBR+legacy）。

判断方法：按下win+r打开运行，输入msinfo32，确定，打开系统信息，查看BIOS模式是否为UEFI。

一句话总结，UEIF引导就对了。


## Ubuntu下载

下载界面：

https://ubuntu.com/download/desktop

Ubuntu 20.04.3 LTS(更稳定)：

https://ubuntu.com/download/desktop/thank-you?version=20.04.3&architecture=amd64

Ubuntu 21.10:

https://ubuntu.com/download/desktop/thank-you/?version=21.10&architecture=amd64

## 刻录系统

刻录软件:

- rufus https://rufus.ie/zh/

- UltraISO https://www.ultraiso.com/

我个人用的是UltraISO，直接官网下载试用免费版即可

1. 安装并打开软碟通，插上 U 盘，并且最好备份你的 U 盘，因为之后需要格式化

2. 进入软碟通，进行如下操作 选择文件，并且打开你下载的 ubuntu 所在的目录，选择 unbuntu 镜像（改成选择自己的Ubuntu镜像即可），双击打开，如图：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1628751-20190421144433959-1118818166.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1628751-20190421144449817-1634930914.png)

3. 在软碟通界面菜单栏选择启动，选择写入硬盘映像，如图所示:

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1628751-20190421144509795-498681718.png)

接下来很重要，记住次序：

进入以后界面如下：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1628751-20190421144531569-1034367299.png)

1） 看你的硬盘驱动器是否对应的是你的 U 盘（必须是） ，一般默认是

2） 看映像文件是否对应你的 ubuntu 镜像

3） 如果上述均没有错误，选择格式化，之后就会格式化你的 U 盘

4） 在 U 盘格式化完毕之后，选择写入，之后就是慢慢等待了，等待写入完毕

## 为Ubuntu预留硬盘空间

在桌面 计算机 右键-管理-磁盘管理，或者右键左下角windows键打开计算机管理

找到空间最大的一个盘，右键-压缩卷，输入你想为Ubuntu留出的硬盘空间大小（视需求而定，一般用途>60GB就比较充足了，具体以咨询相关领域的前辈），然后分出的空间（比如50GB）会变为黑色 未使用（安装Ubuntu只需压缩卷，分出未使用，不需要新建分区）。

我是预留了100G空间。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/distribute_space.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/distribute_space2.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/distribute_space3.jpg)

关闭Win10快速启动
Win10快速启动的功能加快了系统开机速度，但可能造成开机时，不会出现进入BIOS选项，所以可以预先关闭快速启动（http://www.xitongcheng.com/jiaocheng/win10_article_45880.html）。

## 安装系统

### BIOS

插入U盘，重启，出现“按Delete或F2键进入BIOS设置”类似字眼时按对应按键，进入BIOS准备开始安装系统

不同品牌机器按键不尽相同，可以自行百度或按屏幕提示操作。联想拯救者是F12。其实无非就是F2,F10,F12,del,F11等这几个常用的，多重启几次自己就能试出来了。

选中从U盘启动项启动

如果存在多个U盘启动项，需要选择UEFI开头的U盘启动项，一般还会写着你的U盘厂商的名字，如sandisk

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/qidongxiang_boot_selecting.jpg)

然后这里直接选Install Ubuntu(这是老版的，新版就是默认第一个Ubuntu)

当然也可以选Try without installing，先试用，试用过程中可以点击桌面的Install快捷方式安装。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/boot_install_menu.jpg)

### 开始安装

接下来选择语言，个人推荐安装过程断开网络，然后选择“正常安装”，并取消勾选“安装Ubuntu时下载更新”

有网络连接时安装过程最后一步会下载一些更新包，如果网络环境不好，会拖慢安装进度，可以待系统安装完成后再更新

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_from_2019-10-05_11-07-19.png)

在“安装类型”，这里先选择“其它选项”，至于第一个共存的选项，我们下文再讨论。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_from_2019-10-05_11-07-45.png)

### 分区

然后我们就来到了分区页面，在分区页面，选择标记为“空闲”的分区，点击‘+’加号，创建分区。

在网上的很多比较老的教程，多会写创建/、/boot、/usr、/home、Swap等分区，这里按照最简原则以及之前的安装习惯，只创建/boot以及根目录/两个分区，格式都为ext4，下文会对分区以及更简安装做出讨论。

其中，/boot分区最好分空间1GB甚至2GB以上，因为/boot分区也用来存放系统内核，一个版本的内核大约几十到百MB不等，在内核更新时，系统会保留2-3个旧版本的内核，这样以前的教程说只分200MB就完全不够了。

我是选择了2G的boot分区空间。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_from_2019-10-05_11-09-30.png)



剩下全部分给根目录/，而不再需要再Swap分区。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_from_2019-10-05_11-11-05.png)

接下来，最重要的一步，在最下面“安装启动引导器的设备”选为/boot分区对应的设备（此处为/dev/sda5），此步骤会将Ubuntu的grub2引导程序安装到/boot分区，而不会默认覆盖Windows的引导，也就达成了我们“两系统互不影响”的目的。

注意选择的时候要再三确认选择无误，否则会导致数据丢失电脑无法启动等问题！

注意选择的时候要再三确认选择无误，否则会导致数据丢失电脑无法启动等问题！

注意选择的时候要再三确认选择无误，否则会导致数据丢失电脑无法启动等问题！

接下来，就按提示确定-下一步-选定时区等待即可，值得注意的是，安装最后一步需要设置姓名、密码等，这里密码需要设置，但请不要设置过长过复杂的密码，在之后的使用中，会经常在终端需要输入密码以获取管理员权限，看有的同学就在那不断的输入自己长长的密码(还容易输错)

（我可是被这密码折磨的不行啊，还要至少8位，装个软件啥的都要用这个密码）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_from_2019-10-05_19-17-16.png)

### 重启电脑

这个时候重启完应该会自动启动ubuntu了，如果不是的话，可以开机的时候进系统bios调整一下启动顺序，把ubuntu放到第一位

这里需要注意的是，有时候Ubuntu 安装完会出现两个名字一样的启动项，若其中一个无法正常启动系统，则选择另一个就是了，如果常用Ubuntu就将Ubuntu的启动项移动到在第一顺位即可。

然后就可以正常进入grub引导程序，引导启动系统啦～
一般正常的话，grub会自动发现电脑中安装的Windows系统，所以在日常使用中也可以用grub来选择引导来启动Windows。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Xnip2019-10-21_22-25-58.jpg)

## 如何删除Ubuntu

直接进入Windows系统，和之前给Ubuntu预留空间时一样(桌面 计算机 右键-管理-磁盘管理)，然后删除Ubuntu对应的分区即可，因为之前的安装过程中，Windows的引导得以保留，所以此时完全不影响原来的Windows系统的使用。

但删除分区之后，可能在BIOS会残留Ubuntu启动项，这是因为Ubuntu的引导信息也会写在隐藏的Windows的EFI分区中，一般来说，只要将Windows启动项选为第一顺位，残留的Ubuntu启动项不管也无妨。但如果强迫症一些，一定要删除Ubuntu启动项，可以参考[此篇教程](https://blog.csdn.net/Spacegene/article/details/86659349)。

## 关于更简安装以及分区的讨论

首先，这里有一篇关于Ubuntu各分区作用的汇总：[Ubuntu分区方法及各个分区的作用](https://wenku.baidu.com/view/375355a1f705cc17552709e5.html)，私以为写的比较简单易懂。

Ubuntu等Linux都是树状文件系统，一个根目录/下面有各种“子目录”用来存放应用程序、配置、用户文件等等，一般来说，对于这些子目录的分区是有在重装时保留程序、文件、配置以及其它相对高端“玩法”的需求。

对于一般的普通用户甚至小白，这类分区必要性并不大，反而会因分区造成空间浪费（分区1剩2GB，分区2胜2GB，此时有一个3GB的文件就存不下了）。

如果系统真出了无法解决的问题，对于普通小白来说，全新重装一般都是最优解决方法，因为即使通过分区在重装是保留了程序、配置等，重装完系统之后也常常会有各种问题，折腾的时间用来全新配置一遍也许会更加划算。

同时，Swap交换空间也逐渐退出历史舞台，其作用相当于虚拟内存，当内存空间不够时，系统会把部分内存文件存储至此，从17.04版本开始，Ubuntu已经不再默认推荐创建Swap分区，而是像Windows一样创建虚拟内存文件，按需自动创建并改变大小。

不过无论装系统分区也好不分区也罢，了解相关的知识都是对于学习Linux大有裨益的。

## 双系统时间问题


安装完双系统，从Ubuntu切换到Windows，或者反过来，会发现系统时间不对了，总会差8个小时，这是因为，Windows会把本地时区(UTC+8)的时间直接写在BIOS存储中，而Ubuntu会将格林尼治时间(UTC+0)存在BIOS中，然后Ubuntu会根据时区设置，算出本地时间显示出来，所以系统切换会导致进入到新系统时时间会发生错误。

在16.04之后，Ubuntu的系统时间是交由timedatectl来管理，在终端输入 `timedatectl`，可以看到，`UTC=No`，我们输入`timedatectl set-local-rtc 1 --adjust-system-clock`，改变UTC设置，并同步调整系统时间即可。

或者直接进系统设置手动调整时间

# 更新系统

先连接上网，然后打开终端

```
apt-get update
apt-get upgrade
```

更新安装包相关命令

# 软件

## 安装QQ微信

项目地址：

https://github.com/zq1997/deepin-wine

用deepin-wine环境模拟windows

### 添加仓库

首次使用时，你需要运行如下一条命令将移植仓库添加到系统中。

```
wget -O- https://deepin-wine.i-m.dev/setup.sh | sh
```

### 安装微信和QQ/TIM

警告：这时候不要急着去下载那些.deb，都是很久没更新的坑了。
我们单独安装微信和qq

```
# 输入
wget -qO- https://deepin-wine.i-m.dev/setup.sh | sudo sh
# 安装微信
sudo apt-get install deepin.com.wechat
# QQ
sudo apt-get install deepin.com.qq.im
# TIM
sudo apt-get install deepin.com.qq.office
```

更多包

|应用|包名|
|:----|:----|
|微信|com.qq.weixin.deepin|
|QQ|com.qq.im.deepin|
|TIM|com.qq.office.deepin|
|钉钉|com.dingtalk.deepin|
|阿里旺旺|com.taobao.wangwang.deepin|
|QQ音乐|com.qq.music.deepin|
|QQ视频|com.qq.video.deepin|
|爱奇艺|com.iqiyi.deepin|

### 安装QQ关于python-gi报错

详见issue：

https://github.com/zq1997/deepin-wine/issues/181

解决方法就是

```
apt install python2 libffi7
wget -c http://mirrors.kernel.org/ubuntu/pool/universe/p/pygobject/python-gi_3.36.0-1_amd64.deb -O /tmp/python-gi.deb
dpkg -i /tmp/python-gi.deb
```


## 安装微信方法二

这个方法在国外时候可以这么装，国内速度太慢

```
sudo apt install snapd snapd-xdg-open
sudo snap install electronic-wechat
```

## 剪贴板软件GPaste

项目仓库：

https://github.com/Keruspe/GPaste

通过gnome安装

```
sudo apt install gnome-shell-extensions-gpaste gpaste
```

安装完成按`Alt + F2`，输入一个字母`r`然后回车，就重启Gnome Shell了，然后应该就能看见GPaste在应用列表了，如果还没有就去extension里面把GPaste打开。

## 截图软件Flameshot

一个功能强大的全端截图软件

github项目地址：

https://github.com/flameshot-org/flameshot

安装

```
apt install flameshot
```

替换系统默认的print截图快捷键教程： https://github.com/flameshot-org/flameshot#on-ubuntu-tested-on-1804-2004

## Chrome卡顿

用不习惯火狐然后装了个chrome，发现卡的要死要死的

解决方法就是设置里关闭GPU硬件加速

主要原因就是ubuntu和nvidia的显卡兼容性十分不好，容易有各种问题。

## VSCode卡顿

同样也要把设置里的GPU加速关闭，然后

```
cd /usr/share/applications
sudo vim code.desktop
```

在打开的文件中两处地方加入 `--disable-gpu`，如下：

```
[Desktop Entry]
Name=Visual Studio Code
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/share/code/code --disable-gpu --unity-launch %F
Icon=code
Type=Application
StartupNotify=true
StartupWMClass=Code
Categories=Utility;TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;
Actions=new-empty-window;
Keywords=vscode;

X-Desktop-File-Install-Version=0.22

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/share/code/code --disable-gpu --new-window %F
Icon=code
```

## 软件设置开机自启动

按下super键（windows键）搜索startup打开自启动管理软件

https://gaoliming123.github.io/2017/09/17/boot/

一般默认安装的软件都在 `/usr/share/application`目录下

GPaste在 `/usr/share/applications/org.gnome.GPaste.Ui.desktop`

QQ在 `/opt/apps/com.qq.im.deepin/entries/applications/com.qq.im.deepin.desktop`

Wechat在 `/opt/apps/com.qq.weixin.deepin/entries/applications/com.qq.weixin.deepin.desktop`

## 添加中文输入法

系统有个自带的Chinese，但是里面其实没有输入法，要手动下载

```
sudo apt-get install ibus-pinyin
# 或者
sudo apt-get install ibus-sunpinyin
ibus restart
```

System Settings → Language Support → Chinese (Pinyin)

https://askubuntu.com/questions/59356/how-do-i-get-chinese-input-to-work

## 安装谷歌拼音输入法

https://blog.csdn.net/kan2016/article/details/105735645


> 转载编辑自
> https://www.cnblogs.com/masbay/p/10745170.html
> https://regulus.cc/2019/10/05/Windows10+Ubuntu18.04%E5%8F%8C%E7%B3%BB%E7%BB%9F%E7%AE%80%E5%8D%95%E5%AE%89%E8%A3%85%E6%8C%87%E5%8C%97
> https://blog.csdn.net/xinjieyuan/article/details/104640921
> http://www.ddkiss.com/archives/116.html
> 图片源自 https://regulus.cc/2019/10/05/Windows10+Ubuntu18.04%E5%8F%8C%E7%B3%BB%E7%BB%9F%E7%AE%80%E5%8D%95%E5%AE%89%E8%A3%85%E6%8C%87%E5%8C%97