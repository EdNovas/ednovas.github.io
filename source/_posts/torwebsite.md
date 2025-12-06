---
title: 暗网网站搭建和暗网域名申请方法
tags: [建站]
categories:
  - - 建站
date: 2022-04-20 20:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/diferencia-deepweb-y-dark-web.png
---

## 直接安装

一般可以通过apt直接安装tor服务

```
apt install tor
```

如果不行请进行以下操作

## 手动安装

修改source.list

```
sudo vi /etc/apt/sources.list
```

最后加下面这两行

```
deb https://deb.torproject.org/torproject.org stretch main
deb-src https://deb.torproject.org/torproject.org stretch main
```

添加密钥

```
curl https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --import
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | apt-key add -
```

安装

```
apt update
sudo apt-get install tor
```

dns选择
这里默认是 `deb.torproject.org`
备选的有 `deb-master.torproject.org`、`mirror.netcologne.de`、`tor.mirror.youam.de`

## 编辑tor配置文件

```
vi /etc/tor/torrc
```

添加

```
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 127.0.0.1:80
```

启动tor

```
sudo service tor start
```

一旦启动，那么你的域名也就生成了

查看域名

```
cat /var/lib/tor/hidden_service/hostname
```

浏览网站

之后你可以可以通过在tor浏览器客户端去访问网页了

## 暴力运算获取好看的Onion地址

说是暴力一点都不奇怪，.onion的域名生成是私钥>（rsa）>公钥>（sha1）>杂凑值>（base32编码）>得到很丑的地址.onion。这道理跟比特币生成特定地址是同样的，但是因为计算量太大所以大家都会折衷，只要地址前几位有个人特色就好。

所以原理是，使用高性能运算机器，不停的一值尝试不同的私钥输入，看看有没有满意的结果，例如Facebook的洋葱地址“ facebookcorewwwi.onion ”。相当的漂亮，相当的好看，要爆破这么多位，大概也只有Facebook等拥有超大规模服务器集群的厂商可以做得到，因为在密码学上的评估要暴力解出这样的结果以1.5Ghz处理器要260万年，惊为天人Facebook展现出庞大运算的惊人实力。这是暗网目前最漂亮的域名了。

项目地址：

https://github.com/katmagic/Shallot

https://github.com/lachesis/scallion

https://github.com/cathugger/mkp224o

如果运行过程中缺了什么套件沒有办法运行

可以输入以下命令：

```
sudo apt-get install libssl-dev
```

> 转载自 https://ssrshare.github.io/2020/02/27/darkweb-webbuild/
> https://www.anwangxia.com/242.html