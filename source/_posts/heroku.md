---
title: Heroku部署免费自建节点
tags: []
id: '1127'
categories:
  - - 科学上网
date: 2021-01-04 10:16:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1_B-khKHPeEEixZhMB9LlWrg.webp
---

## 准备工作

### 注册Heroku

首先先要去heroku注册一个账号，不能使用QQ邮箱。推荐使用Gmail和微软outlook邮箱。

如果看不懂可以使用页面翻译，不支持中文。

https://dashboard.heroku.com/

会发一封邮箱验证邮件，点击激活即可。密码设置需要至少8位，带数字字母和符号。

最后有一个界面，会询问什么italian什么的不用管他，直接accept同意。

### 注册一个Cloudflare账号

Cloudflare（后简称Cf）是个以反向代理的内容分发网络及分布式域名解析服务为主要业务的企业，主要可以提供全球CDN加速服务。

官网：

https://www.cloudflare.com/

同样注册一个账号，网站支持中文，邮箱随意，可以用QQ邮箱，不过还是建议使用Gmail和Outlook等国外邮箱。

可能会让你输入一个你的域名，有的话可以输入你freenom的域名或者你自己的域名，没有的话瞎填一个也没事。

这个后面我们会用到，不急，用于反代加速的。

### V2ray

[电脑端V2ray使用说明](/2020/12/19/v2ray-windows/)，我们这里只需要[下载软件](https://github.com/v2fly/v2ray-core/releases/)即可，暂时不用配置。

### 优选IP软件

[下载](https://proxy.freecdn.workers.dev/?url=https://github.com/badafans/better-cloudflare-ip/releases/latest/download/windows.zip)并解压，项目地址https://github.com/badafans/better-cloudflare-ip

## 部署Heroku

点击[一键部署](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbclswl0827%2Fv2ray-heroku)

（感谢bclswl0827大佬的部署镜像，项目地址https://github.com/bclswl0827/v2ray-heroku ）

会自动跳转到部署界面

首先输入你想要的app name也就是APP的名字，这里就是一个二级域名，不能和别人有重复的，也不需要记住，所以随意设定。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-26-36.webp)

要注意一个账号最多部署5个，超过会有红框警告。所以还想搞更多的话，请自行注册账号。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-26-54.webp)

然后点击部署App，等待大概1分钟全部部署完毕，点击Manage App进入管理界面。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-35-33.webp)

点击Settings设置，然后点击Reveal Config Vars显示配置信息，把这里的这一大长串UUID复制下来保存好，比如我这里就是ad806487-2d26-4636-98b6-ab85cc8521f7

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-37-55.webp)

然后往下拉，有个Domains域名，把这个也需要记录下来，比如我这里就是https://ednovas11.herokuapp.com/

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-38-08.webp)

## 配置V2ray

然后打开你的V2ray，点击服务器，添加一个Vmess服务器

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-40-47.webp)

地址就填写刚刚复制的Domains域名，但是要去掉（https://）和末尾的（/），那么这里就是ednovas11.herokuapp.com，而用户ID就复制上刚刚的那一大长串UUID。

额外ID写64，别名随意，传输协议选ws，底层传输安全选tls，跳过证书验证选true。最后点击确定保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-42-53.webp)

右键V2ray，选择服务器，选择全局代理或者PAC代理，就可以科学上网了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-46-09.webp)

当然这样子可以上，但是速度不是最快的。这速度也就油管能跑1k多，看个480p都费劲。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-51-33.webp)

## CF反代

这个时候就需要我们的Cloudflare的workers来进行一个反代加速了。

在主页点击Workers。可能会让你输入一个你的域名，有的话可以输入你freenom的域名或者你自己的域名，没有的话瞎填一个也没事。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-54-15.webp)

进入workers界面以后点击Create a worker创建一个worker

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-55-22.webp)

把左边Script脚本的内容清空，然后复制下面的代码进去

```
addEventListener(
	"fetch",event => {
		let url=new URL(event.request.url);
		url.hostname="域名";
		let request=new Request(url,event.request);
		event. respondWith(
			fetch(request)
		)
	}
)
```

