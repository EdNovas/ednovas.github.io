---
title: 文章内容加密
tags: [Hexo,魔改,butterfly,主题,加密]
id: '1184'
categories:
  - - 建站
date: 2021-02-01 20:15:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/pgp-encryption-hero.png
#top: true
#highlight_shrink: true
---

## 安装
网站根目录安装

GitHub项目地址

https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md

```
npm install --save hexo-blog-encrypt
```

## 配置

config.yml中站点配置
```
encrypt:
  enable: true
  default_abstract: 这是一篇加密文章，内容可能是个人情感宣泄或者收费技术。如果你确实想看，请与我联系。
  default_message: 输入密码，查看文章。
```

## 文章加密

个别文章特殊处理

```
---
title: 文章加密
date: 2019-01-04T22:20:13.000Z
category: 教程
tags:
  - 博客
  - Hexo
keywords: 博客文章密码
password: TloveY
abstract: 密码：TloveY
message: 输入密码，查看文章
---
```