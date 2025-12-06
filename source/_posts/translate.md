---
title: 御坂翻译器 — Galgame/文字游戏/漫画多语种实时机翻工具
tags: [翻译,translate,galgame,翻译器,translater]
id: '1200'
categories:
  - - 软件
date: 2021-02-07 12:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yuban.jpg
# highlight_shrink: true
---

## 软件优缺点

* 和其他翻译软件比较有什么优缺点：

* 适用范围全面，几乎所有出现在屏幕的东西都可以翻译；

* 翻译接口多，目前有12个翻译接口；

* 简洁美观的界面；

* 及其简单傻瓜的操作方式；

* 相比较其他OCR翻译器配置有自动翻译模式；

* 需要联网，可能视网速不同翻译速度有差；

## 下载

GitHub地址：https://github.com/PantsuDango/Dango-Translator

百度云盘链接 https://pan.baidu.com/s/1AD9JWSAKS69gOawwvMXXQw 提取码 975h 解压密码：Dango

演示视频：https://www.bilibili.com/video/BV1gp4y1Q7Ts?from=search&seid=2515920591076249883

## 使用教程

### 打开软件

* 第一步要先安装字体

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture10.png)

* 然后打开翻译器，进入设置页面

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture11.png)

### 注册并且填入API

直接点击注册会打开一个word文档，内有教程。或参照以下流程获取到API后直接复制黏贴放入API

#### OCR API 注册（必填）

1. 点击网站链接跳转 https://console.bce.baidu.com/ai/?_=1579777147726&fromai=1#/ai/ocr/overview/index

2. 登录并按照下图逐步操作

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture12.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture13.png)

3. 内容可以像我一样乱填，注意产品服务一定得是文字识别，不要注册到语音技术或者其他东西了

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture14.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture15.png)

4. 成功获取到Key和Secret

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture16.png)

5. 填入翻译器如下位置点保存即可（每天调用量限制50000次）

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture17.png)

#### 彩云翻译API

1. 网站跳转注册 https://dashboard.caiyunapp.com/user/sign_in/

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture18.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture19.png)

2. 然后打开你的注册邮箱，去验证你的邮箱

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture20.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture21.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture22.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture23.png)

3. 如实填写后下一步，切忌不要切换为企业，要用个人类型来注册

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture24.png)

4. 最好填的像样一点，可以说自己在自制翻译器，或者和毕业设计有关啥的，因为彩云的注册审核还是有点严格的

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture25.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture26.png)

5. 这样就是好了，之后就等待审核，大概一天内会发邮箱通知你审核结果

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture27.png)

6. 这样就是大功告成了，注意每月额度是100万免费

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture28.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture29.png)

7. 这个就是你的api码

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture30.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture31.png)

#### 百度翻译API

1. 网站注册/登录 https://fanyi-api.baidu.com/product/11

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture32.png)

2. 按照下图逐步操作，这里一定要选个人开发者

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture33.png)

3. 按照下图逐步操作，这里一定要选高级版

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture34.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture35.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture36.png)

4. 这里一定要选高级版

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture37.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture38.png)

5. 服务器地址千万不要填写

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture39.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture41.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture42.png)

6. 成功获取到Key和Secret

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture43.png)

7. 填入翻译器如下位置点保存即可（每月免费200万字符）

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture44.png)

#### 腾讯翻译

1. 网站点击跳转注册/登录 https://cloud.tencent.com/product/tmt

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture45.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture46.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture47.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture48.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture49.png)

2. 然后进入该链接 https://cloud.tencent.com/product/tmt

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture50.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture51.png)

3. 这里一定要选个人认证

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture52.png)

4. 都可以乱填

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture53.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture54.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture55.png)

5. 然后进入该链接 https://cloud.tencent.com/product/tmt

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture56.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture57.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture58.png)

6. 然后进入该链接 https://console.cloud.tencent.com/cam/capi

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture59.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture60.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture61.png)

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture62.png)

7. 填入如下位置即可（每月免费500万字）

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture63.png)

### 其他设置

公共和网页版翻译不需要注册就可以直接使用，如果你前面注册好了了百度和腾讯或彩云，你这里就可以勾选私人版的百度翻译和腾讯翻译或彩云翻译。在这里勾选你要使用的翻译源和要翻译的语言种类。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture64.png)

