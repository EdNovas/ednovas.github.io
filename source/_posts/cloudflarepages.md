---
title: Cloudflare Pages部署
tags: 
  - cf
  - cloudflare
  - cloudflare pages
  - 建站
  - 网站
categories:
  - 建站
date: 2021-07-04 12:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/e8a8c56d.webp
---

## Cloudflare Pages

### Cloudflare Pages 是什么？

[Cloudflare Pages](https://pages.cloudflare.com/) 是一个使用 JAMstack 的网站部署平台，和 GitHub Pages 类似，都是一个静态站点部署平台。

> Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.
> 
> Cloudflare Pages is currently in open beta.
> 
> 来自Cloudflare Pages 官网

### JAMstack 是什么？

[JAMstack](https://jamstack.org/) 最开始是 JavaScript、API、Markup 技术栈的一个缩写，由 Mathias Biilmann 提出（感觉就是为了推销 Netlify 服务的 🤔），当然现在已经不止于此了。

> A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup
> 
> Mathias Biilmann (CEO & Co-founder of Netlify)

按照官网介绍，现在 JAMstack 是新一代的网站架构，通过预渲染和可重用的 API，使其同时拥有静态和动态站点的优势。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/132321.png)

> Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.
> 
> Jamstack 官网

## 托管HEXO

https://pages.cloudflare.com/

登录后绑定你的GitHub账户,然后授予权限,权限全给或者只给你的GitHub Pages仓库都可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-04_12-32-20.png)

然后随便输入个project name项目名称,不可用中文,保持默认的GitHub仓库名也可

framework preset选择None,因为GitHub里是已经渲染好的静态网站了,所以`build command`构建命令和`build output directory`也都空着就行,下面的`Path`也空着即可,然后点击`Save and Deploy`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-04_13-30-41.png)

构建需要数分钟,耐心等待即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-04_12-13-53.png)

构建完成后的域名十分复杂,可以自定义域名

`Settings`设置中还可以便捷的开启`Access policy`和`Web Analytics`十分贴心

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-07-04_13-34-25.png)

## DEMO

https://ednovas.xyz

(本站已从GitHub Pages迁移到Cloudflare Pages)

> 参考 https://www.chengxiaobai.com/trouble-maker/build-and-host-hexo-site-with-cloudflare-pages