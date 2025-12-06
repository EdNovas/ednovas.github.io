---
title: 漫城CMS漫画站
tags: 
  - CMS
  - 漫画站
  - 漫画
  - 搭建
  - VPS
categories:
  - 建站
date: 2021-07-03 20:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Comics-Seven-Stories.jpg
---

## MCCMS

小浣熊是个很好的漫画CMS,但是采集比较麻烦

那么,漫城CMS就是一个很好的选择

官网: https://www.mccms.cn/

下载直链: http://www.chshcms.net/bbs/show/1551.html

## 搭建

新建网站,https重定向,ssl证书

复制下载的zip压缩包到网站根目录,然后解压

将解压后的文件夹内的全部文件剪切到根目录下

将`说明文档`中的`伪静态规则`文件全扔到根目录内替换

(由于编码问题,`说明文档`可能会显示成如 `╦╡├ў╬─╡╡` 的乱码,`伪静态规则`显示为`╬▒╛▓╠м╣ц╘Є`)

## 数据库

新建数据库,记住用户名密码库名

访问域名,填入对应数据库信息,前缀不变默认`mc_`即可,PHP5.6以上数据库类型选择`Mysqli`

后台管理员信息自己填入,其中认证码就是相当于第二重密码

## 采集

自带的采集解析是要钱的,而且不便宜,可以选择大佬提供的免费解析地址

采集管理 -> 漫画采集 -> 采集配置 -> 解析地址 改成如下

http://45.138.68.219//api/resources/parsing_comic

然后更新配置信息

然后资源分类内绑定分类并采集即可

额外采集站点:

复制下方乱码到txt文件中,然后在资源采集界面导入该txt文件即可

```
eyJ6aXl1YW4iOnsibmFtZSI6Ilx1OGQ0NFx1NmU5MFx1N2FkOSIsInVybCI6Imh0dHA6XC9cLzQ1LjEzOC42OC4yMTlcL2FwaVwvcmVzb3VyY2VzXC9jb21pYyIsImp4dXJsIjoiaHR0cDpcL1wvNDUuMTM4LjY4LjIxOVwvXC9hcGlcL3Jlc291cmNlc1wvcGFyc2luZ19jb21pYyIsInRva2VuIjoicXVuNTk1NDEzMTQ3IiwienQiOjAsInRleHQiOiJcL1wvXHU3OWQ4XHU5NGE1XHU0ZTBkXHU1M2VmXHU1MjIwIn19
```

## DEMO

https://comics.ednovas.xyz
