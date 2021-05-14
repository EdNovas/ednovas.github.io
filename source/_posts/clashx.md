---
title: ClashX macOS 使用说明
tags: [clash,clashx,macos,科学上网,VPN]
id: '1225'
categories:
  - - 科学上网
date: 2021-03-25 09:35:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/93264e9bf3a10632a0fd7798af53dc8c.webp
# highlight_shrink: true
---

> 转载自Sabrina https://merlinblog.xyz/wiki/ClashX.html

<div class="entry-content l-h-2x" id="md_handsome_origin" click_status="true"><p></p><div class="tip inlineBlock info">
2020/07/22更新内容：ClashX现已支持SSR协议。<br>2020/03/19更新内容：ClashX1.18.4已支持Trojan协议。
</div><p></p><div name="1.简介" data-unique="1.简介"></div><h2>1. 简介</h2><p>Clash 是一个使用 Go 语言编写，基于规则的跨平台代理软件核心程序。<br>ClashX 是运行在 macOS 上的一款科学上网工具。<br>Github地址：<span class="external-link"><a class="no-external-link" href="https://github.com/yichengchen/clashX/releases" target="_blank">https://github.com/yichengchen/clashX/releases<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></span><br><strong>支持的协议：</strong> Vmess, Shadowsocks, Snell , SOCKS5<br><strong>特色：</strong></p><ul><li>可随时切换代理模式及节点</li><li>支持节点批量延迟测试</li><li>通过托管链接一键配置</li><li>规则命中分析</li><li>日志输出</li></ul><p></p><div class="tip inlineBlock info">
系统要求：macOS 10.5 及以上
</div><br><div class="tip inlineBlock info">
设备要求：MacBook / iMac / Mac Pro
</div><p></p><div name="2.下载安装" data-unique="2.下载安装"></div><h2>2. 下载安装</h2><p>⭐Github地址👉 <span class="external-link"><a class="no-external-link" href="https://github.com/yichengchen/clashX/releases" target="_blank">https://github.com/yichengchen/clashX/releases</a></span></p><p>⭐如果国内下载速度慢可以用蓝奏云下载（可能不是最新版）：👉<a href="https://ednovas.lanzous.com/im1wpna8vxa">https://ednovas.lanzous.com/im1wpna8vxa</a></p>⭐⭐⭐⭐ClashX Pro：这是作者的另一款软件，只用作代理的话，也非常好用。用法和ClashX差不多，有“增强模式”。<br><p>下载地址：<a href="https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public">https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public</a></p><div name="3.快速上手" data-unique="3.快速上手"></div><h2>3. 快速上手</h2><p></p><div class="tip inlineBlock warning">
请先在机场官网或其它地方复制自己的 Clash 订阅/托管连接。
</div><br>请打开 ClashX 软件。<br>首次使用 ClashX 时，macOS 会提醒你此应用来自未知开发者，请允许打开此应用。<br>ClashX 首次运行会提示是否安装帮助程序（Helper）。此帮助程序用于设置系统代理，否则每次你通过 ClashX 变更系统系统状态（打开或关闭）时都需要输入密码，请点击 “Install”，之后 macOS 会提示输入用户密码。<p></p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="1" href="https://merlinblog.xyz/usr/uploads/2020/09/3079236644.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/3079236644.jpg" alt="1" title="1" class="block"></a></p><p>启动 ClashX，点击状态栏中的 ClashX 图标，依次选择「配置」、「托管配置」、「管理」，在弹出的界面点击添加订阅。</p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="2" href="https://merlinblog.xyz/usr/uploads/2020/09/1860530914.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/1860530914.jpg" alt="2" title="2" class="block"></a></p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="3" href="https://merlinblog.xyz/usr/uploads/2020/09/4091364052.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/4091364052.jpg" alt="3" title="3" class="block"></a></p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="4" href="https://merlinblog.xyz/usr/uploads/2020/09/974690266.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/974690266.jpg" alt="4" title="4" class="block"></a></p><p>若干秒后将在软件里看到刚刚添加的配置文件。</p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="5" href="https://merlinblog.xyz/usr/uploads/2020/09/2281085310.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/2281085310.jpg" alt="5" title="5" class="block"></a></p><p>点击 ClashX 状态栏图标，将「出站模式」选为「规则判断」，在「Proxy」或「Gloabal」策略组中可以选择自己喜欢的线路，然后点击「设置为系统代理」即可开始使用。</p><p>「Proxy」或「Gloabal」策略组是用于访问国际互联网的默认策略，一般情况下，所有国际网络的访问都通过该策略组中选择的节点进行连接。</p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="5" href="https://merlinblog.xyz/usr/uploads/2020/09/1813241339.png"><img src="https://merlinblog.xyz/usr/uploads/2020/09/1813241339.png" alt="5" title="5" class="block"></a></p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="6" href="https://merlinblog.xyz/usr/uploads/2020/09/142645459.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/142645459.jpg" alt="6" title="6" class="block"></a></p><p><a class="light-link" data-fancybox="gallery" no-pjax="" data-type="image" data-caption="7" href="https://merlinblog.xyz/usr/uploads/2020/09/1214799673.jpg"><img src="https://merlinblog.xyz/usr/uploads/2020/09/1214799673.jpg" alt="7" title="7" class="block"></a></p><p>此时您已可以自由地连接国际互联网。</p><div name="4.更多" data-unique="4.更多"></div><h2>4. 更多</h2><p>对于策略组的简单解释：</p><div name="4.1策略组的特性：" data-unique="4.1策略组的特性："></div><h3>4.1 策略组的特性：</h3><ul><li>可以包含节点或其他策略组</li><li>具有多种不同的策略类型</li><li>服务于规则</li></ul><div name="4.2不同策略组的作用：" data-unique="4.2不同策略组的作用："></div><h3>4.2 不同策略组的作用：</h3><p>Global (或Proxy，视配置文件具体情况而定)：主要规则代理分组，需手动选定一个你要使用的节点作为默认的节点。无其它修改的话，所有国际网络的访问都通过该策略组中选择的节点进行连接。</p><p>Netflix：指Netflix流媒体的分组，如选择香港节点，则显示港区内容。其它地区的同理。</p><p>Spotify：指Spotify流媒体的分组，仅用于加速访问。Spotify执行锁区政策，根据账号注册时所在地进行内容展示，更换节点并不能显示其它地区的版权内容。</p><p>YouTube：指YouTube流媒体的分组，使用不同的线路将展示不同地区的特色内容。</p><p>Telegram：指Telegram（电报）的分组，国内手机号注册的用户选择新加坡线路也许可以加速（注意：是也许。因为+86号段注册的电报用户数据都在新加坡数据中心）。</p><p>China：访问中国大陆网站所用的策略。大陆用户请选择 DIRECT （直接连接）；海外用户请选择回国线路。</p><p>Auto：软件每隔一段时间会自动进行测试并排序，自动评选出延迟最低的节点，当其它策略组里选择了 auto 策略，那么效果就是该策略组将每隔一段时间自动切换到延迟最低的线路。<br>（如果你有登陆脸书、IG等社交媒体，不建议使用该策略，以免由于IP变动造成风控，甚至封号。）</p><p>fallback：可用性策略。与故障转移类似，按照节点顺序选择第一个可用节点。</p><div name="5.常见订阅错误报告" data-unique="5.常见订阅错误报告"></div>

## 5. 常见订阅错误报告

① 如果遇到以下提示：

```
Invalid Config:yaml:
unmarshal errors:line 1:cannot unmarshal !!str c3M6Ly9...
```

说明用错了订阅链接，请检查自己是不是复制错了或者多了空格之类的。

没有 Clash 订阅链接的可以使用订阅转换API来转换订阅链接。

② 如果遇到此类提示：

```
Invalid Config:
Value for 'Proxy' is invalid:Unexpected null or empty
```

说明你还没买套餐，或者订阅为空。请联系你所在机场的管理员。

③ 如果遇到此提示：

```
...cipher not supported
```

说明你使用的加密算法不被Clash支持。请更换加密算法。

> 转载自Sabrina https://merlinblog.xyz/wiki/ClashX.html