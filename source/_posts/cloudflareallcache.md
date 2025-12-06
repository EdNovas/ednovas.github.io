---
title: CloudFlare 缓存全站
tags: [cloudflare, cf]
categories:
  - - 建站
date: 2021-10-29 19:03:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/install-cloudflare-1.png
# highlight_shrink: true
---

CloudFlare 默认只对静态资源进行缓存。动态资源是默认不缓存的。如果你的内容基本是静态的或者不在意实时更新的话，可以使用 CloudFlare 的页面规则设置缓存所有内容。免费用户可以设置3条页面规则，Pro 用户可以使用 30 条规则。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-07-33.png)

如果要全域都走这条规则的话，就使用 `*`表示全部，比如 `*.ednovas.xyz/*`就是代表所有的`ednovas.xyz`前缀后缀的域名都要走这个规则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-08-52.png)

还可以加上一条 `Edge Cache TTL`，此项为cloudflare多久去检查你的服务器并更新

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-09-59.png)

如果有的时候进不去后台，可以设置个Cache Level 的 bypass规则，并且设置其为置顶规则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-29_19-13-18.png)