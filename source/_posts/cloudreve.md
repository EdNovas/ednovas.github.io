---
title: cloudreve搭建和挂载OneDrive云盘
tags: 
  - cloudreve
  - 云盘
  - OneDrive
categories:
  - 建站
date: 2021-08-01 17:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/head_huca9e586f553d1688159ad3eaa80dfc1d_18571_2000x0_resize_box_2.png
---

> 参考自 https://docs.cloudreve.org/ 本文添加了更多的说明且更详细些

## 简介

cloudreve是一个极低成本的免费云盘管理系统，可以支持 

本机 从机 七牛 OSS COS 又拍云 OneDrive S3

这些方式的云盘挂载

可以让您快速搭建起公私兼备的网盘系统

Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。

你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

## 链接

官方文档：https://docs.cloudreve.org/

GitHub：https://github.com/cloudreve/Cloudreve

官网：https://cloudreve.org/

下载地址：https://github.com/cloudreve/Cloudreve/releases

## 下载

默认使用最新版即可，支持Linux amd 和 arm，也支持windows版

## 安装

下载然后放到随便一个目录下，建议放到网址根目录

#### Linux下

```
#解压获取到的主程序
tar -zxvf cloudreve_VERSION_OS_ARCH.tar.gz

# 赋予执行权限
chmod +x ./cloudreve

# 启动 Cloudreve
./cloudreve
```

#### Windows下

直接解压获取到的 zip 压缩包，启动 cloudreve.exe 即可。

### 启动

Cloudreve 在首次启动时，会创建初始管理员账号，请注意保管管理员密码，此密码只会在首次启动时出现。如果您忘记初始管理员密码，需要删除同级目录下的cloudreve.db，重新启动主程序以初始化新的管理员账户。

这个cloudreve.db是数据库文件，没有特别需求请勿随意删除，除非里面只有一个没啥用的忘记密码的管理员账号

Cloudreve 默认会监听5212端口。你可以在浏览器中访问 http://服务器IP:5212 进入 Cloudreve。

（宝塔别忘了防火墙开启5212监听端口）

### 反代

反代以后就可以使用域名访问cloudreve了

Nginx反代：

```
location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5212;

    # 如果您要使用本地存储策略，请将下一行注释符删除，并更改大小为理论最大文件尺寸
    # client_max_body_size 20000m;
}
```

Apache反代：
```
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    # 以下为关键部分
    AllowEncodedSlashes NoDecode
    ProxyPass "/" "http://127.0.0.1:5212/" nocanon

</VirtualHost>
```

宝塔反代比较简单

反代地方写上 http://127.0.0.1:5212 后面会自动填写上 $host

### screen后台守候

直接./cloudreve启动的话关闭ssh就会断开连接了，所以我们可以设置screen或者用systemd进程守护

```
screen -S cloudreve
./cloudreve
```

即可

### 进程守护

一般选用systemd即可

#### Systemd

编辑配置文件

```
vim /usr/lib/systemd/system/cloudreve.service
```

将下文 `PATH_TO_CLOUDREVE` 更换为程序所在目录：

```
[Unit]
Description=Cloudreve
Documentation=https://docs.cloudreve.org
After=network.target
After=mysqld.service
Wants=network.target

[Service]
WorkingDirectory=/PATH_TO_CLOUDREVE
ExecStart=/PATH_TO_CLOUDREVE/cloudreve
Restart=on-abnormal
RestartSec=5s
KillMode=mixed

StandardOutput=null
StandardError=syslog

[Install]
WantedBy=multi-user.target
```

```
# 更新配置
systemctl daemon-reload

# 启动服务
systemctl start cloudreve

# 设置开机启动
systemctl enable cloudreve
```

管理命令：

```
# 启动服务
systemctl start cloudreve

# 停止服务
systemctl stop cloudreve

# 重启服务
systemctl restart cloudreve

# 查看状态
systemctl status cloudreve
```

#### Supervisor

首先安装supervisor，已安装的可以跳过。

```
# 安装 supervisor
sudo yum install python-setuptools
sudo easy_install supervisor

# 初始化全局配置文件
sudo touch /etc/supervisord.conf
sudo echo_supervisord_conf > /etc/supervisord.conf
```

编辑全局配置文件：

```
sudo vim /etc/supervisord.conf
```

