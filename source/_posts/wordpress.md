---
title: Wordpress搭建个人博客
tags: [建站,wordpress,博客,vps]
id: '1240'
categories:
  - - 建站
date: 2021-04-27 10:17:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/wordpress-backup00.png
# highlight_shrink: true
---

## 简介

WordPress是一个以PHP和MySQL为平台的自由开源的博客软件和内容管理系统。WordPress具有插件架构和模板系统。截至2018年4月，排名前1000万的网站中超过30.6%使用WordPress。WordPress是最受欢迎的网站内容管理系统。全球有大约30%的网站都是使用WordPress架设网站的。

wordpress最大的优点就是相较于静态博客很好搭建，而且类似傻瓜式建站的方法，不需要懂任何代码都可以建站。

wordpress也有相应的比较明显的缺点，那就是动态网站占用很大，需要配置好的机器。由于功能过于强大，会产生诸如兼容性，插件等各种未知bug，好看的主题都需要付费等问题。

## 宝塔面板

为了方便起见，还是使用宝塔面板

首先用SSH连接上VPS

输入正确的IP,22端口，root和root密码，点击连接(ssh root@ipaddress -p 22)


然后安装宝塔面板


centos 安装

```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

ubuntu安装

```
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

debian安装

```
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh
```

这里选择Y，回车，同意安装

等待片刻安装完成

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-07.png)

安装完成以后会显示这样的，记住外网地址，内网地址和用户名和密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-06.png)

浏览器黏贴外网地址，输入username和密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-89.png)

协议拖到最下面，然后同意即可

photo_2021-04-27_09-06-12.jpg

进入面板进行安装


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-88.png)

极力推荐使用LNMP

php版本请选择7.0+版本，phpmyadmin可以选择5.0

如果机器配置较好，大于1H1G，可以选择最高版本


我一般选择7.2或者7.3


然后点击极速安装


根据不同机器不同配置，安装时长不一


1H1G机器大概安装需要10-15分钟

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-87.png)


安装过程中会发现必须要求验证宝塔账户


但是这样就必须要绑定身份证和手机号等，这不就暴露了搭建的~~黄色网站~~了吗


所以我们选择[绕过](2021/04/04/btpanel/)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-86.png)


建议在面板设置中修改你的账号和密码


面板端口想改就改，随便了，记得放行对应端口防火墙

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-85.png)


### 宝塔卸载命令

```
wget http://download.bt.cn/install/bt-uninstall.sh
sh bt-uninstall.sh
```

如果用不着宝塔需要卸载的话，注意卸载会影响站点，数据库和其他数据

## 解析域名

在安装的过程中，可以把我们想用的建站域名解析过来

我习惯用cloudflare，就添加一条A记录，比如wordpress.ednovas.xyz到你的vps的ip地址，注意先不要开启小云朵cdn

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-84.png)

## 安装Wordpress

进入宝塔的软件商店，一键部署下


第一个就是wordpress


点击右边的一键部署

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-83.png)


然后输入自己刚刚解析了的域名


比如我的就是wordpress.ednovas.xyz


然后数据库账户和密码一定要自己记得住的！

建议取个好记的就行

然后点击提交部署

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-82.png)

等待下载源代码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-81.png)


这样就是部署完成了

访问 http://wordpress.ednovas.xyz/index.php 应该就可以了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-05-80.png)


如果发现页面加载不出来，需要等待一会就可以了。或者直接后缀改成/wp-admin/setup-config.php

比如我的就是http://wordpress.ednovas.xyz/wp-admin/setup-config.php


进入这个页面


选择语言

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-74.png)

点击现在开始

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-73.png)


然后这里就需要填入我们刚刚创建的数据库了


数据库名和用户名是一样的，密码就是刚刚设置的密码，下面两项保持不变即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-72.png)

点击现在安装

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-71.png)


这里几个需要说明一下

站点标题随意，你想把你网址叫啥就叫啥，支持中文


用户名和密码就是你的wordpress面板管理员账户和密码


这个比较重用，妥善保管

电子邮箱，也请填写你的常用邮箱，wordpress会有一些比较重要的内容发送到你邮箱的，没有啥垃圾信息放心就好

最后一个选项，如果你希望你的站点被搜索引擎抓取，那么就不大勾，反之就打勾，这里的搜索引擎其实就基本上只有谷歌会主动抓取

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-70.png)


然后就进入了登录页面


输入上一步设置的管理员用户名和密码


点击登录

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-69.png)

你就进入了wordpress面板了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-68.png)

## Wordpress使用

由于宝塔是内置的wordpress，版本可能不是最新版本的


建议升级一下wordpress

点击升级

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-67.png)


左边点击首页，就进入了管理页面的主页

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-66.png)

默认主题一般都不大行，所以我们选择更换主题

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-65.png)

不用的主题建议直接删除即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-64.png)

左边切换到wordpress官方主题页面

选择一个主题安装并预览


如果你觉得这些主题不够或者不满意


还有更多付费主题和付费主题插件


比如elementor等

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-63.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-62.png)

更换主题


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-61.png)


左侧栏有很多的主题相关设置，每个主题不一样，这里就不多做介绍了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-60.png)

可以自定义侧边栏等

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-59.png)

设置完成后不要忘记点发布

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-58.png)

### 插件

wordpress最强大的就是他的插件功能


点击安装插件

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-57.png)


在这里可以搜索并且安装一些强大的插件

安装前建议先看插件评论和安装次数，不能排除垃圾插件和恶意插件的存在


比如安装elementor，搜索并且安装

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-56.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-55.png)


然后在插件中点击已安装的插件，启用

就会进入elementor的设置页面，当然也可以在左边栏直接找到

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-54.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-53.png)


还有几个重要的东西


### 文章

就是你写的每一篇小文章，wordpress会很人性化的添加新文章到你的主页下（每个主题不一样

### 页面

也类似文章，但是是更笼统的，比如关于我，联系我，我的简介这样的目录页面

### 评论

顾名思义就是评论管理

### 媒体

就是你上传的每一个图片，都会存到vps里面的，就会放在这个媒体库里面

请注意你的vps存储空间大小，这里更建议使用图床来插入图片

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-52.png)

### 用户

在用户这里你可以添加更多诸如管理员等人员

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-51.png)

### 设置

在设置界面你可以设置关于你的网站和wordpress的一些信息

这里建议一开始就设置好，就不要再动了，否则可能会出现bug

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-03-50.png)

## SSL证书

宝塔里面选择网站，网站设置

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-15-38.png)

等待申请完毕后点击强制https

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-15-40.png)

这样你的网站就会加上小锁了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-04-27_10-15-41.png)

## 完成

好了现在一个简单的个人博客就建好了

https://wordpress.ednovas.xyz/

现在访问博客网址就可以看到你的内容了