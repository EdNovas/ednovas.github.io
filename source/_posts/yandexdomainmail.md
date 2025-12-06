---
title: Yandex 免费域名邮箱和配置SMTP
tags: [mail,yandex,smtp]
categories:
  - - 杂
date: 2022-02-08 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yandexmail.png
---

Outlook e5 a1 a1p等订阅可以自定义域名，但是比较复杂或者需要一些特殊手段，但是yandex mail提供免费的域名邮箱服务。这项服务叫做Yandex Connect，免费提供1000个子邮箱，每个子邮箱10G容量。查阅过官方文档，并没有找到明确解释，但是外网网友据说每个邮箱有每天3000封邮件的发件限制，相比QQ、Gmail这些只有每日500封的已经很厉害了。而且注册极其容易。此外还有SPF/DIKM配置能十分有效的防止邮件进入垃圾箱的概率。

## 注册主账号

就类似Office E5一样，需要一个主要的管理员账户，就是直接去yandex官网注册个即可 

https://passport.yandex.com/registration

可以使用手机号或者安全问题两种方式注册，实测国内 +86 手机号可以验证。GV貌似也可行。

## 绑定域名

https://connect.yandex.com/pdd/

上述链接是原来的界面，但是现在yandex connect改版了，免费的yandex connect入口被藏起来了，需要去

https://connect.yandex.com/portal/admin/domains 页面，然后就会提示你的账户还不是yandex connect计划，这样就可以选择直接加入免费的yandex connect计划（右上角账户那个地方确认加入yandex connect）。

https://admin.yandex.ru/ 页面可以再次回到管理页面（类似Microsoft Admin一样）

## 验证域名

你可以直接更改 ns 记录到yandex的（不推荐）

或者

使用dns验证，按照他的要求配置域名的MX记录、SPF 与 DKIM的TXT记录

直到显示如下图所示的 Domain Configured 即全部完成了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-38-56.jpg)

## 添加用户

Users内添加用户即可，Language记得选择English，除非你看的懂俄文。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-40-14.jpg)

这样就可以设置为管理员用户了，下次就可以直接用这个账户登录[admin页面](https://admin.yandex.ru/)了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-42-26.jpg)

## 配置SMTP

转到Email中，选择设置，然后Email clients，把 `From the imap.yandex.com server via IMAP` 和 `App passwords and OAuth tokens` 打开并保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-44-50.jpg)

右上角选择账户管理

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-46-17.jpg)

往下拉，选择 `Passwords and authorization`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-47-54.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-48-15.jpg)

创建APP 密钥，一定要保存下来。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-02-08_17-48-37.jpg)

配置SMTP的话，就是

SMTP服务器地址：smtp.yandex.com

SMTP端口：465

SMTP加密方式：SSL

SMTP账户：你的yandex邮箱（确保mail的设置中开启了IMAP）

SMTP密码：你刚刚设置的APP Passwords
