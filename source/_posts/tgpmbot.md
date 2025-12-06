---
title: Telegram 创建一个私聊 bot
tags: 
  - telegram
  - tg
  - bot
  - 机器人
  - 私聊
categories:
  - 杂
date: 2021-05-27 14:17:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/telegram-chatbot-1.png
---

> 文章作者: GarveyZhong
> 文章链接: https://blog.imzjw.cn/posts/75dadae5/

## 写在前面

本文章是针对那些 Telegram 是 +86 用户和在意自己隐私问题所记录的一篇教程。

看完本章教程之后，用户就可以和你所创建的机器人聊天，由机器人转发该用户的私聊消息，通过回复机器人所转发的消息即可回复用户，同时还可以减少窗口的数量且也保障了自己一定的隐私问题。

对于 +86 用户来说，基本可以满足，不过貌似可以通过 [@SpamBot](https://t.me/SpamBot) 申诉解除限制，但万一如果你的朋友也是 +86 的话，他就不能和你联系了，你也告诉不了他可以通过 [@SpamBot](https://t.me/SpamBot) 解除。

## 创建机器人

点击 [@BotFather](https://t.me/BotFather) ，通过机器人之父创建一个机器人。

向它发送 /newbot 指令

然后就会问你准备要给机器人起一个什么名字（随意，可以中文）

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524222523.webp)

接着给机器人取一个 username，不可重复，须以 _bot 结尾

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524223352.webp)

机器人如此如此就创建成功了，最后生成的那个机器人 Token，不可乱泄露。

## 创建私聊机器人

点击 [@LivegramBot](https://t.me/LivegramBot) 向它发送 /addbot 指令，然后发送刚刚创建机器人 Token。（貌似好像有个服务条款啥的你需要先同意一下，然后再发送。）

出现 Success 则私聊机器人创建成功！

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524225156.webp)

### 机器人 Token 在哪？

给 BotFather 发送 /mybots 然后就会列出你所有的机器人，点击刚刚创建的机器人，就会有个 API Token，再点击 API Token 就出现该机器人的 Token。

其实到这就已经基本创建完毕了，但是那些描述啊，头像啊，关于啥的，都是 null，就比较简陋，因此我们可以通过 BotFather 修改机器人信息。

## 修改机器人信息

给 BotFather 发送 /mybots 指令，选择私聊机器人

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524225828.webp)

选择 Edit Bot

Edit Name：修改机器人名称
Edit Description：修改机器人描述，它能做什么？
Edit About：介绍一下机器人
Edit Botpic：给机器人上传一张美美的头像，须压缩图，不能是文件。
Edit Commands：编辑 \ 添加指令

以修改描述为例，其它的自己举一反三。

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524231154.webp)

修改完成之后，稍等片刻，回到自己的机器人界面，即可看到刚刚那段描述！

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210524231420.webp)

## 测试与使用

切换另一个号，私聊机器人

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210525092638.webp)

然后机器人就会转发该用户的私聊信息

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/20210525093752.webp)

如何回复？

你可以右键选择回复进行回复，也可以在消息右侧双击鼠标左键进行回复。

![](https://cdn.jsdelivr.net/npm/cpdd/posts/75dadae5/reply.gif)

这样即完成了私聊机器人的创建。

最后如果你对 Telegram Bot 感兴趣的话，可以看峰哥的 [Telegram 机器人系列教学](https://www.youtube.com/playlist?list=PL3dZh-p-vVofZ0BOQ4LnPlhJV3sVAQX8h)

> 文章作者: GarveyZhong
> 文章链接: https://blog.imzjw.cn/posts/75dadae5/