将文件底部的[include] 分区注释符号;删除，加入新的配置文件包含路径：

```
[include]
files = /etc/supervisor/conf/*.conf
```

根据实际情况填写以下内容并保存：

```
[program:cloudreve]
directory=/home/cloudreve
command=/home/cloudreve/cloudreve
autostart=true
autorestart=true
stderr_logfile=/var/log/cloudreve.err
stdout_logfile=/var/log/cloudreve.log
environment=CODENATION_ENV=prod
```

其中以下配置项需要根据实际情况更改：
* directory: Clopudreve 主程序所在目录
* command: Cloudreve 主程序绝对路径
* stderr_logfile: 错误日志路径
* stdout_logfile: 通常日志路径
通过全局配置文件启动supervisor：

```
supervisord -c /etc/supervisord.conf
```

日后你可以通过以下指令管理 Cloudreve 进程：

```
# 启动
sudo supervisorctl start cloudreve

# 停止
sudo supervisorctl stop cloudreve

# 查看状态
sudo supervisorctl status cloudreve
```

## 配置文件（非必要）

首次启动时，Cloudreve 会在同级目录下创建名为conf.ini的配置文件，你可以修改此文件进行一些参数的配置，保存后需要重新启动 Cloudreve 生效。
你也可以在启动时加入-c参数指定配置文件路径：

```
./cloudreve -c /path/to/conf.ini
```

一个完整的配置文件示例如下：

```
[System]
; 运行模式
Mode = master
; 监听端口
Listen = :5000
; 是否开启 Debug
Debug = false
; Session 密钥, 一般在首次启动时自动生成
SessionSecret = 23333
; Hash 加盐, 一般在首次启动时自动生成
HashIDSalt = something really hard to guss

; SSL 相关
[SSL]
; SSL 监听端口
Listen = :443
; 证书路径
CertPath = C:\Users\i\Documents\fullchain.pem
; 私钥路径
KeyPath = C:\Users\i\Documents\privkey.pem

; 启用 Unix Socket 监听
[UnixSocket]
Listen = /run/cloudreve/cloudreve.sock

; 数据库相关，如果你只想使用内置的 SQLite数据库，这一部分直接删去即可
[Database]
; 数据库类型，目前支持 sqlite/mysql/mssql/postgres
Type = mysql
; MySQL 端口
Port = 3306
; 用户名
User = root
; 密码
Password = root
; 数据库地址
Host = 127.0.0.1
; 数据库名称
Name = v3
; 数据表前缀
TablePrefix = cd_
; 字符集
Charset = utf8
; SQLite 数据库文件路径
DBFile = cloudreve.db

; 从机模式下的配置
[Slave]
; 通信密钥
Secret = 1234567891234567123456789123456712345678912345671234567891234567
; 回调请求超时时间 (s)
CallbackTimeout = 20
; 签名有效期
SignatureTTL = 60

; 跨域配置
[CORS]
AllowOrigins = *
AllowMethods = OPTIONS,GET,POST
AllowHeaders = *
AllowCredentials = false

; Redis 相关
[Redis]
Server = 127.0.0.1:6379
Password =
DB = 0

; 从机模式缩略图
[Thumbnail]
MaxWidth = 400
MaxHeight = 300
FileSuffix = ._thumb
```

一般来说没有任何必要更改

### 使用MySQL

默认情况下数据库都保存在 cloudreve.db里面，所以这个文件很重要！要经常备份保存！

但是如果更习惯用MySQL的话，可以更改配置文件并重启cloudreve，注意仅支持大于等于5.7版本的MySQL

重要！ 更换数据库配置后，Cloudreve 会重新初始化数据库，原有的数据将会丢失。

```
[Database]
; 数据库类型，目前支持 sqlite/mysql/mssql/postgres
Type = mysql
; MySQL 端口
Port = 3306
; 用户名
User = root
; 密码
Password = root
; 数据库地址
Host = 127.0.0.1
; 数据库名称
Name = v3
; 数据表前缀
TablePrefix = cd
; 字符集
Charset = utf8
```

### 使用Redis

你可以在配置文件中加入 Redis 相关设置配置缓存

```
[Redis]
Server = 127.0.0.1:6379
Password = your password
DB = 0
```

重启 Cloudreve 后，可注意控制台输出，确定 Cloudreve 是否成功连接 Redis 服务器。

