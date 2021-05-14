---
title: Redis安装报错
tags: [redis,vps]
id: '1241'
categories:
  - - 编程
date: 2021-04-27 22:17:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1498119653712274.png
# highlight_shrink: true
---

ubuntu1804安装redis的时候报错 Failed to start Advanced key-value store

问题描述, 使用apt安装redis报错, 执行的命令是sudo apt install redis-server, 报错信息Failed to start Advanced key-value store
原因: redis默认只支持ipv6访问, 所以如果服务器没设置ipv6的话，就会报错
解决办法:
修改redis的配置文件, sudo vim /etc/redis/redis.conf, 将bind 127.0.0.1 ::1修改为bind 127.0.0.1

重启redis服务, 执行service redis restart 或 redis-server

版权声明：本文为CSDN博主「littlehaes」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/littlehaes/article/details/104692822
