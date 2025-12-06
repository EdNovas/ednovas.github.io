---
title: 网易云ncm格式到flac格式转换bot
tags: [网易云,音乐,MP3,bot]
categories:
  - - 杂
date: 2021-09-21 15:58:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/netease-cloud-music-sony-deal-article.jpg
# highlight_shrink: true
---

## 项目地址

GitHub地址：https://github.com/tgbot-collection/NCMBot

## 创建bot

先去找botfather创建一个bot

https://t.me/BotFather

给你的bot命名，并且赋予一个bot用户名（不能与已有的用户名重复）

记下你的token，类似 `11111111：iajfCJIAO324IFJIOW` 一样的一长串，这个就是服务器和tg bot链接的token

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-09-21_12-16-39.png)

## 获取app id

https://my.telegram.org

登录你的tg账号（这是tg官方网站，不用担心盗号问题）

然后就会显示你的`app_id`和`app_hash`，如果没有就创建一个（这两个信息请妥善保存，切勿外泄）

## 安装程序

(需要python3环境，这个请自行安装)

这里的`app_id`，`app_hash`和`token`就是上面获取的，一一对应填入

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image_2021-09-21_12-17-20.png)

```bash
cd /home
git clone https://github.com/tgbot-collection/NCMBot
cd NCMBot
pip3 install -r requirements.txt
# 配置环境变量 APP_ID APP_HASH TOKEN
export APP_ID=1111 APP_HASH=dddd TOKEN=xxx
screen -S ncmbot
python3 ncmbot.py
```

最后`ctrl+a+d`退出screen（习惯使用screen，也可以使用systmd等）



## docker安装

docker安装更方便，但是需要先安装docker，这里就不再赘述了

```bash
docker run -d -e APP_ID=1234 -e APP_HASH=1234 -e TOKEN=1NFXI bennythink/ncmbot
```

## 其他

tg内和你的机器人开始聊天，直接发送ncm格式的音乐文件给他即可，支持大文件，最大可支持2G

flac格式要是还是不喜欢可以用格式工厂转换成mp3等格式

### 一些命令

start - 开始使用机器人

about - 关于机器人

ping - 运行信息

## DEMO

https://t.me/ncmtomp3_bot