---
title: 网站托管到Vercel
tags: [网站,GitHub,Vercel,托管,域名,博客]
id: '1158'
categories:
  - - 建站
date: 2021-01-21 10:59:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1587482538420.webp
#highlight_shrink: true
---

## 一句话简介

Vercel 提供免费的 serverless 和全局 CDN 服务，只需要通过几步简单的注册以及导入仓库即可完成部署，支持根据 username.github.io 的 master 分支是否变动来启动自动部署。

## 登录账号和部署

可以直接用GitHub登录。如果出现以下报错说明是因为 Vercel 不支持大部分国内邮箱，可以将 github 账号主邮箱改为 Gmail 邮箱。

![](https://cdn.jsdelivr.net/gh/Akilarlxh/Picgo@v2.3/smms/MBux7INqjZQigTW.png)

登陆账号以后可以直接选择读取GitHub的仓库，然后导入你网站所在的仓库。步骤简单不再放图

到了这一步，是创建一个Vercel的仓库用于托管。project name项目名称自定，建后不支持修改。直接访问域名会变成这个。下面选项全部默认。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-21_10-43-06.webp)

## 更换域名

在project->settings->domains中自定义域名

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-21_10-44-12.webp)


输入你想要更换的域名，比如freenom的免费域名，然后将这个域名A记录解析到这个IP值（每个人的IP值好像各不相同）。
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-21_10-45-29.webp)


然后打开Manage DNS添加
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-21_10-53-58.webp)


个人更建议还是直接用Vercel的Nameserver而不是解析A记录。这样freenom容易出毛病。
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-21_10-51-53.webp)

>转载参考自 Akilar https://akilar.top/posts/812734f8/