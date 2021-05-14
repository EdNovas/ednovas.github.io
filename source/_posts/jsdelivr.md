---
title: 利用GitHub+jsdelivr搭建一个图床
tags: [白嫖,图床,GitHub,jsdelivr,picGO]
id: '1170'
categories:
  - - 建站
date: 2021-01-24 17:18:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://qntemp3.bejson.com/upload/77230833517097600.png?imageView2/0/w/0/h/0/format/webp
#highlight_shrink: true
---

>转载自 Daibi_mua https://blog.keepdai.cn/jsdelivr.html
>Daibi_mua 大佬的博客 https://keepdai.cn

# 图床的选择:

1. 微博图床:以前我是经常用的,后来开启防盗链就开始麻烦起来了,所以果断放弃
2. SM.MS:稳定,经营了四年多了,但是是国外服务器,速度堪忧
3. 大厂储存服务:例如七牛云、又拍云、腾讯云COS、阿里云OSS等，操作繁琐，又是实名认证又是域名备案的，麻烦，而且还要花钱（有钱又不怕麻烦的当我没说）
4. GitHub图床:免费，但是国内访问速度慢（不过没关系，利用 `jsDelivr` 提供的免费的 CDN 加速 速度足够了）

# 方法

## 新建 GitHub 仓库![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@424fd2eb0c23da9b0618116308bf4088b55ef21d/2021/01/24/d6776c6f890e614598c8c67d677a6a13.png)

![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@29ae88b26443b7c1f7403ff2c8c1a5b4f94da79c/2021/01/24/ed784289cf94c93bae85e996f6630cbe.png)

## 生成一个 Token

- 点击用户头像 -> 选择 设置![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@0e39addd9169fc762ada516c2790bc5725a7df9d/2021/01/24/d0d3822be5af7e9851a6461dd95fc4db.png)

- 点击开发者设置<img src="https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@c7e4542abc39b700cf6638e92dd7cb72d220b29d/2021/01/24/a0912af7c97647331fe9b25677ac7367.png" style="zoom:50%;" />

- 点击Personal access tokens![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@7cb21955b032aee0e574638c210c5ff12561d931/2021/01/24/0cad3ab9effa2738a4e99b6b8e8de966.png)

- 点击Generate new token![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@c88b9dc8c04c256dd2f8ab4a0ac4a898b6d20c55/2021/01/24/9f84a1744ad9d49f8b91c7105d55ae4b.png)

- 填写Token描述，勾选repo然后点击Generate token生成一个Token

  ![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@64b1db98bc6ccba37d0cbe71f8d0128f52219e30/2021/01/24/8ead9e9590df7c8801b75014d83018fc.png)

- 获取 Token密钥

> 注意这个 Token 只会显示一次，自己先保存下来，或者等后面配置好 PicGo 后再关闭此网页

## 配置 PicGo 并使用 jsdelivr 作为 CDN 加速

> 前往下载PicG（[点击下载](https://github.com/Molunerfinn/picgo/releases)），安装好后开始配置图床

设定仓库名：按照用户名/图床仓库名 的格式填写

设定分支名：main

设定 Token：粘贴之前生成的Token

指定存储路径：填写想要储存的路径，如 img/，这样就会在仓库下创建一个名为img的文件夹，图片将会储存在此文件夹中

设定自定义域名：它的的作用是，在图片上传后，PicGo 会按照自定义域名+上传的图片名的方式生成访问链接，放到粘贴板上，因为我们要使用 jsDelivr 加速访问，所以可以设置为https://cdn.jsdelivr.net/gh/用户名/图床仓库名

![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@bf4e584c882f501b6e8bb3ae55b5a17df9b73d33/2021/01/24/1ce5e15083a20654d8d694f58ffa2fe6.png)

## 使用第三方图床使用GitHub图床

因为GitHub服务器在国外,国内经常抽风,导致上传失败,这时候就可以自己白嫖一个国外服务器然后搭建一个api通过这个api上传到GitHub,[个人版本](https://github.com/yumusb/autoPicCdn);当然如果你嫌烦,可以用[吹逼图床](https://chuibi.cn/)

- 在picGo下载插件![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@d285a3836b5aee2038800f37062378ff61991e13/2021/01/24/89fdd9c4b649e26a5a2cd90cc673ae92.png)

- 然后登录使用GitHub登录吹逼图床,然后再次点击用户图标进行设置

![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@3be766c8839bcf069b22725aabbedf9aafbdffed/2021/01/24/1d2f4f4c715c41d103725fa59cc7b133.png)

- 然后在主界面复制你的接口[注意不要泄露这个接口,不然他人就可以使用你的接口上传图片]

![](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@5efcd17edd183aadef21681265ac0866799ae177/2021/01/24/a8a71bcca4cd13fbb4b6e7fb7ecacf66.png)

- 回到picGo进行配置

![image-20210124132702587](https://cdn.jsdelivr.net/gh/Daibi-mua/cdn2@7f388e99a1034a766166b9f872d016263d6476c9/2021/01/24/857847e0e6ee0e1385bc1abdf5eccf3f.png)

接下来你就可以愉快的使用GitHub+jsdelivr当作图库啦

值得注意的是,理论上讲GitHub仓库大小是100g,但到了1g就会有人工审核,而使用jsdelivr加速的文件到达50m[也就是仓库大小]仓库里的资源就有可能失效,仓库理论上是无限建的,到了50m可以新建一个新的来达到白嫖的效果

此外 PicGo还有相册功能，可以对已上传的图片进行删除，修改链接等快捷操作,PicGo还可以生成不同格式的链接、支持批量上传、快捷键上传、自定义链接格式、上传前重命名等，更多功能自己去探索吧！

完成之后就可以畅快书写，上传直接快捷键完成，复制粘贴，再也不用手动去拖动图片上传了，更过功能尽情去体验吧！

