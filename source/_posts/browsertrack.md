---
title: 浏览器指纹追踪
tags: [安全,浏览器,软件,插件,指纹,追踪,记录]
id: '1157'
categories:
  - - 软件
  - - 网站
date: 2021-01-20 11:41:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/digital-fingerprint.jpg
#highlight_shrink: true
---

# 浏览器指纹追踪

## 简述

现实世界可通过体貌特征、身份证件、生物特征（如指纹信息）等手段对用户进行唯一性识别。Web世界主要通过Cookies技术、浏览器指纹、WebRTC等技术进行识别。

## 典型追踪技术—Cookie追踪

### Cookie是什么

Cookie，有时也用复数形式Cookies，在Web世界中其实际上是用户浏览网站时，网站存储在用户浏览器上的一段信息，并在服务器和浏览器之间传递，用户与辨别用户身份和维持状态。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c2.png)

当你在浏览器地址栏中键入了服务的URL，浏览器会向服务器发送一个读取网页的请求，并将结果回显。在发送之前，该网页在你的电脑上寻找服务网站设置的Cookie文件，如果找到，浏览器会把Cookie文件中的数据连同前面输入的URL一同发送到服务器。

服务器收到Cookie数据，就会在他的数据库中检索你的ID，你的购物记录、个人喜好等信息，并记录下新的内容，增加到数据库和Cookie文件中去。如果没有检测到Cookie或者你的Cookie信息与数据库中的信息不符合，则说明你是第一次浏览该网站，服务器的CGI程序将为你创建新的ID信息，并保存到数据库中。

我们日常工作中所能见到的购物网站如京东淘宝，第三方监测工具如doubleclick、99click等都需要利用Cookie技术，网站分析工具如GA、百度统计、CNZZ等也需要利用Cookie。

![用户首次访问购物网站时](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c3.png)

![第二次访问时](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c4.png)

![浏览器查看Cookies](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c5.png)

### Cookie同步

Cookie同步一般是指用户访问某A网站时，该网站通过页面跳转等方式将用户的Cookie发送到B网站，使得B网站获取到用户在A网站的用户隐私信息，然后通过RTB（Real Time Bidding）、AdNetwork等一系列平台进行有效的广告推送服务(此部分涉及SSP、DSP、RTB、DMP等一系列广告推送服务和平台)。

这也就是为什么浏览器的广告和购物网站会给你推送你百度搜索过的东西。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c7.png)

不少安全工具甚至是浏览器都允许或者引导关闭追踪Cookie，Cookie追踪越来越受限制，浏览器指纹追踪渐渐成为了Web追踪的重要技术手段。

***

## 浏览器指纹追踪

类似人的外貌和指纹，Web客户端（这里主要指浏览器）也有多种“外貌”信息和“指纹”信息，将这些信息综合分析计算后，可对客户端进行唯一性识别，进而锁定、追踪、了解网民行为和隐私数据。

### 基本指纹
基本指纹是任何浏览器都具有的特征标识，比如硬件类型（Apple）、操作系统（Mac OS）、用户代理（User agent）、系统字体、语言、屏幕分辨率、浏览器插件 (Flash, Silverlight, Java, etc)、浏览器扩展、浏览器设置 (Do-Not-Track, etc)、时区差（Browser GMT Offset）等众多信息，这些指纹信息“类似”人类的身高、年龄等，有很大的冲突概率，只能作为辅助识别。

