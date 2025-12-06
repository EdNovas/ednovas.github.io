---
title: 搭建小浣熊CMS漫画站
tags: 
  - CMS
  - 漫画站
  - 漫画
  - 搭建
  - VPS
categories:
  - 建站
date: 2021-07-03 18:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Step-5.png
---

## 小浣熊漫画CMS

GitHub: https://github.com/hiliqi/xiaohuanxiong

官方博客: https://www.xiaohuanxiong.net/

文档地址: https://www.kancloud.cn/hiliqi/raccoon5/1921259

QQ群：780362399

## 安装

新建一个网站,开启https强跳和证书

在网站根目录下,需要先删除全部文件,特别是`.user.ini`

```
git clone https://github.com/hiliqi/xiaohuanxiong.git
chown -R www:www ./ 
```

php 拓展中安装 `redis`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-03_20-22-12.png)

运行目录改成`/public`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-03_20-31-28.png)

新建数据库

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-03_20-35-25.png)

访问域名,填入对应数据库信息,其中前缀用默认`tp_`即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-03_20-36-07.png)

设置管理员账户

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-03_20-36-57.png)

如果要开启404,而不让cms报错信息显示出来,需要修改config/app.php文件,在中间偏下的位置

去掉第二排的//即可

```
'exception_tmpl'         => Env::get('app_path') . 'index/view/pub/404.html',
'exception_tmpl'         => Env::get('think_path') . 'tpl/think_exception.tpl',
```

管理员登陆地址 https://你的域名/admin.php/login/login.html

## 采集

没有自带采集,需要额外引用

可以用火车头采集插件

官网: http://www.locoy.com/

不过分为免费版和收费版，但免费版由于某些功能限制，没法满足图片本地化需求，所以暂时不适用，如果你有钱可以买一个收费版的，不过没钱也没事，可以直接使用火车头破解版

火车头高铁采集器v9.8.0.1227旗舰破解自动授权版 https://www.ynceyi.com/d/file/wordpress/8bb80510d9ac88ae6125bb9f107514b6.zip

EdNovas网盘分流 https://ednovas.cloud/s/qQeCl

采集参数

https://www.kancloud.cn/hiliqi/raccoon5/1921263

参考视频教程

https://www.bilibili.com/video/BV1VZ4y1M7dL/

(采集过程很复杂,我也懒得采集了嘿嘿嘿)

> 参考自 Rat's https://www.moerats.com/archives/904/