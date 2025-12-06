---
title: DDNS 解析动态 IP
tags: 
  - dns
  - ddns
  - VPS
  - 解析
  - 域名
categories:
  - VPS
date: 2021-05-11 20:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/DDNS.jpg
---

# Change IP

用changeip.com的免费DDNS服务，建立DDNS

## 注册账户

打开下方链接登录你的DDNS

https://www.changeip.com/accounts/cart.php?a=confproduct&i=1

## 解析域名

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-212049.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-212308.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-212419.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-212646.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-213112.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-213234.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-213335.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-214037.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-214136.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-214429.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-214747.jpg)

到此，您已經獲得一個免費域名ip.yourname.ddns.info

## DDNS自动更新

使用脚本让VPS自动更新DDNS

登入您的vps终端新建一个名为ddns.sh的脚本

```
nano /root/ddns.sh
```

或者

```
vi /root/ddns.sh
```

黏贴下面的脚本，注意修改11、12、13行为您自己的信息，并保存。 

```
#!/bin/bash
# Changeip.com Script for Linux base systems using bash
# Created to suite local need in specific case. Well tested with CENTOS 6.x n UBUNTU 12.x
# Syed . Jahanzaib . aacable at hotmail dot com
# October , 2015
# Uncomment below to view debug log
# set -x
 
# Various variables, make sure to change the changeip.com credentials and hostname as required.

CIPUSER=您在ChangeIP登記的郵箱
CIPPASS=您在ChangeIP設定的密碼
CIPHOST=您在ChangeIP設定的域名

URL="http://nic.changeip.com/nic/update?ip"
# Temp files and log file to record updates if required
EXTIP="/tmp/externalip.txt"
NEWIP="/tmp/newip.txt"
LOG="/var/log/changeip.log"
DATE=`date`
 
# If external ip text file not found, then create one
if [ ! -e "$EXTIP" ] ; then
touch "$EXTIP"
fi
 
# Download current LIVE ip from intenret to match with old ip
wget -q -O /tmp/newip.txt http://ip.changeip.com:8245
a=`cat $EXTIP`
b=`cat $NEWIP  | cut -f 2 -d "=" | cut -f 1 -d "-" -s | grep -m 1 ^`
if [[ $a != "$b" ]]
then
 
# changeip update now
curl "$URL=$b&u=$CIPUSER&p=$CIPPASS&hostname=$CIPHOST"
 
# Update New WAN IP in OLD File
echo $b > $EXTIP
echo
 
# Print OLD vs New Comparision for REVIEW
echo Old IP = $a
echo New IP = $b
echo Update Time = $DATE
echo Update Done.
 
# Print OLD vs New Comparision for REVIEW in LOG FILE for later review
echo "*********************************************"  >> $LOG
echo New IP FOUND > $LOG
echo Old IP = $a >> $LOG
echo New IP found at $DATE and IP is = $b >> $LOG
 
# IF OLD and NEW ip are same, then no need to update, just EXIT
else
echo $DATE / No need to change IP. DDNS BASH Script / Powered by Syed Jahanzaib
fi
 
# END
```


修改脚本权限，并测试脚本是否有效

```
chmod +x /root/ddns.sh
bash /root/ddns.sh
```

###返回下面信息即代表脚本正常###

200 Successful Update
Old IP = 219.76.163.216
New IP = 220.246.88.57
Update Time = Sat Feb 8 22:11:04 CST 2020
Update Done.

## 定时更新

设置定时更新

```
crontab -e
```

黏贴命令并保存

```
*/1 * * * * /root/ddns.sh >/dev/null 2>&1 &
```

至此所有步骤完成，当IP变更时脚本会自动更新A纪录指向您的域名
您可以登入changeip.com后台查看域名IP
并可以使用您的DDNS连接您的VPS

需要注意的是DDNS生效时间存在地区差异，请耐心等待DNS更新。 

# Dynu

下面我们将使用dynu.com的免费DDNS服务，建立DDNS。 (dynu.com需要科学上网) 

## 注册账户

打开下方链接登录您的帐户

https://www.dynu.com/zh-CN/

然后进入「后台控制中心」 

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-234051.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-231607.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-231810.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-232133.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Jietu20200208-232451.jpg)

使用脚本让VPS自动更新DDNS

登入您的VPS终端，执行下列命令 

## 更新软件

Debian/Ubuntu 命令

```
apt-get update
apt-get install curl -y
```

CentOS命令

```
yum update -y
yum install curl -y
```

使用CURL提交测试，注意修改您的信息

hostname=您申请的域名
password=您Dynu帐户的密码 

```
curl "https://api.dynu.com/nic/update?hostname=您申请的域名&password=您Dynu账户的密码"
```

返回下面信息表示成功

good xxx.xxx.xxx.xxx (IP地址)

## 定时更新

设置定时更新

```
crontab -e
```

按i进入编辑模式，黏贴上下方命令，并按esc一下，再输入:wq保存 

```
*/1 * * * * curl "https://api.dynu.com/nic/update?hostname=您申请的域名&password=您Dynu账户的密码" > /dev/null 2>&1
```

至此所有步骤完成，当IP变更时脚本会自动更新A纪录指向您的域名
您可以登入dynu.com后台查看域名IP
并可以使用您的DDNS连接您的VPS

需要注意的是DDNS生效时间存在地区差异，请耐心等待DNS更新。

> 转载自anyhk官方说明文档 https://doc.anyhk.net/anyhk-nat/ddns/ddns-changeip
> https://doc.anyhk.net/anyhk-nat/ddns/ddns-dynu