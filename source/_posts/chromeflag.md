---
title: Chrome flags 隐藏功能
tags: [chrome,flags,浏览器,拓展功能]
id: '1167'
categories:
  - - 软件
date: 2021-01-23 06:23:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.sspai.com/article/73599088-e74b-4186-ee00-607d58f29d46.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1
#highlight_shrink: true
---

相比移动端的 Chrome 浏览器，功能性能更强更全面的桌面端 Chrome 可能是你我每天使用频次最多的桌面软件。多端数据同步、实用的扩展插件都让其成为电脑上的「超级应用」。近乎无限制的桌面平台也让其可以在第一时间运用起新的功能和技术，这也是限制重重的移动端 Chrome 所无法比拟的。

当然因为桌面端 Chrome 的广泛使用性，新功能的推出和运用反而会更为谨慎。如果想要尝鲜新功能一样是通过 Feature flags —— 当然比起移动端，桌面端的新功能主要针对的键鼠操作，和移动端有相当大的区别。

## 尝鲜新功能，善用 Chrome flags
Chrome 之所以被认为是「超级应用」，很大程度上在于起功能增添和更新上像极了操作系统，新功能会首先出现在 Dev 版、然后经过 Beta 测试后，最后推送到稳定通道中。而新开发的功能则被隐藏在 Chrome flags —— 作为新功能的试验田，通过开启特定的 flags 来在稳定版中尝鲜新功能，即可以尝鲜也避免了可能的不稳定风险，下面我们挑选了一些稳定性尚可且比较实用的 flags， 通过开启对应的开关来让 电脑版的 Chrome 变得更好用。


