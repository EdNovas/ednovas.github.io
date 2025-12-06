---
title: Hexo Butterfly 加入 clustrmaps 访问者地图
tags: [butterfly, hexo]
categories:
  - - 建站
date: 2021-10-29 18:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/istockphoto-1278951186-170667a.jpg
# highlight_shrink: true
---

> 转载自 cungudafa https://blog.csdn.net/cungudafa/article/details/105925710

## 准备工作

看到别人有，我也喜欢，于是添加。


官网 [clustrmaps.com](https://clustrmaps.com/) 也是第三方的，有Google Docs账号可以直接登录，Sign up即可

注册之后，在官网找到 Website Widget，如图。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20200505000231389.png)

我喜欢Globe widget形式，如果喜欢Map自便

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20200504230609405.png)

点击select就可以看到信息了，我这里用的html版，复制到你的博客就好了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/2020050423071020.png)

## Hexo主题引入

我在 butterfly（pug）的侧边栏引入的，next可以同理规划；sakura（ejs）更简单，直接贴js或html代码

在主题配置声明一个侧边栏给地图显示
文件：`source\_data\butterfly.yml`

```
  card_maps: true
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20200504234654500.png)

添加一个界面元素

文件如图所示：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20200504234850441.png)

先在加载框添加一条card_maps的声明，（主题控制是否显示这个界面元素）
修改添加：`themes\Butterfly\layout\includes\widget\index.pug`

```
      if theme.aside.card_maps
        !=partial('includes/widget/card_maps', {}, {cache:theme.fragment_cache})
```

位置其实你可以任意

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20200504234731170.png)



然后，新建 一个页面元素：`themes\Butterfly\layout\includes\widget\card_maps.pug`
复制下面的pug格式样式，将url_for改为你之前申请的

```
.card-widget.card-map
  .card-content
    .item-headline
        i.fa.fa-map-marker(aria-hidden="true")
        span= _p('访客')
    a(href=url_for('https://clustrmaps.com/site/1b7sx'))
        img(src=url_for('//www.clustrmaps.com/map_v2.png?d=LHTfP-cAzRYLHEj_KNHtRxRu6ThgMwnyqi-X7ZV9k14&cl=ffffff'))
```

## Demo

小站首页左边栏就是了