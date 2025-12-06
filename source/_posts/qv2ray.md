---
title: Qv2ray和xray超集的使用
tags: [科学上网,VPN,机场,v2ray]
id: '1222'
categories:
  - - 科学上网
date: 2021-03-20 09:15:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4d04fa00-c81d-11ea-929c-38b8e9efcbcc.png
# highlight_shrink: true
---



## Qv2ray

在我们常用的PC系统上，比如Windows/Mac/Linux等系统平台，V2ray官方并没有发布图形化的桌面客户端。

V2rayN和Qv2ray等一些第三方工具，在V2ray官方内核的基础上，为我们提供了图形化界面支持，使用起来会更加方便。

其中Qv2ray除了支持V2ray的vmess协议外，还可以通过安装插件的方式，额外增加对SS/SSR/Trojan等代理协议的支持，可作为V2ray/SS/SSR/Trojan客户端使用。

### 支持的代理协议

Vmess（V2ray）
SS（Shadowsocks）
SSR（ShadowsocksR)
Trojan
Trojan-go
NaiveProxy
Vless

### 特点

图形化界面，方便操作
多系统平台支持
支持国内外流量分流
支持流量统计/重置
支持多种方式添加代理服务器

### 客户端下载

Qv2ray PreviewGitHub下载地址：

https://github.com/Qv2ray/Qv2ray/releases

支持windows和mac平台

### 内核下载

除了下载软件本体以外，还需要额外的下载v2ray/xray内核，否则会无法正常使用

v2ray：https://github.com/v2ray/v2ray-core/releases

Xray：https://github.com/XTLS/Xray-core/releases

下载以后解压，在qv2ray的设置->内核设置->v2ray核心选择`v2ray.exe`或`xray.exe`，资源目录就选择`v2ray.exe`或`xray.exe`所在的目录即可，如图例

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210320055923.png)

推荐用Xray内核，因为他是向下兼容的，所以兼容v2ray-core

###  插件下载:

qv2ray不支持支持vmess和vless以外的节点，不过可以通过添加插件解决

QvSSPlugin – 让你能在 Qv2ray 中启用 Shadowsocks SIP003 完整支持

https://github.com/Qv2ray/QvPlugin-SS/releases

QvSSRPlugin – 让你能在 Qv2ray 中使用 ShadowsocksR

https://github.com/Qv2ray/QvPlugin-SSR/releases

QvTrojanPlugin – 让你能在 Qv2ray 中使用 Trojan

https://github.com/Qv2ray/QvPlugin-Trojan/releases

QvNaiveProxyPlugin – 让你能在 Qv2ray 中使用 NaiveProxy

https://github.com/Qv2ray/QvPlugin-NaiveProxy/releases

QvCommandPlugin – 当特殊事件发生时，运行任意指定的命令

https://github.com/Qv2ray/QvPlugin-Command/releases

QvTrojan-GoPlugin – 让你能在 Qv2ray 中使用 Trojan-Go

https://github.com/Qv2ray/QvPlugin-Trojan-Go/releases

### Trojan go插件核心下载

https://github.com/p4gefau1t/trojan-go/releases

trojan go插件核心设置视频 https://youtu.be/yoEl16nfv-E?t=853

图文 https://www.jamesdailylife.com/qv2ray_check

### NaiveProxy 插件核心下载

插件路径设置方法，参照Trojan-go插件

https://github.com/klzgrad/naiveproxy/releases

## 自动分流

连接设置中已经自动绕过中国大陆和私有地址了，再建议打开绕过BT协议，同时把入站设置中的嗅探打开。毕竟机场都禁BT下载

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/03-20_07-56-56.png)

### 加强版规则

不过你要是觉得这个自动分流不够精确可以使用路由分流规则加强版

下载`geoip.dat`和`geosite.dat`并替换Xray-core里面的同名文件

https://github.com/Loyalsoldier/v2ray-rules-dat

## 添加节点

别的节点直接导入即可，至于VLESS节点可以点新建

根据节点信息进行设置，流控可以选splice是最快的，协议设置根据节点信息设置ws或tcp，tls根据根据配置选择TLS或XTLS最后点OK保存即可

双击节点开始起飞

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/03-20_09-30-34.png)

***

# Xray

## xray 有多快

感谢腹语哥的视频

<iframe width="560" height="315" src="https://www.youtube.com/embed/OdCeoQ2dYxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 主流协议速度对比

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo_2021-03-19_21-20-51.jpg)

## 简介

