---
title: Hexo博客加密插件
tags: 
  - hexo
  - 博客
  - 加密
  - hexo-blog-encrypt
categories:
  - 建站
date: 2021-05-03 20:31:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/encriptar-telefono.jpg
---


GitHub项目地址：https://github.com/D0n9X1n/hexo-blog-encrypt

## 低级

### 实现

打开`yourblogsite/themes/next/layout/custom/head.swig`文件，在<head></head>之间添加以下内容

```
#JavaScript
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入密码') !== '{{ page.password }}'){
                alert('密码错误');
                history.back();
            }
        }
    })();
</script>
```

之后，在你想要加密的文章的头文件里添加上password: yourpassword即可。

注意，这里仅针对Hexo平台的next主题。但是，它的代码和思想是通用的，你在Hexo的其他主题，甚至是Jekyll的主题里也是可以做到的，只是要摆放的位置会不一样。位置的要点是：

* 模板文件。无论是Hexo还是Jekyll，都应该在layout文件夹中。

* <head></head>之间。其实在其他位置也是可行的，但是在此代码之前的一些内容可能会被加载，不完美。

### 存在问题

目前主要问题是：

* 丑。调用浏览器的UI，各个平台的样式不统一。

* 可能被破解。如果你的博客源码是存放在GitHub这样的开源库的话，那么恭喜你。别有用心之人可以通过查看你的GitHub仓库对应文章的md文件找到这个密码。

## 高级

真正高级别的方法早就有大神给做好了，同样是在hexo插件中心 & GitHub。现将方法记录如下。

### 安装

```
npm install --save hexo-blog-encrypt
```

或者  (需要安装 Yarn)

```
yarn add hexo-blog-encrypt
```

### 快速开始

首先在 `站点配置文件`（config.yml） 中启用该插件:
```
encrypt:
    enable: true
```

然后在你的文章的头部添加上对应的字段，如 password, abstract, message

```
---
title: 文章加密
date: 2019-01-04T22:20:13.000Z
category: 教程
tags:
  - 博客
  - Hexo
keywords: 博客文章密码
password: TloveY
abstract: 密码：TloveY
message:  输入密码，查看文章
---
```


* password: 是该博客加密使用的密码
* abstract: 是该博客的摘要，会显示在博客的列表页
* message: 这个是博客查看时，密码输入框上面的描述性文字

如果你想对 TOC 也进行加密，则在 article.ejs 中将 TOC 的生成代码修改成如下：

```
    <% if(post.toc == true){ %>
        <div id="toc-div" class="toc-article" <% if (post.encrypt == true) { %>style="display:none" <% } %>>
            <strong class="toc-title">Index</strong>
            <% if (post.encrypt == true) { %>
                <%- toc(post.origin) %>
            <% } else { %>
                <%- toc(post.content) %>
            <% } %>
        </div>
    <% } %>
    <%- post.content %>
```

然后使用 `hexo clean && hexo g && hexo s`，来查看效果。

## 自定义

如果你对默认的主题不满意，或者希望修改默认的提示和摘要内容，你可以添加如下配置在 `站点配置文件` 中。

```
encrypt:
  enable: true
  default_abstract: 这是一篇加密文章，内容可能是个人情感宣泄或者收费技术。如果你确实想看，请与我联系。
  default_message: 输入密码，查看文章。
```

这样，对于每一篇需要加密的文章就不必都在在头部添加 `abstract` 和 `message` 字段了，脚本会自动添加默认的内容填充。

如果你希望对某一篇特定的文章做特殊处理（如本文的 `abstract` ，可以在对应文章的头部添加

```
---
title: 文章加密
date: 2019-01-04T22:20:13.000Z
category: 教程
tags:
  - 博客
  - Hexo
keywords: 博客文章密码
password: TloveY
abstract: 密码：TloveY
---
```

此时，博客头部的 `abstract` 会覆盖 `站点配置文件` 的 `default_abstract` 实现自定义。

### 存在问题

* 如果你开启了 字数统计功能 的话，那么本文的字数会显得比实际值大。

* 加密文章内部分脚本会失效，已知代码复制失效，输入密码后刷新页面可解决该问题。

> 作者：TauJiong
> 链接：https://www.jianshu.com/p/44e211829447
> 来源：简书