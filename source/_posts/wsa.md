---
title: 在Windows11中安装WSA(安卓子系统)
tags: []
categories:
  - - 杂
date: 2021-10-30 23:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Windows-11-android-sideloading.webp
# highlight_shrink: true
---

> 转载自 IsaacWangTT https://blog.isaacwangtt.xyz/index.php/archives/154/
> https://blog.isaacwangtt.xyz/index.php/archives/156/
> https://blog.isaacwangtt.xyz/index.php/archives/160/

<article id="post" lg-uid="lg1">
<p>首先你得打开windows里面的功能，在windows菜单里面搜索启用....功能<br>然后打开里面的这两个功能</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@fbd84daf694bc3c341f4a67c387fde02e92fc5a6/2021/10/23/fc239b9e839fce2255a2c5a3d58f57ca.png"><img class="lazy loaded" alt="hyper-v和虚拟机平台" title="hyper-v和虚拟机平台" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@fbd84daf694bc3c341f4a67c387fde02e92fc5a6/2021/10/23/fc239b9e839fce2255a2c5a3d58f57ca.png"></a></p><p>重启</p><hr><p>之后下载需要的包<br>商店下载链接<a href="https://www.microsoft.com/store/productId/9P3395VX91NR">https://www.microsoft.com/store/productId/9P3395VX91NR</a><br>安装包抓包地址<a href="https://store.rg-adguard.net/">https://store.rg-adguard.net/</a><br>在抓包地址右边选择Slow通道(因为Slow通道对应的是Beta通道，其他Fast,RP,Retail分别对应Dev,预览，正式版)<br>然后在地址栏里面输入商店下载地址</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@8dd2873eac46c72a2e068fc1e111bc36e7ac36ee/2021/10/23/6e17ce2332480b48c65701599e6f129c.png"><img class="lazy loaded" alt="图片" title="图片" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@8dd2873eac46c72a2e068fc1e111bc36e7ac36ee/2021/10/23/6e17ce2332480b48c65701599e6f129c.png"></a></p><p>找到最下面的那个最大的包，我这里名字为"MicrosoftCorporationII.WindowsSubsystemForAndroid_1.7.32815.0_neutral_~_8wekyb3d8bbwe.msixbundle"<br>如果版本更新可能会变，不过都差不多，把它下载下来<br>如果你双击它，你会发现无法安装<br>这个时候我们需要用管理员运行Powershell来安装<br>win+X运行Powershell</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@d5c10c25afb416a0c37e06b0c4a330497c48d9ad/2021/10/23/de4a05fddc9621828c3f8b7c63023d81.png"><img class="lazy loaded" alt="Powershell" title="Powershell" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@d5c10c25afb416a0c37e06b0c4a330497c48d9ad/2021/10/23/de4a05fddc9621828c3f8b7c63023d81.png"></a></p><p>在里面输入</p><pre class="hljs-codeblock"><code class="hljs csharp"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-keyword">add</span>-appxpackage <span class="hljs-string">"这里填你下载的安装包的绝对路径"</span></td></tr></tbody></table></code>
<div class="hljs-control hljs-title">
			<div type="button" data-toggle="tooltip" data-placement="bottom" data-original-title="折行" class="hljs-control-toggle-break-line">
						<svg class="icon" aria-hidden="true"><use xlink:href="#align-left"></use></svg>
					</div>
					<div id="copy_btn_m5WO5hfpiftSxaHAuBsueGRwFour77Fe" type="button" data-toggle="tooltip" data-placement="bottom" data-original-title="复制" class="hljs-control-copy">
						<svg class="icon" aria-hidden="true"><use xlink:href="#copy"></use></svg>
					</div>
				</div></pre><p>比如我的就是</p><pre class="hljs-codeblock"><code class="hljs csharp"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-keyword">add</span>-appxpackage <span class="hljs-string">"D:\Downloads\Microsoft Edge\MicrosoftCorporationII.WindowsSubsystemForAndroid_1.7.32815.0_neutral___8wekyb3d8bbwe.Msixbundle"</span></td></tr></tbody></table></code>
