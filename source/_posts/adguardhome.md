---
title: Adguard Home去除家里所有设备上的广告
tags: []
id: '1135'
categories:
  - - 软件
date: 2021-01-08 20:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20201101092641.webp
---

## 简介

现在光去除一台设备上的广告简直太小儿科了，要去除就要去除家里所有设备上的广告。但是一个个的去下载安装设置去广告软件太麻烦了，所以我推荐使用Adguard Home。

官方简介表示：

Ad­Guard Home 是一款全网广告拦截与反跟踪软件。

准确来说首先它是一个开源的 DNS 服务器，部署方便、UI 友好易用，有着防污染、防跟踪、防篡改的能力，其次才是它的去广告、反跟踪功能，是通过重定向 DNS 解析记录实现的。

总的来说他的功能可绝不简单的仅仅是个去广告而已，还能保护用户的隐私、防止DNS污染等功能，最不起眼的可能反而才是这个去广告功能吧。

## 安装

大部分的安装教程都是用Docker来安装的，大部分可能连Docker是什么都不知道。

这里用windows系统的软件来手动安装。

GitHub官方地址：https://github.com/AdguardTeam/AdGuardHome/wiki/Getting-Started

GitHub官方下载地址：https://static.adguard.com/adguardhome/edge/AdGuardHome_windows_amd64.zip

蓝奏云分流（可能不是最新版）：https://ednovas.lanzoux.com/izkPNk6d83a

下载解压缩以后，我们只需要AdGuardHome.exe这个文件。

将 AdGuardHome.exe 移动到 ​C:\Program Files\AdGuard_Home​ 文件夹中（没有AdGuard_Home这个文件夹新建一个即可）

然后搜索cmd或者Windows Powershell，需要用管理员身份来打开。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_20-21-30.webp)

打开以后，依次复制以下代码：

