---
title: 白嫖月抛Atlas OS VPS
tags: [atlas os,vps,白嫖,免费]
id: '1230'
categories:
  - - VPS
date: 2021-04-06 10:14:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/d1747ca6d096e7ba1faa90830942325900b069b6.jpg
# highlight_shrink: true
---

# 请合理使用！请勿滥用！本文严禁任何形式转载！youtuber请勿录制讲解视频！违者必究！

## 白嫖请适度，勿传播，只开一台鸡，自用月抛即可

## 开机

注册登录

注册可用中国手机号，可用接码平台，一个手机号可以重复接码，但请勿滥用！！！

这个平台的本意是用来给学生等做研究等的，可以看到很多类型都内置了如JupyerLab，Eclipse等软件

这个是月结账单，所以可以欠费一个月的，而且欠费最多欠8美刀，所以一个低配t3a.micro正好可以用一个月，名副其实的月抛鸡

https://www.atlas-os.org/

新建一个机器

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/QQ图片20210406101758.png)

开个新机

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04-06_10-19-21.png)

选择这个t3a.micro即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04-06_10-20-02.png)

data drive选择刚刚创建的那个，Instance Drive Size (Unit: GB) 随意我用了20，instance name随意，然后点击start an instance 创建实例

创建以后等待片刻，这个url就是一个已经解析好了的主机域名，username和secret就是密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04-06_10-21-53.png)

## SSH

可以先用 http://ping.chinaz.com/ 等ping ip的网站确定一下他的ip是啥

打开SSH，推荐使用finalshell和xshell

finalshell下载：http://www.hostbuf.com/downloads/finalshell_install.exe

然后主机输入IP，账户和密码依次输入点击连接即可

连接成功以后先`sudo -i`，获取管理员权限，然后`passwd`更改一下密码，这样以后就可以使用root加你刚刚设定的密码来登录了（用一键脚本或手动搭建都需要root权限）

默认系统是Amazon Linux

## 搭建

一键脚本和手动搭建大佬肯定都会，小白可以直接用proxysu搭建

https://github.com/proxysu/ProxySU/releases

推荐下载2.5.6版本：https://github.com/proxysu/ProxySU/releases/download/v2.5.6/Release.zip

主机可以直接用他给我们解析好的域名，端口默认22，用户必须是root，密码就是刚刚passwd以后设置的，email是必填的，填个有效的，下面的协议自己随意安装，这里以ws+tls+web做例子，域名填入解析好的域名，伪装网站自己随意，点击确定，然后`V2ray一键安装`等待安装完毕

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/04-06_10-31-56.png)

安装完成会给一个vmess节点连接，然后你肯定就会用了吧

可以套cloudflare的workers 加优选IP

workers加优选IP参考[这里](/2021/01/04/heroku/#CF%E5%8F%8D%E4%BB%A3)

这样一个节点就搭建完成了

# 请合理使用！请勿滥用！本文严禁转载！youtuber请勿录制讲解视频！违者必究！