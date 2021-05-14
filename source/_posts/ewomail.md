---
title: ewomail搭建自定义域名邮箱
tags: [邮箱,email,ewomail,vps]
id: '1203'
categories:
  - - VPS
date: 2021-02-08 13:23:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/automation-inspiration-email-00-hero.png
# highlight_shrink: true
---

官方说明

http://doc.ewomail.com/docs/ewomail/jianjie

设置主机名

```
#mail.symail.club 换成 mail.你的域名 
hostnamectl set-hostname mail.symail.club
#修改hosts
vi /etc/hosts
#把symail.club 全换成你的域名
```

![](https://img-blog.csdnimg.cn/20190307213035307.jpg)

域名解析

http://doc.ewomail.com/docs/ewomail/domain_dns