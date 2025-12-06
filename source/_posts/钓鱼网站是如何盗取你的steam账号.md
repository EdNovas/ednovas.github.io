---
title: 钓鱼网站是如何盗取你的steam账号的（以身试险）
tags: []
id: '867'
categories:
  - - 网站
date: 2020-12-21 12:44:48
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/steam-link-generacionxbox-2.webp
---

昨天下午一个群友在steam里收到了这么一个消息，作为群主大大的我必然要以身试险，来会一会这个极有可能是钓鱼网站的抽奖活动。

![](https://cdn.max-c.com/heybox/dailynews/img/921739f7fc1e7397019d9ae63ed8faaf.png)

首先我们登入他的网站，界面如下，做的有鼻子有眼的。我们点击这个roll

![](https://cdn.max-c.com/heybox/dailynews/img/6273eab8fcf6f367c9aa43dce771ce00.jpg)

哇roll中了一个火箭联盟，但是呢这个key是隐藏起来了，说是需要我们在30分钟内登录steam账号就可以激活了。下面还有一个排行榜，上面是每个人邀请了多少人来参与并且抽了多少次key。

![](https://cdn.max-c.com/heybox/dailynews/img/37a5b9a3752e666ead740843297f6fb2.jpg)

那么我们点击登录steam就会出现这个小窗口，做的是有模有样，一不小心就登录进去了啊

![](https://cdn.max-c.com/heybox/dailynews/img/2e720ee02c34373b838736a17a8fb234.jpg)

但是有一个很大的问题啊，steam不是换界面了嘛，这波可能钓鱼网站都没有想到啊（我其实不太确定按理来说的小窗口登录是不是如下界面）

![](https://cdn.max-c.com/heybox/dailynews/img/d21ec624bdfbbb6cc06676189b452f37.jpg)

但是我们要注意，这个网址的网址他什么也不是。F12就可以看到这个页面元素，你看看这不就是两行文字嘛，根本不是网址。而且这个窗口也不是真正的弹窗。

![](https://cdn.max-c.com/heybox/dailynews/img/dacf12ccc5806fb7efeb847d4faed135.jpg)

而且有一点，如下图GIF所示，这个弹出窗口，他无法拖出这个页面，也就是说这个窗口只是这个网页给你伪造的罢了。

![](https://cdn.max-c.com/heybox/dailynews/img/867b4e3220aab0dff0fd0adeb37cd8f0.gif)

那么最厉害的是他用的还是steam的官方登录，也就是说如果你账号输错了他会提示你账号错误

![](https://cdn.max-c.com/heybox/dailynews/img/c1333ac43bcc33145ee693d3555f6497.jpg)

当输入真实的账号密码以后，会给你的邮箱发个验证码。如图所示，这个是个更改steam登录凭证的验证码，但是我相信大多数受骗的人不会注意到这个。反正都是个验证码，复制黏贴就完了。

![](https://cdn.max-c.com/heybox/dailynews/img/f15959e4181394a8f561fe6285d05cef.jpg)

复制黏贴验证码以后，就会一直在加载，承诺的key自然也是没有。

![](https://cdn.max-c.com/heybox/dailynews/img/5245b33e93d4d34390fc5722ba87429c.png)

至此这个账号的验证邮箱就被更改了，所以基本上这个账号就与你无缘了。解决方法是只能找客服证明这个账号属于你，并且提供正确的初始邮箱验证等信息才能找回账号了。

![](https://cdn.max-c.com/heybox/dailynews/img/cb46c220533b1ecfe0b96235d6941a96.jpg)

如上就是这个钓鱼网站的思路，凭借一个虚假的网站，欺骗你登录你的真实steam账号密码，然后让你乖乖交出验证码，更改邮箱、密码，完成账号盗取。

今天再看这个网站的时候他也已经被标红了（昨天还没有）

![](https://cdn.max-c.com/heybox/dailynews/img/40f0f87904ba57dd9da9e98c75721ce9.jpg)

我查看了一下这个网站的IP，发现他套了一个cloudflare的CDN。挺聪明的人为啥要干这种勾当呢

![](https://cdn.max-c.com/heybox/dailynews/img/d479285d9aba0067e1066e8f1810d696.jpg)

所以，小心为上！

**防范手段**

1.  查看网址，是否是官方网址，弹窗是否有猫腻
2.  发给你消息的人靠谱与否
3.  是不是能凭借轻轻一点就能获取免费3A大作
4.  不要将steam登录账号和密码告诉任何人或登录除了steam官方网站以外的地方
5.  可以注册一个空号来测试一下登录是否有风险

如果真的被盗了怎么办，可以参考下图

![](https://cdn.max-c.com/heybox/dailynews/img/928b4532cddc73d435ae5a1ea1e35b17.jpg)