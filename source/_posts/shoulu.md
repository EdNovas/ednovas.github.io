---
title: Hexo提交百度和Google谷歌收录
tags: 
  - 收录
  - 网站
  - 建站
  - hexo
  - google
  - 百度
  - baidu
categories:
  - 建站
date: 2021-05-07 06:14:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/hexo_logo.png
---

> 文章作者: Hansion
> 文章链接: http://www.hansion.win/2020/04/13/hexo-bo-ke-deng-jing-tai-wang-ye-ti-jiao-bai-du-he-google-gu-ge-shou-lu/

## 站点地图

> 站点地图是一个网站所有链接的容器。很多网站的连接层次比较深，爬虫很难抓取到，站点地图可以方便爬虫抓取网站页面，通过抓取网站页面，清晰了解网站的架构，网站地图一般存放在根目录下并命名sitemap，为爬虫指路，增加网站重要内容页面的收录。站点地图就是根据网站的结构、框架、内容，生成的导航网页文件。站点地图对于提高用户体验有好处，它们为网站访问者指明方向，并帮助迷失的访问者找到他们想看的页面。
> -百度百科

## 生成站点地图

### 安装站点地图生成插件

```
npm install hexo-generator-baidu-sitemap --save
npm install hexo-generator-sitemap --save
```


### 在博客根目录的_config.yml中添加自动生成sitemap的配置

```
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

同时确认一下该文件里面url对应的是否是接下来要提交的域名

### 生成和部署

```
hexo g
hexo d
```

此时会在public目录下生成两个文件

> sitemap.xml 用于提交给谷歌

> baidusitemap.xml 用于提交给百度

### 部署成功后，在浏览器打开 你的域名/baidusitemap.xml，成功展示即代表成功

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413210038.png)

## 提交到百度站长（百度收录）

### 解决百度不爬取Github Pages的问题

如果你的博客部署在Github Pages,百度是不会爬取的，这种情况需要借用其他平台转换一下。

这里以coding为例

 在coding中也创建一个博客项目，取得提交地址

 在博客根目录的_config.yml中添加coding仓库的配置，注意增加了-号，这样在部署的时候会同时部署到Github 和 coding

```
deploy:
- type: git
  repository: https://github.com/hansionit/hansionit.github.io.git
  branch: master
- type: git
  repository: https://e.coding.net/hansion_it/Blog.git
  branch: master
```

 hexo g -d生成部署一下，会提交代码到coding

 在coding中开启pages服务，配置自定义域名，在你的域名解析控制台增加两条CNAME，解析线路选择百度，让百度解析到coding的地址

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414122236.png)

### sitemap方式提交

查询是否被收录

site:你的域名

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413204214.png)

若没有收录，则点击提交网址进行提交

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414122915.png)

然后打开 百度搜索资源平台，进入站点管理 -> 添加网站

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413202939.png)

添加完网站后，点击管理站点 -> 站点属性设置

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413210128.png)

选择链接提交

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413210323.png)

选择sitemap，输入上文中的sitmap地址，点击提交

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413210527.png)

如果提示错误，以下文件已经提交过了，如想重新提交，请先到文件对应工具的站点下删除此文件。

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413211123.png)

可在下方进行勾选删除后重新提交，如果链接一模一样，没有必要删除，点击删除按钮左边的手动更新文件更新一下即可

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413211221.png)

### 主动推送方式提交

安装插件npm install hexo-baidu-url-submit --save

在博客根目录的config.yml中添加

```
baidu_url_submit:
  count: 100                 # 提交最新的多少个链接
  host:       # 在百度站长平台中添加的域名
  token:     # 秘钥
  path: baidu_urls.txt
```

token在推送的接口中有

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413212519.png)

同样是该文件，在deployer中新加一行type: baidu_url_submitter,注意需要为两个type前面添加-符号，结果如：

```
deploy:
- type: git
  repository: https://e.coding.net/hansion_it/Blog.git
  branch: master
- type: baidu_url_submitter
```

生成部署

```
hexo g
hexo d
```

若最后有输出{"remain":2997,"success":3} INFO Deploy done: baidu_url_submitter,则代表成功,success的值代表成功多少条，remain的值代表当天剩余可推送条数

### 自动推送方式提交

Hexo的有些主题已完成了此步骤，可先自行确认是否已经完成，一般完成此步骤的主题的_config.yml文件中会有baidu_push属性，将其设置为true

选择自动推送 -> 复制代码

没有集成这项功能的，我们可以把代码粘贴到 header.ejs 文件的 <head> 与 </head> 标签之间

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200413211705.png)

## 提交到谷歌搜索（谷歌收录）

进入Google Search Console https://www.google.com/webmasters/tools/home?hl=zh-CN 登录你的谷歌账号

在网址前缀中填写地址

下载验证文件

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414124339.png)

存入主题的source目录，而不是根目录的source目录，hexo g -d生成部署，然后点击验证，验证成功如下图所示。若提示您的验证文件中的内容不正确。您使用的验证文件是从这里下载的吗?,你需要检查一下目录是否放至正确

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414132047.png)

点击前往资源页面，点击站点地图,输入站点地图的地址，点击提交

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414132514.png)

提交成功后，若显示无法获取，点击无法获取会进行网页获取，再刷新网页即可显示成功

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414132654.png)

可以顺便把百度的sitemap也提交上baidusitemap.xml,成功结果如下：

![](https://my-online-pics.oss-cn-beijing.aliyuncs.com/img/20200414132951.png)

> 文章作者: Hansion
> 文章链接: http://www.hansion.win/2020/04/13/hexo-bo-ke-deng-jing-tai-wang-ye-ti-jiao-bai-du-he-google-gu-ge-shou-lu/
