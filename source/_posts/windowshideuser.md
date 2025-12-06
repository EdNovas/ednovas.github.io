---
title: Windows建立隐藏用户
tags: []
categories:
  - - 杂
date: 2021-12-20 18:12:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1616661883_File-Explorer-changes-its-icons.jpg
---

## CMD创建新用户

需要有ADMIN权限的cmd

创建新用户并给该用户添加管理员权限：

(用户名处加了个$在结尾是可以在`net user`命令下不显示该用户，但是在控制面板内还是能看到的)

```
net user username$ password /add
net localgroup administrators username$ /add
```

例如 ednovas为用户名，paswd为密码的新用户就是：

```
net user ednovas$ paswd /add
net localgroup administrators ednovas$ /add
```

这两句命令行后应该有返回`命令成功完成`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403141500963.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403141948213.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403142029285.png)

## 修改注册表

找到注册表路径下`HKEY_LOCAL_MACHINE\SAM\SAM\Domains\Account\Users\Names`的`hacker\$`（用户名以图例为准，为hacker\$）

找到 `HKEY_LOCAL_MACHINE\SAM\SAM\` 默认只有system权限才能修改

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/e3bf84384e8195761caf0e8f9c7a1e04.png)

右键设置权限勾选，重新启动注册表，就能打开后面的路径了。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/111bbccf60ca4d347a9695f1ddb1344c.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403142229174.png)

此时将管理员`Administrator`类型对应的F值复制到`hacker$`类型对应的F值

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403142509715.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403142607007.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403142807987.png)

将`hacker$`对应的两个值导出来


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403143059455.png)

## 合并注册表

命令行将用户删除

```
net user hacker$ /del
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403143345249.png)

然后再将导出来的reg合并

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403143444798.png)

合并完后`net user`无法列出此用户，控制面板中的本地用户和组也不存在该用户

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403145457335.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403145515913.png)

远程登陆成功

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/image-20210403145606553.png)

## Tips

针对隐藏用户，可以查看注册表`HKEY_LOCAL_MACHINE\SAM\SAM\Domains\Account\Users\`,有时候看不到是因为没有权限，需要分配权限。隐藏用户的登陆记录可以通过查看日志获取。

> 转载编辑自 https://ey404.github.io/2021/04/03/intranet03/
> https://blog.51cto.com/u_163572/2456061