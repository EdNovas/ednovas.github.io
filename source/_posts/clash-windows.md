---
title: Clash电脑端教程
tags: []
id: '79'
categories:
  - - 科学上网
date: 2020-11-29 06:07:41
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/93264e9bf3a10632a0fd7798af53dc8c.webp
---

> Clash 电脑版使用教程
> Ednovas last edited on 2020.11.29



## 订阅链接转换

如果不是Clash订阅链接需要转换的可以前往[这里](/2020/12/20/订阅链接转换/)

## 下载安装

1.  下载Clash for Windows
    *   [Github下载链接](https://github.com/Fndroid/clash_for_windows_pkg/releases)
2.  安装软件
    *   双击打开Clash for windows.exe，同意权限，选择给所有用户安装（图一），点击next
    *   默认安装位置即可，（如果想要更改安装位置，点击Browse...选择）点击Install（图二）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_11-53-22.webp)

<center>图一</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image.webp)

<center>图二</center>

## 软件汉化

[汉化指南](/2021/02/01/clashlanguage/)

## 打开软件

耐心等待安装完成，双击打开桌面的快捷方式Clash for Windows（图三）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_16-03-53.webp)

<center>图三</center>

## 导入节点组

**订阅链接和yml文件二选一即可，不是都需要。大部分情况都是订阅链接。**

### （1）订阅链接导入方法

首先点击Profiles，将`订阅链接`复制到图中白框内，点击Download下载节点组（图四）

想要获取`免费订阅`请前往页面，[点此跳转](/2020/12/18/freesubscribes/)

或加入[EdNovas云](https://ednovas.me/)，流量大、价格贱，节点较多，速度起飞！ https://ednovas.me/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-19-55.webp)

<center>图四</center>

### （2）yml文件导入教程

将如（图五）所示的yml文件(或txt文件)拖入到Profiles中（图六）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-30-23.webp)

<center>图五</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-31-24.webp)

<center>图六</center>

## 选择节点组

在Profiles中选择你想要链接的节点组（图七），左键单击即可选择，如果选中，节点组会变成灰色（图八），即为选中。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-33-33.webp)

<center>图七</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-34-24.webp)

<center>图八</center>

## 选择节点

1.  在Proxies中选择你想连接的节点（图九（1））。推荐**选择Rule**（自动不代理国内网站，仅代理国外），如果需要全局代理全部网站时，再选择Global，并选择你想选择的节点即可。
2.  如果Proxies中没有自动显示（图九（1））的内容，左键单击第一个列表即可展开（图九（2）、图九（3））。
3.  可以点击小山地推荐根据延迟检验结果，选择延迟低（ms值小）的节点（图十）。
4.  注意：如果有**自动选择**的话，选择自动选择即可，软件会自动选择延迟最低的节点。
5.  注意：软件有**负载均衡**会无法选择节点，忽略此步即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-56-04.webp)

<center>图九（1）</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-05-25.webp)

<center>图九（2）</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-08-42.webp)

<center>图九（3）</center>

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_14-59-41.webp)

<center>图十</center>

## 连接节点

在General中打开System Proxy就可以了。如果有弹窗请求连接网络，同意即可。如果想要让此软件随系统开机自启动，打开Start with Windows即可。（图十一）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-14-43.webp)

<center>图十一</center>

至此就是Clash Windows端的使用教程了，以下为Clash的一些进阶玩法，有兴趣可以试试

* * *

## 自定义节点组规则

1.  打开节点组策略

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-39-24.webp)

2. 左侧即为Proxy Groups以及Proxies，右侧为每个Proxy Groups中的每个节点信息

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-40-37.webp)

3. 可以点击Proxy Groups边上的Add添加一个Proxy Group（左到右依次是自动选择，故障转移，手动选择和负载均衡）根据自己需要创建Group Name以及选择功能。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-43-29.webp)

4. 现在就可以拖动自定义Proxy Groups的顺序以及节点到新建的Proxy Group中

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-47-13.webp)

5. 切记要点击右上角的**Save**保存你的设置

6. 在Proxies中选择你新创建的Proxy Group即可

* * *

## 选择代理网站/域名

1. 打开规则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-50-26.webp)

2. 可以添加或者删除域名网站等

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-51-01.webp)

3. 创建一个新的规则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2020-11-29_15-51-23.webp)

4. 记得保存！

## Q&A 有问题请看这里

### 安装完成后无法正常代理

重启一次试试，很多电脑在刚安装完clash以后无法立即使用，代理端口没法正常启用，重启后再次尝试。

### 为什么重启了还是连不上（系统代理打开以后会自动关闭）

具体表现为系统代理打开以后会自动关闭。

首先去系统设置里面清除系统代理设置

如无法解决，则检查是否有其他安全/代理软件修改代理设置

如果装有QQ输入法或者QQ音乐等腾讯系软件，建议卸载或者禁止开机自动启动，此类毒瘤软件会更改系统代理设置。特别是QQ输入法

（参考自Sabrina的万事屋 https://merlinblog.xyz/wiki/cfw.html ）

### 要是还是连不上怎么办

Clash作者给出的解决方法https://github.com/Fndroid/clash_for_windows_pkg/issues/312

下载Process Monitor，观察（仅包含） HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ 这个键值被什么应用修改，关闭应用进行测试

大部分是UWP类应用自动修改系统代理，而导致和Clash的代理冲突，从而没法正确上网。

可以看到下方反馈中，很多反馈QQ拼音输入法和QQ音乐的。可能还有其他也会修改系统代理的软件，就需要用Porcess Monitor自己去发现，然后关闭/卸载了。

### 为什么打开电脑没有网络，再打开Clash就有网络了

具体表现为开机后打开任何网页都没法加载，但是再打开Clash这个软件就都恢复正常了。

这是因为Clash在关机前没有正确关闭。因为该软件是会修改系统代理的，所以需要在关机前先关闭该软件的系统代理，然后再关机。

否则，电脑会在开机后一直连接着关机前的系统代理，而Clash却没有启动，自然就会发生连接不上，没有网络的错误。

解决方法就是：

关机前先关闭Clash的系统代理再关机，或者开机后再手动启动Clash

推荐把Clash设置为系统自动启动，他会自动分流，不代理国内流量，所以不用担心国内访问会变慢。