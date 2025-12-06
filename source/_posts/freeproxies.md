---
title: 节点池整理和使用说明
tags: []
id: '1150'
categories:
  - - 科学上网
date: 2021-01-15 21:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/globe-2679754_1920-768x512-1.jpg
---

# 免费抓取上千个白嫖节点

适合精通Clash的人参阅。小白不建议使用,容易订阅太多导致软件或机器卡死。

## 网站

[自己搭建教程](/2021/01/27/proxypool/)

[自己搭建教程](/2021/04/22/newproxypool/)（新版）

### EdNovas的节点池

> EdNovas节点池因为一些原因决定暂时闭站

**EdNovas自己搭建的节点抓取网站 https://proxy.ednovas.xyz**

搜集的一些别的节点抓取网站

### 别的大佬的节点池

> 都闭站/关站了

~~https://bihai.cf/
https://proxypoolss.tk/
https://proxypoolsstest.herokuapp.com/~~

### 还未闭站/未统计/未知

代理池集合如不能打开的选择全局，用谷歌浏览器重新打开:

https://free.kingfu.cf
https://free.dswang.ga
https://clashpool.ml
https://sspool.nl
https://hm2019721.ml/
https://fu.stgod.com/
https://proxy.51798.xyz/
https://hello.stgod.com/
https://upan.tk/
https://proxypool-guest997.herokuapp.com/
https://ss.dswang.ga:8443/
https://free886.herokuapp.com
https://fq.lonxin.net
http://emby.luoml.eu.org
https://etproxypool.ga/
https://outseen.tk/
https://proxypool.fly.dev/
https://sspool.herokuapp.com/
https://www.linbaoz.com/
不知道那里的小猫咪链接 https://raw.githubusercontent.com/adiwzx/freenode/main/adispeed.yml
伊朗  小猫咪 https://raw.githubusercontent.com/AzadNetCH/Clash/main/AzadNet.yml
自由代理  https://raw.githubusercontent.com/adiwzx/freenode/main/adispeed.txt

## 全部订阅链接

这里包含了Clash、ShadowRocket、Surge等订阅链接地址

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-15_21-10-56.webp)

```
https://proxypoolsstest.herokuapp.com/clash/config
```

可以直接一键导入，不过上千条节点呢，十分不建议直接导入，因为节点太多容易导致软件卡顿崩溃。

可以点击选择“如何筛选等更多信息”

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-15_21-27-06.webp)

## Provider示例分析

	https://proxypoolsstest.herokuapp.com/clash/proxies?c=CN,HK,TW&speed=15,30&type=ss

  这里的c=可以选择地区，包括AT,CN,IN,HK,JP,NL,RU,SG,TW,US...。speed=可以设定速度，单位是MB。type=是使用的协议，包括ss，ssr，vmess，trojan。

那么根据这里给出的provider，我们就可以配置订阅链接文件了

## Clash Proxy Provider使用说明：

https://10101.io/2020/02/12/use-clash-proxy-provider-with-subconverter

```
proxy-provider:
	name: # provider 名字
		type: # provider 类型，可以是 http 或者 file，分别为远程链接和本地文件。
		path: # 文件保存路径，可以为绝对路径，./ 相对于 clash home 文件夹
		url: # 类型为 http 时，填写的 URL 链接
		interval: # 类型为 http 时，订阅自动更新周期
		health-check: # 健康检查选项
			enable:	# true or false
			url: # 测试地址，可以为 http://www.gstatic.com/generate_204
			interval: # 测试间隔
```
其中，url 或者 file 类型的 provider 中节点写法如下：
```
proxies:
  - {name: 1, server: 1.1.1.1, port: 34119, type: ss, cipher: rc4-md5, password: 3M3duq}
  - {name: 2, server: 1.1.1.2, port: 34119, type: ss, cipher: rc4-md5, password: 3M3duq}
  - {name: 3, server: 1.1.1.3, port: 35119, type: ss, cipher: rc4-md5, password: 3M3duq}
  - {name: 4, server: 1.1.1.4, port: 35119, type: ss, cipher: rc4-md5, password: 3M3duq}
```

### 使用示例
```
# proxy-provider 字段
proxy-provider:
  example:
    type: http
    path: ./example.yaml
    url: https://example.com	# clash provider 订阅链接
    interval: 3600
    health-check:
        enable: true
        url: http://www.gstatic.com/generate_204
        interval: 300

# 在 Proxy Group 中使用 proxy-provider
Proxy Group:
  - name: PROXY
    type: select
    use:	# 引入 proxy-provider 使用 use 关键字
      - example
```

## 配置

配置的时候可以先选择上方的远程配置文件一键导入
```
https://proxypoolsstest.herokuapp.com/clash/config
```
然后编辑修改节点的Provider等相关信息。

如果你不想用Provider来直接编辑，可以复制链接到浏览器并访问，会给出proxies节点。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-15_21-43-29.webp)

然后把Proxies复制到配置文件中进行编辑

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-15_21-44-02.webp)

## 速度

他给的速度一般不可信，因为会根据实际地理位置、运营商等差异有所不同。

自己多测试几个节点，肯定能找到好的，说不定就能找到如下图所示的中高速节点呢

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210115214813.webp)


