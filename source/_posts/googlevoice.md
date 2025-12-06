---
title: Google Voice 保号
tags: [google voice,保号,虚拟手机号,gv]
id: '1195'
categories:
  - - 杂
date: 2021-02-05 05:22:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/google-voice-1000x530.png
highlight_shrink: true
---

## 保号
Google Voice的回收政策是这样的：如果超过6个月没有拨打或者接听电话，也没有发出或接收过短信，号码就会被回收。原文如下：

Google may reclaim your Google Voice number (if you have one) if you have not placed or received calls, sent or received text messages for a period of 6 months. We will not reclaim numbers that have been ported in to Google Voice or made permanent.

> https://www.google.com/googlevoice/program-policies.html

## 订阅广告

> https://www.cnblogs.com/blog5277/p/12255636.html

定期收短信

订阅一些大公司的广告短信，~~已失效 如星巴克：发送JOIN到22122，就能看到，星巴克会每个月发两条广告短信到GV~~

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/998529-20200203142512826-1738264069.png)

下面还有两个

527365 先发 join 然后要回复 cc JCP  

25666 先发 code 然后回复 PROMO

## IFTTT

> https://www.vpsdawanjia.com/1452.html

使用最多的应该就是用IFTTT自动发短信设置吧

原帖教程如下

https://www.vpsdawanjia.com/1452.html

但是觉得自己配置的话步骤太繁琐了，可以直接使用这位大佬设计的一个Applet，每个月发一次短信，直接Turn On 即可。

https://ifttt.com/applets/SMGSYPzw-google-voice

点击上面链接跳转到ifttt的页面，注册/登录账号

点击那个connect 连接

设置一下时区，这里随意

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-05_05-16-28.webp)

输入你的gv号，直接 `区号 + 手机号` 即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-05_05-17-25.webp)

获取验证码并且验证

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-05_05-18-08.webp)

设置自定义保号内容和周期时间

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-05_05-18-31.webp)

设置成功

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-02-05_05-18-50.webp)

## 自动回复

但是如上方法只能自动收短信，但不能自动回复，依旧可能被判定为不活跃，所以最好还需要一个自动发短信的功能。

如果绝的以下方法太麻烦，可以在每次给你发送保号消息的时候就回复以下，随意内容。

> https://github.com/veip007/GV_GoogleVoice
> 转载自 https://www.winvps.eu/1590/

1. Google Voice 设置

进入：https://voice.google.com/u/0/settings，将“将短信转发到电子邮件地址”的开关开打

