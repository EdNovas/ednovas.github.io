---
title: 如何使用hugo+github pages搭建一个个人博客
tags:
  - hugo
  - github
  - 搭建
  - 博客
  - blog
categories:
  - 建站
date: 2021-07-20 20:30:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/200316_hugo.png
---

> 转载自 Aegisprogram https://aegisprogram.github.io/posts/975b52b0.html

除了可以使用hexo来搭建个人博客之外，我们还可以使用hugo博客框架来搭建自己的个人博客。hugo和hexo相比搭建过程更加的简单快捷，需要的依赖较少，搭建过程不容易出错，对于新手来说更加的友好一些。所以如果你还没能成功搭建起hexo博客的话，那么不妨试试hugo+github pages搭建。

<!--more-->

### 简介

hugo是一个基于GO语言开发的博客框架，相比于hexo来说hugo的生成静态资源网页的速度更快。支持Markdown语法，也有较多的主题可以选择，搭建个人博客不失为一个好的选择。

### 准备工作

其实hugo的搭建不需要借助过多的工具，仅仅需要你的电脑上有一个Git环境（工具），一个GitHub账号。嫌弃麻烦的话可以直接下载使用cmder或者是Git Bash，如果你也是使用的Windows Terminal的话，那么可以参考我之前的[Windows Terminal配置](https://aegisprogram.github.io/posts/f5bc5ed5.html#more)中关于将Git Bash集成到Windows Terminal上的博客。下面的操作我将在Windows Terminal上进行。前面说到的其他工具也可以，命令没有什么差别。

### 下载hugo

第一次搭建我建议下载二进制文件，而不是其他命令行方式下载，这样做是为了减少出错的概率。先去GitHub下载[hugo](https://github.com/gohugoio/hugo/tags)，根据自己的系统下载对应的二进制文件即可。这里需要注意的是，hugo和hugo_extended是有些区别的，部分主题会指定使用hugo_extended。

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/hugo/hugo.5t5uqj8xpdc0.png)

所以你在使用主题的时候，或者说你在下载版本的时候要考虑清楚。在电脑上新建一个文件夹，之后在里面再新建一个bin文件夹，然后将下载的二进制文件解压过去，保证bin下载只有hugo的二进制文件，没有再往下的目录，即`D:\hugo\bin\hugo.exe`这样的方式。然后在系统环境变量中找到path将二进制文件的路径添加进去。在终端输入`hugo version`，如果显示版本号则表示环境变量配置正确，否则就要进行检查。

### 开始搭建

我们进入hugo的文件夹中执行`hugo new site blog`建立站点文件夹（blog只是一个例子，你可以随意取什么名字），进入blog文件夹中我们会发现里面内容如下：

> archetypes:配置文章元数据
>
> content:博客文章所在目录
>
> data:用来存放数据文件，一般是json文件
>
> layouts:网站布局
>
> static:一些静态的内容，例如图片等
>
> themes:博客主题
>
> config.yml:站点配置文件,支持yml.toml和json三种格式的

### 下载配置主题

这时候我们先去选择一个自己喜欢的主题然后将其克隆下来，我以PaperMod为例。

我们找到主题仓库，然后在blog下执行

```
git clone https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

这个时候我们就会看到themes下面多了一个叫做PaperMod的文件夹，里面存放的就是主题资源。

这里需要注意的是：不同的主题之前的配置方式是不同的，甚至会对hugo的版本有限制，所以配置主题的时候一定要仔细查阅主题文档。有些主题下面有一个exampleSite文件夹，那么你主要找到下面的config文件，然后复制到blog下面，将原本的config文件替换掉。之后你再对config文件进行自己的配置。

还有一种主题，例如我这里使用的PaperMod下面就没有exampleSite，所以就需要自己在官方文档中找到示例的配置然后复制到blog下的config中。特别要说明的是必须要在theme中指明主题名称，否则hugo会找不到该主题模块。

如果没能克隆到主题，那么你需要先执行一次`git init`。

### 部署到GitHub Pages

在GitHub上新建一个仓库，命名方式为`你的GitHub用户名+github.io`,勾选第一个添加README文件，点击创建。

我们完成上述的配置之后，我们接下来在blog下执行`hugo`,这个时候我们会看到blog中多了一个public文件夹。我们先在blog下执行`hugo new post/first.md`生成一个Markdown文件，vi进去之后我们先输入hello world然后保存退出。我们接着输入`hugo -t 主题名`生成静态资源文件，输入`hugo server -D`先在本地预览一下效果，没有问题之后我们进入public文件夹，依次执行以下命令:

```markdown
git init(初始化git)
git add . (添加静态文件到缓存区)
git branch -M master (新建一个master分支)
git commit -m 'initial commit'(提交说明随便写)
git remote add origin git@github.com:username/username.github.io.git
(这是ssh提交方法， 需要生成Token搭配GitHub Actions自动发布）。
git remote add origin https://github.com/ilemonEllen/ilemonEllen.github.io.git
(这是采用https方法提交，通过本地的public连接远程仓库提交).二者任选其一就可以。
git push -u origin master (提交到master上)
```



然后我们去仓库中点击`setting-----pages----GitHub Pages`下将发布分支改为master.等待一会儿，不出意外的话很快就能看到你的博客了。

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/hugo/hugo2.hm80koga1o0.png)

### 注意问题

1.如果你的博客已经成功提交但是没有显示内容

只需要将文章元数据的draft的true改为false，然后提交就可以了。

2.git 提交上去的是blog下的文件夹，但是GitHub Pages显示404

提交博客都是在public文件夹中提交的，在提交之前要也特别注意要先执行`hugo -t 主题名`操作，生成静态资源文件。在public中提交时，要执行`git init`，不然会出现无法提交或者是只提交上去一个public文件夹。

3.remote  origin already exists怎么解决

这是因为你之前于该分支的关联没有解除，所以你需要执行`git remote rm origin`，然后再与远程仓库分支建立连接。

4.出现LF will be replaced by CRLF警告

出现这个现象的原因是在Windows中使用CRLF标识一行的结束，而在Linux/UNIX系统中只使用LF标识一行的结束，其实这对于博客部署来说没有什么影响。如果要去掉的话我们只需要执行以下命令：

```markdown
查看core.autocrlf属性
git config --global --get core.autocrlf
git config --get core.autocrlf
true
设置core.autocrlf属性
git config core.autocrlf false
git config --get core.autocrlf
false
```

到此hugo+github pages的搭建就结束了。至于使用自动脚本+GitHub Actions 自动发布网上的教程有很多，我就不在这里赘述了。

### 常用的命令

```markdown
hugo -t + 主题名 本地生成静态资源
hugo server -D 本地预览
hugo new post/xxx.md  新建博客文章
git add .
git commit -m "提交说明"
git push
git remote -v 查看分支连接
git branch -a 查看远程分支
git push origin --delete <branchName> 删除远程分支
```

### 参考文章

1.[Git中的“LF will be replaced by CRLF”警告详解](https://blog.csdn.net/taiyangdao/article/details/78629107)

2.[PaperMod](https://adityatelange.github.io/hugo-PaperMod/)

3.[Hugo的基本安装｜网站生成｜托管至Github Pages](https://zhuanlan.zhihu.com/p/350977057)





