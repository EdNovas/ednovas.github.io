---
title: 保姆级v2ray-agent使用说明
tags: [vpn,梯子,科学上网]
categories:
  - - 科学上网
date: 2021-10-13 11:19:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/-LV3x-7WtgjD9WFSe7KS.png
---

> 这应该是博主最钟爱的一键搭建节点脚本了吧

## 购买VPS

买VPS可以看看[便宜VPS推荐](/2021/11/05/cheapvps/)

## 脚本相关

Github项目地址：

https://github.com/mack-a/v2ray-agent

TG群：

https://t.me/technologyshare

TG频道：

https://t.me/v2rayagentshare

### 特性

- 支持Xray-core\[XTLS\]、v2ray-core
- 支持切换前置[VLESS XTLS -> Trojan XTLS]、[Trojan XTLS -> VLESS XTLS]
- 支持不同核心之间的配置文件互相读取
- 支持 VLESS/VMess/trojan 协议
- 支持Debian、Ubuntu、Centos，支持主流的cpu架构。不建议使用Centos以及低版本的系统，2.3.x后不再支持Centos6
- 支持个性化安装
- 支持多用户管理
- 支持Netflix检测、支持DNS流媒体解锁、支持任意门解锁Netflix
- 无需卸载即可安装、重装任意组合
- 支持卸载时保留Nginx、tls证书。如果acme.sh申请的证书在有效的情况下，不会重新签发
- 支持纯IPv6，IPv6注意事项
- 支持IPv4\[入\]->IPv6分流\[出\]
- 支持WARP分流
- 支持日志管理
- 支持多端口配置
- 支持自定义证书安装

### 支持的安装类型

- VLESS+TCP+TLS
- VLESS+TCP+xtls-rprx-direct【推荐】
- VLESS+gRPC+TLS【支持CDN、IPv6、延迟低】
- VLESS+WS+TLS【支持CDN、IPv6】
- Trojan+TCP+TLS【推荐】
- Trojan+TCP+xtls-rprx-direct【推荐】
- Trojan+gRPC+TLS【支持CDN、IPv6、延迟低】
- VMess+WS+TLS【支持CDN、IPv6】

### 组合推荐

- 中转/gia ---> VLESS+TCP+TLS/XTLS、Trojan【推荐使用XTLS的xtls-rprx-direct】
- 移动宽带 ---> VMESS+WS+TLS/VLESS+WS+TLS/VLESS+gRPC+TLS/Trojan+gRPC+TLS + Cloudflare
- cloudflare-> VLESS+gRPC+TLS/Trojan+gRPC+TLS\[多路复用、延迟低\]

## 使用

### 一键脚本（2021.10.13）

```bash
wget -P /root -N --no-check-certificate "https://raw.githubusercontent.com/mack-a/v2ray-agent/master/install.sh" && chmod 700 /root/install.sh && /root/install.sh
```

shell内复制并且回车开始自动安装

下图为作者的示例图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/v2rayagent.jpg)

### 具体讲解

该脚本功能十分完善并且实用，下面我会具体一个个来讲

#### 快速安装

最简单的也是最直接的操作，我们就是要搭建一个节点，那就follow this one

先确保服务器没有开着防火墙，比如oracle自带的防火墙，不少VPS都会关闭一些端口，centos的firewall等，总之要确保`80`和`443`端口开放即可

cloudflare先解析一个域名，纯纯纯小白具体可以[看这里](/2021/05/15/cloudflare/) （~~小白搭建什么节点~~）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_14-50-17.png)

如上图所示，解析一个域名A记录到你的vps ipv4的ip上（如果是IPV6的，那就解析AAAA记录），切记不要开启小云朵，会影响申请证书的

然后点击确定保存。

然后复制上面的一键脚本到shell里，回车开始安装

如下图，安装完后会出现这个界面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_14-48-58.png)

我们直接选择安装（输入数字1并回车）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_14-54-54.png)

这里我们一般选择`1.xray-core`即可（xray-core是v2ray-core的超集），输入数字1并回车

