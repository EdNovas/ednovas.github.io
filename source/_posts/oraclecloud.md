---
title: 正确永久白嫖Oracle Cloud
tags: []
id: '1143'
categories:
  - - VPS
date: 2021-01-14 18:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/blog_post_20.webp
---

## 注意事项

具体注册流程参照YouTube视频即可。

全程不用，也不能挂梯子。IP地址要和邮编地址相符合（邮编不能乱填），IP地址最好也要和信用卡账单地址相符合，总之一切都是真实信息就容易过。

白嫖后还可以送300美金的套餐，能用30天。300美金过期以后，照样可以使用他的免费实例，只要不瞎折腾，免费的就足够用了。

## 注册地区

提供多个区域样板机的测速

[https://oracle-speedtest.ml/](https://oracle-speedtest.ml/)

[http://ml.intel.ajfaka.com/](http://ml.intel.ajfaka.com/)

甲骨文热门地区
~~韩国东北部（春川）~~（春川不再辉煌了）
日本东部（东京） 
日本西部（大版）
美国西部（圣何塞）
美国西部（凤凰城）
新加坡


甲骨文与azure互联区域包括：
[https://www.oracle.com/cn/cloud/architecture-and-regions/](https://www.oracle.com/cn/cloud/architecture-and-regions/)
日本东部（东京），
英国南部（伦敦），
荷兰西北部（阿姆斯特丹），
德国中部（法兰克福），
美国西部（圣何塞），
美国东部（阿什本），
加拿大东南部（多伦多），
巴西东南部（维涅杜）



## 服务器配置

免费额配是总共200G硬盘空间，所以可以开两个1H1G配置的amd（默认的免费AMD配置），外加两个2H12G配置的ARM免费机。

或者两个1H1G配置的amd + 一个4H24G的ARM。

又或者4个1H6G的arm免费机，总之ARM总额配不能超过4H24G。

机器不要瞎折腾，搭建个节点就够了，建站的话容易因为过载占用高等问题被风控，得不偿失。

## root登录方法

获取管理员权限

```
sudo -i
```

修改密码（不会显示输入的密码，输入完了按enter回车即可）

```
passwd root
```

修改相关配置文件，允许使用root用户登录
```
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
```
重启sshd服务
```
sudo service sshd restart
```

## 系统相关依赖和防火墙关闭

甲骨文有两个防火墙，一个是面板的端口防火墙，还有一个是机器内的iptables/oracle-cloud-agent防火墙，关闭面板的防火墙参照YouTube注册甲骨文教程中应该就会有了（就是修改机器的子网为 0.0.0.0/0 且允许全部协议）。

关闭甲骨文服务器内置的防火墙命令如下：

#### Centos系统下：

删除多余附件

```
systemctl stop oracle-cloud-agent
systemctl disable oracle-cloud-agent
systemctl stop oracle-cloud-agent-updater
systemctl disable oracle-cloud-agent-updater
```

停止firewall

```
systemctl stop firewalld.service
```

禁止firewall开机启动

```
systemctl disable firewalld.service
```

关闭selinux

```
vi /etc/selinux/config
SELINUX=ENFORING修改成SELINUX=DISABLED
```


#### Ubuntu系统下：

开放所有端口

```
iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT
iptables -F
```

Ubuntu镜像默认设置了Iptable规则，关闭它

```
apt-get purge netfilter-persistent
```
