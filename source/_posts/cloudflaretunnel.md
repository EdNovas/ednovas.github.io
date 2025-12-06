---
title: Cloudflare Tunnel 免费内网穿透
tags: [cloudflare,tunnel,内网穿透,vps]
categories:
  - - 杂
date: 2023-02-24 21:28:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/image1-106.png
#highlight_shrink: true
---


## Cloudflare Tunnel

cloudflare提供的免费加密通道，通过cloudflare的cnd访问部署在内网的服务，比如web,ssh,smb,tcp等。

## 准备

那肯定必须需要一个cloudflare账号，以及开通 cloudflare zero trust。

cloudflare：https://www.cloudflare.com/
zero trust: https://one.dash.cloudflare.com/

## 安装

在你的需要内网穿透的设备上安装cloudflared（cf的本地cli客户端），这里博主以raspberry pi 4 作为例子。

由于raspberry pi 4 是arm64的，所以需要下载arm架构的文件：

```bash
curl -L 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64' -o /usr/bin/cloudflared
chmod +x /usr/bin/cloudflared
```


如果是普通amd64架构的，使用以下命令：

```bash
curl -L 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64' -o /usr/bin/cloudflared
chmod +x /usr/bin/cloudflared
```

然后登录cloudflared

```bash
cloudflared tunnel login
```
终端会给出一个类似 `https://dash.cloudflare.com/argotunnel?callback=https%3A%2F%2Flogin.cloudflareaccess.org%xxxxxxxxxxxxxxxxxxxxxxx` 的登陆地址，复制黏贴该地址到浏览器中，然后按照要求登录即可。

如果是有二步验证的，需要登录了以后，再次黏贴该地址，因为二步验证结束后并不会自动跳转到该cloudflared验证登录页面。

授权的话，每次只能选择一个网站，当然，一个网站也就够用了，我们可以解析很多三级域名。

当然如果需要授权多个网站，授权完成后不要关闭网页！依次点击其他需要授权的域名，进行多次授权。

## 创建隧道

授权完成后，就可以创建我们需要的隧道了。cloudflare提供两种方式，一种是在zero trust页面用web添加授权，也可以在本地服务器（raspberry）上用config文件添加，这里用的是config文件添加，因为本地config感觉更方便操作一些。

然后开始创建隧道，建议一个服务器就创建一个隧道。

```bash
cloudflared tunnel create <你的隧道名字>
```

比如

```bash
cloudflared tunnel create ednovas
```

创建完以后，会把信息保存到 root 下的 .cloudflared 文件夹下，注意不要误删了。然后终端会输出如下的内容，隧道的UUID（下图中的示例 12345-123-123-123-12345 就是UUID），一定要记录下来，这个UUID后面配置的时候会经常用到。

```
Tunnel credentials written to /root/.cloudflared/12345-123-123-123-12345.json. cloudflared chose this file based on where your origin certificate was found. Keep this file secret. To revoke these credentials, delete the tunnel.

Created tunnel webserver-1 with id 12345-123-123-123-12345
```

## 创建域名CNAME

然后我们就可以创建内网转发域名了。这里可以先添加一个域名

```bash
cloudflared tunnel route dns <隧道名字> <域名>
```

比如

```bash
cloudflared tunnel route dns ednovas 80.ednovas.xyz
```

然后cloudflare就会在你的域名下自动生成一个CNAME，把 80.ednovas.xyz 指向 <隧道UUID>.cfargotunnel.com

以此类推，我们可以如法炮制在面板上添加其他的需要的CNAME

注意：如果之前添加的有多个不同的二级域名，比如`ednovas.xyz`和`ednovas.blog`，只会对第一个添加的`ednovas.xyz` 生效，后面的`ednovas.blog`域名下的CNAME记录需要自行去网站上手动添加了。当然如果只有 `ednovas.xyz` 一个域名就不影响了，可以依旧使用类似以下的命令来创建更多需要的域名解析（我是每个端口服务一个域名）。

```
cloudflared tunnel route dns ednovas ssh.ednovas.xyz
```

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-24-23.png)

## 配置Config文件

添加好想要穿透的域名后，我们就可以开始映射了。

```bash
vim ~/.cloudflared/config.yml
```

然后i输入内容，黏贴修改后的如下配置文件（自行按需修改）