耐心等待安装，机器配置越好安装时间越短。如果超过5分钟还是什么内容（比如安装jq这样的内容）都没有显示，那就按 `ctrl+c`结束进程，然后重新开始安装

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_14-56-05.png)

然后输入之前解析好的域名并回车

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-09-28.png)

脚本自动用的acme.sh申请一个免费证书（当然你也可以手动申请）

然后输入自定义路径。这里你随意，或者直接回车随即路径即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-10-45.png)

这里你可以根据你使用的运营商来判断使用哪个，或者干脆不使用。这个是用于ws+tls优选用的

如果实在不知道这是干啥的，或者不确定，或者不太明了的，直接回车，省的后面自己搞出来节点还用不了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-11-51.png)

UUID这里直接回车

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-13-45.png)

然后就会生成节点信息了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-14-25.png)

如下那么多内容，应该导入哪个呢

个人的建议，导入 vless+ws+tls（vless需要V2ray客户端的xray-core支持，如果不清楚这些，就不用导入这个了），vmess+ws+tls，Trojan+gRPC+TLS这三个


Vmess+ws+tls复制的时候，有4个啊，应该复制哪个呢

帐号，不用管。

通用json，不用管。

通用vmess，复制上。

二维码 vmess，不用管，但是如果你有能直接扫码的客户端可以打开这个地址然后扫码导入。

trojan的也是复制黏贴 `Trojan gRPC(TLS)` 这个


