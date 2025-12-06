---
title: YesPlayMusic 第三方高颜值网易云播放器
tags: [windows,音乐,播放器,简约,网易云]
id: '1188'
categories:
  - - 软件
date: 2021-02-02 17:35:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesplaymusic1.webp
#top: true
#highlight_shrink: true
---

> 转载自GitHub说明文档
> https://github.com/qier222/YesPlayMusic

## 特性

### 功能强大而且简约，去除和优化一切花里胡哨和没用的功能，只还原音乐本身

✅ 使用 Vue.js 全家桶开发

🔴 网易云账号登录

📺 MV 播放

📃 支持歌词显示

🚫🤝 无任何社交功能

🌎️ 海外用户可直接播放（需要登录网易云账号）

🔐 支持无版权网易云音乐，自动使用 QQ/酷狗/酷我音源替换变灰歌曲链接 （网页版不支持）

⏭️ 支持 MediaSession API，可以使用系统快捷键操作上一首下一首

✔️ 每日自动签到（手机端和电脑端同时签到）

🌚 Light/Dark Mode 自动切换

👆 支持 Touch Bar

🖥️ 支持 PWA，可在 Chrome/Edge 里点击地址栏右边的 ➕ 安装到电脑

🙉 支持显示歌曲和专辑的 Explicit 标志

🛠 更多特性开发中

## 安装

Electron 版本由 (@hawtim)[https://github.com/hawtim] 和 (@qier222)[https://github.com/qier222] 适配并维护，支持 macOS、Windows、Linux。

访问本项目的 (Releases)[https://github.com/qier222/YesPlayMusic/releases] 页面下载安装包，或者访问 (镜像下载站 (大陆访问更快))[https://dl.qier222.com/YesPlayMusic/] 下载。windows 安装包是类似 `YesPlayMusic.Setup.0.3.3.exe` 这样 `.exe` 结尾的选择下载。MacOS是 `.dmg` 结尾。


macOS 用户也可以通过 `brew install --cask yesplaymusic` 来安装。

## 部署至服务器

除了下载安装包使用，你还可以将本项目部署到你的服务器上。

### 部署网易云 API

详情参见 (Binaryify/NeteaseCloudMusicApi)[https://github.com/Binaryify/NeteaseCloudMusicApi]

### 克隆本仓库

```
git clone https://github.com/qier222/YesPlayMusic.git
```

### 安装依赖
```
yarn install
```

复制 `/.env.example` 文件为 `/.env` ，修改里面 `VUE_APP_NETEASE_API_URL` 的值为网易云 API 地址。本地开发的话可以填写 API 地址为 `http://localhost:3000` ，YesPlayMusic 地址为 `http://localhost:8080`
```
VUE_APP_NETEASE_API_URL=http://localhost:3000
```
### 编译打包
```
yarn run build
```
将 `/dist` 目录下的文件上传到你的 Web 服务器

## 网页版Demo

https://music.qier222.com/

## 灵感来源

Apple Music
YouTube Music
Spotify
网易云音乐

（所以能从Yes Play Music 上看到这几个软件的影子啊笑）

## 相关截图

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesmusicplayer2.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesmusicplayer3.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesmusicplayer4.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesplaymusic5.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesplaymusic6.webp)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/yesplaymusic1.webp)