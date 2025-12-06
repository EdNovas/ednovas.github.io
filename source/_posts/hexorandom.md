---
title: Hexo添加随机文章功能
tags: 
  - hexo
  - random
  - 随机
  - 建站
  - 网站
categories:
  - 建站
date: 2021-07-16 18:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/hexo1.png
---

## 插件

hexo自带有这个插件`hexo-generator-random`

GitHub项目地址：https://github.com/Drew233/hexo-generator-random

## 安装

npm先需要安装依赖

```
npm install object-assign
```

安装插件

```
npm install hexo-generator-random --save
```

然后再照常`hexo d -g`，public下就会有个`random.html`的文件了

菜单栏可以添加上该地址

menu:
    Random | 随机文章： /random.html || fas fa-random


## 效果

https://ednovas.xyz/random.html