使用 Redis 后，以下内容将被 Redis 接管：
* 用户会话（重启Cloudreve后不会再丢失登录会话）
* 数据表高频记录查询缓存（如存储策略、设置项）
* 回调会话
* OneDrive 凭证

### 启用 HTTPS

宝塔可以直接忽略这里，直接用宝塔自己的申请SSL证书即可

CertPath 和KeyPath 分别为 SSL 证书和私钥路径。保存后重启 Cloudreve 生效

```
[SSL]
Listen = :443
CertPath = C:\Users\i\Documents\fullchain.pem
KeyPath = C:\Users\i\Documents\privkey.pem
```

## 从底层构建（非必要）

你不想使用默认的页面样式和图标等，可以自行构建文件

Cloudreve 项目主要由两部分组成：后端主仓库 [cloudreve/Cloudreve](https://github.com/cloudreve/Cloudreve)，以及前端仓库 [cloudreve/frontend](https://github.com/cloudreve/frontend)。编译 Cloudreve 后端前，需要先构建assets 目录下的前端子模块，并使用[statik](https://github.com/rakyll/statik)嵌入到后端仓库。

### 环境

构建基于GO语言

https://golang.org/doc/install

2.Go Install的 地方选择Linux，上面会自动切换成 Download Go for Linux

点击下载以后，放到 /usr/local 目录

运行

```
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.6.linux-amd64.tar.gz
```

会解压到 /usr/local/go 目录下

#### GO环境变量

然后添加 bin 路径到环境变量

如果安装在别的目录自行更改路径

```
export PATH=$PATH:/usr/local/go/bin
```

然后在bash窗口输入 `go version` 应该就能返回相应的 go 程序版本号了，如果不行就证明环境变量添加有问题

#### Node.js

还需要下载Node.js https://nodejs.org/zh-cn/download/

下载 Linux 二进制文件（对应版本，amd的下x64的，arm下arm的）

解压到任意目录，官方建议 `/usr/local/lib/nodejs`

version后要写对应的版本号以及distro后的架构，请自行更改！如果不是对应的会找不到该文件

```
VERSION=v14.17.4
DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
```

设置环境变量

```
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```

测试是否配置完成，应该均有返回正确的版本号

```
node -v
npm version
npx -v
```

#### Yarn

如果安装了npm，也就是包含在Node.js里，可以直接

```
npm install --global yarn
```

测试是否安装正确

```
yarn --version
```

##### Debian/Ubuntu

也可以通过 Debian/Ubuntu自带仓库安装

```
sudo apt update && sudo apt install yarn
```

设置环境变量

添加（路径请填写自己的Yarn安装路径和对应版本号）

```
export PATH="$PATH:/opt/yarn-[version]/bin"
```

测试是否安装正确

```
yarn --version
```

### Statik

执行 `go get github.com/rakyll/statik` 安装statik 命令行工具;

### 开始构建

#### Clone

```
# 克隆仓库
git clone --recurse-submodules https://github.com/cloudreve/Cloudreve.git

# 签出您要编译的版本
git checkout 3.x.x
```

##### 构建静态资源

```
# 进入前端子模块
cd assets
# 安装依赖
yarn install
# 开始构建
yarn run build
```

完成后，所构建的静态资源文件位于 assets/build 目录下。

你可以将此目录改名为statics 目录，放置在 Cloudreve 主程序同级目录下并重启 Cloudreve，Cloudreve 将会使用此目录下的静态资源文件，而非内置的。

##### 嵌入静态资源

```
# 回到项目主目录
cd ../

# 安装 statik, 用于嵌入静态资源
go get github.com/rakyll/statik

# 开始嵌入
statik -src=assets/build/  -include=*.html,*.js,*.json,*.css,*.png,*.svg,*.ico,*.ttf -f
```

如果在嵌入时找不到statik 命令，请尝试执行


```
export PATH=$PATH:$(go env GOPATH)/bin
```

##### 编译项目

```
# 获得当前版本号、Commit
export COMMIT_SHA=$(git rev-parse --short HEAD)
export VERSION=$(git describe --tags)

# 开始编译
go build -a -o cloudreve -ldflags " -X 'github.com/cloudreve/Cloudreve/v3/pkg/conf.BackendVersion=$VERSION' -X 'github.com/cloudreve/Cloudreve/v3/pkg/conf.LastCommit=$COMMIT_SHA'"
```

首次编译时，Go 会下载相关依赖库，如果您的网络环境不佳，可能会导致这一步速度过慢或者失败。你可以使用 [GOPROXY.IO](https://goproxy.io/zh/) 加快模块下载速度。

编译完成后，会在项目根目录下生成最终的可执行文件cloudreve

##### 构建助手

你可以使用项目根目录下的构建脚本build.sh 快速完成构建、打包等操作，使用方法如下


```
./build.sh  [-a] [-c] [-b] [-r]
    a - 构建静态资源
    c - 编译二进制文件
    b - 构建前端 + 编译二进制文件
    r - 交叉编译，构建用于release的版本
```

##### 交叉编译

交叉编译前，你需要启用CGO ，正确安装目标平台的 GCC 工具链，并将CC 环境变量设定为对应平台的GCC 编译工具。
比如，在 Linux/AMD64 宿主平台上交叉编译 Windows/AMD64

```
export GOOS=windows
export GOARCH=amd64
export CC=x86_64-w64-mingw32-gcc
export CGO_ENABLED=1

go build
```

## Docker直接部署（可选）

Docker
你可以选择使用以下镜像部署：
[xavierniu/cloudreve](https://hub.docker.com/r/xavierniu/cloudreve)
[littleplus/Cloudreve-Docker](https://github.com/littleplus/Cloudreve-Docker)
[awesome-builder/Cloudreve](https://github.com/EscapeLife/awesome-builder/blob/master/dockerfiles/cloudreve/README.md)

## 储存策略选择

一般选OneDrive就是了，A1,A1P,E5 那么多选择呢

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_19-58-08.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_19-58-22.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_19-58-32.png)

## WebDav

Cloudreve的webdav一直有点bug也没有修复，如果有连接失败等各种问题，尝试使用cloudflare cdn套一个多级域名解决，比如 https://cdn.ednovas.cloud

## 离线下载

建议使用P3TREX大佬的一键安装包，方便好用

GitHub项目地址：

https://github.com/P3TERX/aria2.sh

他已经帮你配置好了

### 配置优点

* BT 下载率高、速度快
* 重启后不丢失任务进度、不重复下载
* 删除正在下载的任务自动删除未完成的文件
* 下载错误自动删除未完成的文件
* 下载完成自动删除控制文件(.aria2后缀名文件)
* 下载完成自动删除种子文件(.torrent后缀名文件)
* 下载完成自动删除空目录
* BT 下载完成自动清除垃圾文件(文件类型过滤功能)
* BT 下载完成自动清除小文件(文件大小过滤功能)
* 有一定的防版权投诉、防迅雷吸血效果
* 更好的 PT 下载支持

使用 Aria2 Pro Core 项目最新静态编译二进制文件
支持与 RCLONE 联动，更多扩展功能与玩法
支持新一代互联网协议 IPv6
定时自动更新 BT tracker 列表（无需重启）

不过目测自动更新 BT tracker 列表没那么好用，可以手动添加

### 安装

安装基础组件 wget, curl, ca-certificates

debian/ubuntu为例：

```
apt install wget curl ca-certificates
wget -N git.io/aria2.sh && chmod +x aria2.sh
./aria2.sh
```

显示如下，选择1并回车，再次开启该界面用 `./aria2.sh`，输入12并回车开启自动更新BT-Tracker

```
 Aria2 一键安装管理脚本 增强版 [v2.7.4] by P3TERX.COM
 
  1. 升级脚本
 ———————————————————————
  1. 安装 Aria2
  2. 更新 Aria2
  3. 卸载 Aria2
 ———————————————————————
  4. 启动 Aria2
  5. 停止 Aria2
  6. 重启 Aria2
 ———————————————————————
  7. 修改 配置
  8. 查看 配置
  9. 查看 日志
 10. 清空 日志
 ———————————————————————
 11. 手动更新 BT-Tracker
 12. 自动更新 BT-Tracker
 ———————————————————————

 Aria2 状态: 已安装 | 已启动

 自动更新 BT-Tracker: 已开启

 请输入数字 [0-12]:
```

安装完成会返回aria2的信息，请记录下并保存

包含 IPv4地址， RPC端口（默认都是6800不会变），RPC密钥（每人不通，也可以自己打开配置文件修改该密钥）

然后进入cloudreve管理员面板的离线下载界面修改相关信息，点击测试连接检测是否匹配上了

还可以进入AriaNg链接查看你的下载任务和更多设置

注意！离线下载会先下载到VPS本地，再上传到云盘中，所以请控制同时下载数量并使用大存储VPS

更多关于aria2的说明以及rclone的使用说明参照这里（还没写lol）

## 自定义前端

默认情况下cloudreve会用内置的静态资源文件，如果想要个性化的，要将前端仓库[编译](/2021/08/01/cloudreve/#从底层构建（非必要）)后得到的build目录重命名为statics放到cloudreve同级目录下，重启cloudreve程序生效

## 挂载存储

这里用OneDrive作为例子（我也只用OneDrive）

管理员界面进入 存储策略，添加存储策略，选择对应的存储策略，这里我选OneDrive了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-34-33.png)

如果是OneDrive多账号的话，为了防止反复登录注销登录的繁琐操作，建议无痕浏览器打开添加存储策略

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-35-34.png)

右键在新窗口打开AAD控制台（国内和国外OneDrive对应不同的地址，注意区分）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-36-35.png)

选择你要登录的OneDrive账号，输入密码登录

进入AAD控制台后选择左侧的App Registrations应用注册

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-40-33.png)

填入对应的信息

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-42-06.png)

