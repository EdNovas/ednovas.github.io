---
title: Cloudflare 免费解析动态域名 DDNS
tags: [cloudflare,cf,ddns]
categories:
  - - VPS
date: 2022-02-09 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/cf-logo-social-media.png
---

## 脚本地址

https://github.com/yulewang/cloudflare-api-v4-ddns

## 获取 KEY

访问 https://dash.cloudflare.com/profile 在页面下方找到 Global API Key，点击右侧的 View 查看 Key，并保存下来 ，在页面下方找到 Global API Key，点击右侧的 View 查看 Key，并保存下来 

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bD7yJqoYcAV3riB.png)

## 解析域名

设置用于 DDNS 解析的二级域名，流量不经过CDN(云朵变灰)

添加一条A记录，例如：hkt.test.com，Proxy status设置成DNS only 

ipv4地址随意就行

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/DzHSaNEb1ZBU5pC.png)

## 运行脚本

下载 DNNS 脚本

```
curl https://raw.githubusercontent.com/aipeach/cloudflare-api-v4-ddns/master/cf-v4-ddns.sh > /root/cf-v4-ddns.sh && chmod +x /root/cf-v4-ddns.sh
```

## 配置信息

修改 DDNS 脚本并补充相关信息

```
vi cf-v4-ddns.sh
```


```
# incorrect api-key results in E_UNAUTH error
# 填写 Global API Key
CFKEY=

# Username, eg: user@example.com
# 填写 CloudFlare 登陆邮箱
CFUSER=

# Zone name, eg: example.com
# 填写需要用来 DDNS 的一级域名
CFZONE_NAME=

# Hostname to update, eg: homeserver.example.com
# 填写 DDNS 的二级域名(只需填写前缀)
CFRECORD_NAME=
```

首次运行脚本,输出内容会显示当前IP，进入cloudflare查看 确保IP已变更为当前IP

```
./cf-v4-ddns.sh
```

## 设置定时任务

```
crontab -e
*/2 * * * * /root/cf-v4-ddns.sh >/dev/null 2>&1
```

```
# 如果需要日志，替换上面的代码
*/2 * * * * /root/cf-v4-ddns.sh >> /var/log/cf-ddns.log 2>&1
```

> 转载自 https://aipeach.gitbook.io/blogbackup/cloudflare-da-jian-ddns-jiao-ben-ban#huo-qu-global-api-key
> https://github.com/EdNovas/cloudflare-api-v4-ddns