```
===================== VLESS TCP TLS/XTLS-direct/XTLS-splice ======================
 

 ---> 帐号：rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP_85e49f88-7917-449f-85d5-b866393e55e0 

 ---> 通用格式(VLESS+TCP+TLS/xtls-rprx-direct) 
    vless://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?encryption=none&security=xtls&type=tcp&host=rnus.ednovas.net&headerType=none&sni=rnus.ednovas.net&flow=xtls-rprx-direct#rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 
 ---> 格式化明文(VLESS+TCP+TLS/xtls-rprx-direct) 
协议类型：VLESS，地址：rnus.ednovas.net，端口：443，用户ID：85e49f88-7917-449f-85d5-b866393e55e0，安全：xtls，传输方式：tcp，flow：xtls-rprx-direct，账户名:rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 
 ---> 二维码 VLESS(VLESS+TCP+TLS/xtls-rprx-direct) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=vless%3A%2F%2F85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3A443%3Fencryption%3Dnone%26security%3Dxtls%26type%3Dtcp%26rnus.ednovas.net%3Drnus.ednovas.net%26headerType%3Dnone%26sni%3Drnus.ednovas.net%26flow%3Dxtls-rprx-direct%23rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 
---------------------------------------------------------------------------------- 
 ---> 通用格式(VLESS+TCP+TLS/xtls-rprx-splice) 
    vless://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?encryption=none&security=xtls&type=tcp&host=rnus.ednovas.net&headerType=none&sni=rnus.ednovas.net&flow=xtls-rprx-splice#rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 
 ---> 格式化明文(VLESS+TCP+TLS/xtls-rprx-splice) 
    协议类型：VLESS，地址：rnus.ednovas.net，端口：443，用户ID：85e49f88-7917-449f-85d5-b866393e55e0，安全：xtls，传输方式：tcp，flow：xtls-rprx-splice，账户名:rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 
 ---> 二维码 VLESS(VLESS+TCP+TLS/xtls-rprx-splice) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=vless%3A%2F%2F85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3A443%3Fencryption%3Dnone%26security%3Dxtls%26type%3Dtcp%26rnus.ednovas.net%3Drnus.ednovas.net%26headerType%3Dnone%26sni%3Drnus.ednovas.net%26flow%3Dxtls-rprx-splice%23rnus.ednovas.net_VLESS_XTLS/TLS-direct_TCP
 

================================ VLESS WS TLS CDN ================================
 

 ---> 帐号：rnus.ednovas.net_VLESS_WS_85e49f88-7917-449f-85d5-b866393e55e0 

Xray的0-RTT path后面会有?ed=2048，不兼容以v2ray为核心的客户端，请手动删除?ed=2048后使用
 
 ---> 通用格式(VLESS+WS+TLS) 
    vless://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?encryption=none&security=tls&type=ws&host=rnus.ednovas.net&sni=rnus.ednovas.net&path=%2foyvxws?ed=2048#rnus.ednovas.net_VLESS_WS
 
 ---> 格式化明文(VLESS+WS+TLS) 
    协议类型：VLESS，地址：rnus.ednovas.net，伪装域名/SNI：rnus.ednovas.net，端口：443，用户ID：85e49f88-7917-449f-85d5-b866393e55e0，安全：tls，传输方式：ws，路径:/oyvxws?ed=2048，账户名:rnus.ednovas.net_VLESS_WS
 
 ---> 二维码 VLESS(VLESS+TCP+TLS/XTLS) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=vless%3A%2F%2F85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3A443%3Fencryption%3Dnone%26security%3Dtls%26type%3Dws%26host%3Drnus.ednovas.net%26sni%3Drnus.ednovas.net%26path%3D%252foyvxws?ed=2048%23rnus.ednovas.net_VLESS_WS 

================================ VMess WS TLS CDN ================================
 

 ---> 帐号：rnus.ednovas.net_vmess_ws_85e49f88-7917-449f-85d5-b866393e55e0 

 ---> 通用json(VMess+WS+TLS) 
    {"port":443,"ps":"rnus.ednovas.net_vmess_ws","tls":"tls","id":"85e49f88-7917-449f-85d5-b866393e55e0","aid":0,"v":2,"host":"rnus.ednovas.net","type":"none","path":"oyvxvws?ed=2048","net":"ws","add":"rnus.ednovas.net","allowInsecure":0,"method":"none","peer":"rnus.ednovas.net","sni":"rnus.ednovas.net"}
 
 ---> 通用vmess(VMess+WS+TLS)链接 
    vmess://eyJwb3J0Ijo0NDMsInBzIjoicm51cy5lZG5vdmFzLm5ldF92bWVzc193cyIsInRscyI6InRscyIsImlkIjoiODVlNDlmODgtNzkxNy00NDlmLTg1ZDUtYjg2NjM5M2U1NWUwIiwiYWlkIjowLCJ2IjoyLCJob3N0Ijoicm51cy5lZG5vdmFzLm5ldCIsInR5cGUiOiJub25lIiwicGF0aCI6Ii9veXZ4dndzP2VkPTIwNDgiLCJuZXQiOiJ3cyIsImFkZCI6InJudXMuZWRub3Zhcy5uZXQiLCJhbGxvd0luc2VjdXJlIjowLCJtZXRob2QiOiJub25lIiwicGVlciI6InJudXMuZWRub3Zhcy5uZXQiLCJzbmkiOiJybnVzLmVkbm92YXMubmV0In0=
 
 ---> 二维码 vmess(VMess+WS+TLS) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=vmess://eyJwb3J0Ijo0NDMsInBzIjoicm51cy5lZG5vdmFzLm5ldF92bWVzc193cyIsInRscyI6InRscyIsImlkIjoiODVlNDlmODgtNzkxNy00NDlmLTg1ZDUtYjg2NjM5M2U1NWUwIiwiYWlkIjowLCJ2IjoyLCJob3N0Ijoicm51cy5lZG5vdmFzLm5ldCIsInR5cGUiOiJub25lIiwicGF0aCI6Ii9veXZ4dndzP2VkPTIwNDgiLCJuZXQiOiJ3cyIsImFkZCI6InJudXMuZWRub3Zhcy5uZXQiLCJhbGxvd0luc2VjdXJlIjowLCJtZXRob2QiOiJub25lIiwicGVlciI6InJudXMuZWRub3Zhcy5uZXQiLCJzbmkiOiJybnVzLmVkbm92YXMubmV0In0=
 

=============================== VLESS gRPC TLS CDN ===============================
 

 --->gRPC目前处于测试阶段，可能对你使用的客户端不兼容，如不能使用请忽略 

 ---> 帐号：rnus.ednovas.net_VLESS_gRPC_85e49f88-7917-449f-85d5-b866393e55e0 

 ---> 通用格式(VLESS+gRPC+TLS) 
    vless://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?encryption=none&security=tls&type=grpc&host=rnus.ednovas.net&path=oyvxgrpc&serviceName=oyvxgrpc&alpn=h2&sni=rnus.ednovas.net#rnus.ednovas.net_VLESS_gRPC
 
 ---> 格式化明文(VLESS+gRPC+TLS) 
    协议类型：VLESS，地址：rnus.ednovas.net，伪装域名/SNI：rnus.ednovas.net，端口：443，用户ID：85e49f88-7917-449f-85d5-b866393e55e0，安全：tls，传输方式：gRPC，alpn：h2，serviceName:oyvxgrpc，账户名:rnus.ednovas.net_VLESS_gRPC
 
 ---> 二维码 VLESS(VLESS+gRPC+TLS) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=vless%3A%2F%2F85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3A443%3Fencryption%3Dnone%26security%3Dtls%26type%3Dgrpc%26host%3Drnus.ednovas.net%26serviceName%3Doyvxgrpc%26path%3Doyvxgrpc%26sni%3Drnus.ednovas.net%26alpn%3Dh2%23rnus.ednovas.net_VLESS_gRPC 

==================================  Trojan TLS  ==================================
 

 ---> 帐号：rnus.ednovas.net_trojan_tcp_85e49f88-7917-449f-85d5-b866393e55e0 

 ---> Trojan(TLS) 
    trojan://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?peer=rnus.ednovas.net&sni=rnus.ednovas.net&alpn=http1.1#rnus.ednovas.net_Trojan
 
 ---> 二维码 Trojan(TLS) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=trojan%3a%2f%2f85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3a443%3fpeer%3drnus.ednovas.net%26sni%3drnus.ednovas.net%26alpn%3Dhttp1.1%23rnus.ednovas.net_Trojan
 

================================  Trojan gRPC TLS  ================================
 

 --->gRPC目前处于测试阶段，可能对你使用的客户端不兼容，如不能使用请忽略 

 ---> 帐号：rnus.ednovas.net_trojan_gRPC_85e49f88-7917-449f-85d5-b866393e55e0 

 ---> Trojan gRPC(TLS) 
    trojan://85e49f88-7917-449f-85d5-b866393e55e0@rnus.ednovas.net:443?encryption=none&peer=rnus.ednovas.net&security=tls&type=grpc&sni=rnus.ednovas.net&alpn=h2&path=oyvxtrojangrpc&serviceName=oyvxtrojangrpc#rnus.ednovas.net_Trojan_gRPC
 
 ---> 二维码 Trojan gRPC(TLS) 
    https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=trojan%3a%2f%2f85e49f88-7917-449f-85d5-b866393e55e0%40rnus.ednovas.net%3a443%3Fencryption%3Dnone%26security%3Dtls%26peer%3drnus.ednovas.net%26type%3Dgrpc%26sni%3drnus.ednovas.net%26path%3Doyvxtrojangrpc%26alpn%3D=h2%26serviceName%3Doyvxtrojangrpc%23rnus.ednovas.net_Trojan_gRPC
```


