---
title: X-ui面板
tags: [VPN,翻墙,VPS,面板,V2ray,梯子]
categories:
  - - VPS
  - - 科学上网
date: 2021-10-13 16:44:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_16-08-00.png
#highlight_shrink: true
---


很可惜v2ui删库了，虽然还有遗留版本，也还能用，但是还是要与时俱进的。

xui项目仓库：

https://github.com/vaxilu/x-ui


## 一键安装&升级

此脚本会使用 v2ray 官方脚本自动安装最新版 v2ray，无需再自己安装 v2ray，若之前安装过非官方的 v2ray，建议先卸载，否则可能会造成冲突。

## 功能介绍

功能介绍
系统状态监控
支持多用户多协议，网页可视化操作
支持的协议：vmess、vless、trojan、shadowsocks、dokodemo-door、socks、http
支持配置更多传输配置
流量统计，限制流量，限制到期时间
可自定义 xray 配置模板
支持 https 访问面板（自备域名 + ssl 证书）
更多高级配置项，详见面板

## 更新系统

**安装相关依赖**
centos系统下
```
yum update -y                                                                                                
apt-get update -y && apt-get install curl -y
```
ubuntu系统下
```
apt update -y
apt-get update -y && apt-get install curl -y
```

**若出现 bash curl: command not found 等错误，请先安装 curl**

CentOS 系统：
```
yum install curl -y
```
Debian 或 Ubuntu 系统：
```
apt install curl -y
```

**错误提示：-bash curl: command not found**

Ubuntu、Debian如果出现无法安装Curl,需要先升级
```
sudo apt-get update
```

## 一键安装

```
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

安装后，在浏览器中打开 http://<服务器IP>:65432 即可访问面板，默认用户名和密码都是 admin。

登陆后请修改用户名和密码

## 更换面板端口

`x-ui`打开脚本面板，更换面板端口为你想用的端口即可，记得开放防火墙

## 添加节点

添加节点的过程youtube有很多视频，不再赘述

最简单的就是添加一个vmess+websocket，其他保持全默认即可

## 证书


可以去https://ohttps.com 免费申请证书然后上传，即可添加vmess+ws+tls节点。


