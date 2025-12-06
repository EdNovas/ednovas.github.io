---
title: 搭建订阅转换网站
tags: 
  - 订阅转换
  - 网站
  - 搭建
categories:
  - VPS
date: 2021-06-06 20:29:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/kisspng-computer-icons-data-conversion-concert-5abceadf02e439.0045614115223303350119.jpg
---

## 项目地址

前端：

https://github.com/CareyWang/sub-web

后端：

https://github.com/tindy2013/subconverter

## 解析域名

先解析两个域名，建议开启小云朵cdn，设置cloudflare的ssl/tls为完全严格

一个用作前端，一个用作后端

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_20-48-34.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_20-49-16.png)

## 安装前端

### 安装node.js和yarn

需要先更新系统并安装Node.js和Yarn （ubuntu/debina为例，安装的是14.x版本，其他版本自行替换）

全版本node.js安装：

https://github.com/nodesource/distributions/blob/master/README.md

```
apt update -y
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install –g yarn
```

然后查看版本号，如果安装成功即会返回版本号

```
node -v
yarn -version
```


### 安装程序

先git clone拉取项目（我放在了/home路径下）

```
cd /home
git clone https://github.com/CareyWang/sub-web.git
cd sub-web
```

然后开始构建，时间较长，耐性等待

```
yarn install
```

然后

```
yarn serve
```

浏览器访问 http://你的ip:8080/ 就可以看到前端预览了，宝塔要记得在安全里放行8080端口

然后ctrl+c停止程序

我们需要找到Subconverter.vue文件修改一下默认后端地址

```
cd /home/sub-web/src/views
```

然后打开Subconverter.vue （用vi打开，宝塔打开，finalshell等带ftp功能的打开均可）

修改第258行的backendOptions，将其改为你刚刚解析的后端的地址，需要加上https

此外你还可以修改并添加更多的后端地址，格式如下比如：

```
customBackend: {
          "EdNovas自用后端": "https://subsc.ednovas.xyz/sub?",
          "api.tsutsu.cc (つつ提供-国内裸奔小鸡)": "http://api.tsutsu.cc:520/sub?",
          "api2.tsutsu.cc (つつ提供-香港稳定)": "https://api2.tsutsu.cc/sub?",
          "api.v1.mk（肥羊提供-四端八核负载)": "https://api.v1.mk/sub?",
          "subcon.dlj.tf (subconverter作者提供) ": "https://subcon.dlj.tf/sub?",
          "api.dler.io (sub作者&lhie1提供)": "https://api.dler.io/sub?",
          "api.wcc.best (sub-web作者提供)": "https://api.wcc.best/sub?",
          "api.hope140.live (hope提供-vercel)": "https://api.hope140.live/sub?",
          "sub.proxypoolv2.tk (Allen Xu提供-vercel)": "https://sub.proxypoolv2.tk/sub?",
          "jp-aws.proxypoolv2.tk (Allen Xu提供-日本AWS）": "http://jp-aws.proxypoolv2.tk:25500/sub?",
          "sub.id9.cc (品云提供)": "https://sub.id9.cc/sub?",
        },
        backendOptions: [
          { value: "https://subsc.ednovas.xyz/sub?" },
          { value: "http://api.tsutsu.cc:520/sub?" },
          { value: "https://api2.tsutsu.cc/sub?" },
          { value: "https://api.v1.mk/sub?" },
          { value: "https://subcon.dlj.tf/sub?" },
          { value: "https://api.dler.io/sub?" },
          { value: "https://api.wcc.best/sub?" },
          { value: "https://api.hope140.live/sub?" },
          { value: "https://sub.proxypoolv2.tk/sub?" },
          { value: "https://sub.id9.cc/sub?" },
        ],
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_21-20-02.png)

然后修改下面的remoteConfig为以下内容（这个订阅转换比默认更好用）


```
            {
            label: "ACL4SSR",
            options: [
                {
                label: "ACL4SSR_Online 默认版 分组比较全 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
                },
                {
                label: "ACL4SSR_Online_AdblockPlus 更多去广告 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
                },
                {
                label: "ACL4SSR_Online_NoAuto 无自动测速 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
                },
                {
                label: "ACL4SSR_Online_NoReject 无广告拦截规则 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
                },
                {
                label: "ACL4SSR_Online_Mini 精简版 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
                },
                {
                label: "ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
                },
                {
                label: "ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
                },
                {
                label: "ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
                },
                {
                label: "ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
                },
                {
                label: "ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
                },
                {
                label: "ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
                },
                {
                label: "ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
                },
                {
                label: "ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量 (与Github同步)",
                value:
                    "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
                },
                {
                label: "ACL4SSR 本地 默认版 分组比较全",
                value: "config/ACL4SSR.ini"
                },
                {
                label: "ACL4SSR_Mini 本地 精简版",
                value: "config/ACL4SSR_Mini.ini"
                },
                {
                label: "ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",
                value: "config/ACL4SSR_Mini_NoAuto.ini"
                },
                {
                label: "ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",
                value: "config/ACL4SSR_Mini_Fallback.ini"
                },
                {
                label: "ACL4SSR_BackCN 本地 回国",
                value: "config/ACL4SSR_BackCN.ini"
                },
                {
                label: "ACL4SSR_NoApple 本地 无苹果分流",
                value: "config/ACL4SSR_NoApple.ini"
                },
                {
                label: "ACL4SSR_NoAuto 本地 无自动测速 ",
                value: "config/ACL4SSR_NoAuto.ini"
                },
                {
                label: "ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",
                value: "config/ACL4SSR_NoAuto_NoApple.ini"
                },
                {
                label: "ACL4SSR_NoMicrosoft 本地 无微软分流",
                value: "config/ACL4SSR_NoMicrosoft.ini"
                },
                {
                label: "ACL4SSR_WithGFW 本地 GFW列表",
                value: "config/ACL4SSR_WithGFW.ini"
                },
                {
                label: "NeteaseUnblock(仅规则，No-Urltest)",
                value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"
                }
            ]
            },
