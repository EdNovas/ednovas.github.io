---
title: Cloudflare解析域名
tags: 
  - cloudflare
  - domain
  - 域名
  - 解析
categories:
  - 建站
date: 2021-05-15 22:08:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/instalar-cloudflare-1.png
---

## 简介

Cloudflare是一家总部位于旧金山的美国跨国科技企业，以向客户提供基于反向代理的内容分发网络及分布式域名解析服务为主要业务。利用 Cloudflare 全球任播网络，Cloudflare可以帮助受保护站点抵御包拒绝服务攻击等网络攻击，确保该网站长期在线，同时提升网站的性能、加载速度以改善访客体验。

当然除了cloudflare，还有许多其他如dnspod等其他dns解析平台。我用cloudflare而且功能和国外的访问速度上也是一流的（国内要求访问速度快还请使用别的cdn服务，否则开启cdn就是国内减速）

网站支持中文，英文图片演示，位置都是一样的。

## 购买域名

这个不做演示了，namesilo，namecheap，godaddy，porkbun等域名网站购买一个你想要的域名付款即可。也可以白嫖[freenom](/2020/12/28/freenom申请免费域名/)，还有[porkbun免费一年design域名](/2021/05/09/porkbundesign)

## 添加网站

先去cloudflare注册个账户

https://www.cloudflare.com/

登录进入管理面板 https://dash.cloudflare.com/

点击这里的add a site 添加一个网站

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-15_22-12-52.png)

添加你购买了的域名，比如我的博客地址 ednvoas.xyz

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-15_22-17-59.png)

选择 free $0 的免费计划即可（别看是免费的，功能依旧强大好用），然后点击continue继续

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-15_22-19-02.png)

然后会显示你已经解析了的dns，可以直接全部删除也可以不管他

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-15_22-20-37.png)

## 更改dns服务器

然后可以点击这个超链接快速前往你购买域名的地方。更改域名的dns服务器为这两个 `angela.ns.cloudflare.com` `corey.ns.cloudflare.com` （每个人不一样的）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-15_22-22-17.png)

