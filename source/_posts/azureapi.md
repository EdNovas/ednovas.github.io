---
title: 微软全局管理（API提权）
tags: 
  - 微软
  - 全局
  - azure
  - api
categories:
  - 杂
date: 2021-06-08 19:35:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/azure.png
---

> 转载自 https://sirbei.com/index.php/archives/22/

## 注册应用、开通 API

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/148165012.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1512344440.png)



![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3709738410.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1701175550.png)

### 设置 Application 密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/3498537165.png)

### 记录密码“值”和“ID”备用。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/195691701.png)

## API使用配套软件

Microsoft-365-Admin

https://github.com/6mb/Microsoft-365-Admin

此项目是一个基于API的 Microsoft 365 管理平台, 支持订阅查询，用户管理（查询，新增，删除，分配许可证等），支持批量创建用户，批量删除用户，支持邀请码. 支持多账户管理

## 另一个方法

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20641690.jpg)

前提：自己开通了权限，主要是RoleManagement.ReadWrite.Directory（务必保证权限正确开启），而且你的SPO没有被封禁（子账号的onedrive可以正常使用）
脚本运行说明：下载代码自己修改参数，代码需要修改的地方都有备注，自行修改即可，需要安装requests库，python3运行代码，返回204就代表成功，然后登陆子账号就可以了
client_id() = 应用程序(客户端) ID tenant_id = 目录(租户) ID client_secret = 客户端密码的值

下载：[子账户提权.zip](https://sirbei.com/usr/uploads/2021/05/1176287315.zip)

备用链接：https://onecloud.ednovas.xyz/s/ZWSl

## 另一个方法2

程序入口admin.php

配置文件config.php（只要改这个，accounts是一个数组，多个全局的配置分别写这里）

[ms365admin.zip](https://sirbei.com/usr/uploads/2021/05/4214281180.zip)

备用链接：https://onecloud.ednovas.xyz/s/pDFZ

## 产品sku参考

skuName: STANDARDWOFFPACK_STUDENT
displayName: A1 学生版
skuId: 314c4481-f395-4525-be8b-2ec4bb1e9d91

skuName: STANDARDWOFFPACK_FACULTY
displayName: A1 教师版
skuId: 94763226-9b3c-4e75-a931-5c89701abe66

skuName: OFFICE_365_A1_PLUS_FOR_STUDENT
displayName: A1P 学生版
skuId: e82ae690-a2d5-4d76-8d30-7c6e01e6022e

skuName: OFFICE_365_A1_PLUS_FOR_FACULTY
displayName: A1P 教师版
skuId: 78e66a63-337a-4a9a-8959-41c6654dfb56

skuName: M365EDU_A3_STUUSEBNFT_RPA1
displayName: A3 无人值守版
skuId: 1aa94593-ca12-4254-a738-81a5972958e8

skuName: Office_365_E3Y
displayName: E3Y
skuId: 6fd2c87f-b296-42f0-b197-1e91e994b900

skuName: DEVELOPERPACK_E5
displayName: E5 开发者订阅
skuId: c42b9cae-ea4f-4ab7-9717-81576235ccac