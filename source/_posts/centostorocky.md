---
title: CentOS 8 迁移到 Rocky 8
tags: [VPS]
categories:
  - - VPS
date: 2021-12-20 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/rocky_linux_8.3_download.png
---

## 时代的结束

CentOS Linux 8即将于2021年12月31日停止技术更新。

CentOS Linux 7继续支持到2024年6月30日。

对Yum系有眷恋的朋友可以升级到RockyLinux8。

## 升级系统

升级系统并重启

```
sudo dnf –y upgrade && sudo reboot
```

## 下载转换脚本并执行

```
curl -O https://raw.githubusercontent.com/rocky-linux/rocky-tools/main/migrate2rocky/migrate2rocky.sh && chmod+x migrate2rocky.sh && bash migrate2rocky.sh –r 
```

## 等待迁移完成

```
# 完成后会提示以下内容
... 
Done, please reboot your system. 
A log of this installation can be found at /var/log/migrate2rocky.log 
```


## 同步已安装的包

```
dnf distro-sync -y &&reboot
```

## Rocky更换国内源

```
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.sjtug.sjtu.edu.cn/rocky|g' \
    -i.bak \
    /etc/yum.repos.d/Rocky-*.repo
```

> 转载自 https://python.iitter.com/other/264463.html