```
cd "C:\Program Files\AdGuard_Home"
.\AdGuardHome.exe --service install
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-59-42.webp)

出现如上图所示，即表示安装完成。

## 登录

还需要在cmd或windows powershell中输入ipconfig来判断当前的IP地址。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_20-26-45.webp)

如图所示，这个就是我们家的IP地址，复制这个IP地址192.168.XXX.X，然后打开浏览器，在网址栏黏贴你的IP地址，然后加上：3000并回车。如下图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_20-28-33.webp)

那么我们就会来到我们的设置页面（127.0.0.1就是本地IP的意思）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-38-55.webp)

## 启动设置

（Adguard Home支持中文，在页面最下方右下角自己可以调整语言）

点击Next下一步即可。端口默认80，在这里一定要把自己管理面板端口改成3000（也就是刚刚登录进来的那个端口），以防止和其他软件发生端口冲突等问题。

下方改成53端口即可。再点击下一步

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-39-14.webp)

这里就是让你设置你的Adguard Home的管理账号登录密码了，最好拿个小本本记住。再次点击下一步，来到恭喜界面，打开仪表盘即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-39-38.webp)

以后再登录这个界面就是你家的ip+:刚刚设置的面板端口。如192.168.000.0:3000（注意分号的中英文）

## 配置

### 常规配置

首先是常规配置，这里的过滤器更新间隔设置3-7天即可，勾选使用AdGuard 浏览安全网页服务。

家长控制：如果你不想看任何lsp内容，勾选即可。

强制安全搜索：勾选后搜不到lsp内容。

### 日志配置

默认启用日志，查询记录保留时间设为30-90天即可，记得保存。

### 统计配置

这个设置为24小时-7天左右即可，记得保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-43-18.webp)

## DNS设置

这个就是比较重要的内容了，防止DNS污染、劫持等。

### 上游DNS服务器

服务器地址选择可以填下方的范例地址，不过更推荐根据你所在的网络环境选择

中国大陆网络环境推荐选择腾讯 (DNS­Pod) 和阿里的公共 DNS （不推荐海外DNS，延迟很高且都受到了不同程度的干扰，反而会减速）。
```
tls://dns.pub
https://dns.pub/dns-query
tls://dns.alidns.com
https://dns.alidns.com/dns-query
```

自由网络环境，比如你海外的VPS，国外的电脑，推荐谷歌和Cloudflare的公共DNS
```
tls://8.8.8.8
tls://8.8.4.4
tls://dns.google
https://dns.google/dns-query
tls://1.1.1.1
tls://1.0.0.1
https://dns.cloudflare.com/dns-query
```

#### Bootstrap DNS服务器

不同地区连接至 DNS 服务器的速度各有差异，各位可以通过 Ping 测速的方式寻找当地连接延迟最低的 DNS 服务器。更多 DNS 服务器可以在 AdGuard 文档中找到。

常见的几个如223.5.5.5/119.29.29.29/114.114.114.114/8.8.8.8/1.1.1.1等

然后这个点击测速上游DNS，等待片刻会自动更新，然后点击应用即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-45-36.webp)

### DNS服务设定

这个速度限制改为0，即不限速。

推荐勾选使用客户端的子网地址和启用DNSSEC。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_20-12-28.webp)

### DNS缓存配置

缓存大小不用动，覆盖最小TTL值和覆盖最大TTL值默认为0，一般也设置成0即可。但如果DNS延迟过大的情况下，可以分别配置为600和3600，不建议更改。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_20-13-02.webp)

## 过滤器

### DNS封锁清单

这个就是所谓的去广告、DNS追踪等。可以添加阻止列表，检查更新（不用过于频繁）。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-48-32.webp)

默认只有三个列表，全部勾选，然后在添加组织列表中，我们可以选择更多。但十分不建议全选，因为过多的规则会导致加载缓慢等问题。

以浏览国内网站为主的用户可以使用 anti-AD + Halflife 过滤规则，如有浏览国外网站的需要，可以根据需要添加 AdGuard DNS Filter、Fanboy's Annoyances List 等规则。

|名称|简介|地址|
|:----|:----|:----|
|AdGuard DNS Filter|AdGuard 官方维护的广告规则，涵盖多种过滤规则|https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt|
|AdAway|AdAway 官方的去广告 Host 规则|https://adaway.org/hosts.txt|
|ADgk|适用于 AdGuard for Android 的去广告规则，去视频 APP 广告、开屏广告|https://banbendalao.coding.net/p/adgk/d/ADgk/git/raw/master/ADgk.txt|
|anti-AD|命中率高、兼容性强|https://anti-ad.net/easylist.txt|
|halflife|涵盖了 EasyList China、EasyList Lite、CJX 's Annoyance、乘风视频过滤规则，以及补充的其它规则|https://gitee.com/halflife/list/raw/master/ad.txt|
|EasyList|Adblock Plus 官方维护的广告规则|https://easylist-downloads.adblockplus.org/easylist.txt|
|EasyList China|面向中文用户的 EasyList 去广告规则|https://easylist-downloads.adblockplus.org/easylistchina.txt|
|EasyPrivacy|反隐私跟踪、挖矿规则|https://easylist-downloads.adblockplus.org/easyprivacy.txt|
|Xinggsf 乘风通用|国内网站广告过滤规则|https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt|
|Xinggsf 乘风视频|视频网站广告过滤规则|https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt|
|MalwareDomainList|恶意软件过滤规则|https://www.malwaredomainlist.com/hostslist/hosts.txt|
|Adblock Warning Removal List|去除禁止广告拦截提示规则|https://easylist-downloads.adblockplus.org/antiadblockfilters.txt|
|Fanboy's Annoyances List|去除页面弹窗广告规则|https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt|

可以看到这里还有拦截恶意软件、钓鱼或欺诈域名的列表等，都可以自行根据需要添加。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-08_19-51-18.webp)

## DNS服务器设置

最重要的一步来了，来到Adguard Home的设置向导页面，可以看到在这里有4个DNS服务器，那么我们选择两个复制下来。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-11_10-19-29.webp)

然后打开你的光猫/路由器管理界面，可以尝试192.168.0.1/192.168.1.1/192.168.2.1/192.168.1.0等，或者你看你的光猫/路由器背后，应该会写有登录地址，还有登录账号和密码。普遍的登录账号为admin/user等。密码如果没有更改过，那就输入光猫/路由器背面的密码即可。

进入管理页面以后找到DHCP服务器设置，找到有DNS字样的东西，复制黏贴刚刚的Adguard Home上的DNS黏贴到这里，然后保存即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-11_10-20-30.webp)

## 效果

就此基本设置完毕，保存以后直接关闭浏览器窗口即可。

至于效果的话，我发现对于谷歌等国外浏览器效果更好。

如下的例图是我在手机上的效果（手机上没有任何屏蔽广告等相关软件）：

这个是我用的自己的流量，也就是说没有用家里的WiFi的情况下，会有广告。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Screenshot_2021-01-08-19-52-35.webp)

而用了刚刚设置好了Adguard Home的WiFi以后，就是这个样子：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210111100724.webp)

开启不到半个小时的时间被过滤器拦截下来的广告等东西图例：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-11_10-08-49.webp)

## 意义

在很大程度上，Adguard Home不仅仅是个广告屏蔽软件，他还能保护、防止DNS被追踪、污染等情况导致你的信息泄露等更严重的情况。正如其名，他可以很好的保护你家里的安全。

> 感谢P3TERX大神和XavierWang在很大程度上给这篇文章的帮助
> P3TERX: https://p3terx.com/archives/use-adguard-home-to-build-dns-to-prevent-pollution-and-remove-ads-2.html
> XavierWang：https://sspai.com/post/63088