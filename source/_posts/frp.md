---
title: 内网穿透
tags: 
  - frp
  - ddnsto
  - 内网穿透
  - 搭建
categories:
  - VPS
date: 2021-06-23 14:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/frp内网穿透.webp
---

内网穿透，也即NAT 穿透，进行NAT 穿透是为了使具有某一个特定源IP 地址和源端口号的数据包不被NAT 设备屏蔽而正确路由到内网主机。

一般来讲,也就是用于从公网环境访问自己的私有设备,让你不在家也能访问家中设备

比较好用的内网穿透工具有 frp ngrok ddnsto 等,其中最简单的就是ddnsto了

## ddns.to

官网注册账号并登录(微信登录) https://www.ddnsto.com/

当外网访问时也是使用微信登录

配置极其简单,软路由中选择ddns.to服务,然后填入令牌,启用,保存并应用即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-23_13-20-05.png)

然后外网访问自己绑定的对应内网ip,比如我的就是192.168.2.1

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-23_13-22-45.png)

付费版还有更多功能,但是免费就足够用

如ssh,远程telnet,远程rdp,远程vnc,远程aria2,远程开机

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-23_13-23-35.png)


## frp

> 参考引用自异次元 X-Force https://www.iplaysoft.com/frp.html

Frp (Fast Reverse Proxy) 是一个免费开源的用于内网穿透的反向代理应用，它支持 TCP、UDP 协议， 也为 http 和 https 协议提供了额外的支持。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/architecture.png)

而目前 FRP 还推出了“点对点穿透”的试验性功能，连接成功后可以让公网设备直接跟内网设备“点对点”传输，数据流不再经过 VPS 中转，这样可以不受服务器带宽的限制，传输大文件会更快更稳定。当然，此功能并不能保证在你的网络环境 100% 可用，而且还要求访问端也得运行 FRP 客户端 (因此目前手机是无法实现的，只有电脑可以)。由于实现条件较多，所以有文件传输需求的朋友还是建议买带宽稍大一点的 VPS 会比较省心。

### 准备

首先需要一台VPS服务器是肯定的,要开启防火墙对应端口7000

由于支持包括windows,linux,macOS,arm等多平台,所以十分方便

GitHub项目地址: https://github.com/fatedier/frp

releases下载地址: https://github.com/fatedier/frp/releases

### 下载frp程序

右键对应架构程序,点击copy link address复制链接地址

注意!我这里用的是arm架构的VPS,所以选择 `frp_0.37.0_linux_arm64.tar.gz`, 但是一般来说大部分VPS都是amd架构的,请选择 `frp_0.37.0_linux_amd64.tar.gz`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-23_13-29-25.png)

```bash
mkdir /home/frp && cd /home/frp
sudo wget https://github.com/fatedier/frp/releases/download/v0.37.0/frp_0.37.0_linux_arm64.tar.gz  
//这里wget后的链接请换成你刚刚复制的
sudo tar xzvf frp_0.37.0_linux_arm64.tar.gz 
//这里xzvf后请换成你下载的文件名,一般为frp_0.37.0_linux_amd64.tar.gz,注意对应版本号
sudo mv frp_0.37.0_linux_arm64/* /home/frp
//这里同上替换
```

FRP 默认提供了 2 个服务端配置文件，一个是简化版的 frps.ini，另一个是完整版的 frps_full.ini。

初学者只需用简版配置即可，在简版 frps.ini 配置文件里，默认设置了监听端口为 `7000`，你可以按需修改它,要记得防火墙打开对应端口

### 启动

```bat
./frps -c ./frps.ini
```

如果正常运行即可,可以先ctrl+c停止一下

打开frps.ini,用vi,宝塔,finalshell打开都可以

写入一下

```
[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = 7000
# 授权码，请改成更复杂的
token = 123456

# frp管理后台端口，请按自己需求更改
dashboard_port = 7500
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = admin
enable_prometheus = true

# frp日志配置
log_file = /var/log/frps.log
log_level = info
log_max_days = 3
```

设置后台运行

```
cp systemd/frps.service /usr/lib/systemd/system/
systemctl enable frps
systemctl start frps
```

防火墙记得还要开放7500面板端口

### 内网配置

软路由上打开frp内网穿透软件或者下载安装ipk文件

https://github.com/kuoruan/openwrt-frp

https://github.com/kuoruan/luci-app-frpc

填入刚刚设置的对应信息配置

## frp一键脚本

https://github.com/MvsCode/frps-onekey

方便多了,直接显示对应信息可填写,使用很简单,这里就不再赘述了

```bash
wget https://raw.githubusercontent.com/MvsCode/frps-onekey/master/install-frps.sh -O ./install-frps.sh
chmod 700 ./install-frps.sh
./install-frps.sh install
```