---
title: 宝塔面板跳过绑定官方账户
tags: [宝塔,面板,VPS,删库塔]
id: '1228'
categories:
  - - 建站
date: 2021-04-04 13:43:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://api.ixiaowai.cn/gqapi/gqapi.php
# highlight_shrink: true
---

临时的解决办法就是我们在URL目录中随便加入soft，比如：

http://192.168.1.1:8888/soft

这样我们可以跳过强制登录，以及也可以选择左侧的其他菜单。

但是，如果下次登录首页还是会跳出来登录，有没有一个长期的办法？

实际上官方还算不错，就加了一个首页JS文件而已。

JS路径：

`/www/server/panel/BTPanel/static/js/index.js`

直接注释掉弹窗部分就好

还可以把下方的

`if (bind_user == 'True') {` 直接改为 `if (bind_user == 'REMOVED') {` 更加省心

## 代码

```
sed -i "s|bind_user == 'True'|bind_user == 'XXXX'|" /www/server/panel/BTPanel/static/js/index.js
```

运行完毕以后，请清除浏览器缓存 并刷新宝塔面板


