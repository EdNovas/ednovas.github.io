---
title: GitHub访问和下载加速
tags: [github,下载,git]
id: '1171'
categories:
  - - 网站
date: 2021-01-24 17:26:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/6efb9bc5d143-article-190612-github-body-text.jpg
#highlight_shrink: true
---

>转载自 https://blog.51cto.com/u_7921793/3308543

<div>
<p>2020年7月27日整理发布多种GitHub加速方式！</p>
<h2 id="h0">1. GitHub 镜像访问</h2>
<p>这里提供两个最常用的镜像地址：</p>
<ul><li>https://github.com.cnpmjs.org</li>
<li>https://hub.fastgit.org</li>
</ul><p>也就是说上面的镜像就是一个克隆版的Github，你可以访问上面的镜像网站，网站的内容跟Github是完整同步的镜像，然后在这个网站里面进行下载克隆等操作。</p>
<h2 id="h1">2. GitHub文件加速</h2>
<p>利用 Cloudflare Workers 对<code> github release</code> 、<code>archive</code> 以及项目文件进行加速，部署无需服务器且自带CDN.</p>
<p>https://gh.api.99988866.xyz<br>https://g.ioiox.com</p>
<p>以上网站为演示站点，如无法打开可以查看开源项目：gh-proxy-GitHub 文件加速自行部署。</p>
<h2 id="h2">3. Github 加速下载</h2>
<p>只需要复制当前 GitHub 地址粘贴到输入框中就可以代理加速下载！</p>
<p>地址：http://toolwa.com/github/</p>
<p><img src="https://s7.51cto.com/images/blog/202108/06/0b836c4a8195de84639cfc86a53b9e8d.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_服务器"></p>
<h2 id="h3">4. 加速你的 Github</h2>
<p>https://github.zhlh6.cn</p>
<p>输入 Github 仓库地址，使用生成的地址进行 git ssh 操作即可</p>
<h2 id="h4">5. 谷歌浏览器GitHub加速插件(推荐)</h2>
<p>谷歌浏览器Github加速插件.crx 下载</p>
<p>百度网盘: https://pan.baidu.com/s/1qGiIUzqNlN1ZczTNFbPg0A,提取码：<strong>stsv</strong></p>
<p>如果可以直接访问谷歌商店，可以访问GitHub 加速谷歌商店安装。</p>
<p><img src="https://s7.51cto.com/images/blog/202108/06/a77f20c4533c13182cd039cfb178aba4.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_下载速度_02"></p>
<h2 id="h5">6. GitHub raw 加速</h2>
<p>GitHub raw 域名并非 github.com 而是 raw.githubusercontent.com，上方的 GitHub 加速如果不能加速这个域名，那么可以使用 Static CDN 提供的反代服务。</p>
<p>将 raw.githubusercontent.com 替换为 raw.staticdn.net 即可加速。</p>
<h2 id="h6">7. GitHub + Jsdelivr</h2>
<p>jsdelivr 唯一美中不足的就是它不能获取 exe 文件以及 Release 处附加的 exe 和 dmg 文件。</p>
<p>也就是说如果 exe 文件是附加在 Release 处但是没有在 code 里面的话是无法获取的。所以只能当作静态文件 cdn 用途，而不能作为 Release 加速下载的用途。</p>
<h2 id="h7">8. 通过Gitee中转fork仓库下载</h2>
<p>网上有很多相关的教程，这里简要的说明下操作。</p>
<ol><li>
<p>访问gitee网站： https://gitee.com/ 并登录，在顶部选择“从GitHub/GitLab导入仓库”<br>如下：<br><img src="https://s9.51cto.com/images/blog/202108/06/e12bcac24f1fa749adf77702dc30b79b.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_git_03"></p>
</li>
<li>
<p>在导入页面中粘贴你的Github仓库地址，点击导入即可：<br><img src="https://s7.51cto.com/images/blog/202108/06/7a8bb34e69ed4c46b35a53daabe4d241.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_下载速度_04"></p>
</li>
<li>
<p>等待导入操作完成，然后在导入的仓库中下载浏览对应的该GitHub仓库代码，你也可以点击仓库顶部的“刷新”按钮进行Github代码仓库的同步。</p>
</li>
</ol><p><img src="https://s9.51cto.com/images/blog/202108/06/2d55bcfb63bfe97272fd83f8f577323b.png?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_下载速度_05"></p>
<h2 id="h8">9. 通过修改HOSTS文件进行加速</h2>
<p>参考如下详细介绍</p>
<hr><h2 id="h9">为什么github下载速度这么慢？</h2>
<p>GitHub 我们都知道是世界上最大的开源及私有软件项目的托管平台，全世界每天有海量优秀的开源软件在这里产生，而 GitHub 在国内很多时候获取到的下载链接是亚马逊的服务器。</p>
<p>中国因为不可言说的原因，经常抽疯或龟速。想要加快 GitHub 下载速度就需要用到 GitHub 国内加速服务，对于有条件的可以使用代理加快访问速度，而没有条件的就可以用到网上热心人士维护的加速服务了。</p>
<h2 id="h10">如何提高github的下载速度？</h2>
<p>手动把cdn和ip地址绑定。</p>
<h3 id="h11">第一步：获取github的global.ssl.fastly地址</h3>
<p>访问：http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo<br>获取cdn和ip域名：<br><img src="https://s4.51cto.com/images/blog/202108/06/e5d7fd3bf2ae25acb1dd442d21f6e1b1.jpeg?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_git_06"></p>
<p>得到：199.232.69.194 https://github.global.ssl.fastly.net</p>
<h3 id="h12">第二步：获取github.com地址</h3>
<p>访问：https://github.com.ipaddress.com/#ipinfo<br>获取cdn和ip：<br><img src="https://s7.51cto.com/images/blog/202108/06/a6e0590b76e605e717c6b3042b16b7ca.jpeg?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_.net_07"></p>
<p>得到：140.82.114.4 http://github.com</p>
<h3 id="h13">第三步：修改host文件</h3>
<p>windows系统：</p>
<p>1、修改<a>C:\Windows\System32\drivers\etc\hosts文件的权限，指定可写入：</a></p>
<p>右击-&gt;hosts-&gt;属性-&gt;安全-&gt;编辑-&gt;点击Users-&gt;在Users的权限“写入”后面打勾。如下：<br><img src="https://s4.51cto.com/images/blog/202108/06/16ba4e3778b03d461f736b78901f0577.jpeg?x-oss-process=image/watermark,size_16,text_QDUxQ1RP5Y2a5a6i,color_FFFFFF,t_100,g_se,x_10,y_10,shadow_90,type_ZmFuZ3poZW5naGVpdGk=" alt="让你的GitHub下载飞速提升到2M/s以上_.net_08"></p>
<p>然后点击确定。</p>
<p>2、右击-&gt;hosts-&gt;打开方式-&gt;选定记事本（或者你喜欢的编辑器）-&gt;在末尾处添加以下内容：</p>
<div class="code-toolbar"><div class="hljs-cto"><button data-clipboard-target="#code_id_0" class="copy_btn disable">登录后复制</button><div class="code-toolbar"><pre class=" prettyprint language-html" tabindex="0"><code class=" has-numbering language-html" id="code_id_0">199.232.69.194 github.global.ssl.fastly.net

140.82.114.4 github.com
</code><ul class="pre-numbering" style=""><li>1.</li><li>2.</li><li>3.</li></ul></pre><div class="toolbar"></div></div></div><div class="toolbar"></div></div>
</div>
