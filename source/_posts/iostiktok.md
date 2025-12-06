---
title: ios 解锁 tiktok
tags: 
  - tiktok
  - ios
  - shadowrocket
  - quantumult
  - quantumultx
categories:
  - 科学上网
date: 2021-05-11 06:02:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/92ea3b1e-6a41-467e-a34d-2a019dc14490.png
---

都需要开启MitM, 并且正确的信任证书

## shadowrocket

小火箭shadowrocket解锁教程

视频是youtube上的，需要开启科学上网观看

<iframe width="560" height="315" src="https://www.youtube.com/embed/cMZJG17z9LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://www.youtube.com/watch?v=cMZJG17z9LU

使用自己的节点即可，可以从视频2分钟开始看起。

配置：

```
[URL Rewrite]
(?<=_region=)CN(?=&) US 307
(?<=&mcc_mnc=)4 2 307
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
(^https?:\/\/*\.\w{4}okv.com\/.+&.+)(\d{2}\.3\.\d)(.+) $118.0$3 302

[MITM]
hostname = *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
```

## surge

你都用surge了肯定会了

https://github.com/Tartarus2014/Surge-Script/tree/master/Unlock

## quantumult x

你都用quantumult x 了肯定会了

https://github.com/Tartarus2014/QuantumultX-Script/tree/main/Unlock

## Loon

https://github.com/Tartarus2014/Loon-Script/tree/master/Plugin/Unlock


## 总结

可以直接参照这里文字教程，写的应该是比较详细了

https://github.com/Semporia/TikTok-Unlock