电脑上一般就是复制到`v2rayn`里面了，安卓手机复制到`v2rayng`里面，ios端小火箭shadowrocket黏贴或者扫码导入

然后就能用了（如果你的ip和443端口没有被墙的话）

---

#### vasma

这个是打开该脚本的快捷方式相当于

shell内输入`vasma`即可再打开脚本界面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-21-40.png)

#### 任意安装

这个顾名思义，就是安装你想用的协议，不像1的直接安装那样一股脑全给你安装上，只安装你想用的协议，具体流程和普通安装类似，只是多了一部选择协议过程而已

#### 切换Trojan\[XTLS\]

这个是用来切换前置为trojan用的，如果前置是Trojan，查看帐号时则会出现两个Trojan协议的节点，有一个不可用xtls

切换过后，再次执行即可切换回vless前置

（如果有的时候你发现trojan用不了或者其他类似的问题时，可以试试切换一下）

#### 账号管理

这里就可以查看你之前搭建的节点信息了

#### 更换伪装站

该脚本是有一个伪装站的，这也是安装nginx的原因

伪装站在 `/usr/share/nginx/html` 目录下

https://github.com/learning-zone/website-templates

这个GitHub项目中有很多的纯html网站模板提供

#### 更新证书

因为是免费证书，所以需要每三个月更新一次证书，脚本会自动更新，但如果证书有问题的话，可以手动更新一下

