---
title: 搭建度盘链接解析网站
tags: [百度云盘,网盘,百度,解析,不限速,下载,网站]
id: '1178'
categories:
  - - 下载
  - - 建站
date: 2021-01-30 21:29:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/heybox/baidu/1200x630wa.webp
#top: true
#highlight_shrink: true
---

# GitHub开源项目地址：https://github.com/yuantuo666/baiduwp-php 感谢大佬开源！

## 安装宝塔

Centos安装命令：
```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

试验性Centos/Ubuntu/Debian安装命令 独立运行环境（py3.7） 可能存在少量兼容性问题 不断优化中  
```
curl -sSO http://download.bt.cn/install/install_panel.sh && bash install_panel.sh
```

Ubuntu/Deepin安装命令：
```
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

Debian安装命令：
```wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh```

Fedora安装命令:
```wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh```

安装网站配置相关（默认配置极速安装即可）

## 网站证书

宝塔网站内添加已经解析了的域名，并申请SSL证书，强制启用https

## 下载安装

https://github.com/yuantuo666/baiduwp-php

前往release复制安装包地址，宝塔网站目录下远程下载，并解压

或者在ssh中使用
```
git clone https://github.com/yuantuo666/baiduwp-php.git
```
下载源码到网站目录，并解压

## 获取SVIP cookies

登录百度网盘网页版，点击小锁，获取 cookie 中的 

baidu.com 下的 BDUSS 和 pan.baidu.com 下的 STOKEN 

获取域名错误可能导致账号无法正常登录

## 修改源码配置文件

config.php 中，按照要求把非SVIP账号的BDUSS和STOKEN输入进去（这里直接用SVIP账号也可以）

SVIP_BDUSS 复制上SVIP的BUDSS

可以设置解析密码

## 数据库​

最新两个版本支持导入sql数据库，用于方便添加更多SVIP账号并且自动检测限速。

## Demo（找网站的直接看这里）

请勿分享，还请自用

https://pan.ednovas.xyz/

## 下载

IDM 选项 -> 下载 -> 手动添加任务时使用的用户代理（UA） -> 填入 `LogSta­tis­tic`

[IDM使用指南](/2020/12/21/多线程下载、视频抓取软件idm)

推荐直接使用Aria2下载

[aria2使用指南](/2020/12/21/高速轻量下载器aria2)

>参考文章 https://github.com/yuantuo666/baiduwp-php https://betterman.xyz/455.html