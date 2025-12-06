---
title: Heroku部署Xray，Trojan-go，Shadowsocks
tags: [Heroku,xray,v2ray,科学上网,cloudflare,反代,优选IP]
id: '1174'
categories:
  - - 科学上网
date: 2021-01-26 11:59:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1_B-khKHPeEEixZhMB9LlWrg.webp
#highlight_shrink: true
---

## 准备工作

* cloudflare账号

    https://cloudflare.com/

* heroku账号
    
    https://heroku.com/

* V2ray（或其他需要的客户端）
* 优选IP工具 https://github.com/badafans/better-cloudflare-ip

## 部署Heroku

项目地址：https://github.com/mixool/xrayku

一键部署连接：[一键部署](https://dashboard.heroku.com/new?template=https://github.com/mixool/xrayku)

该项目支持在heroku上部署xray,trojan-go以及shadowsocks

点击一键部署

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-11-46.webp)

app name随意，要记住，后面会用到。UUID前往[网站](https://www.uuidgenerator.net/)获取。将UUID复制到这里，然后点击部署。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-14-59.webp)

等待片刻部署完毕。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-15-36.webp)

进入app管理，点击设置，reveal config vars，可以查看刚刚设置的UUID。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-17-03.webp)

## Cloudflare反代

进入cloudflare的workers

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-18-50.webp)

新建一个workers

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-19-13.webp)

复制如下代码并黏贴，把应用程序名改为自己刚刚设置的app name。
```javascript
const SingleDay = '应用程序名.herokuapp.com'
const DoubleDay = '应用程序名.herokuapp.com'
addEventListener(
    "fetch",event => {
    
        let nd = new Date();
        if (nd.getDate()%2) {
            host = SingleDay
        } else {
            host = DoubleDay
        }
        
        let url=new URL(event.request.url);
        url.hostname=host;
        let request=new Request(url,event.request);
        event. respondWith(
            fetch(request)
        )
    }
)
```
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-20-22.webp)

## v2ray配置

使用优选IP.bat选择出适合你的IP地址，填入V2ray的地址配置中

端口固定443

UUID使用之前的UUID

额外ID保持0即可

传输协议选择`ws`

伪装域名复制cloudflare workers的地址，要去掉https://和最后的/

路径是 /'你的UUID'-vmess

（或者vless，例如：/7c5d6428-3017-4ad9-83b0-c253747906c9-vmess）

底层传输选择tls，跳过证书验证选择false

别忘了确认

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_10-33-09.webp)
项目配置说明：
```
* 客户端下载：https://github.com/XTLS/Xray-core/releases
* 代理协议：vless 或 vmess
* 地址：appname.herokuapp.com
* 端口：443
* 默认UUID：8f91b6a0-e8ee-11ea-adc1-0242ac120002
* 加密：none
* 传输协议：ws
* 伪装类型：none
* 路径：/8f91b6a0-e8ee-11ea-adc1-0242ac120002-vless // 默认vless使用/$uuid-vless，vmess使用/$uuid-vmess
* 底层传输安全：tls
```
## trojan-go
* 客户端下载: https://github.com/p4gefau1t/trojan-go/releases
trojan-go配置：
```
{
    "run_type": "client",
    "local_addr": "127.0.0.1",
    "local_port": 1080,
    "remote_addr": "appname.herokuapp.com",
    "remote_port": 443,
    "password": [
        "8f91b6a0-e8ee-11ea-adc1-0242ac120002"
    ],
    "websocket": {
        "enabled": true,
        "path": "/8f91b6a0-e8ee-11ea-adc1-0242ac120002-trojan",
        "host": "appname.herokuapp.com"
    }
}
```
## shadowsocks配置
```
* 客户端下载：https://github.com/shadowsocks/shadowsocks-windows/releases/
* 服务器地址: appname.herokuapp.com
* 端口: 443
* 密码：password
* 加密：chacha20-ietf-poly1305
* 插件程序：xray-plugin_windows_amd64.exe  //需将插件https://github.com/shadowsocks/xray-plugin/releases下载解压后放至shadowsocks同目录
* 插件选项: tls;host=appname.herokuapp.com;path=/8f91b6a0-e8ee-11ea-adc1-0242ac120002-ss
```

## 速度

测试环境：山东移动100兆宽带中午12：00

油管4k速度：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-26_12-30-33.webp)

## 负载均衡

推荐多建立几个节点，使用负载均衡，不容易被封号。

## 请勿滥用

滥用可能导致账户被BAN！！！

滥用行为包括长时间，大流量，不间断使用。