复制创建的 Application ID 应用程序（客户端）ID 一会要用


再进入certificates & secrets 证书和密码 界面，创建一个新的Client Secret 程序密钥

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-08-01_20-44-30.png)

最多只能创建两年的，想创建如图的自定时间密钥可以参考[这里](/2021/06/07/graphexplorer)

复制黏贴对应的密钥和ID填入，点击添加即可

后面除了获取直链和离线下载，在线解压等有需求以外均默认即可

## 创建用户组

挂载存储顾名思义就是把云盘通过api等挂到cloudreve上面

那么我们挂上了以后要用户要怎么链接呢，就通过这个用户组

这个用户组可以分配存储策略，一个用户组可以分配给他多个存储空间（付费版功能）

然后还可以给这个用户组设置更多诸如

这样就可以给这个组添加你想要的用户了

## 添加用户

通过前端面板注册的用户都可以自动添加到这里来，并且自动分配到了默认的用户组

在这里可以管理和手动添加用户到不同用户组和切换用户组（注意文件丢失）

## 存储转移

这是cloudreve比较好用的一个功能了，就是选订目录后，把云盘中的目录和子目录所有文件自动移动到cloudreve可以显示的存储里面

（因为虽然都用的OneDrive存储，但是cloudreve不是onemanager，存储内容不互通，需要转移才可）

