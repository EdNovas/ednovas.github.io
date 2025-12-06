---
title: CentOS 7 firewalld指令
tags: 
  - firewall
  - centos
  - linux
  - bash
categories:
  - 编程
date: 2021-07-20 10:14:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/firewall-1200x385.jpg
---

## 运行、停止、禁用firewalld

### 启动

```
systemctl start  firewalld
```

### 查看状态

```
systemctl status firewalld 
```

或者 

```
firewall-cmd --state
```

### 停止

```
systemctl disable firewalld
```

### 禁用

```
systemctl stop firewalld
```


## 开启端口

### 添加

```
firewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）
```

### 重新载入

```
firewall-cmd --reload
```

### 查看

```
firewall-cmd --zone= public --query-port=80/tcp
```

### 删除

```
firewall-cmd --zone= public --remove-port=80/tcp --permanent
```

### 查看firewall是否运行,下面两个命令都可以

```
systemctl status firewalld.service
firewall-cmd --state
```

### 查看default zone和active zone

我们还没有做任何配置，default zone和active zone都应该是public

```
firewall-cmd --get-default-zone
firewall-cmd --get-active-zones
```

### 查看当前开了哪些端口

其实一个服务对应一个端口，每个服务对应/usr/lib/firewalld/services下面一个xml文件

```
firewall-cmd --list-services
```

### 查看还有哪些服务可以打开

```
firewall-cmd --get-services
```

### 查看所有打开的端口

```
firewall-cmd --zone=public --list-ports
```

### 更新防火墙规则

```
firewall-cmd --reload
```

### 添加一个服务到firewalld

```
firewall-cmd --add-service=http //http换成想要开放的service
```

这样添加的service当前立刻生效，但系统下次启动就失效，可以测试使用。要永久开发一个service，加上 `--permanent`

```
firewall-cmd --permanent --add-service=http
```


### 如果要添加的端口并没有服务对应

就要新建一个服务，在`/usr/lib/firewalld/services`，随便拷贝一个xml文件到一个新名字，比如`myservice.xml`,把里面的short改为想要名字（这个名字只是为了人来阅读，没有实际影响。重要的是修改 protocol和port。


```
<?xml version="1.0" encoding="utf-8"?>

<service>
<short>Transmission-client</short>
<description>Transmission is a lightweight GTK+ BitTorrent client.</description>
<port protocol="tcp" port="51413"/>
</service>
```

修改完保存。我的经验是这是要重启firewalld服务，`systemctl restart firewalld.service`，否则可能提示找不到刚才新建的service。


然后把新建的service添加到firewalld

```
firewall-cmd --permanent --add-service=myservice
```

重启firewalld 生效

## systemctl

systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体

### 启动一个服务

```
systemctl start firewalld.service
```

### 关闭一个服务

```
systemctl stop firewalld.service
```

### 重启一个服务

```
systemctl restart firewalld.service
```

### 显示一个服务的状态

```
systemctl status firewalld.service
```

### 在开机时启用一个服务

```
systemctl enable firewalld.service
```

### 在开机时禁用一个服务

```
systemctl disable firewalld.service
```
### 查看服务是否开机启动

```
systemctl is-enabled firewalld.service
```

### 查看已启动的服务列表

```
systemctl list-unit-files|grep enabled
```

### 查看启动失败的服务列表

```
systemctl --failed
```

 
> 转载自 北斗极星 https://www.cnblogs.com/hubing/p/6058932.html