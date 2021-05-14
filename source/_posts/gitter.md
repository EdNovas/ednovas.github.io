---
title: 主题加入 Gitter 在线聊天室
tags: [Hexo,魔改,butterfly,主题,聊天室]
id: '1183'
categories:
  - - 建站
date: 2021-02-01 15:01:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/updated-google-hangouts-chat-header@2x.png
#top: true
#highlight_shrink: true
---
## Gitter注册
先去Gitter注册一个账号，可以直接使用GitHub登录

https://gitter.im/

然后先创建一个Community社区，再创建一个Room聊天室（创建聊天室时community选择刚创建的即可）

比如我创建了一个community叫`ednovas`,然后创建了一个叫`ChatRoom`的聊天室。这个要记住，下一步用到。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210201150531.webp)

## Sidecar获取代码

前往sidecar，去根据这个聊天室生成一段可以直接引用的代码。

https://sidecar.gitter.im/

在这里上方填上刚刚的Community/Room。比如我的就是ednovas/ChatRoom。然后复制下面的代码到剪切板。

```
<script>
  ((window.gitter = {}).chat = {}).options = {
    room: 'ednovas/ChatRoom'
  };
</script>
<script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-01_15-08-57.webp)

这段代码是可以当html页面用，也可以直接当js用。

## 引入js

/themes/butterflies/source/js/新建一个js文件，复制进去，把<script>和</script>去掉，最后一行也去掉，根据格式进行一下缩进。

```
((window.gitter = {}).chat = {}).options = {
  room: 'ednovas/ChatRoom'
};
```

打开config.yml，inject -> bottom这里正确引用js文件位置，然后在后面复制上刚刚删除的最后一行内容（这一行是固定的，每个人都一样）如：

```
- <script src = "/js/chatroom.js"></script><script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
# 注意缩进
```
## 调整 rightside bottom
建议把再修改一下 rightside-bottom 为 90px，否则会挡住，影响美观。

## 访客登录 

不过有一点，就是访客必须登录GitHub或者Gitlab或者Twitter账号才能开始聊天。

## 效果

页面右下角就是啦