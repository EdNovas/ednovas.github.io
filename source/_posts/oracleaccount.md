---
title: Oracle Cloud 甲骨文云账户更改密码、邮箱、租户名
tags: [oracle,vps]
categories:
  - - VPS
date: 2022-04-13 18:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/blog_post_20.webp
---

## 前言

关于注册/开机/配置甲骨文等可以看[这里](/2021/01/14/oraclecloud/)

刷甲骨文机器可以看[这里](/2021/11/28/oraclearm/)或[这里](/2022/04/13/oraclerbot/)



2022年1月开始至2月期间甲骨文陆续对各区域的服务控制台进行了升级更新。最明显的改动就是：

登录界面变化，出现二次跳转至新登录界面，并且引入了身份域（身份域默认为：Default）;
用户控制台出现变化，将原来单独的用户控制台融入到服务控制台中；
其他大量的操作细化。

新版看起来更加简单明了。当我们进入服务控制台后，点击右上角人头像标识，甲骨文账户的所有管理操作都可以在这里完成：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c4ca4238a0b9238.jpg)


下面本文就详细讲解一下如何在新版中进行更改密码、变更邮箱、添加用户、变更租户名等操作：

 

## 更改密码

点击进入【我的信息概要】，选择【更改密码】

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/8fbdbf5573b18fa-1024x492.jpg)

输入旧密码，然后再输入新密码，点击【保存】

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3c46a0407be60a1-1024x578.jpg)


再次登录时，密码就变更为你设置的新密码了。

## 密码永不过期

甲骨文每3个月会让强制更改下账户密码，可以从设置中关闭。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-02-17_00-48-13.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-02-17_00-48-12.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-02-17_00-48-12_2.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-02-17_00-48-13_2.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2022-02-17_00-48-14.jpg)

即可修改为永不过期。

## 变更邮箱

邮箱主要分两种类型：安全邮箱和通知邮箱：（*新版不再有登录邮箱这一说）

安全邮箱：忘记密码或是无法访问账户时，恢复账户使用权限的邮箱。

通知邮箱：接收甲骨文的各类通知信息的邮箱。

### 变更安全邮箱

点击进入【我的信息概要】



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/8fbdbf5573b18fa-1024x492.jpg)

在这里你会发现有一个【用户名】和【电子邮箱】，在初始注册的时候，这两个是相同的，都是邮箱名称。但是也可以是不同的。这一点我们在后面会详细讲解。

我们继续操作，点击【安全】选项进入到如下页面后，选择【恢复电子邮件】右下角的三个点，然后选择【编辑】：




![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/b772d43b49bb57b-1024x684.jpg)


首先输入登录密码进行验证，完成后输入新的恢复电子邮件，并选择【更改恢复电子邮件】：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/7866cc7fb5a03c0-1024x559.jpg)


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/99708eb58000e48.jpg)

这时候你新邮箱将会收到一封带链接的邮件，点击后输入新邮箱跟密码，即可完成更改。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/2b7374120e38c61-e1648443841997.jpg)

### 变更通知邮箱

还是在【我的信息概要】界面里，选择【更多操作】，在弹出的下拉框内选择【编辑电子邮件】


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/5aee0cc44da9dd9-1024x420.jpg)

在新弹出的页面中，选择【更改】，然后输入密码验证完成后，输入新的邮箱，然后点击【更改主电子邮箱】。（如果这里的邮箱更前面通知邮箱是一致的，则立即生效。如果是不一样的，则会出现更上面一样的邮件验证，完成验证即可。）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/d941e60b2106a76-1024x709.jpg)


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/e30609fbce6a1a7-1024x540.jpg)

回到【我的信息概要】，你会发现用户名仍然是原来的邮箱，但是电子邮件已经变为新的了。


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/9099b6d2a56494b-1024x477.jpg)

因为甲骨文注册时默认使用当时的主电子邮件作为登录方式，所以变更完以上电子邮件后，登录我们仍要输入原电子邮件名称才能登陆。但是这里原来邮箱只是作为登录时候的用户名形式，不再有任何邮箱实质意义。这一点说实话，有点“不完美”。不知道甲骨文后面是否还会调整。

对于一些强强迫症用户，总希望在登录输入用户名时，输入的是自己的邮箱或是喜欢的其他形式。那么我们可以通过添加用户来解决。

 

## 添加用户

主界面里选择【身份域】，进入身份域界面，然后在左侧选择【用户】



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/c4ca4238a0b9238-1.jpg)


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/2f5bb7747efda05-e1648444844427-1024x536.jpg)

选择【创建用户】，填写相关信息，完成后点击【创建】。这里有3点需要注意：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4864dafb55d05d7-1024x584.jpg)

1. 将电子邮件地址作为用户名：如果勾选了此项，则后面登录时输入用户名则为改电子邮件名称；如果不勾选，登录时的用户名就为此处你输入的【用户名】。
2. 分配Cloud账号管理角色：这里默认勾选。不勾选的话，不会影响你创建服务。
3. 组：建议全部勾选。
创建完成后，你创建用户的电子邮箱会收到一封邮件。点击链接，输入并确认密码后，将跳转至登录界面


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/6b5dfcf1f44c9d4-1024x549.jpg)



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/5270c475a57ca8f.jpg)



登录界面用户名就是你创建用户的电子邮件，或是当时输入的用户名，输入刚才创建的密码，即可成功登录。




![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/b427ebc8ffe2221.jpg)

## 变更租户名

原则上不建议对此进行变更，变更可能会带来风控。是否因此封号，谁也无法保证。但是对于强迫症用户来说，这里还是讲一下：

在主界面选择【租户：XXXXX】

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/f1c3a7500b919d5.jpg)

进入到【租户详细信息】界面，选择【重命名租户】，然后输入新的租户名即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/17380ddb842e984-1024x347.jpg)





![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/fae594628f003e7-1024x380.jpg)

这里有一点要注意，当你更改完租户名后可能不是即时生效。刷新租户详细信息界面，如果生效了，该处就会显示新的租户名。此时，在下次登录时，你输入新的租户名即可。有些人更改完马上退出重新登陆，输入新租户名会报错，是因为租户命名还未生效导致的。

> 转载自 CNBOY https://cnboy.org/archives/2606