![](https://www.winvps.eu/wp-content/uploads/2020/08/1_meitu_1-1024x476.png?v=1610440898)

2. Gmail 设置
进入：https://mail.google.com/mail/u/0/?ogbl#settings/filters （需要确认是和gv同邮箱）

![](https://www.winvps.eu/wp-content/uploads/2020/08/2-1-1024x431.png?v=1610440897)

选择“创建新的过滤器” ，在发件人后填写 “@txt.voice.google.com”，然后点“创建过滤器”

![](https://www.winvps.eu/wp-content/uploads/2020/08/3_meitu_3.png?v=1610440896)

接下来在“应用标签”后选择“新建标签”，输入标签名“winvps.eu”，然后点创建

![](https://www.winvps.eu/wp-content/uploads/2020/08/4_meitu_4.png?v=1610440895)

勾选“跳过收件箱”和“应用标签”后，点“创建过滤器”

![](https://www.winvps.eu/wp-content/uploads/2020/08/5_meitu_5.png?v=1610440895)

设置后的情况

![](https://www.winvps.eu/wp-content/uploads/2020/08/6-1024x234.png?v=1610440894)

3. Google Drive 设置

进入：https://drive.google.com/drive/my-drive，选择“新建”

![](https://www.winvps.eu/wp-content/uploads/2020/08/7_meitu_6-1024x328.png?v=1610440893)

选择“更多”，“关联更多应用”

![](https://www.winvps.eu/wp-content/uploads/2020/08/8_meitu_7-1024x421.png?v=1610440892)

查找，安装，关联“Google App Script”

![](https://www.winvps.eu/wp-content/uploads/2020/08/9-1024x485.png?v=1610440891)

![](https://www.winvps.eu/wp-content/uploads/2020/08/10-1024x587.png?v=1610440890)

![](https://www.winvps.eu/wp-content/uploads/2020/08/11-1024x596.png?v=1610440889)

![](https://www.winvps.eu/wp-content/uploads/2020/08/12-833x1024.png?v=1610440888)

![](https://www.winvps.eu/wp-content/uploads/2020/08/13-1024x570.png?v=1610440887)

关联“Google App Script”后，进入“Google App Script”

![](https://www.winvps.eu/wp-content/uploads/2020/08/8_meitu_8-1024x421.png?v=1610440886)

进入“Google App Script”后，复制以下代码，替换原代码点保存，输入名称“winvps.eu”后点确定

```
function autoReplier() {
  var labelObj = GmailApp.getUserLabelByName('autoreply');
  var gmailThreads;
  var messages;
  var messagecount;
  var sender;
  var num = 5;  //设置连续自动回复邮件的次数（为防止两人都是自动回复，当发送次数达到 5 时将不自动回复）。
  var hours = 24;  //如果自动回复次数超过了上面设置的值，过了多少小时后又可以自动回复。
    
  for (var gg = 0; gg < labelObj.getUnreadCount(); gg++) {
    gmailThreads = labelObj.getThreads()[gg];
    messages = gmailThreads.getMessages();
    messagecount = gmailThreads.getMessageCount();
    for (var ii = 0; ii < messages.length; ii++) {
      
      if (messages[ii].isUnread()) {
        
        msg = messages[ii].getPlainBody();
        sender = messages[ii].getFrom(); 
 
        if (messagecount < num){
          MailApp.sendEmail(sender, "Auto Reply", "Hi, 您好！这是一条自动回复短信！本短信由 Google Apps Script 自动发出。");
        }else if( (messages[messagecount - 1].getDate().getTime() - messages[messagecount - num].getDate().getTime()) > hours * 60 * 60 * 1000 ){
          MailApp.sendEmail(sender, "Auto Reply", "Hi, 您好！这是一条自动回复短信！本短信由 Google Apps Script 自动发出。");
        }
        messages[ii].markRead();
        messages[ii].moveToTrash();
 
      }
    }
  }
}
```

![](https://www.winvps.eu/wp-content/uploads/2020/08/14_meitu_11-1024x499.png)

![](https://www.winvps.eu/wp-content/uploads/2020/08/15_meitu_10.png?v=1610440885)

点运行并授权

![](https://www.winvps.eu/wp-content/uploads/2020/08/16_meitu_12-1024x496.png?v=1610440884)

点“查看权限”

![](https://www.winvps.eu/wp-content/uploads/2020/08/17_meitu_13.png?v=1610440883)

选择账号

![](https://www.winvps.eu/wp-content/uploads/2020/08/18_meitu_14.png?v=1610440882)

点允许

![](https://www.winvps.eu/wp-content/uploads/2020/08/20_meitu_15.png?v=1610440882)

授权完成后，再点一次运行，如果没有提示错误，那么就成功了

点“修改”，“当前项目的触发器”

![](https://www.winvps.eu/wp-content/uploads/2020/08/21_meitu_16-1024x345.png?v=1610440881)

点右下角的“添加触发器”

![](https://www.winvps.eu/wp-content/uploads/2020/08/22_meitu_17-1024x211.png?v=1610440880)

如图设置后点“保存”

![](https://www.winvps.eu/wp-content/uploads/2020/08/23_meitu_18.png?v=1610440879)

测试

![](https://www.winvps.eu/wp-content/uploads/2020/08/24.png?v=1610440879)

一分钟后自动回复，成功

![](https://www.winvps.eu/wp-content/uploads/2020/08/25.png?v=1610440878)

## 30美金转成永久

没有必要，觉得有必要的可以看这里

https://www.googlevoice.cn/buy-permanent-use/

## 转移GV号

[戳这里](/2021/02/06/gvtransfer/)