## 付费版

升级到捐助版，每年价格都在上涨哦，但若是没有特别需要的功能也没有必要付费

比较好用的一个付费功能也就是用户可以自行切换存储空间比较有用了

### 功能

捐赠版相对于普通版的新功能：

* 容量包购买
* 用户购买
* 积分充值
* 激活码（兑换用户组、容量包、积分）
* 创建付积分下载的分享
* 为同一用户组绑定多个存储策略，用户可自由切换
    * 支持在存储策略之间转移文件
* 第三方支付对接（PAYJS、支付宝当面付）
* QQ登录
* 保存其他用户分享到自己网盘
* WebDAV 下为不同目录绑定不同存储策略
* 分享举报、处理
* 为新注册的用户指定初始文件
* 站点公告模块
* 注册邮箱后缀白名单/黑名单

更多详细图文介绍：https://forum.cloudreve.org/d/1587

### 付费方式

https://cloudreve.org/buy.php

目前官方售价是 299RMB/域名，支持根域相同情况下授权多域名，如 www.abc.com,pan.abc.com

如果您之前使用社区版的 Cloudreve，在获取到捐助版后，您可以在保留数据的前提下升级到捐助版。

### 替换主程序

备份所有数据，将捐助版主程序、授权文件上传并替换到原先的社区版目录下。

### 执行升级脚本

使用 Cloudreve 的命令行参数，运行升级数据库脚本：

Linux：

```
./cloudreve --database-script UpgradeToPro
```

Windows：

```
cloudreve.exe --database-script UpgradeToPro
```

## DEMO

https://ednovas.cloud

目前ednovas云盘就是用的捐赠版