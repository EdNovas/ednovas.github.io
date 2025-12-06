---
title: Clash TUN和TAP模式
tags: [clash,tun,tap]
id: '1210'
categories:
  - - 科学上网
date: 2021-02-15 21:34:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/93264e9bf3a10632a0fd7798af53dc8c.webp
# highlight_shrink: true
---

> 转载编辑自 https://www.mihu.live/archives/208/

## 非系统代理应用上网

浏览器之类的应用都是使用系统代理的，一些非系统代理应用，可以通过设置被cfw接管。

目前有两种模式，TAP模式和TUN模式，`更推荐使用TUN模式`（下面是windows系统方法，mac参考https://docs.cfw.lbyczf.com）。

## TUN模式

### 方法一

1. 进入网站 https://www.wintun.net ，点击界面中Download Wintun xxx下载压缩包，根据系统版本（win10 64位对应的是amd64目录下）将对应目录中wintun.dll复制至clash的Home Directory目录中（General页面的Home Directory点击就可以打开）

2. 点击General中Service Mode右边Manage，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode右边地球图标变为绿色即安装成功

3. 点击settings——Profile Mixin——YAML，点击edit，输入下面的内容，点击保存

```
mixin: 
   hosts:
     'mtalk.google.com': 108.177.125.188
     'services.googleapis.cn': 74.125.203.94
     'raw.githubusercontent.com': 151.101.76.133
   dns:
     enable: true
     default-nameserver:
       - 223.5.5.5
       - 1.0.0.1
     ipv6: false
     enhanced-mode: redir-host #fake-ip
     nameserver:
       - https://dns.rubyfish.cn/dns-query
       - https://223.5.5.5/dns-query
       - https://dns.pub/dns-query
     fallback:
       - https://1.0.0.1/dns-query
       - https://public.dns.iij.jp/dns-query
       - https://dns.twnic.tw/dns-query
     fallback-filter:
       geoip: true
       ipcidr:
         - 240.0.0.0/4
         - 0.0.0.0/32
         - 127.0.0.1/32
       domain:
         - +.google.com
         - +.facebook.com
         - +.twitter.com
         - +.youtube.com
         - +.xn--ngstr-lra8j.com
         - +.google.cn
         - +.googleapis.cn
         - +.gvt1.com
   tun: 
     enable: true
     stack: gvisor
     dns-hijack:
       - 198.18.0.2:53
     macOS-auto-route: true
     macOS-auto-detect-interface: true # 自动检测出口网卡
```

4. 返回general页面开启Mixin即可，之后点击connections会发现所有连接都是TUN模式

### 方法二

如果上述方法卡在第二步，点击安装以后一段时间都没有任何反应，可以采取如下方法

1. 打开home directory（General页面的Home Directory点击就可以打开）
2. 进入service文件夹
3. 在资源管理器上方的路径处，默认应为 C:\Users\Administrator\.config\clash\service，改成cmd并回车，即为在此处打开cmd
4. 打开以后，输入 `service install clash-core-service.exe` 等待安装完毕后，关闭窗口，重启计算机
5. 点击settings——Profile Mixin——YAML，点击edit，输入下面的内容，点击保存

```
mixin: 
   hosts:
     'mtalk.google.com': 108.177.125.188
     'services.googleapis.cn': 74.125.203.94
     'raw.githubusercontent.com': 151.101.76.133
   dns:
     enable: true
     default-nameserver:
       - 223.5.5.5
       - 1.0.0.1
     ipv6: false
     enhanced-mode: redir-host #fake-ip
     nameserver:
       - https://dns.rubyfish.cn/dns-query
       - https://223.5.5.5/dns-query
       - https://dns.pub/dns-query
     fallback:
       - https://1.0.0.1/dns-query
       - https://public.dns.iij.jp/dns-query
       - https://dns.twnic.tw/dns-query
     fallback-filter:
       geoip: true
       ipcidr:
         - 240.0.0.0/4
         - 0.0.0.0/32
         - 127.0.0.1/32
       domain:
         - +.google.com
         - +.facebook.com
         - +.twitter.com
         - +.youtube.com
         - +.xn--ngstr-lra8j.com
         - +.google.cn
         - +.googleapis.cn
         - +.gvt1.com
   tun: 
     enable: true
     stack: gvisor
     dns-hijack:
       - 198.18.0.2:53
     macOS-auto-route: true
     macOS-auto-detect-interface: true # 自动检测出口网卡
```

6. 返回general页面开启Mixin即可，之后点击connections会发现所有连接都是TUN模式

![](https://s3.ax1x.com/2021/01/19/s26MGD.png)

## TAP模式

1. 点击General页面中TAP Device选项的Manage按钮，在弹出对话框中选择Install将会安装 TAP 网卡，此网卡用于接管系统流量，安装完成可在系统网络连接中看到名为cfw-tap的网卡
   
2. 启动 TAP 模式：点击settings——Profile Mixin——YAML，点击edit，输入下面的内容，点击保存
   
3. 返回general页面开启Mixin即可。

```
mixin: 
  dns:
    enable: true    
    enhanced-mode: redir-host
    listen: :53
    nameserver: 
      - https://doh.dns.sb/dns-query
      - https://dns.adguard.com/dns-query
      - https://cdn-doh.ssnm.xyz/dns-query
      - 119.29.29.29 #腾讯
      - 223.5.5.5 #阿里
```