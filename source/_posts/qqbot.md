---
title: 搭建 QQ 搜图 bot
tags: 
  - qq
  - 搜图
  - bot
  - 机器人
categories:
  - VPS
date: 2021-06-05 20:19:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/v2-c78b0cbf81571fdd2e0fd76555424555_720w.jpg
---

## 项目

主要用到的程序 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 和 [cq-picsearcher-bot](https://github.com/Tsuk1ko/cq-picsearcher-bot)

https://github.com/Mrs4s/go-cqhttp

https://github.com/Tsuk1ko/cq-picsearcher-bot

## 准备

需要一台linux VPS

（windows系统也可，但是因为各方面原因肯定是不如服务器效果好的）

文中服务器已安装宝塔国际版，并用其演示

已经使用ssh连接到服务器


## 下载 go-cqhttp

先下载该项目程序：

https://github.com/Mrs4s/go-cqhttp/releases

一般默认选 go-cqhttp_linux_amd64.tar.gz 作为我们amd64架构服务器用到的程序（arm架构系统选用arm64）

* Windows下32位文件为 go-cqhttp-v*-windows-386.zip
* Windows下64位文件为 go-cqhttp-v*-windows-amd64.zip
* Windows下arm用(如使用高通CPU的笔记本)文件为 go-cqhttp-v*-windows-arm.zip
* Linux下32位文件为 go-cqhttp-v*-linux-386.tar.gz
* Linux下64位文件为 go-cqhttp-v*-linux-amd64.tar.gz
* Linux下arm用(如树莓派)文件为 go-cqhttp-v*-linux-arm.tar.gz
* MD5文件为 *.md5 , 用于校验文件完整性
* 如果没有你所使用的系统版本或者希望自己构建, 请移步 进阶指南-如何自己构建


## 安装

宝塔面板中选择files（文件）目录，然后在 `/home` 下新建一个叫 go-cqhttp 的文件夹来放该程序

（其他任何地方均可，这里以/home下为例）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_20-31-16.png)

然后把之前下载的 go-cqhttp_linux_amd64.tar.gz 的文件放到该目录下 `/home/go-cqhttp` ，并解压

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_20-34-29.png)

解压后会多出来三个文件

然后ssh中输入指令

```
cd /home/go-cqhttp
./go-cqhttp
```

选择第二个ws，输入数字2回车即可（你甚至可以全部选择，输入1234回车）然后生成config.yml以后可以 `ctrl+c` 终止进程

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_20-43-07.png)

## 配置go-cqhttp

宝塔中刷新目录，然后会发现多出了个 `config.yml` 文件，打开然后编辑

主要就是填入QQ账号和密码，别的都不用管

然后Save保存文件即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_20-47-43.png)

## go-cqhttp升级

一般没有什么必要升级，但是如果你想的话：

```
cd /home/go-cqhttp
./go-cqhttp update
```

## 加载go-cqhttp

然后再次执行

```
./go-cqhttp
```

如图即正常加载了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_20-49-50.png)

当然，估计你因为异地登录会让你输入滑块验证码反馈

解决方案：https://docs.go-cqhttp.org/faq/slider.html

那么这时候按照他的指示，复制网址到浏览器打开，然后先不要拖动滑块，先按F12打开开发者工具

选择network，抓取 `ticket` 字段，并黏贴到ssh里要求输入的地方，即可通过。

## 安装node.js

qc-picsearcher-bot 项目基于 node.js所以需要安装 node.js

建议安装node.js 14版本

全版本node.js安装：

https://github.com/nodesource/distributions/blob/master/README.md

建议先回到root目录再安装

```
cd ~
```

Ubuntu安装

```
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Debian安装

```
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

CentOS安装

```
curl -fsSL https://rpm.nodesource.com/setup_14.x | bash -
```

安装完后输入

```
npm -v
```

应该能正确返回版本号。如果不能，请确定安装过程没有任何问题，然后手动添加环境目录

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-05_21-12-03.png)

## 安装部署 qc-picsearcher-bot

qc-picsearcher-bot 是个基于go-cqhttp的搜图/涩图bot

clone该项目

```
cd /home
git clone https://github.com/Tsuk1ko/cq-picsearcher-bot.git --depth=1
cd cq-picsearcher-bot
cp config.default.jsonc config.jsonc
```

这样以后有一份default默认配置文件可以随时参考恢复，*不可以删除 `config.default.jsonc` 或直接对其改名*

官方安装过程给出了三种方法，个人也是更推荐用 yarn 安装


1. 一般情况下

    ```
    npm i
    ```

2. 更推荐使用 yarn

    ```
    npm i -g yarn
    yarn
    ```

3. 如果在国内部署，可以像这样设置使用淘宝镜像再 install

    3.1 使用 npm

        ```
        npm config set registry https://registry.npm.taobao.org --global
        npm config set disturl https://npm.taobao.org/dist --global
        npm i
        ```

    3.2 使用 yarn

        ```
        npm i -g yarn --registry=https://registry.npm.taobao.org
        yarn config set registry https://registry.npm.taobao.org --global
        yarn config set disturl https://npm.taobao.org/dist --global
        yarn
        ```



