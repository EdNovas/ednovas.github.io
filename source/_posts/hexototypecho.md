---
title: Hexo 迁移到 Typecho
tags: [网站,VPS,博客,迁移,hexo,typecho]
id: '1212'
categories:
  - - 建站
date: 2021-02-17 21:16:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3658665563.jpg
# highlight_shrink: true
---

记这次不容易的搬迁之旅

从hexo搬运到typecho的博客我看了很多，其实并没有很多。。。我只找到了两篇而已，其中一个使用python，另一个是用php，但是我都失败了。。。

那么我用的笨办法，网上hexo迁移到wordpress的文章很多，不错。从wordpress迁移到typecho的文章也很多，不错。那么我就拿wordpress来做个过度呗

先用hexo插件

安装 hexo-generator-feed 插件：`npm install hexo-generator-feed --save`

在 _config.yml 文件中添加内容：

```
feed:
  type: rss2
  path: rss2.xml
  limit: false
  hub:
```

重启 Hexo server，访问 localhost/rss2.xml，保存该文件或者直接 hexo g，然后去 public 目录找这个文件。

然后服务器再安装wordpress

WordPress 安装rss导入插件

导入rss2.xml

这里大概率会遇到一个报错，解决也很简单，把如图位置的这行代码注释掉就好了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/02-17_20-47-23.png)

然后就可以全部导入成功了

在typecho中添加插件 `wordpress-to-typecho`

[点击直接下载](https://boke112.com/goto/aHR0cDovL2RvY3MudHlwZWNoby5vcmcvcGx1Z2lucy93b3JkcHJlc3MtdG8tdHlwZWNobw==)

然后直接上传并解压到 /usr/plugins/文件夹下。

进入后台启用该插件，通过设置选项将原来导入的WordPress的数据库的相关信息填入进去。

这样就ok了，需要注意永久链接的设置问题