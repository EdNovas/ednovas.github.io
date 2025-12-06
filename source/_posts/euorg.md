---
title: 申请eu.org免费域名
tags: [域名]
categories:
  - - 建站
date: 2021-12-17 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/shutterstock_781493554.png
---

> 转载自 小御坂的破站 https://blog.misaka.rest/202110/55.html

## 准备材料

一个邮箱（最好是gmail、outlook之类的常用邮箱）

## 申请流程

打开[注册页面](https://nic.eu.org/arf/en/login/) https://nic.eu.org/arf/en/login/ ，点击Register

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021048.png)

填入个人信息，输入邮箱密码，同意协议，点击Create

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021322.png)

成功创建账号

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021420.png)

在你的邮箱应该会有类似这样的邮件，点击里面的链接激活账号

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021545.png)

输入你在eu.org的用户代码（类似于：什么什么-Free），输入密码，点击Login登录

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021704.png)

点击New Domain创建域名

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021755.png)

输入待申请的域名，输入dns记录，点击Submit

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010021909.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022403.png)


## 域名添加到CF的小提示

登录CF账号，进入已有的域名，复制下方的两个dns服务器即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022158.png)

出现Error时，请点击浏览器的返回按钮回到注册页面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022231.png)

选择第一项server names，点击Submit

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022345.png)

等待审核通过

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022421.png)

审核通过之后，你的面板上应会有审核好的域名

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022602.png)

点击需要管理的域名

点击Nameservers

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022755.png)

检查自己的dns是否设置正确


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022918.png)

打开CF，新增网页

输入域名，点击Add site

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010023019.png)

选择套餐，点击Continue

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010023051.png)

设置dns解析，点击Continue

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010023217.png)

添加完成

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010023258.png)

## 问题

1. 为什么我在中国大陆地区无法使用eu.org域名？

因为不可描述的原因，eu.org域名在国内是被强行http重置的状态，只需要使用https即可

2. 为什么我无法在CF添加域名，提示域名未注册

多按几次Add site按钮即可或者多等待一段时间

3. 为什么提交了注册好久还没有消息？

多等待一段时间再看吧，手动审核的，一个月内都正常

4. 提示24error，无法解析cloudflare的ns记录？

先在 [TopDN](https://topdn.net/) 注册，把你的域名解析到TopDN。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2021-11-14_12-10-31.jpg)

回到eu.org域名注册页面，在Nameserver按照如下图填写TopDN的ns记录，选择第一项servername，点击submit。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2021-11-14_12-10-45.jpg)

看到这个done就是已经提交申请，需要等待一段时间（短则几小时，长则几个月）等待审核通过，通过或者不通过的情况，官方都会发邮件给你，注意查收邮件。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211010022421.png)