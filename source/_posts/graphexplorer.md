---
title: Graph Explorer自定义Microsoft应用密钥有效期
tags: 
  - 微软
  - microsoft
  - graph explorer
categories:
  - 杂
date: 2021-06-07 14:06:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/azure.png
---

## Graph Explorer-在线测试API工具

工具地址: https://developer.microsoft.com/zh-cn/graph/graph-explorer

Micro Graph API文档: https://docs.microsoft.com/zh-CN/graph/api/overview?view=graph-rest-1.0

使用条件:有Graph Explorer调用API对应所需权限的账号，方便起见直接使用全局管理员

## 步骤

### AAD中复制应用的对象ID(Object ID)

### Graph Explorer 中调用API添加密码

1- 请求类型改为POST,请求地址 

```
https://graph.microsoft.com/v1.0/applications/{id}/addPassword
```

id改为应用的对象ID

2- 添加请求正文，过期时间(utc格式)必选，密钥名称、开始时间可选

```
{
    "passwordCredential": {
        "displayName": "100年",
        "endDateTime": "2121-05-07T00:00:00Z"
    }
}
```

3- 给Graph Explorer权限:修改权限(预览版)-同意许可

4- 运行查询复制保存响应中的密钥

### AAD中验证密钥有效期，看不到刷新或重新登陆

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Ub97c153ce38540508a56c90070ab8176H.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/U0a66c05e975343ffa2b8a548cc1c2846r.jpg)


> 转载自hostloc https://hostloc.com/thread-840678-1-1.html