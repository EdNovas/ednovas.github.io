---
title: 搭建一个rss订阅bot
tags: 
  - bot
  - 网站
  - 搭建
  - RSS
categories:
  - VPS
date: 2021-06-07 14:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/connector-rssfeed-colorlogo.png
---

## 项目地址

搭建一个telegram 上的 rss 订阅 bot，两个项目都不错，这里选用的是flowerss-bot（第一个）

https://github.com/indes/flowerss-bot

https://github.com/iovxw/rssbot


## 部署

官方部署文档：

https://flowerss-bot.vercel.app/#/install

首先ssh连接上VPS，然后新建文件夹并且下载最新版本releases并解压：

（这里使用的是0.8.3版本，可能不是最新版 release地址：https://github.com/indes/flowerss-bot/releases，目前没有arm版本）

```
mkdir /home/flowerss && cd /home/flowerss
wget https://github.com/indes/flowerss-bot/releases/download/v0.8.3/flowerss-bot-v0.8.3-linux-amd64.tar.gz
tar -zxvf flowerss-bot-v0.8.3-linux-amd64.tar.gz
copy config.yml.sample config.yml
```

然后用文本编辑器编辑编辑config.yml文件，如vi，宝塔，finalshell等

## 获取bot token

去私聊[@BotFather](https://t.me/botfather)然后/newbot新建一个机器人

输入你想叫的名字，以及分配一个用户名，用户名需要以bot结尾，比如图中的 ednovas_rss_bot

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-07_14-14-58.png)

最后会返回给你bot的token，复制并黏贴到config.yml中的bot_token的位置并保存

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-07_14-17-45.png）

## 获取telegraph token

如果想要使用telegraph及时预览，可以配置telegraph token

配置如下

```
curl https://api.telegra.ph/createAccount?short_name=flowerss&author_name=flowerss&author_url=https://github.com/indes/flowerss-bot
```

例如我的就是：

```
curl https://api.telegra.ph/createAccount?short_name=ednovas&author_name=ednovas&author_url=https://ednovas.xyz
```

返回的JSON中access_token字段值即为Telegraph Token

最后还有一个allowed_users即允许使用bot的用户telegram id，可以使用[@getmyid_bot](https://t.me/getmyid_bot)获取

其他配置：

|配置项|含义|是否必填|
|:----|:----|:----|
|bot_token|Telegram Bot Token|必填|
|telegraph_token|Telegraph Token, 用于转存原文到 Telegraph|可忽略（不转存原文到 Telegraph ）|
|preview_text|纯文字预览字数（不借助Telegraph）|可忽略（默认0, 0为禁用）|
|user_agent|User Agent|可忽略|
|disable_web_page_preview|是否禁用 web 页面预览|可忽略（默认 false, true 为禁用）|
|update_interval|RSS 源扫描间隔（分钟）|可忽略（默认 10）|
|error_threshold|源最大出错次数|可忽略（默认 100）|
|socks5|用于无法正常 Telegram API 的环境|可忽略（能正常连接上 Telegram API 服务器）|
|mysql|MySQL 数据库配置|可忽略（使用 SQLite ）|
|sqlite|SQLite 配置|可忽略（已配置mysql时，该项失效）|
|telegram.endpoint|自定义telegram bot api url|可忽略（使用默认api url）|
|allowed_users|允许使用bot的用户telegram id，|可忽略，为空时所有用户都能使用bot|

## 开启程序

```
screen -S flowerss
./flowerss-bot
```

然后ctrl+a+d退出screen窗口

## 使用

私聊@ednovas_rss_bot即你刚刚创建的bot使用

更多使用说明参考官方文档：

https://flowerss-bot.vercel.app/#/usage

给频道添加订阅需要先给bot频道管理员权限，然后

/sub @ChannelID [url] 订阅

比如

/sub @ednovas2 https://ednovas.xyz/atom.xml

即可