比较常见的域名商的更改dns服务器说明可见[这里](https://support.cloudflare.com/hc/zh-cn/articles/205195708-%E5%B0%86%E6%82%A8%E7%9A%84%E5%9F%9F%E5%90%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%9B%B4%E6%94%B9%E4%B8%BA-Cloudflare)（cloudflare官方说明文档）

1and1: https://help.1and1.com/domains-c36931/manage-domains-c79822/dns-c37586/use-your-own-name-server-for-a-1and1-domain-a594904.html

Blacknight: https://help.blacknight.com/entries/22942338-Changing-nameservers-in-cp-blacknight-com

BlueHost: https://my.bluehost.com/cgi/help/222

DirectNIC: https://directnic.com/knowledge/article/33:how%2Bdo%2Bi%2Bmodify%2Bname%2Bservers%2Bfor%2Bmy%2Bdomain%2Bname%253F

DNSMadeEasy: http://www.dnsmadeeasy.com/support/faq/

Domain.com: http://www1.domain.com/knowledgebase/beta/article.bml?ArticleID%3D166

Dotster: https://www.dotster.com/help/article/domain-management-how-to-update-nameservers

DreamHost: https://help.dreamhost.com/hc/en-us/articles/216385417

EasyDNS: https://www.easydns.com/nameservers/

Enom: http://www.enom.com/kb/kb/kb_0086_how-to-change-dns.htm

Fast Domain: http://www1.domain.com/help/article/domain-management-how-to-update-nameservers

101Domain: https://help.101domain.com/domain-management/nameservers-dns

FlokiNET: https://billing.flokinet.is/index.php?rp%3D/knowledgebase/57/Nameserver-changes.html

Gandi: https://wiki.gandi.net/en/dns/change

GoDaddy: https://www.godaddy.com/help/change-nameservers-for-your-domain-names-664

Google Domains: https://support.google.com/domains/answer/3290309?hl%3Den

HostGator: http://support.hostgator.com/articles/hosting-guide/lets-get-started/dns-name-servers/how-do-i-change-my-dns-or-name-servers

HostMonster: https://my.hostmonster.com/cgi/help/222

Internetbs: https://internetbs.net/faq/content/1/13/en/how-to-update-the-list-of-dns-nameservers-linked-to-a-domain.html?highlight%3Dnameservers

iPage: https://www.ipage.com/help/article/domain-management-how-to-update-nameservers

MediaTemple: https://mediatemple.net/community/products/dv/204643220/how-do-i-edit-my-domain's-nameservers

MelbournelT: https://support.melbourneit.com.au/articles/help/Domain-Name-Administration-FAQ/?q%3Dedit%2Bnameservers%26fs%3DSearch%26pn%3D1

Moniker: https://faq.moniker.com/register-own-nameservers

Name.com: https://www.name.com/support/articles/205934547-Changing-Your-Name-Servers

NameCheap: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-change-the-nameservers-for-my-domain

Network Solutions: https://www.networksolutions.com/manage-it/edit-nameservers.jsp

OVH: https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/#step-2-edit-your-domains-dns-servers

Rackspace: https://support.rackspace.com/how-to/rackspace-name-servers/

Register: https://knowledge.web.com/subjects/article/KA-01114/en-us

Site5: https://knowledge.web.com/subjects/article/KA-01114/en-us

Softlayer: https://console.bluemix.net/docs/infrastructure/dns/add-edit-custom-name-servers.html#add-edit-or-delete-custom-name-servers-for-a-domain

Tucows: http://www.tucowsdomains.com/name-server-dns-changes/how-do-i-change-my-name-servers-dns/

Yahoo!: http://support.hostgator.com/articles/how-to-change-name-servers-with-yahoo-com

Yola: https://www.yola.com/tutorials/article/Changing-the-name-servers-1285944436498/Publishing_domains_and_email

### 如果上面没有你的域名商，可以参考namecheap和godaddy的使用说明，都大同小异

刷新 Cloudflare Overview  页面。如果仍显示 Complete your nameserver setup ，请执行以下步骤：

确保 [ICANN WHOIS](https://whois.icann.org/) Name Server 输出的 Cloudflare 域名服务器拼写正确，并确认 Cloudflare 的域名服务器是列出的唯一域名服务器。

如果 [ICANN WHOIS](https://whois.icann.org/) Name Server 输出正确，请单击 Cloudflare Overview 页面中的 Re-check now 按钮。

## 解析域名

### 域名相关tips

一级域名：就是最后面那个，比如com，cn，net，xyz等

二级域名：一级域名前面一级，比如baidu.com，google.com，ednovas.xyz都是二级域名（很多人认为这个是一级域名，但其实com这样的才是一级）

三级域名：再多一个点，比如onecloud.ednovas.xyz，dash.cloudflare.com等都是三级域名

四级域名：再多一个点，比如1.1.ednovas.xyz等

五级域名和更多级域名：递归

二级域名一般比较重要，我们只用作主要的网站使用，别的用三级甚至四级网站即可

### 添加二级域名解析

默认可能二级域名已经解析了，我们直接把他删除即可，或者在那基础上更改

点击add record 添加一个记录，type类型选择A记录，Name就是 @ （即代表二级域名，根域名，在这里也就是等同于ednovas.xyz的意思），ipv4 address填入你需要解析到的vps的ip地址，比如 1.1.1.1, proxy status也就是cdn小云朵，要给他点灭（如果需要开启cdn后面再打开，如果需要申请证书和搭建节点请勿开启），最后点击save保存

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-16_10-39-54.png)

等待几秒解析记录生效即可完成解析

### 添加多级域名解析

要想解析更多级域名，多加几个点就是了，比如1.2.3.4.5.6.ednovas.xyz

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-16_10-44-30.png)

## 解析完成

这样就算是解析完成了，如果需要更多进一步操作，比如开启cdn等可以看我下一篇文章或者参考cloudflare官方说明文档 https://support.cloudflare.com/



