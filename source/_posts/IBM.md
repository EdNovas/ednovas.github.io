---
title: 优雅的白嫖IBM云自建节点
tags: []
id: '1139'
categories:
  - - 科学上网
date: 2021-01-10 20:53:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/IBM.webp
---

## 准备工作

GitHub账号一个，没有自行注册

https://github.com/

IBM cloud账号一个，没有注册一个，不需要信用卡

https://cloud.ibm.com/registration

这里邮箱推荐填Gmail或者outlook邮箱

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-30-02.webp)

发送邮箱验证码，接码填入即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-30-27.webp)

姓名自己填写，地区要写当前IP位置（一般默认）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-30-57.webp)

最后点击create account完成注册账号

## 配置GitHub项目

（自己要有GitHub账号，没有的话注册一个）

首先先打开大佬的GitHub项目地址：

https://github.com/P3TERX/IBM-CF-V2

点击那个Use this template（使用这个模板），不想被大佬拉黑就别瞎点，特别是别别别点fork。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-22-54.webp)

然后自己随便取个仓库名称，比如我这里用了ednovasibm0，然后点击创建

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-23-21.webp)

## 新建IBM app

在cloud foundry里面新建一个app，如果你找不到的话链接在下面

https://cloud.ibm.com/cloudfoundry/overview

点击create创建一个新的app

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-38-19.webp)

地区自己选择，推荐dallas达拉斯，下面的plan选择lite，这样右边的pricing价格就会显示是免费的。免费账户是可以自选内存的，如果你就创建这个一个的话内存直接拉满256MB就行，也可以创建2个128M应用程序，或者创建4个64M应用程序。

下面就选JAVA就行。

Domains推荐选择这个us-south.cf.appdomain.cloud，因为据说其他域名都被墙了，但是我没有测试过，方便起见，还是直接选择这个。

App name随意，但是你要记住，后面要用到。输入App name的时候host name也会自动保持相同，这个不用管了，默认相同就行。其他选项全部默认，如果你爱折腾自己改也行，后面会稍微麻烦点。

最后点击右边的创建（我这里因为已经用了256MB，所以无法创建新的免费的app了）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-39-01.webp)

## 关联GitHub项目到IBM Cloud

GitHub中打开刚刚复制过来的模板仓库的设置，secrets，新建一个repository secret。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-50-28.webp)

需要创建下面几个环境变量和说明

#### IBM_CF_USERNAME	

IBM Cloud 用户名（也就是你注册IBM时候用的邮箱）

（这里放一张图作为例子，下面都是一样的，不过内容不同）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_20-53-23.webp)

#### IBM_CF_PASSWORD

IBM Cloud 密码（你注册IBM时候用的密码，用于登录获取你的app的）

#### IBM_CF_APP_NAME	

你创建的 IBM Cloud App 的名称（就是刚刚让你记住的那个app name，和host name相同的那个）

#### V2_UUID	

使用 UUID 生成器自行生成。前往 https://1024tools.com/uuid ，点击生成，在结果中随便复制一个uuid即可。这个UUID后面要用到，请记录下来。
例如：cc020f88-b753-4685-87c3-09574e5e8f8d

#### V2_WS_PATH_VMESS 或者 V2_WS_PATH_VLESS	二选一（极力推荐V2_WS_PATH_VMESS，因为选择vless就只能在v2ray或者qv2ray上使用了，不支持其他包括clash在内的任何软件）

定义 WebSocket path ，只能是字母或者数字或者两者组合。（这个不重要，只要自己能记住就行，配置v2ray的时候会用到）
例如我这里填一个：ednovas

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-02-17.webp)

## 运行程序

上述secrets全部添加完并且确认无误后，点击Actions，选择v2ray程序，运行。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-04-52.webp)

需要等待上几分钟，直到那个运行状态的颜色从黄色变成绿色。

在此等待期间，可以去大佬的GitHub项目下点个小星star，这就是对大佬的肯定和支持了。

https://github.com/P3TERX/IBM-CF-V2

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-07-24.webp)

## v2ray配置

