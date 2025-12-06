---
title: Incaseformat 蠕虫病毒
tags: []
id: '1149'
categories:
  - - 杂
  - - 软件
  - - 安全
date: 2021-01-15 05:29:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/202101141610600964471495.webp
---

## 简介

1月13日大量电脑遭遇“incaseformat”病毒攻击，硬盘除C盘外，其他分区文件被删除，仅保留一个名为“incaseformat.log”的0字节文件。因为病毒删除文件时没有对文件做覆写或破坏操作，恢复被删除文件的可能性很大，用户可以联系专业的数据恢复公司进行恢复。注意：在数据重要的情况下不要自行操作。

## 症状

该病毒在非Windows 目录下运行时，并不会删除文件，但会修改注册表启动项，实现开机自启动，拷贝自身到windows目录下(C:\Windows\tsay.exe、C:\Windows\ttry.exe)，同时设置注册表runonce的msfsa项。

当病毒在windows 目录下(C:\Windows\tsay.exe、C:\Windows\ttry.exe)运行时，会修改注册表不显示隐藏属性的文件，最后会遍历磁盘，删除所有除系统盘之外的文件，只在硬盘根目录留下名为incaseformat.log的空文件。

注意是全部磁盘，也就是说你的电脑会被完全格式化。

## 出现时间

该病毒出现很早，同源变种样本也有数百个之多。此病毒出现于1月13日。

病毒有潜伏期，很多用户都是很早就感染了该病毒。该病毒内设置了定时逻辑，因为BUG原因导致在2021年1月13日才发作。

距离现在最近的下一次删除文件时间为1月23日上午6点左右，再下一次是2月4日上午8点左右。

由于病毒所使用的单自然日所对应的毫秒数和正常值相比偏大（病毒所使用的毫秒数换算后一天大概为26个小时），所以病毒触发删除逻辑的时间可能横跨两个自然日，如：1月13日上午9点左右开始触发直到1月14日上午11点左右结束、1月23日上午6点左右开始触发直到1月24日上午8点左右结束等等。

## 杀毒软件

目前360、腾讯、火绒等主流安全软件都可以甄别并且防护该病毒了。但防毒之心不可无，还是再确认一下有没有incaseformat病毒比较好。

推荐使用火绒安全软件，软件静默、实用、误报少。

https://www.huorong.cn/

## 怎么检测自己电脑是否有 incaseformat

### 手工检测方法

确认系统是否存在以下文件，存在则有incaseformat病毒。

C:\Windows\tsay.exe

C:\Windows\ttry.exe

### 脚本检测方法

将以下脚本内容复制粘贴到任意扩展名为.bat的批处理文件中，双击执行，即可输出检测结果。（注意:bat编码集需要选择为ANSI）
```
@echo off
set tsay_path=C:\Windows\tsay.exe
set ttry_path=C:\Windows\ttry.exe
if exist %tsay_path% goto find
if exist %ttry_path% goto find
echo 本机没有找到【incaseformat】病毒，安装安全软件，排查信任区并确认实时监控是否开启
echo.
pause
exit
:find
echo 本机存在【incaseformat】病毒，请联系管理员处理
echo.
pause
exit 
```

## 传播

该病毒主要传播方式为U盘等移动存储器设备。经火绒工程师分析确认，该病毒不会通过U盘以外的网络共享、漏洞等常见蠕虫传播方式传播。

## 防护

不要下载安装不明出处的任何软件，不要随意使用陌生的U盘，安装火绒开机自启动。

>转载编辑自火绒安全实验室 https://zhuanlan.zhihu.com/p/344247424 和腾讯安全报告 https://s.tencent.com/research/report/1225.html