```yml
tunnel: <隧道UUID>
credentials-file: /root/.cloudflared/<隧道UUID>.json
protocol: h2mux
ingress:
  # 第一个网站，连接到本地的80端口
  - hostname: <域名1.com>
    service: http://localhost:80
  # 第二个网站，https协议，连接到本地的443端口，禁用证书校验（用于自签名SSL证书）
  - hostname: <域名2.com>
    service: https://127.0.0.1:443
    originRequest:
      noTLSVerify: true
      originServerName: <域名2.com>
  # 第三个网站，8012端口，泛域名
  - hostname: <*.域名3.com>
    service: http://localhost:8012
  # 第四个，反代MySQL sock服务
  - hostname: <mysql.域名4.com>
    service: unix:/tmp/mysql.sock
  # 第五个，反代SSH服务
  - hostname: <ssh.域名5.com>
    service: ssh://localhost:22
  - service: http_status:404
```

需要把<隧道UUID>替换成之前保存的UUID，域名就是上一步解析的几个CNAME域名，比如刚刚解析的 `80.ednovas.xyz`，下面的地址，保持localhost不要更改，更改后面的端口。比如想要映射本地的80端口服务到80.ednovas.xyz 域名，此外还需要开启22的ssh端口（需要上一步就已经把 `ssh.ednovas.xyz` 解析好），就可以这么修改

```yml
tunnel: <隧道UUID>
credentials-file: /root/.cloudflared/<隧道UUID>.json
protocol: h2mux
ingress:
  - hostname: 80.ednovas.xyz
    service: http://localhost:80
  - hostname: ssh.ednovas.xyz
    service: ssh://localhost:22
  - service: http_status:404
```

注意：最后的`- service: http_status:404` 一定要加，这是兜底的规则。还有复制黏贴的时候确保格式没有错误，很可能会发生mapping error。

如果需要更多的端口/协议支持，可以查看cloudflare官方文档：
https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/local/local-management/ingress/#supported-protocols 

配置完以后，可以测试下配置文件是否有问题。

```bash
cloudflared tunnel ingress validate
```

还可以测试规则是否命中，如果说并未找到该规则，就说明配置文件可能哪里填错了，或者终端输入错误问题（域名前的https不可省略，否则会说no hostname）。

```bash
cloudflared tunnel ingress rule https://80.ednovas.xyz
```

## 测试

可以运行以下命令进行测试：

```bash
cloudflared --loglevel debug --transport-loglevel warn --config ~/.cloudflared/config.yml tunnel run <隧道UUID>
```

终端会输出一大堆log，只要没有红色报错就是正常的（退出log的时候ctrl+c报的俩红色error不算）。

登陆Zero Trust的控制台 https://one.dash.cloudflare.com/

左边选择`Access`-`Tunnels`，如果正常的话，创建的隧道的状态会是Active。


## 创建systemctl

用 service install 即可自动创建systemctl启动服务。

```bash
cloudflared service install
systemctl start cloudflared
systemctl enable cloudflared
systemctl status cloudflared
```

配置文件会被拷贝到`/etc/cloudflared/config.yml`，并且从该目录下启动，所以如果你需要更改文件的话，需要在`/root/.cloudflared`下修改完 `config.yml` 文件后：

```
cp /root/.cloudflared/config.yml /etc/cloudflared/config.yml
```

覆盖一下，然后再

```
systemctl restart cloudflared
```

## SSH协议

https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/ssh/

这是cloudflare的关于SSH协议的官方说明，我们会发现要用SSH协议必须要在用户端也要安装软件，稍微麻烦点了。我们可以直接用zero trust提供的`self-hosted application`来创建一个网页WEB的SSH终端登录。

在zero trust的控制面板创建一个新的application

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-44-17.png)

类型选`self-hosted`

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-45-03.png)

以下是两个必须要填的内容。application name就随意，session duration的话，安全起见，30分钟-1天比较好。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-45-49.png)

然后输入之前自己解析到ssh端口的内网穿透域名。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-47-34.png)

Policy页面，名字还是随意，action选择默认的allow，session duration选择和应用的session timeout一样就行（默认）。下面的规则，建议是选择email，并且输入你的cloudflare的email邮箱地址来保证安全。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-48-47.png)


在最后一页的最下面把browser rendering设置成SSH。并且开启Enable automatic cloudflared authentication。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-51-22.png)

然后此时再登录你的SSH域名，就可以直接访问页面端的SSH了，输入你的SSH用户名和密码即可访问（支持密钥登录）。

![](https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/Snipaste_2023-02-24_03-54-07.png)

## RDP

自行翻阅官网文档，应用价值较小，不再赘述

https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/rdp/

## SMB

自行翻阅官网文档，应用价值较小，不再赘述

https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/smb/

## 写在最后

cloudflare tunnel是一个十分优秀的免易操作的内网穿透方案，优点很明显，相较于FRP等内网穿透配置简单，完全免费，功能也比较强大（这里只是介绍了最基础的tunnel使用方法）。缺点也很明显，用的是cloudflare cdn，国内不友好。


> 参考 https://bra.live/setup-home-server-with-cloudflare-tunnel/