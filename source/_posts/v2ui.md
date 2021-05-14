---
title: V2-ui面板
tags: [VPN,翻墙,VPS,面板,V2ray,梯子]
id: '1156'
categories:
  - - VPS
date: 2021-01-20 04:44:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/f0288b435079a664c49b4ce8aae1403e.jpg
#highlight_shrink: true
---
## 建议系统

面板建议以下系统安装，建议尽量使用新版的系统，且必须是 64 位系统：

CentOS 7+
Ubuntu 16+
Debian 8+

## 一键安装&升级

此脚本会使用 v2ray 官方脚本自动安装最新版 v2ray，无需再自己安装 v2ray，若之前安装过非官方的 v2ray，建议先卸载，否则可能会造成冲突。

### 疑难解答

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

### 一键安装

```
bash <(curl -Ls https://blog.sprov.xyz/v2-ui.sh)
```

安装后，在浏览器中打开 http://<服务器IP>:65432 即可访问面板，默认用户名和密码都是 admin。

登陆后请修改用户名和密码

## 更换面板端口

`v2-ui`打开控制面板，选择更换面板端口