等待actions安装完成以后，打开v2ray，用v2ray配置（其他支持vmess的也可以，但是v2ray是原生的，最舒服）

老规矩，还是去服务器新建一个vmess服务器（如果上面选择了V2_WS_PATH_VLESS，这里就选择vless服务器）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-09-03.webp)

那么接下来我们的地址栏填写刚刚创建的app name + .us-south.cf.appdomain.cloud（如果你选择了其他域名后缀，自己切换）

端口写443

用户ID复制上刚刚生成的UUID，例如刚刚的cc020f88-b753-4685-87c3-09574e5e8f8d

额外ID写0即可

别名自己写

传输协议选择ws

伪装域名为空

路径，写上/ + 刚刚WebSocket path写的那个路径（V2_WS_PATH_VMESS的值），比如我刚刚的ednovas，那么这里就是 /ednovas

底层传输安全选择tls，跳过证书验证选false。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-15-49.webp)

## 加速

这个样搭建出来的节点能用，但是速度不快，我们可以使用Cloudflare反代加速 + 优选IP来加速。

之前写过，这里就不再重申了

[CloudFlare反代加速](/2021/01/04/heroku/#CF反代)

[优选IP](/2021/01/04/heroku/#优选IP)

那么最后搭建出来的效果是这样的

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-19-53.webp)

## 起飞速度

YouTube速度如下，我原本还想着把视频切换到8k上，万万没想到他居然是自动8k。这是21：25测的速，算是晚高峰了吧，这速度不是可观了，是直接起飞了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-10_21-24-24.webp)

## 自动续期

如果程序超过10天没有人使用的话，会自动暂停，所以说，需要自动续期一下

可以使用免费的网站监控。网上随便找一个监控一下就可以了。

比如阿里云的云监控

## 配置定时部署最新版本

为了防止所有人都同一时间部署而导致的连坐批量封号，这个功能目前已经默认关闭了。IBM 官方有个提示是 “轻量应用程序在开发处于不活动状态达到 10 天后，将进入休眠状态。”，其中 “开发处于不活动” 没有明确定义，而目前 P3TERX 大佬已验证即使是超过 10 天也不会停止运行，定时部署是否开启由你自己决定。

开启定时部署需手动开启需编辑 work­flow 文件（.github/workflows/ibm-cf-v2.yml），取消注释，然后根据自己的需求修改定时时间。

```
on:
  workflow_dispatch:
  repository_dispatch:
#  schedule:
#    - cron: 0 21 * * 5
```

## 封号风险

### 什么是封号

账号无法登录，收到试用到期邮件。

账号能登录，但应用被管理员停用，且无法删除。

### 防止封号

首先IBM这么薅他的羊毛是可能被封号的，但只要不频繁滥用，大量账号同时进行开发，使用过IBMYes项目及衍生项目，都有可能被封号。

什么？听不懂上面在讲什么？特别是后面两点？那就不用管了，和你基本没关系。

### 注册新号
如果账号不幸被封，那么唯有注册新账号这一个办法。对于新账号，有以下几点需要注意：
1. 使用干净的 IP ，浏览器开启隐私模式，再注册，保证账号的纯净性。
2. 不要注册过多账号，建议一个 IP 只注册一个账号。
3. 不要在同一个 IP 同时登录多个账号。
4. 不要使用被恰饭 YTB（youtuber） 曝光过的项目，IBM 会重点关注它们。
5. 使用过的项目不幸被恰饭 YTB 曝光，在还没有被滥用的情况下立即删除相关应用。
6. 正常的使用，不要经常测速。

总结：你跟着我的教程走就没事（误，其实是P3TERX大佬的教程，但他讲的有点太快了，我重新整理了一下）

尽量别注册超过一个账号。使用纯净IP，最好是自建节点或者没人用的节点。

> 感谢P3TERX大神提供的项目和教程
> 教程地址：https://p3terx.com/archives/how-to-use-ibm-cloud-gracefully-for-free.html
> GitHub项目地址：https://github.com/P3TERX/IBM-CF-V2