---
title: VPS宝塔搭建云便签网站
tags: [VPS,网站,便签,笔记,云便签,宝塔]
id: '1173'
categories:
  - - VPS
date: 2021-01-25 13:32:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Note.com_Logo.png
#highlight_shrink: true
---

## 准备工作：
* Minimal-web-notepad：
我们所需要的GitHub项目地址：https://github.com/pereorga/minimalist-web-notepad

* 带密码和更多功能的改版minimal-web-notepad：
GitHub项目地址：https://github.com/domOrielton/minimal-web-notepad

* cloudflare/或域名自带的解析服务
* 一个域名
* 一台VPS


## 下载项目

前往上面的地址，直接下载Code代码，并解压。

## 安装宝塔

宝塔一键安装命令：

https://www.bt.cn/bbs/thread-19376-1-1.html

根据自己的VPS系统进行选择

Centos安装：
```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```
Ubuntu/Deepin安装：
```
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

## 宝塔建立网站

安装完宝塔以后会出现如下地址和密码，访问外网面板地址即可。输入用户名和密码。如果无法访问面板，多半是防火墙没有放行，关闭即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-25_13-40-02.webp)

进入宝塔以后，安装nginx和php，其他用不到。耐心等待大概10分钟左右安装完成。

进入网站，添加你的域名，一般用三级域名即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-25_13-42-36.webp)

然后在网站设置中给域名添加个证书。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-25_13-48-05.webp)

## 配置网站

进入网站根目录，把前面下载的GitHub项目里的几个文件都放进来。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-25_13-52-13.webp)

然后编辑index.php，把文件第四行，将网址改为你自己的域名，我这里就是`note.ednovas.xyz`
```
$base_url = 'https://note.ednovas.xyz';
```
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-25_13-52-32.webp)

在第十九行可以修改生成网址的随机字符串位数和字符（默认也可）：
```
header("Location: $base_url/" . substr(str_shuffle('234579abcdefghjkmnpqrstwxyz'), -5)); //前面括号里可以增加其他字符，后面的 5 可以修改为其他位数
```

在这个目录下新建一个`_tmp`的文件夹，并给他755的权限（默认新建的文件夹就是755）。这个文件夹就是存放所有生成的网页笔记的存放地。

站点的设置，伪静态里面复制黏贴上如下内容并保存。

```javascript
location / {
rewrite ^/([a-zA-Z0-9_-]+)$ /index.php?note=$1;
}
```

如果不是在网站根目录下，而是在子目录下，则改为如下（跟着上面步骤走的就用第一个伪静态设置即可）
```javascript
location ~* ^/notes/([a-zA-Z0-9_-]+)$ {
    try_files $uri /notes/index.php?note=$1;
}
```

还可以修改 favicon.ico 图片改为自己的想要的网站图标。
最后打开域名即可，如 https://note.ednovas.xyz 。
***
对于带密码版本的使用方法和上面是一样的，不过在config.php里面修改网址的时候，直接改为如下，把后面一串全改成这个，记得留着最后的;
```
$base_url = 'https://pwnote.ednovas.xyz'; 
```

除此之外伪静态需要改为
```
location / {
    if ($query_string ~ "^view") {
        rewrite ^/([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)$ /view.php?note=$1 last;
    }
    if ($query_string ~ "^simple") {
        rewrite ^/([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)$ /simple.php?note=$1 last;
    }
    rewrite ^/([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)$ /index.php?note=$1 last;
}
add_header  X-Robots-Tag "noindex, nofollow, nosnippet, noarchive";
```

## Demo
原版：
https://note.ednvoas.xyz
加密码等功能：
https://pwnote.ednovas.xyz