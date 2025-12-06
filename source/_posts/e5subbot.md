---
title: E5sub bot搭建
tags: [搭建,bot,tg,e5]
categories:
  - - 杂
date: 2021-09-22 12:01:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Microsoft-Office-365-E5.png
# highlight_shrink: true
---

## 项目地址

https://github.com/iyear/E5SubBot

## 直接部署

虽然有docker方式部署，但是本项目直接部署会更方便一些

在releases界面复制对应版本的链接 https://github.com/iyear/E5SubBot/releases

https://github.com/iyear/E5SubBot/releases/download/v0.3.1/E5SubBot_Linux_64bit.tar.gz（0.3.1版本linux64bit）

```bash
mkdir /home/e5sub && cd /home/e5sub
wget https://github.com/iyear/E5SubBot/releases/download/v0.3.1/E5SubBot_Linux_64bit.tar.gz
tar -zxvf E5SubBot_Linux_64bit.tar.gz
cp config.yml.example config.yml
```

然后打开`config.yml`文件并编辑配置文件

```
bot_token: YOUR_BOT_TOKEN # 从botfather那里获取，创建一个新的机器人并记录下token
# socks5: 127.0.0.1:1080
bindmax: 999 # 最大绑定账号数量
goroutine: 20 # 并发数，不要过大
admin: 111,222,333 # https://t.me/userinfobot 查看自己的tgid作为管理员
errlimit: 999 # 单账户最大出错次数
notice: |- # 公告内容
   aaa
   bbb
   ccc
cron: "1 */1 * * *" # API调用频率，cron表达式
db: sqlite # splite数据库
table: users
# mysql:
#    host: 127.0.0.1
#    port: 3306
#    user: root
#    password: pwd
#    database: e5sub
sqlite:
   db: data.db
```

## docker部署

第一次启动不行，使用 docker-compose restart重启一次

```
mkdir ./e5bot && wget --no-check-certificate -O ./e5bot/config.yml https://raw.githubusercontent.com/iyear/E5SubBot/master/config.yml.example
vi ./e5bot/config.yml
wget --no-check-certificate https://raw.githubusercontent.com/iyear/E5SubBot/master/docker-compose.yml
docker-compose up -d
```

## 源码编译

下载源码，安装GO环境

```
git clone https://github.com/iyear/E5SubBot.git && cd E5SubBot && go build
```