---
title: Solusvm安装OVZ7
tags: [solusvm,ovz7]
categories:
  - - VPS
date: 2022-03-07 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/anyconnect.jpg
---

## 转换OVZ7

```
yum install screen -y
screen -S d
mkdir /vz
yum localinstall https://download.openvz.org/virtuozzo/releases/openvz-7.0.11-235/x86_64/os/Packages/p/python-subprocess32-3.2.7-1.vz7.5.x86_64.rpm -y
yum localinstall https://download.openvz.org/virtuozzo/releases/openvz-7.0.11-235/x86_64/os/Packages/o/openvz-release-7.0.11-3.vz7.x86_64.rpm -y
yum install epel-release -y
yum install python3 -y
rpm -Uvh http://repo.virtuozzo.com/vzlinux/7/x86_64/os/Packages/r/readykernel-scan-0.11-1.vl7.noarch.rpm
rpm -Uvh http://repo.virtuozzo.com/vzlinux/7/x86_64/os/Packages/z/zstd-1.4.4-1.vl7.x86_64.rpm
rpm -Uvh http://repo.virtuozzo.com/vzlinux/7/x86_64/os/Packages/v/vzlinux-release-7-1.vl7.91.x86_64.rpm
mv /etc/yum.repos.d/CentOS-* /root/
rpm -e --nodeps --justdb json-c
yum erase jansson -y
yum localinstall http://repo.virtuozzo.com/vzlinux/7.7/x86_64/os/Packages/j/jansson-2.10-1.vl7.1.x86_64.rpm -y
yum localinstall http://repo.virtuozzo.com/vzlinux/7.7/x86_64/os/Packages/j/json-c-0.11-13.vl7.1.x86_64.rpm -y
rpm -e --nodeps --justdb nspr nss nss-pem nss-softokn nss-softokn-freebl nss-sysinit nss-tools nss-util
yum localinstall http://repo.virtuozzo.com/vzlinux/7/x86_64/os/Packages/n/nss-3.44.0-7.vl7.x86_64.rpm -y
yum downgrade glibc* -y
yum install nss-softokn-freebl.i686 nss-tools -y
yum install prlctl prl-disp-service vzkernel *ploop* -y && yum update -y && yum install fuse -y
reboot

screen -S dd
modprobe ploop pfmt_ploop1 pfmt_raw pio_direct fuse
wget -O /usr/libexec/ovz-template-converter https://raw.githubusercontent.com/solusvm-support/svm_patches/master/ovz-template-converter.patched && chmod +x /usr/libexec/ovz-template-converter
rpm -e --nodeps --justdb python3-pip
yum install -y python36-pip python-configobj && pip3 install configobj
yum install *ez.noarch -y
```

## 伪授权SolusVM

添加伪授权hosts

```
vi /etc/hosts
```

添加如下伪授权，套餐是 SolusVM Enterprise (NOC)，任选1个即可：

伪授权站1

```
150.95.9.225 soluslabs.com
150.95.9.225 www.soluslabs.com
150.95.9.225 licensing1.soluslabs.net
150.95.9.225 licensing2.soluslabs.net
150.95.9.225 licensing3.soluslabs.net
150.95.9.225 licensing4.soluslabs.net
150.95.9.225 licensing5.soluslabs.net
150.95.9.225 licensing6.soluslabs.net
```

伪授权站2

```
150.95.9.221 soluslabs.com
150.95.9.221 www.soluslabs.com
150.95.9.221 licensing1.soluslabs.net
150.95.9.221 licensing2.soluslabs.net
150.95.9.221 licensing3.soluslabs.net
150.95.9.221 licensing4.soluslabs.net
150.95.9.221 licensing5.soluslabs.net
150.95.9.221 licensing6.soluslabs.net
```


伪授权站3（需要专用激活码`SVMTL-88888-88888-88888-88888-88888-88888`）

```
162.211.226.149     www.soluslabs.com
162.211.226.149     soluslabs.com
162.211.226.149     licensing1.soluslabs.net
162.211.226.149     licensing2.soluslabs.net
162.211.226.149     licensing3.soluslabs.net
162.211.226.149     licensing4.soluslabs.net
162.211.226.149     licensing5.soluslabs.net
162.211.226.149     licensing6.soluslabs.net
```


伪授权站4

```
150.95.9.221 soluslabs.com
150.95.9.221 www.soluslabs.com
150.95.9.221 licensing1.soluslabs.net
150.95.9.221 licensing2.soluslabs.net
150.95.9.221 licensing3.soluslabs.net
150.95.9.221 licensing4.soluslabs.net
150.95.9.221 licensing5.soluslabs.net
150.95.9.221 licensing6.soluslabs.net
```

防火墙屏蔽验证地址

```
iptables -I INPUT -s 94.0.0.0/8 -j DROP
iptables -I INPUT -s 144.0.0.0/8 -j DROP
iptables -I INPUT -s 37.0.0.0/8 -j DROP
```

保存iptables配置

```
service iptables save
```

重启iptables

```
service iptables restart
```


关闭selinux

```
vi /etc/sysconfig/selinux
```

把SELINUX设为disabled, `SELINUX=disabled`

## OVZ7模板

CentOS 6 x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/centos-6-x86_64.tar.gz -O /vz/template/cache/centos-6-x86_64.tar.gz
```

CentOS 7 x86_64
```
wget http://m.whatuptime.com/openvz7/template/ct/centos-7-x86_64.tar.gz -O /vz/template/cache/centos-7-x86_64.tar.gz
```


CentOS 8 x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/centos-8-x86_64.tar.gz -O /vz/template/cache/centos-8-x86_64.tar.gz
```

Ubuntu 14 LTS x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/ubuntu-14.04-x86_64.tar.gz -O /vz/template/cache/ubuntu-14.04-x86_64.tar.gz
```

Ubuntu 16 LTS x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/ubuntu-16.04-x86_64.tar.gz -O /vz/template/cache/ubuntu-16.04-x86_64.tar.gz
```

Ubuntu 18 LTS x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/ubuntu-18.04-x86_64.tar.gz -O /vz/template/cache/ubuntu-18.04-x86_64.tar.gz
```

Debian 8 x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/debian-8.0-x86_64.tar.gz -O /vz/template/cache/debian-8.0-x86_64.tar.gz
```
Debian 9 x86_64

```

wget http://m.whatuptime.com/openvz7/template/ct/debian-9.0-x86_64.tar.gz -O /vz/template/cache/debian-9.0-x86_64.tar.gz
```
Debian 10 x86_64

```

wget http://m.whatuptime.com/openvz7/template/ct/debian-10.0-x86_64.tar.gz -O /vz/template/cache/debian-10.0-x86_64.tar.gz
```

VZLinux 6 x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/vzlinux-6-x86_64.tar.gz -O /vz/template/cache/vzlinux-6-x86_64.tar.gz
```

VZLinux 7 x86_64

```
wget http://m.whatuptime.com/openvz7/template/ct/vzlinux-7-x86_64.tar.gz -O /vz/template/cache/vzlinux-7-x86_64.tar.gz
```

> https://bmvps.com/solusvm-poseudo-authorization/
> https://www.whmcs.date/212/
> https://www.whmcs.date/184/
> https://blog.ni-co.moe/public/544.html
> https://vpsps.com/587.html
> https://www.whatuptime.com/downloads/openvz-virtuozzo-7-templates/