---
title: Telegram 发卡机器人搭建
tags: 
  - telegram
  - tg
  - bot
  - 机器人
  - 发卡
  - 搭建
categories:
  - VPS
date: 2021-05-19 18:02:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/telegram-chatbot-1.png
---

## DEMO

https://t.me/ednovas_shop_bot

## 简介

发现了个很好用的tg发卡bot，GitHub地址：https://github.com/devourbots/tg_faka_bot

基于python开发的，用的sqlite3做数据库，足够轻便，方便备份

适配易支付，当面付，麻瓜支付

tg用户群组：https://t.me/joinchat/HO9r-CLAudrxugPY

tg频道：https://t.me/devourbots_channel

## Debian/Ubuntu下安装

进入根目录

```
cd ~
```

安装依赖

```
apt-get install git python3-pip screen -y
```

拉取项目代码文件

```
git clone https://github.com/devourbots/tg_faka_bot.git
```

进入文件目录

```
cd tg_faka_bot
```

重命名文件

```
mv example.config.py config.py
mv example.faka.sqlite3 faka.sqlite3
```

安装依赖

```
pip3 install -r requirements.txt
```


编辑配置文件，配置相关信息

```
vi config.py
```

TG 搜索 @BotFather 申请 TOKEN（步骤：/newbot 机器人名称 - 机器人ID_bot）

获取自己的TG ID，机器人：https://t.me/getidsbot



### 运行机器人

```
python3 main.py
```

继续配置支付接口信息
编辑配置文件 `vi ~/tg_faka_bot/config.py` 现在存在的支付接口：

```
PAYMENT_METHOD = {
    'epay': '支付宝/微信/QQ',
    'alifacepay': '支付宝当面付'
}
```


如果只需要易支付，那么可以这么配置：

```
PAYMENT_METHOD = {
    'epay': '支付宝/微信/QQ'
}
```

如果这时候有一个新的文件名为mugglepay.py的支付接口，那么可以这么配置：

```
PAYMENT_METHOD = {
    'epay': '支付宝/微信/QQ',
    'alifacepay': '支付宝当面付',
    'mugglepay': '加密货币'
}
```

mugglepay.py的相对路径为`getways/mugglepay/mugglepay.py`

并且请确保你安装了此支付插件需要的额外依赖（如果有），`pip3 install -r ~/tg_faka_bot/getways/mugglepay/mugglepay.txt`

以易支付(epay)为例：

```
cd ~/tg_faka_bot/getways/epay
mv example.epay.py epay.py
vi epay.py
```

配置相关信息，回到机器人根目录启动机器人

```
cd ~/tg_faka_bot
python3 main.py
```

添加卡密，进行购买测试

让机器人持续在后台运行

```
cd ~/tg_faka_bot/
killall python3
nohup python3 main.py >>output 2>&1 &
```

## CentOS下安装

安装工具

```
yum install git vim -y
yum install python36 python36-pip -y
```

克隆项目

```
git clone https://github.com/devourbots/tg_faka_bot.git
cd tg_faka_bot
```

安装依赖

```
pip3 install -r requirements.txt
cp config.py.example config.py
vim config.py
```

修改配置文件：

TG 搜索 @BotFather 申请 TOKEN（步骤：/newbot 机器人名称 - 机器人ID_bot）

TG 搜索 @getmyid_bot 获取 ID 填入 ADMIN_ID

调试

```
python3 main.py
```

放置后台运行

```
nohup python3 main.py >/dev/null 2>&1 &
```

支付接口

支付宝当面付

```
cd ~/tg_faka_bot/getways/alifacepay/
pip3 install -r alifacepay.txt
vim alifacepay.py
```


按提示填入 appid，应用私钥，支付宝公钥，保存。

重新运行 main.py，确保支付接口启用。



## 如发现BUG的反馈步骤：

1、自己操作测试，重现BUG。

2、机器人运行中的日志会在机器人停止后写入文件，所以需要先停止机器人，使用命令：killall python3

3、加入TG群组

4、详细描述错误流程，发送完整的机器人会话截图，并将output文件私发管理员，不发日志文件不予回应

如果日志文件过多（不便于分析错误），请先删除之前的output文件，重新运行机器人，重现bug后停止机器人，这时候output文件的日志就是最新的错误日志了

## DEMO

https://t.me/ednovas_shop_bot

> https://github.com/devourbots/tg_faka_bot/wiki
> https://www.daniao.org/9897.html