---
title: NAT VPS 使用说明
tags: 
  - nat
  - VPS
  - 搭建
categories:
  - VPS
date: 2021-05-09 15:21:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/nat.jpg
---

我发现卖nat服务器的老板不少，但是网上你却根本找不到什么使用教程，所以此文就是为了nat使用说明而写的

> 以下转载自 iLemonrain's Blog https://blog.ilemonrain.com/linux/nat-server-tutorial.html

## 服务器的类别

在开始本篇教程前，我们先来了解下现在所提供的可供租赁的服务器的种类。

### (1) 独立服务器

独立服务器（又叫母鸡，独服，杜甫），是指服务商提供给你一整台物理服务器的资源供你使用，整台服务器上的资源全部供你使用，不会有任何人跟你抢占服务器资源。

* 优点：

服务器性能强大，资源充足

* 缺点：

价格过于昂贵 （往往性能不错的杜甫必定3XX软妹币起步，更高性能的经常出现四位数）

### (2) 虚拟服务器 (VPS)

虚拟服务器（又叫VPS、小鸡），是指服务商通过虚拟化技术（比如KVM、OpenVZ、Xen等），分割一整台（或者多台）物理服务器的资源，取其中的一部分资源供你使用。相对于独立服务器来讲价格要低廉不少，而且配置可以自己选择，相对灵活。

* 优点：

资源可以灵活分配，按需选择配置

* 缺点：

宿主物理服务器（母鸡）阵亡，当前服务器下所有的虚拟机（小鸡）全部跟着阵亡（极少发生，但也分商家）
部分服务商会选择超售，或者你遇到一个恶意长时间占用资源的邻居，导致实际性能不如标称配置性能，甚至发生宕机

### (3) 基于NAT的虚拟服务器 (NAT-VPS)

基于NAT的虚拟服务器（又叫NAT鸡），是在虚拟服务器（VPS）的基础上，通过共享IP的方式，为这个IP下的服务器提供外网访问能力。

* 优点：

相对于虚拟服务器（VPS）来讲，价格更加低廉（因为几乎没有IP的费用）

* 缺点：

同上，如果你碰到一个折腾的邻居（尤其是拿到服务器就装PPTP等VPN的），会导致服务器IP被墙
服务器IP一旦被墙，会导致同IP下所有的服务器全部无法连接（有DDNS的话这点还能好点）
只能使用固定的端口访问服务器，而且无法用来建站（强行信仰建站当我没说）

> 以上转载自 iLemonrain's Blog https://blog.ilemonrain.com/linux/nat-server-tutorial.html

## 购买nat vps

你既然看到这篇文章了，那你肯定也已经买了个nat vps，但是不知道怎么使用了。这里也就不推荐店铺了，有打广告的嫌疑哈哈哈

一般nat vps都会有个面板，这里以两种不同的nat vps为例（尽管区别不大）

一个是需要自己创建端口映射的，另一个是已经创建好了端口映射的

下面先讲创建端口映射的

## 需要端口映射

### 创建22端口映射

一般面板都有个 nat vps 端口映射管理页面，比如下图，不同面板有所不通，但大同小异

点击添加规则，先要映射一个22端口来连接ssh用，这是必须要的

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-36-38.png)

内网端口填写22，公网端口随意填写一个 `大于10000` 的端口，并且没有被占用的（如果被占用了应该会有提示），可以直接忽略65432端口，这个估计肯定有人占了，协议使用TCP

（当然，有可能店家直接默认就给分配了一个22端口的映射，那么我们就不再需要创建这个22端口映射了）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-40-45.png)

### 连接SSH

然后使用你习惯的ssh连接到VPS

root密码会在nat vps控制面板页面有的，

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-46-09.png)

这里注意以下，端口需要填写刚刚映射了的外网端口，比如我的就是60032

主机这里复制黏贴公网ip，然后点击连接

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-44-26.png)

### 创建更多端口映射

然后再创建更多的端口映射，来搭建协议

操作和映射22端口类似，不过这里强烈推荐内网外网端口一致，以防配置出现混淆！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-48-23.png)

如果需要 TCP 和 UDP服务，那么同端口再映射一个UDP协议即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-50-08.png)

至少映射两个以上端口，一个用来访问v2-ui面板，一个用来搭建协议

一般nat开放10-20个端口，如果你有需要你可以全弄满，但也没有必要

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-51-40.png)

## 无需端口映射

比如这个老板已经搞好端口映射了，开放了10个端口，起始端口从10100到10109，SSH连接端口是61010

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-54-17.png)

那么我们就用他给我们的信息直接SSH连接即可

SSH内主机填写`IP解析域名`或`ip`，SSH端口是61010，root和root密码照填即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_16-57-07.png)

然后直接连接即可

## IP被墙

当ip被墙了怎么办，如果店家提供替换那自然最好了（大部分ip被墙也无所谓），如果没有就要用中转去拉了，但是问题是ip被墙了以后ssh也登录不上怎么办呢

### SSH设置代理

