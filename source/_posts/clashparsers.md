---
title: 关于clash新版本的配置写法更改教程
tags: [clash,科学上网]
categories:
  - - 科学上网
date: 2022-03-07 15:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/clash.png
---

使用Prasers更新订阅，会自动把旧配置改成新配置


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/7d69aa1167261b56dc945.png)

## Windows

对于0.19.4及以下用户，无需更改

对于0.19.5及以上用户，请点击Settings-Profiles-Parsers-Edit（设置-配置-预处理配置-编辑）,删除默认的parsers: #array ,并粘贴以下内容

```
parsers:
  - reg: '^.*$'
    code: |
      module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
        const obj = yaml.parse(raw)
        obj.proxies.forEach( v => {
            if (v.network === 'ws' && !v['ws-opts'] && v['ws-path'] && !v['ws-headers']) {
              const opts = {}
              opts.path = v['ws-path']
              v['ws-opts'] = opts
              delete v['ws-path']
            }
            if (v.network === 'ws' && !v['ws-opts'] && v['ws-path'] && v['ws-headers']) {
              const opts = {}
              opts.path = v['ws-path']
              opts.headers = v['ws-headers']
              v['ws-opts'] = opts
              delete v['ws-path']
              delete v['ws-headers']
            }
        })
        return yaml.stringify(obj)
      }
```

然后更新订阅（注意，parsers内容仅在更新订阅时生效，一定要更新一次订阅）

## MAC

对于Clash for Windows的mac版用户，操作方法同Windows

对于Clash X用户，请使用1.72.0及以前版本，如果不能接受旧版本，请手动修改或换到CFW mac版



## Android

请使用2.5.3及以前版本，如果不能接受旧版本，可以手动修改或将CFW修改后的订阅文件导入手机



## Linux

对于Clash for Windows的linux版用户，操作方法同Windows

对于shellclash用户，请手动修改配置

对于直接使用内核的用户，怎么改还用我说吗，自己看wiki去



## 路由器

对于openclash用户，请更新到最新版本，新版本已完成了对旧配置的适配


如何手动修改配置文件：

示例：

旧配置

```
  ws-path: /XXXX
  ws-headers:
   Host: example.com
```

新配置

```
  ws-opts:
   path: /XXXX
   headers:
    Host: example.com
```

（请注意空格）