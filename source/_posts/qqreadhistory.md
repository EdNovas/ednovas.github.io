---
title: QQ获取浏览器历史记录
tags: [软件,安全,QQ,历史记录,浏览器]
id: '1153'
categories:
  - - 软件
  - - 安全
date: 2021-01-18 10:45:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210118104709.webp
#highlight_shrink: true
---

## 原帖：关于QQ读取Chrome历史记录的澄清

今天看到群里有同学发了一篇v2ex上的帖子（ https://www.v2ex.com/t/745030 ），说QQ会读取Chrome的历史记录，被火绒自定义规则拦截了，本来我是不信的，但是他说他复现了，而且是QQ登录10分钟后才会去访问。

 
这我就想去验证下了，开虚拟机装QQ、Chrome，然后打开Process Monitor开始等。规则简单的过滤下。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_DJ94X9WVG4MBTWR.png)

果然看到了读取AppData\Local\Google\Chrome\User Data\Default\History等目录的操作。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_W68XZTFJANKMN69.png)

而且时间也是恰到好处的十分钟。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_FWD8MPBYN2VRD3G.png)

这是实锤了QQ和Chrome过不去啊，这我可不信，把规则去掉，重新翻了一下才发现果然是冤枉QQ了啊。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_AGXY96FE877JTJU.png)

受害人之多令人震惊，仔细一看，这玩意是遍历了Appdata\Local\下的所有文件夹，然后加上User Data\Default\History去读啊。User Data\Default\History是谷歌系浏览器（火狐等浏览器不熟，不清楚目录如何）默认的历史纪录存放位置，Chrome中枪也就很正常了。

 
然后就该研究研究QQ为啥要这么干了，读取到的浏览器历史记录又拿来干啥了呢？

 
挂上x32dbg，动态调试找到位置。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_C2KUMY3YXHM4B37.png)

然后去IDA里直接反编译出来，如下（位置在AppUtil.dll中 .text:510EFB98 附近）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_5HHXWXCZHYAZ4RH.png)

这一段的逻辑还是很好看懂的，先读取各种 User Data\Default\History 文件，读到了就复制到Temp目录下的temphis.db。回去看下Procmom，果然没错。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_3CRMBX6H9ENTZ6B.png)

再之后的操作就简单了，SQLite读取数据库，然后“select url from urls”，这是在干什么大家都懂哈。后面就不接着讲了，有兴趣的可以自己接着看。

 
结论，QQ并不是特意读取Chrome的历史记录的，而是会试图读取电脑里所有谷歌系浏览器的历史记录并提取链接，确认会中招的浏览器包括但不限于Chrome、Chromium、360极速、360安全、猎豹、2345等浏览器。

 
晚上来编辑一下，刚才去试了下TIM，果然经典重现，而且比QQ还离谱，不多说直接上图。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_W44WFBHCYKMC3PX.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/873391_FY3MV2SM35XPDR2.png)

>转载自qwqdanchun https://bbs.pediy.com/thread-265359.htm

## 历史

事实上在2010年10月360发布QQ隐私保护器，当时QQ窥探用户隐私的行为就已经曝光了，但是360却仍然无奈败诉。。。

![](https://pic3.zhimg.com/v2-978215db369ab13031e31b1fffae5da0_r.jpg?source=1940ef5c)

## 解决方法

### 插件

Ghostery插件，会自动防止网站追踪

Chrome插件商店：

https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij/related?utm_source=chrome-ntp-icon

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-18_10-53-42.webp)

### 卡巴斯基

如何看待 QQ 扫描读取所有浏览器的历史记录？ - Undefined的回答 - 知乎
https://www.zhihu.com/question/439768601/answer/1683013056

### 火绒

可能大部分人都用的都是火绒吧

先打开火绒的防护中心

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-18_08-28-22.webp)

选择高级防护，打开自定义保护

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-18_08-28-33.webp)

在来到安全设置中的自定义防护，添加一条规则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-18_08-31-41.webp)

取一个规则名，发起程序选择*即表示所有程序，文件规则写入访问的路径，保护的动作选择读取和修改，然后保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-18_08-32-59.webp)

添加以下几条规则，应该能包含大部分主流浏览器的访问记录了

```
*\User Data\Default\History
```
```
?:\Users\*\AppData\Local\*\Chrome\User Data\Default\*
```
```
?:\Users\*\AppData\Local\*\User Data\Default\*
```
```
?:\Users\*\AppData\Roaming\Mozilla\Firefox\Profiles\*
```

果不其然，开启QQ以后十分钟左右会出现如下提示，要读取你的历史记录。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210118104709.webp)

除此之外，火绒官方论坛还有很多其他强大的用户自定规则

https://bbs.huorong.cn/forum-45-1.html

flymc大佬的几个规则

https://flymc.cc/2020/03/17/HuorongRules/

其中我自己用的三个规则下载地址：

https://ednovas.lanzoux.com/ix7n1kiz3ab

其中的1.json是我自己写的，能包含主要保护浏览器的历史记录访问，以及保存的本地ssh密钥，xshell的密钥访问。

有可能有各种误报，但是只要把它设置为永久同意即可。至于QQ.exe想要读取浏览器历史记录？直接永远拒绝！