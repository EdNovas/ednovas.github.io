---
title: Freenom 域名自动续期bot
tags: [freenom,bot,tg,域名]
categories:
  - - 杂
date: 2021-09-21 16:01:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Freenom.png
# highlight_shrink: true
---

## 项目地址

https://github.com/luolongfei/next-freenom

## docker部署（最方便）

### 基础设置

升级源和软件并安装wget和vim

然后自动安装docker

Debian/Ubunt:

```bash
apt-get update && apt-get install -y wget vim
wget -qO- get.docker.com | bash
```

CentOS:

```
yum update && yum install -y wget vim
```

请使用 KVM 架构的 VPS，OpenVZ 架构的 VPS 不支持安装 Docker，另外 CentOS 8 不支持用此脚本来安装 Docker。 更多关于 Docker 安装的内容参考 [Docker 官方安装指南](https://docs.docker.com/engine/install/) 。


检查docker是否安装成功并已经添加环境变量

```
docker version
```

启动 Docker 服务

```
systemctl start docker
```


查看 Docker 运行状态

```
systemctl status docker
```


将 Docker 服务加入开机自启动

```
systemctl enable docker
```


### 用 Docker 创建并启动容器

```
docker run -d --name freenom --restart always -v $(pwd):/conf -v $(pwd)/logs:/app/logs luolongfei/freenom
```

或者，如果你想自定义脚本执行时间，则命令如下

```
docker run -d --name freenom --restart always -v $(pwd):/conf -v $(pwd)/logs:/app/logs -e RUN_AT="11:24" luolongfei/freenom
```


上面这条命令只比上上条命令多了个 -e RUN_AT="11:24"，其中11:24表示在北京时间每天的 11:24 执行续期任务，你可以自定义这个时间。 这里的RUN_AT参数同时也支持 CRON 命令里的时间形式，比如， -e RUN_AT="9 11 * * *"，表示每天北京时间 11:09 执行续期任务， 如果你不想每天执行任务，只想隔几天执行，只用修改RUN_AT的值即可。

注意：不推荐自定义脚本执行时间。因为你可能跟很多人定义的是同一个时间点，这样可能导致所有人都是同一时间向 Freenom 的服务器发起请求， 使得 Freenom 无法稳定提供服务。而如果你不自定义时间，程序会自动指定北京时间 06 ~ 23 点全时段随机的一个时间点作为执行时间， 每次重启容器都会自动重新指定。

上方 Docker 命令的参数解释

|命令|含义|
|:----|:----|
|docker run|开始运行一个容器|
|-d 参数|容器以后台运行并输出容器 ID|
|--name 参数|给容器分配一个识别符，方便将来的启动，停止，删除等操作|
|--restart 参数|配置容器启动类型，always 即为 docker 服务重新启动时自动启动本容器|
|-v 参数|挂载卷（volume），冒号后面是容器的路径，冒号前面是宿主机的路径（只支持绝对路径），$(pwd)表示当前目录|
|-e 参数|指定容器中的环境变量|
|luolongfei/freenom|这是从 docker hub 下载回来的镜像完整路径名|

执行`ls -a`后你就可以看到在你的当前目录下，有一个.env文件和一个logs目录，logs目录里面存放的是程序日志， 而.env则是配置文件

```bash
vim .env
```

修改.env内的配置信息然后重启容器

|变量名|含义|默认值|是否必须|备注|
|:----|:----|:----|:----|:----|
|FREENOM_USERNAME|Freenom 账户|-|是|只支持邮箱账户，如果你是使用第三方社交账户登录的用户，请在 Freenom 管理页面绑定邮箱，绑定后即可使用邮箱账户登录|
|FREENOM_PASSWORD|Freenom 密码|-|是|某些特殊字符可能需要转义，详见.env文件内注释|
|MULTIPLE_ACCOUNTS|多账户支持|-|否|多个账户和密码的格式必须是“<账户1>@<密码1>|<账户2>@<密码2>|<账户3>@<密码3>”，注意不要省略“<>”符号，否则无法正确匹配。如果设置了多账户，上面的FREENOM_USERNAME和FREENOM_PASSWORD可不设置|
|MAIL_USERNAME|机器人邮箱账户|-|是|支持Gmail、QQ邮箱以及163邮箱，尽可能使用163邮箱或者QQ邮箱而非Gmail。因为谷歌的安全机制，每次在新设备登录 Gmail 都会先被限制，需要手动解除限制才行。具体的配置方法参考「 配置发信邮箱 」|
|MAIL_PASSWORD|机器人邮箱密码|-|是|Gmail填密码，QQ邮箱或163邮箱填授权码|
|TO|接收通知的邮箱|-|是|你自己最常用的邮箱，推荐使用QQ邮箱，用来接收机器人邮箱发出的域名相关邮件|
|MAIL_ENABLE|是否启用邮件推送功能|true|否|true：启用 false：不启用 默认启用，如果设为false，不启用邮件推送功能，则上面的MAIL_USERNAME、MAIL_PASSWORD、TO变量变为非必须，可不设置|
|TELEGRAM_CHAT_ID|你的chat_id|-|否|通过发送/start给@userinfobot可以获取自己的id|
|TELEGRAM_BOT_TOKEN|你的Telegram bot的token|-|否| |
|TELEGRAM_BOT_ENABLE|是否启用Telegram Bot推送功能|false|否|true：启用 false：不启用 默认不启用，如果设为true，则必须设置上面的TELEGRAM_CHAT_ID和TELEGRAM_BOT_TOKEN变量|
|NOTICE_FREQ|通知频率|1|否|0：仅当有续期操作的时候 1：每次执行 |


修改并保存.env文件后，执行`docker restart freenom`重启容器，等待 5 秒钟左右

然后执行`docker logs freenom`查看输出内容

输出内容中有执行成功字样，则表示配置无误。

### 其他docker常用命令

查看容器在线状态及大小

```
docker ps -as
```

查看容器的运行输出日志

```
docker logs freenom
```


重新启动容器


```
docker restart freenom
```

停止容器的运行

```
docker stop freenom
```

移除容器

```
docker rm $name
```

查看 docker 容器占用 CPU，内存等信息

```
docker stats --no-stream
```

## DEMO

@ednovas_freenom_bot