然后把域名改成你复制到V2ray里面的那个域名，同样要去掉https等那些东西，如ednovas11.herokuapp.com

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-58-36.webp)

然后点击Save and Deploy保存和部署。等待几秒部署完成后点击send发送。如果右边出现400 Bad Request说明配置成功。如果出现如502等其他错误代码说明配置失败。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-00-55.webp)

在这里把这个HTTP下面的这个地址复制到V2ray里刚刚配置的那个文件里的地址和伪装域名这里。（双击刚刚配置的节点可以再次打开这个配置界面）点击确定保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-02-58.webp)

再来测速，好家伙，直接几百kbps的速度了，这速度还不如刚才呢。不要急，有速度说明刚刚的配置没有问题。下面还需要使用优选IP来实现完全的加速。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-04-25.webp)

## 优选IP

将下载好了的CF优选IP软件解压后，打开CF优选IP.bat，在弹出的cmd窗口中输入你家的带宽大小。不建议直接输入你家实际带宽总大小，会导致程序没法正确找到合适的IP。

如果不知道自己家的带宽是多少的，可以上 https://speedtest.net 测速，看下载带宽速度是多少Mbps。

这里是建议先选择你家IP一半的带宽大小。比如我家是一百兆的带宽，那么我这里就选择50兆。如果你对测出来的IP速度不满意，那么可以逐渐加大这个数字，下次测速60、在下次70，总之切勿超过自家最大带宽。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-08-36.webp)

我这里输入50以后直接按Enter回车，然后等待一段时间，不会超过5分钟，他会自动测速并且筛选优选IP，耐心等待即可。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-12-03.webp)

那么测试出来以后，把上方的优选IP复制下来，我这里也就是104.19.71.197。注意不要复制到空格。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-13-00.webp)

再次打开V2ray的节点配置界面，把刚刚的优选出来的IP复制黏贴到地址里，并点击确定保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-14-28.webp)

现在再来看这个节点的速度，十分可观啊，直接上了3w，甚至直逼4w。看个4k视频没有什么压力的高速度了，很难想象免费节点能有如此的速度。

**注意！！！单节点不能这样大流量看视频，会直接被Heroku判定为滥用，导致账号被封**

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-15-38.webp)



## 负载均衡

### 为什么要负载均衡

那么我们怎么防止被Heroku封禁呢，我们可以使用Clash的负载均衡功能（V2ray暂时没有这个功能或者我没有发现），从而让多个Heroku的节点都跑流量但是每个节点都不会跑很多。

这样即使我们在看8K视频，每秒8、9MB的流量在跑，但是Heroku那边就会显示是1-2MB/s的流量在跑，因为我们让每个节点都分担了一部分流量。

怎么实现负载均衡呢，还记得我前面说过一个账号最多可以创建5个节点嘛，重复上述从[heroku部署](#部署Heroku)到[优选IP](#优选IP)的步骤，这样就可以得到5个节点。（要是觉得麻烦可以就部署两个节点，用两个节点实现负载均衡，不过相应的，被封的几率就更大。十分不建议也请勿只使用一个节点并大流量使用）

### V2ray链接转换

在V2ray中全选你创建的这些个heroku的节点，然后右键选择批量导出分享URL至剪切板，或者快捷键直接ctrl+c。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-25-57.webp)

去[订阅链接转换网站](/2020/12/20/订阅链接转换/)（随便一个订阅链接转换网站都可，大同小异）然后把这些个节点信息复制到订阅链接里

客户端选择Clash，点击生成订阅链接，将订阅链接复制到Clash的Profiles里或者直接一键导入Clash。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-29-16.webp)

在Clash的Profiles中点击刚刚导入的节点组下面的这个小飞机，在Proxy Groups中把自动选择改掉，点击左键修改

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-31-13.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_10-51-33.webp)

Edit Proxy Group下方的这个名字自己随便改，然后把四个选项中选择load-balance，然后点击OK保存。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-31-46.webp)

记得保存！

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-31-57.webp)

这样就可以实现负载均衡了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-01-04_11-32-10.webp)

速度可能会因为节点分配的问题而略慢于单节点的速度，但是这样能使用更长久。看个4k视频没有什么问题，甚至偶尔能看个8k。