## 配置文件

config.jsonc 文件需要配置的地方太多了，而且根据每个人不同的习惯都各不相同，这个还请自行配置，参考官方配置文档：

https://github.com/Tsuk1ko/cq-picsearcher-bot/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E

其中几个地方都需要配置api才能使用，如 saucenao 和 setu 功能

## screen启动 go-cqhttp

我这里使用的是screen命令来运行go-cqhttp的，也可以使用进程守护等

新建一个叫 go-cqhttp 的screen

```
screen -S go-cqhttp
```

进入 go-cqhttp 目录

```
cd /home/go-cqhttp
```

启动go-cqhttp

```
./go-cqhttp
```

退出screen，按 `ctrl + a + d`

[更多screen命令](/2021/02/14/screen/)

## 启动 qc-picsearcher-bot

配置完成后先启动 go-cqhttp 再运行本程序 ！

### 测试

初次尝试部署建议直接使用 `npm run test` 命令直接前台启动，可以直接看到运行日志，如果有错误能方便地查看报错日志

确保使用上述命令执行没有发生错误后，结束前台进程，再使用下述后台守护方式运行

### 运行

```
npm start
```

### 停止

```
npm stop
```

### 重启

```
npm restart
```

### 查看日志（平时日志也会保存在 logs 文件夹内）

```
npm run log
```

## 更新 qc-picsearcher-bot

### 检查更新

程序默认每隔一天检查一次更新，发现新版本会私聊 bot.admin 通知，你可以修改 bot.checkUpdate 配置项来更改检查频率或关闭自动检查更新

检查更新仅作检查，并不会自动进行更新，更新操作仍然需要您手动完成

你之前用哪个包管理器就用哪个来执行安装依赖的命令，不建议 npm 与 yarn 混用

```
npm run stop
git pull
npm i
```

或

```
npm run stop
git pull
npm i -g yarn
yarn
```

阅读[更新日志](https://github.com/Tsuk1ko/cq-picsearcher-bot/blob/master/CHANGELOG.md)，如果配置文件有变更，可根据说明和自己的需要对照config.default.jsonc来更新你的config.jsonc，未配置的设置项将会取config.default.jsonc中的配置值

确认无误后启动程序

```
npm start
```

## 食用

* 私聊

  * 直接发送图片即可

* 群组

  * @ 机器人并发送图片
  * 回复某人（也可以是自己）发送的图片，在消息中 @ 机器人

* 可以在同一条消息中包含多张图片，会自动批量搜索
* 搜索图片时可以在消息内包含以下参数来指定搜索范围或者使用某项功能，参数之间除 --debug 外互斥，优先级从上到下

  * --get-url：获取图片的在线链接（不会搜图）
  * --all：全库搜索（默认）
  * --pixiv：从P站中搜索
  * --danbooru：从 Danbooru 中搜索
  * --doujin：搜索本子
  * --anime：搜索番剧
  * --a2d：使用 ascii2d 进行搜索（优势搜索局部图能力较强）
  * --debug：调试，会在控制台中输出搜图时网络请求的内容

* 对于 saucenao

   * 如果得到的结果相似度低于60%（可配置），会自动使用 ascii2d 进行搜索（可配置）
   * 如果额度耗尽，会自动使用 ascii2d 进行搜索（可配置）
   * 如果搜索到本子，会自动在 nhentai 中搜索并返回链接（如果有汉化本会优先返回汉化本链接）
   * 如果搜到番剧，会自动使用 WhatAnime 搜索番剧详细信息

      * AnimeDB 与 WhatAnime 的结果可能会不一致，是正常现象，毕竟这是两个不同的搜索引擎
      * 同时展示这两个搜索的目的是为了尽力得到你可能想要的识别结果




## 热重载

https://github.com/Tsuk1ko/cq-picsearcher-bot/wiki/%E5%A6%82%E4%BD%95%E9%A3%9F%E7%94%A8#%E9%85%8D%E7%BD%AE%E7%83%AD%E9%87%8D%E8%BD%BD

bot管理员可以私聊发送指令

### 封禁用户/群组
发送--ban-u=Q号或--ban-g=群号

该封禁功能并不是真的拉入黑名单，仅仅是忽略用户/群的发言

如果想解封请自行编辑data/ban.json删除对应Q号/群号，并重启 node 项目

### 群发消息
群发消息会以 500 毫秒一条的频率来发送，避免一次性发送过多导致消息屏蔽以及帐号风险

发送--broadcast=想说的话，允许含有空格，此时会向所有群发送该消息

在此基础上支持以下额外指令，举例：

--broadcast=abc --only=123,456：只向群号为 123 和 456 的群发送消息 abc，多个群如示例所示英文逗号隔开（下同）
--broadcast=abc --exclude=123,456：向群号不为 123 或 456 的群发送消息 abc
--broadcast=abc --only-admin：只向机器人为管理员或群主的群发送消息 abc

### 配置热重载
发送--reload即可热重载配置文件config.json

### 结束进程

发送--shutdown，程序将会终止，如果你使用 pm2 守护运行，则程序会自动重启，因此可以利用这一点来达到快捷重启的效果