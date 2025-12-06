---
title: VPS屏蔽Censys扫描
tags: [VPS]
categories:
  - - VPS
date: 2021-12-20 19:12:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/censys.jpg
---

## 什么是Censys

https://censys.io

Censys 是一款用以搜索联网设备信息的新型搜索引擎 ，安全专家可以使用它来评估他们实现方案的安全性，而黑客则可以使用它作为前期侦查攻击目标、收集目标信息的强大利器。

### Censys功能介绍

现在，黑客和安全专家们拥有了一款新型强大的分析工具，那就是 Censys 搜索引擎，与最流行的搜索引擎Shodan非常类似。Censys是一款免费的搜索引擎，最初由密歇根大学的研究人员在10月发行，目前由谷歌提供支持。

Censys搜索引擎能够扫描整个互联网，Censys 每天都会扫描IPv4地址空间，以搜索所有联网设备并收集相关的信息，并返回一份有关资源（如设备、网站和证书）配置和部署信息的总体报告。

Censys官方网站上这样描述该搜索引擎：

> “Censys是一款搜索引擎，它允许计算机科学家了解组成互联网的设备和网络。Censys由因特网范围扫描驱动，它使得研究人员能够找到特定的主机，并能够针将设备、网站和证书的配置和部署信息创建到一个总体报告中。”

### Censys原理及架构

与Shodan类似，Censys维护着一个完整的数据库，里面保存着每个暴露在互联网上的设备信息。对于一个黑客来说，如果他想搜索一个特定的目标，并需要收集目标配置的信息，那么对他来说censys无疑是一款特权工具。同时，安全专家能够轻易锁定互联网上保护措施很差的设备。

密歇根大学领导Censys项目的研究人员兼ZMap发明者Zakir Durumeric说道：

> “从ATM和银行保险箱到发电厂的工业控制系统，我们已经找到了它们中的所有信息。这令人感到非常担忧。”

Censys的开发是作为一个开源项目的一部分的，该项目旨在维护一个“联网设备的完整数据库”，目的是帮助安全专家来评估互联网上的产品和服务的安全性。

Censys使用到了[ZMap](https://zmap.io/) 和ZGrab。其中，ZMap是一款网络扫描器，它能够扫描特定机器，以寻找可能被利用的安全漏洞，它分析了40亿个IP地址，并每天搜集这些IP地址上设备的信息；ZGrab是一款应用层扫描器。此外，这份 [研究论文](https://jhalderm.com/pub/papers/censys-ccs15.pdf) 中详细介绍了Censys的架构和所实现的功能。

发现物联网设备重用密钥的功臣

我建议感兴趣的读者阅读一下麻省理工学院关于Censys的技术评论《针对互联网上的肮脏秘密的搜索引擎》（“A Search Engine for the Internet’s Dirty Secrets”）。

目前，安全专家已经在使用Censys，最近SEC咨询部的研究人员发现，物联网设备重复使用了加密密钥，使得数百万设备处于危险之中（ Freebuf相关报道 ）。专家们分析了4000固件，发现只有大约580个不同的私钥。使用Scan.io和Censys.io使得他们发现，相同密码集存在广泛重用的情况，其中580个密码中只有230个处于使用状态。

## 如何屏蔽以保证VPS安全

### 屏蔽IP段

#### 宝塔环境

宝塔首页==>>安全==>>防火墙==>>屏蔽IP

将

```
162.142.125.0/24
167.94.138.0/24
167.94.145.0/24
167.94.146.0/24
167.248.133.0/24
192.35.168.0/23
2620:96:e000:b0cc:e::
```

屏蔽掉即可

#### 非宝塔环境

安装 ipset

```
#Debian/Ubuntu 系统
apt-get -y install ipset
#CentOS 系统
yum -y install ipset
```

创建规则

```
#创建一个名为 censys 的规则
ipset -N censys hash:net
```



下载链接：https://hostloc.com/forum.php?mod=attachment&aid=MTUxNDUzfDkxYmMyMzM2fDE2NDAwNjQxMTF8MHw5NDI2ODI%3D （复制该链接在浏览器中打开）

下载censys.zone到/root目录（也可以在其他目录，下面命令路径要改）

记得解压

```
#将 IP 段添加到 censys 规则中
for i in $(cat /root/censys.zone ); do ipset -A censys $i; done
```


屏蔽

```
iptables -I INPUT -p tcp -m set --match-set censys src -j DROP
```


解除屏蔽

```
iptables -D INPUT -p tcp -m set --match-set censys src -j DROP
```



### 屏蔽Censys-specific user agent

#### 宝塔环境

宝塔Nginx防火墙==>>全局配置==>>User-Agent过滤==>>编辑关键词过滤

前括号后添加

```
ensys|
```



#### 非宝塔环境

Nginx配置文件加上

```
if ($http_user_agent ~* "^(?=.*censys)") {
            return 403;
        }
```




### Cloudflare

防火墙---工具---IP 访问规则

屏蔽IP

防火墙---工具---用户代理阻止

屏蔽User-Agent


censys现在的IP和User-Agent为

```
162.142.125.0/24
167.94.138.0/24
167.94.145.0/24
167.94.146.0/24
167.248.133.0/24
192.35.168.0/23
2620:96:e000:b0cc:e::
```

```
Mozilla/5.0 (compatible; CensysInspect/1.1; +https://about.censys.io/)
```

## 官方最新文档————如何不被扫描

上述的IP和UA可能不是最新的，最新的请参照官方文档，但是方法都是一样的。

https://support.censys.io/hc/en-us/articles/360043177092-from-faq


> 参考来源：SecurityAffairs、THN，FB小编JackFree编译，来自FreeBuf黑客与极客（FreeBuf.com）
> 屏蔽部分来自 https://support.censys.io/hc/en-us/articles/360043177092-from-faq 和 https://hostloc.com/thread-942682-1-1.html