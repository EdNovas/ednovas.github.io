---
title: 网易云音乐解锁灰色歌曲
tags: [网易云,音乐,灰色歌曲,软件]
id: '1218'
categories:
  - - 杂
date: 2021-03-10 06:58:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/NetEase-Cloud-Music-1280x720.jpg
highlight_shrink: true
---


> 转载编辑自深度博客 https://www.yfriend.xyz/155.html

## 实现原理

其原理是通过流量进入代理后来匹配网易链接进行劫持，然后将requests请求修改重新发送一个新的链接（这个链接就是provider的），请求到音乐以后再重新将provider的response改写成网易的，然后返回到应用，通俗的说是修改http请求和响应。

目前博主仅提供Windows和Android的使用教程，但是在iOS上博主也通过测试成功实现（因缺少iOS系统的多方面测试，暂不提供教程）。iOS在使用时，网易云音乐会优先使用https请求歌曲数据，且https请求失败后iOS端无法降级http请求，因此需要手动安装CA证书来信任https协议，是因为这是劫持了链接伪造的response没有真正的网易证书，故需要手动安装证书信任来让系统相信这是真的response。

## 使用方法

### 安卓端

在安卓端，可以使用termux部署一个代理服务，教程如下：

1、安装termux工具并打开（第一次会加载部分文件，若加载不成功需挂梯子），输入以下更新软件库

```
pkg upgrade
```

2、安装git和nodejs，命令如下：

```
apt install git nodejs
```

3、使用git将服务克隆到本地，命令如下：

```
git clone https://github.com/nondanee/UnblockNeteaseMusic
```

克隆成功后再使用命令
```
cd UnblockNeteaseMusic
```

进入UnblockNeteaseMusic文件夹

4、启用服务

```
node app.js -a 127.0.0.1 -p 2635
```

成功运行后可连接WiFi并进入当前WiFi的高级选项，在代理处填写对应的代理IP和端口即可代理。但是该代理仍有弊端，在你使用WiFi时不仅操作麻烦，换了一个WiFi又得重新设置；若断开了WiFi，用数据流量使用又很是麻烦（数据网络需要自己去更改当前网络APN代理），于是可以使用clash代理，且下方给出相关规则，只需替换一下规则中ip或域名以及端口即可，其clash代理规则我也会不断去更新完善。

在安卓端，博主推荐使用Clash软件代理使用网易云，可以达到数据流量和WiFi皆一键代理使用，代理规则模板只提供网易云的代理。

新版Clash规则：

