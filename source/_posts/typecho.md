---
title: typecho搭建个人博客
tags: 
  - 博客
  - typecho
  - 搭建
  - VPS
categories:
  - 建站
date: 2021-07-01 10:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3907993163.png
---

## Typecho

项目源码: https://github.com/typecho/typecho

官网: https://typecho.org/

下载链接: https://typecho.org/download

下载正式版即可

下载直链(1.1版本): https://typecho.org/downloads/1.1-17.10.30-release.tar.gz

## 搭建

我这里用虚拟主机搭建的

先用ftp连接到主机,然后拖入解压后的下载的程序(我使用的是FileZilla)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-01_10-17-18.png)

由于文件数量多,要上传一会儿了.如果你的虚拟主机支持在线解压那是最好不过

## 主题

谷歌一下就能找到很多typehco的主题,自己去下载个,然后上传到typecho的 `usr/themes/` 目录下

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-01_10-32-52.png)

启用该主题

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-01_10-33-38.png)

然后就可以开始愉快的写博客啦!

## DEMO

https://love.ednovas.xyz

## Typecho支持Emoji表情

由于数据库默认用的都是utf8编码,而utf8编码是不支持emoji表情的,所以换成utf8mb4就可解决.

utf8mb4 是 utf-8 的超集,完全兼容 utf-8,修改后,不会影响现有数据, 保险起见还是备份一下比较好.

### 运行

进入网站数据库，直接运行下列语句：

```sql
alter table typecho_comments convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_contents convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_fields convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_metas convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_options convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_relationships convert to character set utf8mb4 collate utf8mb4_general_ci;
alter table typecho_users convert to character set utf8mb4 collate utf8mb4_general_ci;
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1622631440.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1622631451.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1622631456.png)

### 修改配置文件

网站根目录数据库配置文件config.inc.php，大约在60行

把`utf8`改成`utf8mb4`即可

```php
/** 定义数据库参数 */
$db = new Typecho_Db('Pdo_Mysql', 'typecho_');
$db->addServer(array (
  ...
  'charset' => 'utf8mb4',  // 将原来的utf8修改为 utf8mb4
  ...
), Typecho_Db::READ | Typecho_Db::WRITE);
Typecho_Db::set($db);
```

通过上面的方法即可完美使用emoji表情了

> emoji部分转载自₍₍..絕對ꦿ https://blog.1000g.cc/10.html