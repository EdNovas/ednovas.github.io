---
title: GCP，oralce，aws开启root登录
tags: 
  - root
  - GCP
  - AWS
  - Oracle
  - VPS
categories:
  - VPS
date: 2021-05-08 12:21:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/v2-00532941b2f768db55fe49309766f637_1440w.jpg
---

## 主要思路

大同小异，修改 `sshd——config` 文件，把里面的 `PasswordAuthentication` 和 `PermitRootLogin` 都改成 Yes

修改SSH配置文件/etc/ssh/sshd_config

```
vi /etc/ssh/sshd_config
```

找到PermitRootLogin和 PasswordAuthentication

```
# Authentication:
LoginGraceTime 120
PermitRootLogin yes //默认为no，需要开启root用户访问改为
yesStrictModes yes 

# Change to no to disable tunnelled clear text passwords
PasswordAuthentication yes //默认为no，改为yes开启密码登陆
```

重启SSH服务
Ubuntu/debian适用

```
/etc/init.d/ssh restart
```

Centos 7适用

```
systemctl restart sshd.service
```

## 方便起见

```
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
```

```
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
```

```
sudo service sshd restart
```