```
#规则最后更新：2020-12-24

port: 7890

socks-port: 7891

allow-lan: false

mode: rule

log-level: info

external-controller: 127.0.0.1:9090

dns:
  enable: true
  ipv6: true
  listen: 0.0.0.0:53
  enhanced-mode: fake-ip
  nameserver:
   - 119.29.29.29
   - 223.5.5.5


proxies:
- name: "UnblockMusic"
  type: http
  server: 127.0.0.1
  port: 2635

proxy-groups:
- name: "Netease Music"
  type: select
  proxies: 
    - UnblockMusic
    - DIRECT

rules:
# Unblock Netease Music
- DOMAIN,api.iplay.163.com,Netease Music
- DOMAIN,apm3.music.163.com,Netease Music
- DOMAIN,apm.music.163.com,Netease Music
- DOMAIN,interface3.music.163.com,Netease Music
- DOMAIN,interface.music.163.com,Netease Music
- DOMAIN,music.163.com,Netease Music

- DOMAIN,httpdns.n.netease.com,Netease Music
- DOMAIN,ac.dun.163yun.com,Netease Music
- DOMAIN,crash.163.com,Netease Music
- DOMAIN,mam.netease.com,Netease Music
- DOMAIN,clientlog.music.163.com,Netease Music
- DOMAIN,clientlog3.music.163.com,Netease Music


# CIDR规则
- IP-CIDR,39.105.63.80/32,Netease Music
- IP-CIDR,47.100.127.239/32,Netease Music
- IP-CIDR,59.111.160.194/32,Netease Music
- IP-CIDR,59.111.160.197/32,Netease Music
- IP-CIDR,59.111.160.245/32,Netease Music
- IP-CIDR,59.111.181.35/32,Netease Music
- IP-CIDR,59.111.181.60/32,Netease Music
- IP-CIDR,59.111.181.155/32,Netease Music
- IP-CIDR,115.236.118.33/32,Netease Music
- IP-CIDR,115.236.121.1/32,Netease Music
- IP-CIDR,118.24.63.156/32,Netease Music
- IP-CIDR,193.112.159.225/32,Netease Music
- IP-CIDR,223.252.199.66/32,Netease Music
- IP-CIDR,223.252.199.67/32,Netease Music
- IP-CIDR6,2407:ae80:200:1001::20/128,Netease Music
- IP-CIDR6,2407:ae80:200:1001::21/128,Netease Music
- IP-CIDR6,2409:8c28:c05:202::3/128,Netease Music
- IP-CIDR6,2409:8c28:c05:202::2/128,Netease Music
- IP-CIDR6,2409:8c28:c05:3:0:4:0:2/128,Netease Music


- IP-CIDR,101.71.154.241/32,Netease Music
- IP-CIDR,103.126.92.132/32,Netease Music
- IP-CIDR,103.126.92.133/32,Netease Music
- IP-CIDR,112.13.119.17/32,Netease Music
- IP-CIDR,112.13.122.1/32,Netease Music
- IP-CIDR,59.111.181.38/32,Netease Music
- IP-CIDR,59.111.160.195/32,Netease Music
- IP-CIDR,45.254.48.1/32,Netease Music
- IP-CIDR,59.111.21.14/32,Netease Music
- IP-CIDR,59.111.179.214/32,Netease Music
- IP-CIDR,59.111.179.213/32,Netease Music
- IP-CIDR,59.111.239.61/32,Netease Music
- IP-CIDR,112.13.122.49/32,Netease Music
- IP-CIDR,59.111.239.62/32,Netease Music
- IP-CIDR,115.236.121.3/32,Netease Music
- IP-CIDR,112.13.119.18/32,Netease Music

# 去网易云内部分广告
- DOMAIN,admusicpic.music.126.net,REJECT
- DOMAIN,iadmat.nosdn.127.net,REJECT
- DOMAIN,iadmusicmat.music.126.net,REJECT
- DOMAIN,iadmusicmatvideo.music.126.net,REJECT

# Final
- MATCH,DIRECT
```

Surfboard代理规则：

