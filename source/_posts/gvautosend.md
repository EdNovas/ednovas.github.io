---
title: GV自动回复消息与自动发送消息教程
tags: 
  - gv
  - googlevoice
categories:
  - 杂
date: 2021-05-13 18:06:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/google-voice-1000x530.png
---

注意：如果您有谷歌多账号，为了避免切换出错，建议在浏览器无痕模式操作

## GV自动回复消息

### 将GV信息转移到Gmail

网址：https://voice.google.com/u/0/settings

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ea199e8a667d61cb7c30afcb433a0967.jpg)

### Gmail建立并创建过滤器

在Gmail点击【管理标签】，点击【过滤器和屏蔽的地址】，点击【创建新的过滤器】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/ace33ba722513323100f4e6ba0d53b9c.jpg)

发件人填写【@txt.voice.google.com】，然后点击【创建过滤器】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/db5fd53748155d2a21b6892c5297db8b.jpg)

接着勾选【跳过收件箱（将其归档）】，勾选【应用标签】，并且新建应用标签为【autoReply】，再点击【创建过滤器】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/011bdd66e64ff451da51b34fe8254212.jpg)

设置完成如图所示：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3fee90f357e8751802125591d45b5630.jpg)

### 设置自动回复脚本

打开网址：<https://script.google.com/home> 点击【start scripting】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/890fcfecf4bc7144a793ed6a1a752a76.jpg)

点击【新建项目】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/81eae80bddf5d77fa1ced6a75eaae167.jpg)

复制代码：

```
function autoReplier() {
var labelObj = GmailApp.getUserLabelByName('autoReply'); //这里面的autoReply就是我们上面设置的归档名字。
var gmailThreads;
var messages;
var sender;
//下面就是获取我们上面指定归档里面的未读邮件，然后读取，回复，删除
for (var gg = 0; gg < labelObj.getUnreadCount(); gg++) {
    gmailThreads = labelObj.getThreads()[gg];
    messages = gmailThreads.getMessages();
    for (var ii = 0; ii < messages.length; ii++) {
        if (messages[ii].isUnread()) {
            sender = messages[ii].getFrom();
            MailApp.sendEmail(sender, 'Auto Reply', "Hello,Peace~");//回复邮件，为避免出错，回复内容请设置英文
            messages[ii].markRead(); //标记为已读
            messages[ii].moveToTrash();//删除邮件
        }
    }
  }
}
```

代码如果出错，请访问以下网址进行复制：
http://web.archive.org/web/20210228065959/https://iiii.im/746

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/17bd0f4540e4012610c35b374c5ce1d5.jpg)

保存后重新命名项目为【Auto Replier】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/064dcae754bfc284f168836ade3d9981.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/420af9c76863e5a021b1ad4d1bde6fc3.jpg)

点击旁边的按钮【触发器】，建立触发器：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/270d2e64bb2bdbc1706b36244a6b55c2.jpg)

点击右下角【添加触发器】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/74d5e58ab5d1ec2834649ff021bb6bed.jpeg)

按下图所示新增触发条件，您可以选择分钟定时器或者其他的定时器，点击【保存】。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3f55d58fb5bd5ca5cb8bf6ab36d38a7b.jpg)

之后会要求您确认身份，点击转至并允许运行脚本就行了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/97d4c5a97be1c0eacf717279171959de.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/dc3b0d066fdc984806dbae38861df16d.jpg)

如图触发器建立完成，GV自动回复设置结束。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/8631fc6e43186f37ba4b78d8e66840ac.jpg)

## **GV自动发送信息**

### **telegram关注 @gvkeep_bot**

网址：<https://t.me/gvkeep_bot>

**![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04e986b87b1f27cc56ce3ec78bb23629.jpg)**

### 按机器人指引所示操作

GV保号机器人是每月1日自动发送信息到您的GV号，您也可以如下操作手动发送信息。

**![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/898f249a828830ab85f8edd040b51e2e.jpg)**

### GV验证是否自动回复成功

网址：https://voice.google.com/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/2cadf48acbbe5b29929681d952af1bca.jpg)

本教程鸣谢：  
1、GV保号机器人：https://t.me/gvkeep_bot

2、本教程在以下网址教程基础上完善：  
https://web.archive.org/web/20210228065959/https://iiii.im/746