Finalshell在添加了ssh信息后连接不上，然后打开这里的代理服务器设置，添加一个代理，以[`Clash for Windows`](/2020/11/29/clash-windows)为例，就是本地`127.0.0.1`，和端口`7890`，并选中这个代理，再连接即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-01-29.png)

### Clash开tun/tap

[Clash开启tun](/2021/02/15/clashtun/)

## Centos关闭防火墙

centos需要先关闭防火墙！

centos需要先关闭防火墙！

centos需要先关闭防火墙！

（当然有的默认是关着的）

所以别再问店家为啥ping的通但是连不上，v2-ui面板打不开了

查看防火墙状态

```
firewall-cmd --state
```

停止firewall

```
systemctl stop firewalld.service
```

禁止firewall开机启动

```
systemctl disable firewalld.service 
```

## 安装 v2-ui

### 更改密码

如果你愿意你可以给nat vps更改个root密码（下次连接就需要重新输入更改后的密码了）

```
passwd
```

然后输入两遍你想改的密码，注意密码是不会显示的，输入完了直接enter回车即可


### 安装v2-ui

GitHub地址：https://github.com/sprov065/v2-ui

一键脚本：

```
bash <(curl -Ls https://blog.sprov.xyz/v2-ui.sh)
```

安装完成后，需要更改面板端口，默认端口是65432，如果你映射了这个端口，那就直接ip+65432登录即可。但如果没有（大概率是没有的），那么还需要更改登录端口

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-14-41.png)

输入v2-ui进入管理菜单

```
v2-ui
```

输入6并回车

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-16-24.png)

输入你映射了的端口，比如刚刚映射了的60033端口，然后回车

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-17-07.png)

`y` 确定，最后回车回到脚本管理菜单即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-17-59.png)

## 搭建协议

然后浏览器输入ip（或解析了的域名）+ 更改了的端口进入v2-ui管理页面

比如我这里就是 

conxxxxxx.xxxxxx.xxx:60033

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-25-52.png)

默认账户密码都是admin

点击登录进入面板

先去左侧面板设置，更改一下登录账户和密码，点击更新

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-27-02.png)

然后去账号页面，新加一个节点，端口填写之前映射了的另一个端口，比如我这就是60034端口

如果是店家已经映射好了的端口，从端口范围内随便选个未被占用的端口即可

协议建议 vmess+ws 或者 vmess+ws+tls（你要是有能力给非443端口搞证书估计你就不会看这篇文章了吧哈哈哈）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-29-39.png)

还是要以店家要求为准，一般购买须知等处会写明，如下图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-32-31.png)

## 导入客户端

创建好协议以后，点击复制链接，或者直接扫描二维码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-33-45.png)

在v2rayn或别的客户端中黏贴节点，这样一个 nat vps 的节点就搭建完成了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-35-10.png)

## 开启bbr加速

nat vps只要能开启tun/tap还是可以使用bbr加速的哦（有的不支持的就算了）

### 开启tun/tap

默认都是关闭tun/tap的，所以我们需要进控制面板打开

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-39-16.png)

因为没有tls所以有这个危险提示很正常，我们无视他进入即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-40-42.png)

输入提供的控制面板账户和密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-41-58.png)

然后找到tun/tap设置，选择 on 打开tun/tap

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-42-41.png)

会有如下图的提示，有可能会重启机器，我们选择 是/Yes 即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-43-10.png

稍等片刻等待机器重启，点击右上角的refresh刷新，会发现status变成红色的offline，一会重启结束又会回到绿色的online

### 安装bbr

开启tun/tap后我们用ssh重新连接上

然后安装bbr，我们使用BBRPLUS lkl-haproxy一键脚本开启

#### 脚本说明

lkl-linux+haproxy hack 版本 bbrplus，在 OpenVZ 工作良好。

#### 注意

需要开启 TUN/TAP 和至少 256M 空闲内存。

#### 项目地址

GitHub项目地址：https://github.com/mzz2017/lkl-haproxy#bbrplus-lkl-haproxy

#### 一键安装

一键安装脚本（支持 Alpine / Debian / Ubuntu / CentOS）：

```
wget --no-cache -O lkl-haproxy.sh https://github.com/mzz2017/lkl-haproxy/raw/master/lkl-haproxy.sh && bash lkl-haproxy.sh
```

输入1并回车

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-48-36.png)

正常情况下开启了tun/tap应该会显示 `File descriptor in bad state` 或者 `文件描述符处于错误状态`，如果显示 未找到文件 或类似语句说明tun/tap未开启

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-48-56.png)

这里选择单个端口或者端口段都可以，我就只有一个60034端口节点，所以我选择1单个端口

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-50-19.png)

输入你需要加速的端口号并回车，比如 60034

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-51-21.png)

等待一会开启完毕

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-52-04.png)

可以使用脚本第二项检测是否开启成功

```
wget --no-cache -O lkl-haproxy.sh https://github.com/mzz2017/lkl-haproxy/raw/master/lkl-haproxy.sh && bash lkl-haproxy.sh
```

这时候输入2并回车

如图，说明bbr已经正常开启，芜湖起飞！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-09_17-52-42.png)