```
#规则最后更新：2020-12-24


[General]
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local
dns-server = system, 119.29.29.29, 223.5.5.5, 1.2.4.8
ipv6 = false

[Proxy]
Unblockmusic = http, 127.0.0.1, 2635, tls=false, skip-cert-verify=false

[Proxy Group]
Netease Music = select, Unblockmusic, DIRECT

[Rule]
# Unblock Netease Netease Music
DOMAIN,api.iplay.163.com,Netease Music
DOMAIN,apm3.music.163.com,Netease Music
DOMAIN,apm.music.163.com,Netease Music
DOMAIN,interface3.music.163.com,Netease Music
DOMAIN,interface.music.163.com,Netease Music
DOMAIN,music.163.com,Netease Music

DOMAIN,httpdns.n.netease.com,Netease Music
DOMAIN,ac.dun.163yun.com,Netease Music
DOMAIN,crash.163.com,Netease Music
DOMAIN,mam.netease.com,Netease Music
DOMAIN,clientlog.music.163.com,Netease Music
DOMAIN,clientlog3.music.163.com,Netease Music

IP-CIDR,39.105.63.80/32,Netease Music
IP-CIDR,47.100.127.239/32,Netease Music
IP-CIDR,59.111.160.194/32,Netease Music
IP-CIDR,59.111.160.197/32,Netease Music
IP-CIDR,59.111.160.245/32,Netease Music
IP-CIDR,59.111.181.35/32,Netease Music
IP-CIDR,59.111.181.60/32,Netease Music
IP-CIDR,59.111.181.155/32,Netease Music
IP-CIDR,115.236.118.33/32,Netease Music
IP-CIDR,115.236.121.1/32,Netease Music
IP-CIDR,118.24.63.156/32,Netease Music
IP-CIDR,193.112.159.225/32,Netease Music
IP-CIDR,223.252.199.66/32,Netease Music
IP-CIDR,223.252.199.67/32,Netease Music
IP-CIDR6,2407:ae80:200:1001::20/128,Netease Music
IP-CIDR6,2407:ae80:200:1001::21/128,Netease Music
IP-CIDR6,2409:8c28:c05:202::3/128,Netease Music
IP-CIDR6,2409:8c28:c05:202::2/128,Netease Music
IP-CIDR6,2409:8c28:c05:3:0:4:0:2/128,Netease Music

IP-CIDR,101.71.154.241/32,Netease Music
IP-CIDR,103.126.92.132/32,Netease Music
IP-CIDR,103.126.92.133/32,Netease Music
IP-CIDR,112.13.119.17/32,Netease Music
IP-CIDR,112.13.122.1/32,Netease Music
IP-CIDR,59.111.181.38/32,Netease Music
IP-CIDR,59.111.160.195/32,Netease Music
IP-CIDR,45.254.48.1/32,Netease Music
IP-CIDR,59.111.21.14/32,Netease Music
IP-CIDR,59.111.179.214/32,Netease Music
IP-CIDR,59.111.179.213/32,Netease Music
IP-CIDR,59.111.239.61/32,Netease Music
IP-CIDR,112.13.122.49/32,Netease Music
IP-CIDR,59.111.239.62/32,Netease Music
IP-CIDR,115.236.121.3/32,Netease Music
IP-CIDR,112.13.119.18/32,Netease Music

# 去网易云内部分广告
DOMAIN,admusicpic.music.126.net,REJECT
DOMAIN,iadmat.nosdn.127.net,REJECT
DOMAIN,iadmusicmat.music.126.net,REJECT
DOMAIN,iadmusicmatvideo.music.126.net,REJECT

# Final
FINAL,DIRECT
```

下面这步可忽略，我已经将其ip地址和端口改好了，如果是使用自己的服务器的话再更改。

（然后将其中的ip或域名改为你的代理服务器的ip地址，即127.0.0.1，端口改为你的代理服务的端口，即2635，更改好后将文件（文件后缀名为.yaml）导入到Clash软件中使用，或将其放入可公网访问的托管上使用URL导入。）

### Windows端使用方法

#### 方法一：
在Windows上相对于更加的简单，因为博主根据其使用方法编制了一份批处理文件，实现了一键操作使用，但是还有一些设置是必不可少的。首先我们先下载该文件：

https://download.yjs2635.xyz/unblockmusic/unblockmusic_0240.zip

备用地址：https://ednovas.lanzoux.com/iMWM6mryzqj

版本更新说明

```
V 2.4.0	更新于：2020-11-15（文件已同步更新）
1、修复QQ音源失效
2、完善unblockneteasemusic启动成功或失败的判断逻辑
V 2.3.6	更新于：2020-08-18
1、添加高音质或无损音质执行环境，部分歌曲可以无损音质
2、优化部分设置项
V 2.3	更新于：2020-05-21
1、同步更新unblockneteasemusic文件
2、添加尝试使用高音质以及无损音质播放（试验性）
V 2.2	更新于：2020-05-03
1、同步更新unblockneteasemusic文件
2、部分优化
V 2.1	更新于：2020-04-14
1、解决了部分选项跳转错误
2、微调部分相关执行代码
3、控制台文件更名为“UnblockMusic控制台”
V 2.0	更新于：2020-04-13
1、基于V1.0版本进行命令重写
2、去除SSL转发端口的选项
3、添加端口查看和进程查杀工具
4、文件进行打包成exe文件，使用更方便
5、文件内添加使用说明，更多使用方法
6、控制台管理程序已无需挂后台
7、自由控制代理的运行与结束
V 1.0	发布于：2020-03-04
1、基于使用运行命令所写
2、自定义端口和音源
```