可以在该网址进行查看本地浏览器的基本特征：[What is my browser](https://www.whatismybrowser.com/)

这里是由 Chris Hauk 写的一篇[浏览器指纹指南](https://pixelprivacy.com/resources/browser-fingerprinting/)，里面提供了更多关于What is my browser的信息和背景，以及用户在浏览网页时可能采取的步骤，从而更好地保护隐私。

上述博客中还包含了更多的如何保护你的在线隐私问题，有兴趣推荐拜读一下: https://pixelprivacy.com （网站是纯英文的，可以使用页面翻译更方便的浏览）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---1.png)

### 高级指纹
基本指纹就像是人的外貌特征，外貌可以用男女、身高、体重区分，然而这些特征不能对某个人进行唯一性标识，仅使用基本指纹也无法对客户端进行唯一性判定，基于HTML5的诸多高级指纹对此提供了新思路。
#### **Canvas指纹**

Canvas（画布）是HTML5中一种动态绘图的标签，可以使用其生成甚至处理高级图片。2014年9月，ProPublica报道：新型的Canvas指纹追踪正在被用到“上到白宫，下到YouPorn”等众多网站，事实上早在2012年已有研究报告分析称canvas指纹被用于跟踪用户。
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---2.png)

Canvas指纹的原理大致如下：

相同的HTML5 Canvas元素绘制操作，在不同操作系统、不同浏览器上，产生的图片内容不完全相同。在图片格式上，不同浏览器使用了不同的图形处理引擎、不同的图片导出选项、不同的默认压缩级别等。在像素级别来看，操作系统各自使用了不同的设置和算法来进行抗锯齿和子像素渲染操作。即使相同的绘图操作，产生的图片数据的CRC检验也不相同。

在线测试地址：[Browserleaks](https://www.browserleaks.com/canvas)，可查看浏览器的Canvas唯一性字符串。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---6.png)

Canvas几乎已被所有主流浏览器支持，可以通过大部分的PC、平板、智能手机访问.

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---7.png)

### 硬件指纹

硬件指纹主要通过检测硬件模块获取信息，主要的硬件模块有：GPU’s clock frequency、Camera、Speakers/Microphone、Motion sensors、GPS、Battery等。更多细节请参考：https://arxiv.org/pdf/1503.01408v3.pdf

### 综合指纹

将上述所有的基本指纹和多种高级指纹综合利用，进行分析、计算哈希值作为综合指纹，可以大大降低碰撞率，极大提高客户端唯一性识别的准确性。测试地址：https://panopticlick.eff.org/

## 跨浏览器指纹
上述指纹都是基于浏览器进行的，同一台电脑的不同浏览器具有不同的指纹信息。这样造成的结果是，当同一用户使用同一台电脑的不同浏览器时，服务方收集到的浏览器指纹信息不同，无法将该用户进行唯一性识别，进而无法有效分析改用户的的行为。

近期有学者研究了一种跨浏览器的浏览器指纹，其依赖于浏览器与操作系统和硬件底层进行交互进而分析计算出指纹，这种指纹对于同一台电脑的不同浏览器也是相同的。更多技术细节请参考：

http://yinzhicao.org/TrackingFree/crossbrowsertracking_NDSS17.pdf

## WebRTC

WebRTC（网页实时通信，Web Real Time Communication），是一个开源项目，旨在使得浏览器能为实时通信（RTC）提供简单的JavaScript接口，说的简单明了一点就是让浏览器提供JS的即时通信接口，让浏览器实时获取和交换视频、音频和数据。WebRTC实现了三个API，分别是:

MediaStream：通过MediaStream的API能够通过设备的摄像头及麦克风获得视频、音频的同步流。

RTCPeerConnection：RTCPeerConnection是WebRTC用于构建点对点之间稳定、高效的流传输的组件。

RTCDataChannel：RTCDataChannel使得浏览器之间（点对点）建立一个高吞吐量、低延时的信道，用于传输任意数据。

基于WebRTC的实时通讯功能，可以获取客户端的IP地址，包括本地内网地址和公网地址。其原理是利用到RTCPeerConnection 的API，大致函数如下：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---11.png)

利用WebRTC能做的事情还远不止这些，比如使用其探测扫描内网信息，进行语音、视频交流，更多技术细节请参考：

http://net.ipcalf.com

https://diafygi.github.io/webrtc-ips/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/---12.png)

# 防护措施

1. 使用隐身模式浏览网页，缺点为无法保存历史记录。
2. 禁用Cookie和JavaScript，缺点为很有可能导致页面显示不正常，不建议。
3. 禁用WebRTC。Firefox浏览器：打开about:config，找到media.peerconnection.enabled的项，设置成 false。Chrome浏览器需要使用插件禁用。
4. 禁用Geolocation。Firefox浏览器：打开about:config，找到geo.enabled 的值，设置其值为 false。Chrome 点击设置（Settings），找到隐私和安全（Privacy and security）点击网站设置（Site Settings）在窗口里找到定位（Location）并设置不允许任何网站追踪你的物理位置（Do not allow any site to track your physical location）
5. 使用99%安全的匿名浏览器，比如Tor洋葱浏览器，具体怎么使用可以参考[这里](/2020/12/27/最安全的浏览器tor/)
6. 禁用Cookies追踪，可以看[这篇文章](/2020/12/21/广告怎么知道我在想什么/)
7. 安装插件
   1. Ghostery可以有效屏蔽网页追踪、广告，加速网页：https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?utm_source=chrome-ntp-icon
   2. Privacy Badger同样可以有效屏蔽隐秘追踪：https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp?utm_source=chrome-ntp-icon
   可以在插件设置中开启Prevent WebRTC from leaking local IP address （防止WebRTC追踪泄露IP地址）
   ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/PrivacyBadger.jpg)
   1. uMatrix十分强大的分类管理cookie,css,image,media,script,XHR,frame和其他：https://chrome.google.com/webstore/detail/umatrix/ogfcmafjalglgifnmanfmnieipoejdcf?utm_source=chrome-ntp-icon
   第一行和第一列的标题方块有上下两个可点击的地方，上面是开启和关闭此列/行全部，下面是仅开启和关闭这个主网页的，除主页面以外此网页上的其他网站等信息由上面的小方块控制。你也可以分别控制每个网页的具体单个选项。
   在软件使用的时候，除了基本上必须开启的css和image以外，大多数时候需要开启Scrpit选项来保证页面功能能正常运作。你也可以点击ALL直接允许所有都开启。
   ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/unnamed.jpg)
   1. Chameleon这个仅在GitHub上有，GitHub上下载最新版本的.crx后缀文件：https://github.com/ghostwords/chameleon/releases
   如果无法正常安装.crx后缀，参考[这里](/2021/01/04/ads/#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85)
   1. Random User-Agent按时自动更改用户代理字符串，隐藏真实用户代理，还可防止通过 JavaScript 发掘真实信息：https://chrome.google.com/webstore/detail/random-user-agent/einpaelgookohagofgnnkcfjbkkgepnp?hl=zh-CN

>转载编辑自Seebug Paper https://paper.seebug.org/227/ https://paper.seebug.org/229/