这里是设置各个翻译源显示的时候的颜色，以及字体大小和字体样式，按照自己的喜好来就好。另外可设置显示的是实心字体还是描边字体，建议描边，然后可以设置是否显示识别到的原文，以及是否将原文自动复制到粘贴板。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture65.png)

透明度顾名思义就是翻译界面的透明度，按照自己喜好就好。紫色框是翻译模式，如果你的文字是竖排的，例如生肉本子，那么你可以使用此模式，另外多了一个高精度模式，就是可以大大提高ocr的识别正确率，注意每天只有500次哦。黄色框是快捷键设置，勾选后按一次快捷键相当于按下一次翻译键或截图键，因为是全局快捷键，很容易冲突，无效则是和其他应用冲突了。自定义背景很好理解就不说了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture66.png)

都配置好后就可以点击保存设置了，等跳出保存成功就是大功告成，点击返回

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture67.png)

如何放大翻译框？拖动此处

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture68.png)

开始选择翻译的范围吧

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture69.png)

点击范围键后，框住你要翻译的文本区域，选择的范围要尽可能小，但是包含全部要翻译的文本，越大越影响识别的复杂程度，另外可以的话将你的游戏文本框的背景色调到最深（即不透明）为最佳。翻译器不可以遮挡住要识别的游戏文字对话区域！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture70.png)

插播一句重要的提醒，请将你的游戏文本对话的显示速度调到最快，不然翻译的时候字出的慢翻译就也会慢! 

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture71.png)

这个可以设置是手动翻译还是自动翻译，手动翻译即每次翻译需要点一下最左边的翻译键，自动翻译则为开始后，会自动根据你所设定的识别范围，每隔一个你设置页面设置的自动频率时间翻译一次。当然如果你的范围内没有变化的话，是不会重复调用翻译的。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture72.png)

之后点击开始，就会翻译啦。如果没有变化，请检查你的范围是不是没选择好。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture73.png)

这个是播放识别到的原文，可以朗读哦~

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture74.png)

另外有一个屏蔽词汇的功能，在翻译的过程中，OCR难免会识别到一些奇怪的符号，这些符号被反复翻译导致体验感极差，所以可以自定义过滤的词汇

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture75.png)

打开之后是这样的，那这里就是屏蔽了三组词汇，「、◎、NEXT
每组之间是以&这个符号作为分隔标志的
比如你想把“欧派”这个词屏蔽，那么你就可以在当前情况下设置为：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture76.png)

当然你也可以只设置一个屏蔽词

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture77.png)

## 翻译速度参考

以下为各翻译源翻译时间和质量参考（按照①群幽寂大大的推荐度依次排序）

|翻译源|翻译时间（s）|翻译质量|稳定性|
|:----|:----|:----|:----|
|私人彩云|0.7|优+|优|
|私人腾讯|0.5|优+|优|
|私人百度|1|优|优|
|网页腾讯|0.6|优|良|
|网页百度|2.3|优|良-|
|金山|0.6|良+|良-|
|yeekit|1.5|良|良|
|Google|0.9|良|良+|
|公共彩云|0.7|优+|最差|
|Bing|0.5|一般|良+|
|ALAPI|1|良+|良-或差|
|有道|0.45|最差|良+|


## Q&A

1. error code: 58002 度娘的错误说明

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture1.png)

    解决办法：

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture2.png)
    
    前往百度翻译注册时的页面，管理控制台开通服务

2. error code: 58003 度娘错误说明

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture3.png)

    解决办法：

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture4.png)

    可能是被误封，最多过一天就恢复正常了

3. error code:Faild to execute script Main

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture5.png)

    解决办法：

    有两种可能造成这个问题

    1. 你当前的系统为日本系统，翻译器不能在日区，繁体的电脑系统区域使用，必须转回简中，如玩的游戏需要转区才可以启动，可以使用[LE转区软件](https://ednovas.lanzoux.com/iPgUXlfejva)来打开游戏。转区教程：https://www.bilibili.com/video/av67724039?from=search&seid=15096516439242649288

    2. 你的翻译器文件不完整有缺失，请重下重新完整地解压。

4. ocr连接失败，代理设置

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture6.png)

    解决办法：

    请将以下代理开关全部关掉

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture7.png)

5. error code：216200 ocr错误

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture8.png)

    解决办法：

    重新框选一下范围

6. no space left on device

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Picture9.png)

    解决办法：

    你的C盘满了，请清理一下c盘