文件下载后将其解压，然后双击该目录下的exe运行程序

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3399164750.png)

按照提示来运行，第一次使用的小伙伴请务必选择【1】看下使用说明，如果出现如下图所示即表示代理已成功运行

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4178238987.png)

然后打开网易云，选择设置——>工具——>代理——>自定义代理
服务器填写：127.0.0.1
端口（默认）：2635

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1763792106.png)

确认后重启一遍网易云即可

### 方法二：（基于方法一）

此为Windows使用Clash代理教程，提供代理解锁的另一种方法。在方法一代理启用后可以套用上方给出的clash规则进行自定义代理。

首先我们下载并安装好Clash for Windows并打开

在profiles处导入已经配置好的clash规则文件（配置文件点击下方展开代码即可直接复制），并选中该规则文件，如图所示：

电脑Clash规则（同上安卓端规则）：

```
#规则最后更新：2020-12-24

port: 7890

socks-port: 7891

allow-lan: false

mode: rule

log-level: info

external-controller: 127.0.0.1:9090

dns:
  enable: true
  ipv6: true
  listen: 0.0.0.0:53
  enhanced-mode: fake-ip
  nameserver:
   - 119.29.29.29
   - 223.5.5.5


proxies:
- name: "UnblockMusic"
  type: http
  server: 127.0.0.1
  port: 2635

proxy-groups:
- name: "Netease Music"
  type: select
  proxies: 
    - UnblockMusic
    - DIRECT

rules:
# Unblock Netease Music
- DOMAIN,api.iplay.163.com,Netease Music
- DOMAIN,apm3.music.163.com,Netease Music
- DOMAIN,apm.music.163.com,Netease Music
- DOMAIN,interface3.music.163.com,Netease Music
- DOMAIN,interface.music.163.com,Netease Music
- DOMAIN,music.163.com,Netease Music

- DOMAIN,httpdns.n.netease.com,Netease Music
- DOMAIN,ac.dun.163yun.com,Netease Music
- DOMAIN,crash.163.com,Netease Music
- DOMAIN,mam.netease.com,Netease Music
- DOMAIN,clientlog.music.163.com,Netease Music
- DOMAIN,clientlog3.music.163.com,Netease Music


# CIDR规则
- IP-CIDR,39.105.63.80/32,Netease Music
- IP-CIDR,47.100.127.239/32,Netease Music
- IP-CIDR,59.111.160.194/32,Netease Music
- IP-CIDR,59.111.160.197/32,Netease Music
- IP-CIDR,59.111.160.245/32,Netease Music
- IP-CIDR,59.111.181.35/32,Netease Music
- IP-CIDR,59.111.181.60/32,Netease Music
- IP-CIDR,59.111.181.155/32,Netease Music
- IP-CIDR,115.236.118.33/32,Netease Music
- IP-CIDR,115.236.121.1/32,Netease Music
- IP-CIDR,118.24.63.156/32,Netease Music
- IP-CIDR,193.112.159.225/32,Netease Music
- IP-CIDR,223.252.199.66/32,Netease Music
- IP-CIDR,223.252.199.67/32,Netease Music
- IP-CIDR6,2407:ae80:200:1001::20/128,Netease Music
- IP-CIDR6,2407:ae80:200:1001::21/128,Netease Music
- IP-CIDR6,2409:8c28:c05:202::3/128,Netease Music
- IP-CIDR6,2409:8c28:c05:202::2/128,Netease Music
- IP-CIDR6,2409:8c28:c05:3:0:4:0:2/128,Netease Music


- IP-CIDR,101.71.154.241/32,Netease Music
- IP-CIDR,103.126.92.132/32,Netease Music
- IP-CIDR,103.126.92.133/32,Netease Music
- IP-CIDR,112.13.119.17/32,Netease Music
- IP-CIDR,112.13.122.1/32,Netease Music
- IP-CIDR,59.111.181.38/32,Netease Music
- IP-CIDR,59.111.160.195/32,Netease Music
- IP-CIDR,45.254.48.1/32,Netease Music
- IP-CIDR,59.111.21.14/32,Netease Music
- IP-CIDR,59.111.179.214/32,Netease Music
- IP-CIDR,59.111.179.213/32,Netease Music
- IP-CIDR,59.111.239.61/32,Netease Music
- IP-CIDR,112.13.122.49/32,Netease Music
- IP-CIDR,59.111.239.62/32,Netease Music
- IP-CIDR,115.236.121.3/32,Netease Music
- IP-CIDR,112.13.119.18/32,Netease Music

# 去网易云内部分广告
- DOMAIN,admusicpic.music.126.net,REJECT
- DOMAIN,iadmat.nosdn.127.net,REJECT
- DOMAIN,iadmusicmat.music.126.net,REJECT
- DOMAIN,iadmusicmatvideo.music.126.net,REJECT

# Final
- MATCH,DIRECT
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/2427673393.png)

然后在Proxies处选择Rule，即规则代理，如图所示：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3214514194.png)

最后在General处将System proxy打开，此处Clash for Windows即配置成功，然后去打开网易云，选择设置——>工具——>代理——>使用IE代理设置，确定后重启网易云，此时无版权的歌曲即解锁成功。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4103077367.png)

### 方法三：（基于方法一）

以Windows 10系统为例，打开设置——>网络和internet——>代理——>自动设置代理
脚本地址处填写：

```
http://127.0.0.1:端口/proxy.pac
```

一般为 `http://127.0.0.1:2635/proxy.pac`

