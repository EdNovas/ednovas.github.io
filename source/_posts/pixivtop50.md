---
title: Pixiv Top 50 日榜插件
tags: [Hexo,魔改,butterfly,主题,pixiv,top50]
id: '1180'
categories:
  - - 建站
date: 2021-02-01 12:19:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20180927070512.webp
#top: true
#highlight_shrink: true
---

## 超能小紫服务好像失效了,EdNovas自己搭建的地址 https://pixiv.ednovas.xyz ,将下方地址 https://cloud.mokeyjay.com/pixiv 全部替换即可

在 `themes\Butterfly\layout\includes\widget` 文件夹新建 `card_pixiv.pug` 文件，文件内容如下：

注意：最后三行要保持空格间距一样（直接复制下面代码即可）

你还可以通过limit参数限制图片数量

例如`https://cloud.mokeyjay.com/pixiv/?color=f00&limit=10`

则可以得到背景为红色的Top10画册
我这里用的是 `https://cloud.mokeyjay.com/pixiv/?limit=500` （limit参数的范围必须在1-500 之间）
```
.card-widget.card-pixiv
 .card-content
  .item-headline
    i.fa.fa-image(aria-hidden="true")
    span= _p('aside.card_pixiv')
    iframe(src="https://cloud.mokeyjay.com/pixiv" frameborder="0"  style="width:99%;height:380px;margin:0;")
```

https://cloud.mokeyjay.com/pixiv 使用的是[超能小紫](https://www.mokeyjay.com/)提供的服务，也可以自行搭建，搭建方式请看[GitHub项目地址](https://github.com/mokeyjay/Pixiv-daily-ranking-widget)

编辑 `themes\Butterfly\layout\includes\widget\index.pug` 文件，在你想要显示的位置插入以下代码：
```
if theme.aside.card_pixiv
  !=partial('includes/widget/card_pixiv', {}, {cache:theme.fragment_cache})
```
![](https://img-blog.csdnimg.cn/20200419183941492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

编辑 `butterfly.yml` 文件，在 `card_webinfo` 下面添加一行 `card_pixiv: true`

可以通过搜索关键词 `aside`，找到对应位置添加

![](https://img-blog.csdnimg.cn/20200419184046471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQyOTcxOA==,size_16,color_FFFFFF,t_70)

编辑 `themes\Butterfly\languages\zh-CN.yml` 文件 (请根据你的网站语言选择)，找到 `card_announcement: 公告` , 在下面添加一行 `card_pixiv: Pixiv日榜Top50` (后面的文本可自定义)

如果不想显示，直接把 `butterfly.yml` 文件的 `card_pixiv: true` 改为 `card_pixiv: false` 即可

## 自行架设服务

适用于动手能力较强或需要深度自定义的用户

需要PHP版本 >= 5.4

首先[下载源代码](https://github.com/mokeyjay/Pixiv-daily-ranking-widget/releases/latest)，解压
使用专业编辑器（例如Sublime、Notepad++等，切忌使用记事本）编辑config.php，根据实际情况修改相应配置

由于Pixiv已经被墙，如果你想要将此项目部署在国内，请务必配置 proxy 配置项

每个配置项的说明都以注释的形式标注在文件内。

最后一步，给予storage目录读写权限

具体使用方法参考方案一

>参考博客：
>作者：mokeyjay
>链接：https://www.mokeyjay.com/archives/1063
>来源：超能小紫 - mokeyjay
>作者: HCLonely
>链接: https://blog.hclonely.com/
>来源: HCLonely Blog