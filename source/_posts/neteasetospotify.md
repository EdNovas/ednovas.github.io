---
title: 从网易云音乐迁移歌单到Spotify
tags: [网易云,音乐,spotify,软件]
categories:
  - - 网站
  - - 杂
date: 2021-09-17 15:58:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1_c0FaLqy4tcO1uuYLP8AWBw.jpeg
# highlight_shrink: true
---

## 整体思路

网易云音乐导入到Spotify的整体思路就是

先将网易云音乐歌单导出为文字形式，如：

```
ot A Little Crush On You -- Wildflowers/Emmi
Au palais royal / les prostituées -- Various Artists
笑东风 -- 杨昊昆
末 -- AirJordy
V.A.-Komorebi（第五人格）（舒 remix） -- 舒
We All Lift Together -- Keith Power
Avicii (Tribute Mix) -- Starek
Karaoke 365-Somebody to you - The Vamps（合唱版）（猫的蒽 remix） -- 猫的蒽
Somebody To You -- The Vamps
No Hay Nadie Más -- Sebastián Yatra
```

这样的`歌名 -- 作者`的形式的txt文档，然后再导入到spotify中

## 导出方法1

使用油猴脚本，将网页版网易云的歌单导出为TXT格式，但是由于网页版网易云受限，最多只能导出1000首歌（如果该歌单超过1000首就只会显示1000首。多歌单总计超1000首，但每个不超1000不受影响）

脚本地址（油猴Tampermonkey的安装教程就不再赘述）：

https://greasyfork.org/zh-CN/scripts/38793-%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E5%88%97%E8%A1%A8%E5%AF%BC%E5%87%BA

安装完成后打开你的歌单网页，然后右上角就会出现导出列表按钮，保存到本地即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/5s28oe4p37xtwc7u8cj087r3ni6d.png)

## 导出方法2

GitHub链接：

https://github.com/yueyericardo/Netease-to-Youtube-or-Spotify

网站：

https://yyrcd.com/n2s/

根据指示输入歌单代码（这个应该自己就能看懂了吧嘿嘿嘿）

但是同样的，也有1000首的限制

还可以麻烦项目大佬给你超过1000首歌的txt文档，在GitHub issues里留言即可（态度一定要诚恳哦）：

https://github.com/yueyericardo/Netease-to-Youtube-or-Spotify/issues/4

## 导入方法

导入方法都大同小异，这里使用spotlistr

https://www.spotlistr.com/search/textbox

登录你的spotify账号，然后在文本框内复制黏贴你的txt文档内容

然后搜索即可，歌单歌曲较多请耐心等待

搜索完成以后就可以创建并且添加歌曲了（search！结束后还需要点一个creat list来创建歌单）

## 结语

Spotify 美区歌曲最多，免费版用不惯可以使用[破解版](/2021/01/07/spotify/)，有能力最好还是支持正版！除此之外，学生有免费3个月试用，上家庭组的车可以更便宜的价格拼到，淘宝也有良心跑路卖家可以便宜购买账号。