---
title: 搭建YYeTs视频资源下载站
tags: [下载,建站,网站,视频]
categories:
  - - 建站
date: 2021-09-21 22:01:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/movie-night.jpg
# highlight_shrink: true
---

## 项目地址

https://github.com/tgbot-collection/YYeTsBot

大佬搭建的人人影视bot：https://t.me/yyets_bot

大佬搭建的人人影视分享站：https://yyets.dmesg.app/

## 部署web

一键脚本，支持amd64/arm64，请先安装 docker、docker-compose和curl

Linux/macOS：

```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/tgbot-collection/YYeTsBot/master/scripts/install.sh)"
```


## 部署bot

可以选择docker，也可以直接运行在机器上。

### docker-compose

参见 [这里](https://github.com/tgbot-collection/BotsRunner)

本目录下的 `docker-compose.yml` 也可以作为参考

nginx reverse proxy可以[参考这里](https://github.com/BennyThink/WebsiteRunner)

[参考这里获取数据库](https://github.com/tgbot-collection/YYeTsBot/blob/master/yyetsweb/README.md)

```
# 启动数据库
docker-compose up -d mongo
# 导入数据库
docker yyets_mongo.gz 1234da:/tmp
# 进入容器
docker-compose exec mongo bash
mongorestore --gzip --archive=/tmp/yyets_mongo.gz
exit
# 开启服务
docker-compose up -d
```

## DEMO

https://down.ednovas.video