<div class="hljs-control hljs-title">
			<div type="button" data-toggle="tooltip" data-placement="bottom" data-original-title="折行" class="hljs-control-toggle-break-line">
						<svg class="icon" aria-hidden="true"><use xlink:href="#align-left"></use></svg>
					</div>
					<div id="copy_btn_k5kBNtQRxu27u6JI96HWWAbK3kEBk4i6" type="button" data-toggle="tooltip" data-placement="bottom" data-original-title="复制" class="hljs-control-copy">
						<svg class="icon" aria-hidden="true"><use xlink:href="#copy"></use></svg>
					</div>
				</div></pre><p>回车执行<br>然后就可以enjoy了</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@4bee2cfec873eb34502cd370422d9cbc94559b72/2021/10/23/36f79476f2ecd91ba609db80023925f9.png"><img class="lazy loaded" alt="WSA" title="WSA" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@4bee2cfec873eb34502cd370422d9cbc94559b72/2021/10/23/36f79476f2ecd91ba609db80023925f9.png"></a></p> </article>

<article id="post" lg-uid="lg1">
<p>很多小伙伴装了WSA都发现没有桌面，这就意味着你只能用adb来进行和子系统的交互<br>十分的麻烦，这里我推荐一个工具，<a href="https://www.atmb.top/">秋之盒</a></p><h2 id="toc_0">我使用的是canary金丝雀版本</h2><p>进入WSA界面<br>打开开发人员模式<br>启用它，进入管理开发人员设置</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@578098c98de446dabdd6739571a5e9777e9afadf/2021/10/23/740ba46d103856a0a5575f8ba092f631.png"><img class="lazy loaded" alt="开发人员模式" title="开发人员模式" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@578098c98de446dabdd6739571a5e9777e9afadf/2021/10/23/740ba46d103856a0a5575f8ba092f631.png"></a></p><p>打开usb调试</p><hr><p>回到WSA界面，刷新和复制IP<br>进入秋之盒</p><p><a class="lightbox" href="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@ac1923a448e632aee5e7b0147ee37a811b86a1b7/2021/10/23/35b60326e485e438db3e1d2c4c480306.png"><img class="lazy loaded" alt="连接网络设备" title="连接网络设备" data-ll-status="loaded" src="https://cdn.jsdelivr.net/gh/IsaacWangTT/jsdelivr@ac1923a448e632aee5e7b0147ee37a811b86a1b7/2021/10/23/35b60326e485e438db3e1d2c4c480306.png"></a></p><p>在这里输入你复制的IP</p><p>安装一个然后你就能对WSA做你想做的事情了，比如可以安装一个应用商店，我这里推荐大家安装一个<a href="https://www.coolapk.com/">酷安</a><br>听说有人在wsa里面成功安装了谷歌框架，大家也可以试试</p><hr><p>PS:安装的app会出现在开始菜单内<br>关于如何科学上网，可以看看我hxd写的文章:<a href="https://ednovas.xyz/2021/02/06/clashconnection/">https://ednovas.xyz/2021/02/06/clashconnection/</a></p> </article>

<article id="post" lg-uid="lg1">
<p>具体看<br><a href="https://www.cnbeta.com/articles/tech/1193935.htm">https://www.cnbeta.com/articles/tech/1193935.htm</a></p><p>简化版我在酷安的帖子<a href="https://www.coolapk.com/feed/30903847?shareKey=ODJiOWM1Nzg0MDQ5NjE3NDJmMGQ~&amp;shareUid=2257293&amp;shareFrom=com.coolapk.market_11.4.3">https://www.coolapk.com/feed/30903847?shareKey=ODJiOWM1Nzg0MDQ5NjE3NDJmMGQ~&amp;shareUid=2257293&amp;shareFrom=com.coolapk.market_11.4.3</a></p> </article>