注：本文 Chrome 版本为稳定通道 v78，电脑系统为 Windows 10 v1909
![](https://cdn.sspai.com/2019/11/14/62091785b5a850e5581926a197e3f3df.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
## 开启并行下载功能

[开启并行下载功能](/2020/12/21/Chrome浏览器下载提速/)
移动端 Chrome 考虑到带宽和设备性能问题，只允许单进程下载其实并无不妥，而桌面端至今依旧默认单进程下载似乎就有点说不过去了，所以相比移动端，在桌面端开启并行下载功能要更为迫切一些。
![](https://cdn.sspai.com/2019/11/14/3fcda253bfa14e0f814bf7fe1a75659e.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
开启方法和移动端一样， 在 Chrome flags 上搜索「Parallel downloading」来开启 Chrome 的并行下载功能，你可以尝试下大个文件以及多个文件，你会发现速度会提高那么一些。当然如果有条件的话，选择第三方下载工具进行资源下载反而更为合适。

开启方法：
```
chrome://flags/#enable-parallel-downloading
```
## 给标签页进行分组
多标签页浏览器有时也会给我们带来烦恼——我们会不自觉的打开 n 多标签页，时间一长就会忘记哪些标签页是有关联的，比如像我就经常遇到已经打开了某个标签页但最后又重复打开的，其实对标签页分组就可以妥善解决这些问题。
![](https://cdn.sspai.com/2019/11/14/df7342dc6a874ba63e1f34fed73feaa4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

这个很实用的功能同样也是默认隐藏，需要在 Chrome Flags 中搜索「Tab Groups」开启，之后将开启自动分组功能。自动分组功能将根据你的打开新标签页的方式，比如从少数派中打开的新内容页面将会自动添加到一个组中，这时会在标签页前面出现一个「组标记点」。

![](https://cdn.sspai.com/2019/11/14/58089a109692ee602bdd9debc82f6e96.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
你还可以手动创建新的组或者将当前标签页加入组中，通过拖拽的标签页将起放在「组标记点」后面就可以添加到当前组，而移除则只需要将标签页从组中拖拽出即可，而为了标记的更清楚，点击组的标记点还可以更改颜色，也可以为组进行命名让其更明显。

开启方式：
```
chrome://flags/#tab-groups
```
## 桌面端开启阅读模式
无论是 Firefox 还是旧版本的 Edge 浏览器，都内置有阅读模式，这些功能并非是多此一举，而是可以极大的提高内容阅读体验，去除广告、无关的框架样式等干扰性元素，内容重新排版之后方便进一步的深入阅读，即便不使用稍后读服务也能做到类似的信息阅读体验。
![](https://cdn.sspai.com/2019/11/14/4f7f0969da3baf0103664dcbcbb3cb06.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

奇怪的是这个功能在桌面端的 Chrome 中依旧被隐藏在 flag 中，而开启方式是在 Chrome Flags 中找到「Enable Reader Mode 」来开启这个功能，打开之后重启浏览器，在地址栏的最右侧会出现一个新的图标，点击之后就会直接将当前网页转换成阅读模式，不过比起移动端功能丰富的设置项，桌面端的阅读模式要简陋很多，也无法对主题、字体和字号大小进行调整。

开启方式：
```
chrome://flags/#enable-reader-mode
```
## 让网页内容强制显示为深色主题
macOS Mojave 开始支持系统深色主题的同时，Safari 也加入了一个新的 API，允许已经加入深色主题的网站跟随系统调整深色主题，只不过目前绝大多数的网站并不支持这一特性，而在 Chrome 中其实也支持类似功能，只不过该选项并非是默认开启同样需要通过在 Chrome flags 中手动开启。
![](https://cdn.sspai.com/2019/11/14/cc69183fe94cdbd6c663765595725bce.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

在 Chrome Flags 中搜索「Force Dark Mode」就可以看到设置选项，并且提供了相当多的显示效果选择，选择「Enable」重启后就可以看到强制开启后的基本效果，对于没有提供网页深色主题的网站，强制开启可以认为是原先网页配色在色环上对应的反色，所以看上去的展示效果比较一般，并且不同的网站的深色主题展示效果不佳，有些网站甚至完全无法用，只能用来进行一定程度的尝鲜。
![](https://cdn.sspai.com/2019/11/14/feda53f768047168537f9cee8af47e5d.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

开启方式：
```
chrome://flags/#enable-force-dark
```
## 开启全局媒体播放控制
播放在线多媒体时，如果需要暂停，快进等操作都要进入到标签页中进行调整，有时候标签页开的多，实在没法立即定位到播放页面就会很麻烦。有一个全局媒体播放控制可以简化这些步骤，这样就不用打开对应的标签页也可进行全局控制。
![](https://cdn.sspai.com/2019/11/14/b49f14d9852579a21a2c2134f60f5a70.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

开启方法也很简单，同样是在 Chrome Flags 中搜索「 Global Media Controls 」找到之后选择「Enable」重启浏览器，这时候你打开一个视频播放页面并播放视频，同时在工具栏中就会出现一个多媒体按钮，点击就可以看到一个媒体播放选项卡，无需打开对应标签页就可以控制多媒体内容播放。

开启方式：
```
chrome://flags/#global-media-controls
```
## 鼠标悬停标签页展示网页预览图
开的标签页多了之后会逐步挤占标签页的标题文本信息，想要知道里面网页内容就只能切换到该标签页查看，那么如何不切换到当前标签页就能看到到网页里面的大致内容呢？这项早已出现在经典版 Edge 浏览器上的功能在 Chrome 竟然也是隐藏功能，开启方式当然还是在 Chrome Flag —— 搜素「Tab Hover Card Images」选择开启就可以看到效果了。
![](https://cdn.sspai.com/2019/11/14/6ca6786fb81aed716451fc655ac1031b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

开启之后当鼠标悬停在标签页时将可以看到网页内容的预览窗口了，不用切换标签页就可以看到内容可以说更为方便一些，不过这项功能对系统性能有一定的要求，如果想要更好的浏览体验可以酌情开启。

开启方式：
```
chrome://flags/#tab-hover-card-images
```

>转载自 化学心情下2 https://sspai.com/post/57430