一个Debian包维护者发现[XTLS库](https://github.com/XTLS/Go)的LICENSE不是BSD许可，提了一个issue希望作者 [@rprx](https://github.com/rprx) 能修改方便打包，详见 https://github.com/XTLS/Go/issues/9 。由这个issue引发了广泛讨论，rprx认为目前许可不是问题，也有不少人认为协议是立场的体现，各执一词。

最终V2ray(V2fly社区)维护者经过投票确认XTLS不符合V2ray的MIT协议，并在[V2ray-core 4.33.0版本](https://github.com/v2fly/v2ray-core/releases/tag/v4.33.0)移除了XTLS。rprx和其拥护者行动起来，很快就创建了[Project X项目](https://github.com/XTLS)和[Xray子项目](https://github.com/XTLS/Xray-core)（Xray取名来自XTLS和V2ray的结合），并发布了Xray-core的多个版本。这便是Xray的大致由来。

XTLS和Xray离不开作者 [@rprx](https://github.com/rprx) 的辛勤付出，因此也简要介绍一下@rprx ：

1. @rprx 是[VLESS协议](https://tlanyan.me/introduce-v2ray-vless-protocol/)的设计者，在介绍VLESS协议时写下了 [性能至上、可扩展性空前，目标是全场景终极协议](https://github.com/v2ray/v2ray-core/issues/2636) 的宏壮愿景；

2. @rprx 是 XTLS 的作者，在 [XTLS库](https://github.com/XTLS/Go) 中写下了 “THE FUTURE” 的霸气描述。将内外两条TLS连接结合，rprx可能不是第一个有这想法的人，但却是第一个将其实现、并成熟应用到实际中的作者。从使用表现上看，XTLS无愧于rprx对其的评价：[划时代的革命性概念与技术：XTLS](https://github.com/rprx/v2ray-vless/releases/tag/xtls)，以及社区给出的“黑科技”称谓；

3. @rprx 是Project X和Xray项目的创始人。由于LICENSE理念之争，rprx创建了对标Project V和V2ray-core的Project X和Xray-core项目，广受欢迎。

更多Xray-core新特性请参考官方说明：https://xtls.github.io/about/new/，或者官方库发行说明：https://github.com/XTLS/Xray-core/releases

## Xray和V2ray的区别

在说明Xray和V2ray区别之前，先说一下三个相近但不同的概念：

V2ray：Project V 是用于构建基础通信网络的工具合集，其核心工具称为V2Ray。V2ray主要负责网络协议和功能的实现，既可以单独运行，也可以和其它工具配合。V2ray官网是：https://v2ray.com/，Github项目主页是：https://github.com/v2ray，TG讨论组是：@projectv2ray；

V2fly：出现一些科学上网作者被喝茶事件后，V2ray原开发者长期不上线，其他维护者没有完整权限，导致V2ray项目维护困难。因此社区在2019年组建了V2fly组织，继续维护V2ray，也是目前V2ray发展的主力。V2fly官网是：https://www.v2fly.org，Github项目主页是：https://github.com/v2fly，TG通知频道：@v2fly，TG交流群为：@v2fly_chat；

Xray：因许可理念之争，VLESS和XTLS的作者单独创建了Xray项目，目前是V2ray的超集，后续可能有不同的发展路线。Xray文档官网（测试中）：https://xtls.github.io/， Github项目主页：https://github.com/XTLS，TG交流群：@projectXray。

从上面可以看到，先有V2ray(Project V)，然后是V2fly，最后才出来Xray(Project X)。其中V2fly是V2ray的社区，可以认为两者是同一个组织。

详细一点说，Xray和V2ray区别如下：

1. Xray是V2ray的一个分支(Fork)。Xray项目基于V2ray而来，其支持并且兼容V2ray的配置；
2. Xray是V2ray的超集。虽然最新版V2ray删除了XTLS，但仍保留VLESS协议。Xray提供完整的VLESS和XTLS支持，目前是V2ray的超集，但后续Xray可能会有会有自己的发展方向；
3. 如果使用XTLS，强烈推荐使用Xray，或者安装V2ray-Core 4.29.0 ～ 4.32.1版本；不使用XTLS的情况下，使用V2ray和Xray均可。

一个小提示是，Xray项目创建以来，V2ray没再发布新版本，反而Xray热火朝天，不断出新版和新功能。此外Xray的TG群也非常热闹，每天至少七八K的消息。如果你喜欢尝试新东西和折腾，Xray适合你，否则V2ray也挺好用。

如今Xray和V2ray分家，后续有没有可能Xray再合并回V2ray呢？这个问题没有答案，也许会合并回去结束分裂，也可能就此分道扬镳。io.js从Node.js分出后来又合并回去，C++源自C但完全是一门新语言独立发展，因此一切皆有可能。

> 部分引用自James's Daily Life https://www.jamesdailylife.com/qv2ray
> tlanyan https://tlanyan.me/xray-tutorial/