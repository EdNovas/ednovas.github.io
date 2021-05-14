---
title: 搭建proxypool节点池（go）
tags: [proxypool,节点池,免费,白嫖,vps]
id: '1239'
categories:
  - - 建站
date: 2021-04-22 17:38:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://api.ixiaowai.cn/gqapi/gqapi.php
# highlight_shrink: true
---

## 安装宝塔

为了方便，还是安装宝塔或者aapanel（宝塔国际版），个人认为aapanel比宝塔好用不止一点，很多设置更加人性化，不过语言是英文的

宝塔：

https://www.bt.cn/

安装：https://www.bt.cn/bbs/thread-19376-1-1.html

aapanel：

https://www.aapanel.com/index.html

安装：https://www.aapanel.com/install.html

ubuntu
```
wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh
```

Centos/Debian/Fedora
```
yum install -y wget && wget -O install.sh http://www.aapanel.com/script/install_6.0_en.sh && bash install.sh
```


## 安装GO环境

Golang官网下载地址：https://golang.org/dl/

选择对应架构的最新版本，一般默认都是 `linux-amd64` 即可

https://golang.org/dl/go1.16.3.linux-amd64.tar.gz （截止至2021.04.22最新版本是1.16.3）

在 ~ 下创建 go 文件夹，并进入 go 文件夹（为了方便找到go环境，创建一个新文件夹)

```
mkdir ~/go && cd ~/go
```

下载的 go 压缩包（这里是1.16.3版本的，根据最新版本自行更改版本号）

```
wget https://dl.google.com/go/go1.16.3.linux-amd64.tar.gz
```

执行tar解压到/usr/loacl目录下（官方推荐），得到go文件夹等

```
tar -C /usr/local -zxvf  go1.16.3.linux-amd64.tar.gz
```

添加/usr/loacl/go/bin目录到PATH变量中。添加到/etc/profile 或$HOME/.profile都可以

习惯用vim，没有的话可以用命令安装一个

```
sudo apt-get install vim
```

或

宝塔直接找到/etc 下的profile文件打开，并在最后一行添加

```
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
```

保存退出后source一下

```
source /etc/profile
```

检查一下是否已经正确安装环境，应该返回 `go version go1.16.3 linux/amd64`

```
go version
```

## 安装go-bindata

如果你想要编辑网页内容的话就需要go-bindata

如果想要默认跳过这一步即可

项目地址：

https://github.com/go-bindata/go-bindata

安装

```
go get -u github.com/go-bindata/go-bindata/...
```

安装以后会发现他安装在了GOPATH下

可以使用

```
go env
```

查看go相关环境目录

默认GOPATH应该是在 `GOPATH="/root/go"`

访问该目录下的/bin文件夹内，会发现有个`go-bindata`

复制黏贴到 `GOROOT="/usr/local/go"` 目录下/bin内

```
go-bindata -version
```

应该可以正常返回go-bindata的版本号了 `go-bindata 3.1.2 (Go runtime go1.16.3). Copyright (c) 2010-2013, Jim Teeuwen.`

至此安装完成全部环境了

## 下载运行程序

用go命令获取最新版本的程序

```
go get -u -v github.com/Sansui233/proxypool
```

或

蓝奏云下载0.7.1版本：https://ednovas.lanzous.com/ilMweoe20oj

默认下载的程序会在`/root/go/pkg/mod/github.com/!sansui233/proxypool@v0.7.1`下，建议将其换个位置

我是放在了`/www/wwwroot/proxypool/`下

修改`/config/config.yaml`中的网址，为你要用的网址。下面端口建议保持默认。下面抓取频率和速度等自己设定

我是开了个screen运行main.go，screen使用方法参考[这里](/2021/02/14/screen/)

screen窗口中运行（程序根目录下）

```
go run main.go -c ./config/config.yaml
```

## 解析域名

将你的域名解析到该vps的ip，然后宝塔内添加网址，添加ssl证书并开启强制https

网址设置中找到反代，填入`127.0.0.1:12580` 和`$host` 并保存

访问网站应该就可以看到内容了

## 修改网站内容

确保自己已经正确安装并且能显示go-bindata的版本号

自行修改`/www/wwwroot/proxypool/proxypool-0.7.1/assets/html/`下的html文件，请务必保留原作者版权信息！！！不要逼着大佬删库

修改后将`/www/wwwroot/proxypool/proxypool-0.7.1/docs/`下的`genbindata.sh`移动到程序根目录下，也就是`/www/wwwroot/proxypool/proxypool-0.7.1/`下

然后运行genbindata.sh

```
./genbindata.sh
```

等待一会即可在`/internal/bindata/html/`下生成新的`html.go`文件

然后重启main.go程序，刷新页面，即可生效

## DEMO

https://proxy.ednovas.xyz

（访问不了或者加密码了就是暂时闭站）
