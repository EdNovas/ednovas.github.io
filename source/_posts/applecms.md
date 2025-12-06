---
title: 搭建苹果CMS视频站
tags: 
  - CMS
  - 视频站
  - 视频
  - 搭建
  - VPS
categories:
  - VPS
date: 2021-06-11 20:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Videos-icon-02.jpg
---

## 准备工作

VPS一个，最好高性能的，别用甲骨文！别用甲骨文！别用甲骨文！（被封了两个账号的痛）

首先安装aapanel或宝塔，ubuntu的aapanel（aapanel是宝塔国际版，只有英文界面）一键脚本：

```
wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh
```

安装完成后复制黏贴面板地址，输入账号密码进入

安装LNMP，使用极速安装，PHP请选择7.0版本+，一般我比较喜欢选7.2和7.4

静等一段比较长的时间，大概十到二十分钟，安装速度根据机器性能有所变化

## 解析

安装完成后解析域名到该VPS的ip地址，记得要关掉小云朵cdn方便申请SSL证书

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210611212443.png)

如图，申请ssl，自动https跳转，添加一个数据库，要自己记住数据库名和密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-26-46.png)


## 下载

GitHub下载地址：https://github.com/magicblack/maccms10/releases

官网下载地址：https://www.maccms.cn/down.html

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-29-24.png)

可以直接使用remote download远程下载

v2020.1000.1075版本：

https://github.com/magicblack/maccms10/archive/refs/tags/v2020.1000.1075.tar.gz

下载完成后解压，然后进入解压后的文件夹，剪切里面的内容，黏贴到网站根目录，即如下图所示


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-31-34.png)


## 安装

然后访问解析的网址

比如我的就是 https://movies.ednovas.xyz ，他会自动跳转到 https://movies.ednovas.xyz/install.php 运行install.php脚本进行安装初始化

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-33-18.png)

如上图所示，他fileinfo标红了，这就证明我们需要去安装一下

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-34-48.png)

安装很快，性能好的机器几十秒钟就ok了，安装完成后reload重载一下php或者restart重启一下（一般重载即可）

然后刷新网页，就会发现标红消失了，点击下一步

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-38-38.png)

然后链接数据库，服务器地址和端口不用更改，数据库账号和名称是相同的，前缀不用管，可以点击测试数据库链接查看是否填写正确。管理员账号很好理解，极其建议勾选初始化数据

确认无误立即执行安装

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-40-28.png)

程序很贴心的让我们把后台从admin.php改为别的

这个自己上宝塔网址根目录，找到admin.php文件重命名为 xxx.php 即可（改为你自己相用的随意字符）

## 开始采集

进入后台 https://movies.ednovas.xyz/xxx.php 

自己开始畅玩吧，调整参数啥的，他写的都挺明了，基本看看就能知道这个功能是干啥的了，就不多做叙述了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-11_21-45-58.png)

视频抓取主要是用采集，采集前记得先看看分类是否都绑定了，还有播放器是否正常再采集

