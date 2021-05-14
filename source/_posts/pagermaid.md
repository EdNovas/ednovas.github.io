---
title: Pagermaid————Telgeram人形自走bot搭建
tags: 
  - VPS
  - telegram
  - bot
categories:
  - VPS
date: 2021-05-05 23:31:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/telegram-chatbot-1.png
---

GitHub项目地址：https://github.com/Xtao-Labs/PagerMaid-Modify

## 一键脚本（不推荐）

我是尝试过用一键脚本安装过的，但是容易出问题，所以不建议

一键脚本安装命令：

```
wget https://raw.githubusercontent.com/Xtao-Labs/PagerMaid-Modify/master/install.sh -O install.sh&& chmod +x install.sh && bash install.sh
```

或者：

```
wget https://cdn.jsdelivr.net/gh/xtaodada/PagerMaid-Modify/install.sh -O install.sh&& chmod +x install.sh && bash install.sh
```

脚本已测试系统：centos 7、centos 8、ubuntu 16.04、ubuntu 18.04、ubuntu 20.04、debian 9、debian 10

理论支持系统：Centos 7-8、Ubuntu 16.04-20.04、Debian 8-10

## Docker安装

我未尝试过（VPS性能渣不敢用docker）

一键 Docker 脚本安装命令：

wget https://raw.githubusercontent.com/Xtao-Labs/PagerMaid-Modify/master/utils/docker.sh -O docker.sh&& chmod +x docker.sh && bash docker.sh

脚本已测试系统：ubuntu 20.04

理论支持系统：支持 Docker 的系统

## 手动安装

看似手动安装很复杂，但是实际上一行一行命令复制黏贴一路默认Y安装完成就好了

### 拉取项目

本项目托管在 github ，所以您首先需要检查您是否已经安装 git 软件包。并且我们发现当 git 软件包版本过低时，无法实现程序的自动更新，所以您需要首先升级 git 软件包：

```
sudo apt-get install --only-upgrade git -y
```

从仓库拉取项目

```
cd /var/lib && git clone https://github.com/xtaodada/PagerMaid-Modify.git pagermaid && cd pagermaid
```

### 安装软件包

#### imagemagick

此软件包用于处理图片，如您没有图片处理需求，您可以无需安装此软件包。

```
sudo apt-get install imagemagick -y
```

#### neofetch

此软件包用于显示系统信息，如您没有显示系统信息需求，您可以无需安装此软件包。

```
apt-get install software-properties-common  && sudo add-apt-repository ppa:dawidd0811/neofetch && sudo apt-get update && sudo apt-get install neofetch
```


#### zbar

此软件包用于处理二维码信息，如您没有处理二维码信息需求，您可以无需安装此软件包。

```
sudo apt-get install libzbar-dev -y
```


#### tesseract

此软件包用于图片光学字符识别，如你没有处理此方面的需求，你可以无需安装此软件包。

##### 最大化安装

```
sudo apt-get install tesseract-ocr tesseract-ocr-all -y
```


#### 最小化安装

```
sudo apt-get install tesseract-ocr tesseract-ocr-eng tesseract-ocr-chi-sim -y
```


#### Redis

此软件包用于记录信息，以方便软件重启后仍然可以进行上一次未完成的任务，你也可以无需安装此软件包。


```
sudo apt-get install redis-server -y
```


### 安装依赖包

```
pip3 install -r requirements.txt
```


#### 修改配置文件

将配置 config.gen.yml 文件复制一份并且命名为 config.yml

```
cp config.gen.yml config.yml
```

然后去 telegram 官网 生成 api 填入配置文件内，我们只需要复制 api id 和 api_hash 值 填入 api_key 和 api_hash 。（登陆账号选择web直接生成即可）

telegram 官网： https://my.telegram.org/

```
vi config.yml
```


按 i 进入编辑模式，粘贴好后，按下 esc 输入 shift 加冒号，输入 wq 保存退出


### 登录账号

```
python3 -m pagermaid
```

此步需要填入完整的电话号码（eg：+12569986522）然后 tg 会发给你的其他客户端发送验证码，填入验证码后，回车，如有两步验证密码，则再输入两步验证密码即可。

停止运行：

```
ctrl + c
```

有时（或大部分时间），当您在服务器部署 `PagerMaid-modify` 时，登录会有问题，当出现了问题，请在应用程序的配置步骤配置唯一的 `api_key` 和 `api_hash` ，然后在您的本地电脑上执行 `python3 utils/mksession.py` ，在账号登录成功以后，将生成的 `pagermaid.session` 文件复制到服务器对应目录即可。

请注意保护好您已登录的 `pagermaid.session` 。此文件可以进行账号所有操作，请不要分享给他人使用。

### 进程守护

此步骤可以方便 `pagermaid` 的自动运行，您无需在 `pagermaid` 意外退出后重新登录主机进行操作。

```
cat <<'TEXT' > /etc/systemd/system/pagermaid.service
[Unit]
Description=PagerMaid-Modify telegram utility daemon
After=network.target

[Install]
WantedBy=multi-user.target

[Service]
Type=simple
WorkingDirectory=/var/lib/pagermaid
ExecStart=/usr/bin/python3 -m pagermaid
Restart=always
TEXT
```


### 常用指令

启动程序：

```
systemctl start pagermaid
```

设置为开机自启：

```
systemctl enable pagermaid
```

停止程序：

```
systemctl stop pagermaid
```

## 使用

telegram中使用 `-help` 查看命令，安装插件使用命令 `apt install 插件名`安装，比如安装ghs插件，使用`apt install ghs`即可安装成功

除了ghs以外，还有keyword和weather等好用的插件等着你去发现

> github https://github.com/Xtao-Labs/PagerMaid-Modify/wiki/Ubuntu-16.04-%E5%AE%89%E8%A3%85%E8%AF%A6%E8%A7%A3