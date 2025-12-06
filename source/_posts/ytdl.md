---
title: youtube视频下载bot
tags: [youtube,视频,bot]
categories:
  - - 杂
date: 2021-09-21 15:59:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/is-it-legal-to-download-youtube-videos.jpg
# highlight_shrink: true
---

## 项目地址

https://github.com/tgbot-collection/ytdlbot

## heroku部署

直接点击GitHub项目里的`deploy to heroku` 即可

## 直接部署

（需要python3环境，这个请自行安装）

```bash
cd /home
git clone https://github.com/tgbot-collection/ytdlbot.git
cd ytdlbot
pip3 install -r requirements.txt
# 配置环境变量 APP_ID APP_HASH TOKEN
export APP_ID=1111 APP_HASH=dddd TOKEN=xxx
screen -S ytdlbot
python3 ytdl.py
```

最后`ctrl+a+d`退出screen（习惯使用screen，也可以使用systmd等）


## docker简易安装

```bash
docker run -e APP_ID=111 -e APP_HASH=111 -e TOKEN=370FXI bennythink/ytdlbot
```


## docker完整安装

### 获取docker-compose.yml

下载docker-compose.yml到文件夹内，如 `~/ytdl/docker-compose.yml`

### 创建VIP数据库

```bash
mkdir ~/ytdl/data/
touch ~/ytdl/data/vip.sqlite
```

### 创建env文件

```bash
mkdir ~/ytdl/env/
vim ~/ytdl/env/ytdl.env
```


### 配置如下环境变量

```
APP_ID: REQUIRED
APP_HASH: REQUIRED
TOKEN: REQUIRED
REDIS: REQUIRED
OWNER: owner username
QUOTA: quota in bytes
EX: quota expire time
MULTIPLY: vip quota comparing to normal quota
USD2CNY: exchange rate
VIP: enable VIP or not, default: disable
AFD_LINK
COFFEE_LINK
COFFEE_TOKEN
AFD_TOKEN
AFD_USER_ID
WORKERS: default 100
```

### 运行

```
docker-compose up -d
```


## DEMO

https://t.me/ytbd_bot