```

替换到哪里呢，到334行这里

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_21-25-49.png)

全部替换掉

然后替换完成后可以看看效果

```
yarn serve
```

然后还是访问之前的ip+端口页面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_21-31-25.png)


然后还是ctrl+c停止调试页面，然后打包程序

```
yarn build
```

然后就会在 `/home/sub-web` 下生成一个 `dist` 目录，网页信息就都在里面了。如果需要修改配置可以直接在该文件下改，或者删除改目录，然后build重建

## 宝塔安装网站

这里是用的aapanel，已经安装了lnmp环境

添加网站，输入你的域名，然后最下面的ssl和https强制跳转打勾

注意！申请ssl证书的时候需要先关闭一下cloudflare里的小云朵cdn再申请

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_21-34-59.png)

然后等待片刻网站创建完毕后，进入网站根目录，删除所有文件，user.ini的防跨站文件不用管他

然后去 /home/sub-web/dist 目录下复制所有文件粘贴到网站根目录

这个时候访问你的前端地址就有刚刚调试的一样的内容了

## 后端反代

然后同样的添加一个网站，输入你的后端地址，然后开启ssl和https跳转

加一个反代，填 http://127.0.0.1:25500 ，下面的$host默认不用动，name名字随便输一个即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-06_22-00-15.png)

## 安装后端

也是放在了 /home 目录下 （这里是v0.6.4版本的，最新版本自行去[项目releases](https://github.com/tindy2013/subconverter/releases)获取）

```
cd /home
wget https://github.com/tindy2013/subconverter/releases/download/v0.6.4/subconverter_linux64.tar.gz
tar -zxvf subconverter_linux64.tar.gz
```

然后用vi\宝塔\finashell等文本编辑功能打开 `/home/subconverter/pref.ini` 文件

修改 `api_access_token` 和 `managed_config_prefix` 和 `listen`

应该在第6行和第130行和249行

改为

api_access_token=随意，自己知道就行，数字字母
managed_config_prefix=https://subsc.ednovas.me （后端地址）
listen=127.0.0.1

## 启动

这里用vi了，创建一个后台一直运行的程序，用screen也可

```
vi /etc/systemd/system/sub.service
```

然后i输入，黏贴下面内容，然后按esc，输入:wq保存并退出

```
[Unit]
Description=A API For Subscription Convert
After=network.target
 
[Service]
Type=simple
ExecStart=/home/subconverter/subconverter
WorkingDirectory=/home/subconverter
Restart=always
RestartSec=10
 
[Install]
WantedBy=multi-user.target
```

然后开启

```
systemctl daemon–reload
systemctl start sub
systemctl enable sub
systemctl status sub
```

如果显示active即表示成功

## DEMO

https://subs.ednovas.xyz