（手动更新证书的地方）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-13_15-28-08.png)

#### 更换CDN节点

自行更换，如果你会用优选CDN，就肯定理解，并且明白怎么使用了

更多信息可以查看作者wiki

https://github.com/mack-a/v2ray-agent/blob/master/documents/optimize_V2Ray.md

#### IPV6分流

这是个很实用的功能，如果机器有ipv6，或者可以配合下一个warp功能添加一个ipv6地址，那么就可以控制特定流量通过ipv6了

具体ipv6分流规则详见脚本说明

#### warp分流

warp是个好东西啊，不过现在奈飞不再支持warp解锁非奈飞自制了。安装warp要求机器配置比较新

具体详细手动安装过程可以看[这里](/2021/04/15/warpipv6/)

#### 流媒体工具

主要功能有2

一个是查看解锁奈飞流媒体解锁情况的

还有一个就是用dns等方法解锁奈飞

#### 添加新端口

这个功能一般用于单vps多端口的情况，或者443端口被墙了的时候，可以用这个功能，添加一个端口，一般比较常用如
8080
8880
2052
2082
2086
2095
2053
2083
2087
2096
8443
端口

添加完成后，直接替换原来节点信息里的端口为新的端口号即可

#### BT下载管理

顾名思义，关闭/开启BT审计规则，防止节点用户用于BT下载

#### 切换alpn

```
当前alpn首位为：http/1.1 
  1.当http/1.1首位时，trojan可用，gRPC部分客户端可用【客户端支持手动选择alpn的可用】 
  2.当h2首位时，gRPC可用，trojan部分客户端可用【客户端支持手动选择alpn的可用】 
  3.如客户端不支持手动更换alpn，建议使用此功能更改服务端alpn顺序，来使用相应的协议 
============================================================== 
1.切换alpn h2 首位 
```

一般保持默认即可

#### core管理

重启，重装，更新xray-core和trojan内核的

#### 更新脚本

更新脚本

#### 安装BBR、DD脚本

这里建议BBR只用普通bbr，效果最好的是bbrplus，但是bbrplus容易造成机器失联等问题，保险起见，安装并启用默认bbr即可

DD更不建议使用了，几乎百分百失联几率

如果要DD系统，可以使用以下脚本

```
wget --no-check-certificate -O AutoReinstall.sh https://git.io/betags && chmod a+x AutoReinstall.sh && bash AutoReinstall.sh
```

#### 查看日志

默认好像是关闭着日志的，可以打开日志查看报错或者使用记录等

#### 卸载脚本

卸载脚本。卸载完成后证书会放在`/tmp/v2ray-agent-tls`下，伪装网站好像也是会依旧保留在本地的。

#### 反代优选

ws+tls可以使用反代优选来提速，感谢cloudflare！

[反代](/2021/01/04/heroku/#CF%E5%8F%8D%E4%BB%A3)

[优选](/2021/01/04/heroku/#%E4%BC%98%E9%80%89IP)


## 最后

如果遇到任何奇怪的问题，先试着全部重装一遍，并且确定没有冲突端口/软件等。

v2rayagent yyds