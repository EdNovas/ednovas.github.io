---
title: Clash 汉化方法
tags: [Clash,科学上网,汉化,windows端,软件]
id: '1179'
categories:
  - - 科学上网
date: 2021-02-01 11:19:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/93264e9bf3a10632a0fd7798af53dc8c.webp
#top: true
#highlight_shrink: true
---
## 汉化包下载

可能不是最新版本

0.15.1: https://ednovas.lanzous.com/b00zyk3kd

最新版请前往 telegram 汉化包更新频道获取

https://t.me/ClashR_for_Windows_Channel

## Windows 平台汉化

请自行替换下列路径中的app.asar文件

默认路径是 `C:\Program Files\Clash for Windows\resources\app.asar`

`...\Clash for Windows\resources\app.asar`

## MacOS 平台汉化
依次打开 – 访达 – 应用程序 – 右键 Clash for Windows – 显示包内容 – Contents – Resources 替换 app.asar 文件即可。

## 注意
此汉化包仅在 Windows 版本测试。

如果 Clash For Windows 正在运行，请先退出

## 自己汉化方法

Clash的文字相关配置都在Clash for Windows\resources\app.asar 中。

这个文件不能用普通压缩软件解压。需要用到node.js 的 npm,用npm安装asar，然后又asar解析app.asar文件，更改里面的变量，达到汉化的目的。

1. 安装 node.js，node.js 里面自带npm包管理器;

2. 用 npm 安装 asar;

```
npm install -g asar
```
检查是否安装成功

```
asar --version
```
如果没有正常输出版本号，就要手动配置环境变量


1. 用 asar，解析 app.asar 文件;

如果安装成功，就能尝试解包了。输入

```
asar extract app.asar 文件夹名
```

然后文件就会解压到指定文件夹中，正常情况下命令行中不会有输出。

然后找到 renderer.js（在Clash for Windows\resources\文件夹名\dist\electron目录下），用vscode或者记事本之类的打开，进行查找替换，替换时，如果只是一个单词比如按钮之类的，可以两边加上双引号（英文的双引号），并勾上区分大小写，然后替换，就不会不小心替换了别的代码。

两个单词以上的，就不一定放在一起了，需要自行查找。反正凡是没被双引号包括的内容不能替换，双引号内的也要谨慎替换。

1. 更改文件里的变量，就是翻译成中文

2. 想要汉化哪个单词就搜索哪个，逐个替换

3. 翻译完成将文件压缩回 app.asar

```
asar pack 文件夹名 app.asar
```

重新打开软件，汉化完成。

> http://91guangju.com/index.php/archives/356/