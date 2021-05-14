---
title: VPS unattended-upgrade占用100%问题解决
tags: [vps,占用,cpu]
id: '1246'
categories:
  - - 编程
date: 2021-05-02 22:32:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/the-best-cpus-for-gaming-2019-hero1567181382948504.jpg
# highlight_shrink: true
---

今天在ubuntu机器中发现了刚装了的系统居然有个叫unattended-upgrade的程序一直占用100%的cpu，那必须得杀！

直接 sudo kill -9 PID好像行不通

更改`config file` `/etc/apt/apt.conf.d/20auto-upgrades`

```
sudo dpkg-reconfigure -plow unattended-upgrades
```

设置 `APT::Periodic::Unattended-Upgrade` 为 "0"

```
cat /etc/apt/apt.conf.d/20auto-upgrades
```

然后再 `kill -9 pid` 应该就能杀死了
