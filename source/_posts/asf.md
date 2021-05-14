---
title: ASF steam挂卡神器
tags: [steam,挂卡,asf,软件]
id: '1232'
categories:
  - - 软件
date: 2021-05-03 17:31:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/archi-steam-farm-768x432.jpg
# highlight_shrink: true
---

ArchiSteamFarm 是很多进阶级 Steam 用户熟知的软件，它允许用户进行批量性的 Steam 帐号管理且支持效率很高的批量挂卡任务。其支持 Windows/ Linux/ Mac OS 系统，且各平台配置方式差异不大，所以如果你之前就已经用过其它平台的 ASF 程序，通过这篇文章你就可以很轻松地搭建远程 ASF 程序并通过网页进行管理。

## Windows端：

https://www.bilibili.com/read/cv161719/

https://justarchinet.github.io/ASF-WebConfigGenerator/#/bot

https://github.com/JustArchiNET/ArchiSteamFarm

## Linux（VPS）端：

https://yimouleng.com/2017/08/30/archisteamfarm3/

## Linux端挂卡页面

### 环境配置

此处以 Centos 7.2 为例，其它系统版本自行替换系统命令即可

由于程序是由 C# 写的，所以需要安装.NET 核心

```
yum install libunwind8 libunwind8-dev gettext libicu-dev liblttng-ust-dev libcurl4-openssl-dev libssl-dev uuid-dev unzip screen
```

添加微软源

```
rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

```
sudo sh -c 'echo -e "[packages-microsoft-com-prod]\nname=packages-microsoft-com-prod \nbaseurl= https://packages.microsoft.com/yumrepos/microsoft-rhel7.3-prod\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/dotnetdev.repo'
```

安装.NET

```
yum update
yum install libunwind libicu
yum install dotnet-sdk-2.2
```

## 软件安装

你可以在 ASF 的官方 Github 仓库获取到最新的软件版本，写本篇文章时最新稳定版为 V5.0.6.6，在文本中将选择 ASF-linux-x64 版本作为安装程序（一般VPS都是选择x64版本）

github仓库：https://github.com/JustArchiNET/ArchiSteamFarm/releases/

```
mkdir ASF
cd ASF
wget https://github.com/JustArchiNET/ArchiSteamFarm/releases/download/5.0.6.6/ASF-linux-x64.zip
unzip ASF-linux-x64.zip
chmod +x ArchiSteamFarm
```

## 创建 ASF 配置文件

访问网页版 ASF 配置生成器：https://justarchinet.github.io/ASF-WebConfigGenerator/
点击中间的 “ASF”
在 SteamOwnerID 中输入你的 Steam64 位帐号 ID（只复制黏贴数字即可）

### 获取steam64位账户ID

第一步（没有设置URL）：进入个人资料后，右键点击，选择复制网页URL，即为Steam64位ID。

（设置了URL）：进入个人资料后，右键点击，选择复制网页URL，即为自定义URL。

若设置了URL，却想发Steam64位ID，请看第二步。

第二步（设置了URL却想发Steam64位ID）：如同第一步，复制URL，进入此网站查询，第三行即为64位ID。

自行复制数字，格式为http://steamcommunity.com/profiles/XXXXXXX（数字），得到64位ID。

### ASF配置生成器页面高级设置（必要）

点击 “Toggle advanced setting”，展开高级设置

在 “CurrentCulture” 一栏中输入 zh-CN，用于设置 ASF 程序语言

勾选 IPC，这是激活网页管理界面的选项

在 IPCPassword 中输入一个密码作为网页管理界面的密码.

网页拉到最底下，点击 download，你会获得一个 txt 格式的文件

将这个文件的文件名修改为 ASF.json

将这个文件上传至服务器，ASF 程序目录下的 config 子目录（也就是～/ASF/config）

至此，你的 ASF 程序就已经有了一个可以用于支持运行的配置文件了

## 启动程序

为了让 ASF 能在后台运行也为了方便地使用 Shell，使用 screen 为 ASF 单独创建一个桌面

更多screen命令参考[这里](/2021/02/14/screen/)

```
screen -S asf
./ArchiSteamFarm
```

如果你看到 Shell 有类似于如下图这样的输出就说明 ASF 程序启动完成

![](https://blogpic.irain.in/imgs/2020/04/6114743c10305834.png!/fw/2558/quality/75/format/webp)

## 设置网页管理面板(简单)

宝塔安装，安装必要环境，新建网址，解析域名，添加ssl证书，开启强制https，添加nginx反代，反代本地1242端口并保存（proxy name处随意，图片为英文版，中文版大同小异）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_17-28-06.png)

## 设置网页管理面板(复杂)

ASF 的网页面板默认端口为 1242，但这时候你会发现直接输入 IP:1242 是不可行的。这是因为出于安全考虑，ASF 程序只开启了本地 IP 的端口也就是 127.0.0.1:1242。我们将 ASF 搭建于服务器上，自然需要远程访问的功能，因此需要使用 Nginx 对网页面板进行反代处理。以下是我的 Nginx 配置文件，你需要修改包括 hostname 和 SSL 文件在内的一些内容。

```
server {
    listen *:443 ssl;
    listen *:80;
    server_name asf.steam.com;
    ssl_certificate /usr/local/nginx/conf/ssl/ssl.crt;
    ssl_certificate_key /usr/local/nginx/conf/ssl/ssl.key;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
       ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
       ssl_prefer_server_ciphers on;
       ssl_session_timeout 10m;
       ssl_session_cache builtin:1000 shared:SSL:10m;
       ssl_buffer_size 1400;
       add_header Strict-Transport-Security max-age=15768000;
       ssl_stapling on;
       ssl_stapling_verify on;
       access_log /data/wwwlogs/nginx.log combined;
       if ($ssl_protocol = "") { return 301 https://$host$request_uri; }
  

    location ~* /Api/NLog {
        proxy_pass http://127.0.0.1:1242;
#        proxy_set_header Host 127.0.0.1; # Only if you need to override default host
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $host:$server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Real-IP $remote_addr;

        # We add those 3 extra options for websockets proxying, see https://nginx.org/en/docs/http/websocket.html
        proxy_http_version 1.1;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Upgrade $http_upgrade;
    }

    location / {
        proxy_pass http://127.0.0.1:1242;
#        proxy_set_header Host 127.0.0.1; # Only if you need to override default host
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $host:$server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

重启 Nginx，再次通过你的 hostname 访问，你就会看到 ASF Web UI 的欢迎界面了。输入密码进入管理面板后，你就可以添加你的 Steam 帐号了。

## 添加steam账户

添加一个机器人，然后输入你的stema登录账户和密码，建议关闭 可退款游戏挂卡 选项

如果有手机登录密钥，会在ssh的screen界面要求你输入密钥

可能有延迟，或别的问题，刷新页面，清空缓存，更换浏览器，等待一会再查看，一切以shell中的反馈为准

## 更多使用说明

参考官方说明文档

https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Home-zh-CN


> 转载编辑自https://blog.irain.in/archives/Linux_ASF_WebUI.html
> 参考 https://zhidao.baidu.com/question/244902065391908604.html
> https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Home-zh-CN