然后保存，如图所示：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/823356949.png)

最后再打开网易云，选择设置——>工具——>代理——>使用IE代理设置

最后确认，重启网易云即可。

## 效果

未使用代理：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1721941757.png)

使用代理后：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4074027762.png)

## 最后说明

对于网易云独家的付费版权音乐此代理是无法解决或匹配的音源错误，一些极少数的歌曲可能由于其他平台尚未收录、知名度不高或各大平台的歌曲搜索算法不同都可能导致歌曲匹配错误（难以避免的，很少一部分，Windows上使用也是如此）

Android上使用Clash软件代理后若切换音质后弹出会员充值界面可结束下网易云音乐进程后再打开一下应用即可选择，对于网易云本身无版权的音乐不可做选择，只能使用默认匹配来的音质。

使用代理后，网易云个人资料卡打开提示“网络错误，请重试”或代理打开时登录网易云音乐无法登录，其原因是此类页面加载时通过https请求数据失败后无法将https降级为http来进行请求，所以目前博主有两种解决方法。

第一种：在登录或查看个人资料时将代理关闭，登录后在打开代理。

第二种（提供给手机已Root的用户）：由于从Android Nougat(7.0)开始，谷歌改变了网络安全策略，自签的CA证书将默认不被TLS/SSL连接信任。所以你需要将一份CA证书添加至根目录的系统证书里（项目证书由项目作者N大提供且开源，可放心使用） 

下载地址：
https://www.yfriend.xyz/file/557de9dd.0

将证书（即此文件）添加至此路径下：/system/etc/security/cacerts/

> 转载编辑自深度博客 https://www.yfriend.xyz/155.html