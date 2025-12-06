---
title: 绕过hCaptcha验证方法
tags: [hCaptcha,bot]
categories:
  - - 杂
date: 2021-10-13 11:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/BPM1f0t7Kt-BnuX0Um-Ld0ZPEtJC5WGQTb4nrNae8hs.jpg
---

> 转载自https://bbs.pha.pub/threads/36/

<div class="bbWrapper"><span style="font-size: 15px">当你访问 CurseForge 等网站的时候，是不是经常出现这样的情况：<br>

<div class="bbImageWrapper  js-lbImage" title="l1O2UpXc73VCDAr.png" data-src="https://i.loli.net/2021/07/31/l1O2UpXc73VCDAr.png" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1" data-fancybox="lb-post-111" data-caption="<h4>l1O2UpXc73VCDAr.png</h4><p><a href=&quot;https:&amp;#x2F;&amp;#x2F;bbs.pha.pub&amp;#x2F;threads&amp;#x2F;36&amp;#x2F;#post-111&quot; class=&quot;js-lightboxCloser&quot;>10935336 · 2021-02-24， 02:20</a></p>" style="cursor: pointer;">
<img src="https://i.loli.net/2021/07/31/l1O2UpXc73VCDAr.png" data-url="https://i.loli.net/2021/07/31/l1O2UpXc73VCDAr.png" class="bbImage" data-zoom-target="1" style="width: 454px" alt="l1O2UpXc73VCDAr.png" title="" width="" height="" loading="lazy">
</div>
<br>
<br>
这是因为 CurseForge 使用了 Cloudflare 的网站加速服务，又开启了 Cloudflare 的攻击防御，而 Cloudflare 又用了 hCaptcha 来识别你是否是机器人，当 Cloudflare 怀疑你是攻击者时就会要求你输入验证码，所以你偶尔会看到 hCaptcha 人机验证。<br>
<br>
曾经 Cloudflare 使用的是 Google 的 reCAPTCHA Enterprise，reCAPTCHA 的用户体验还算不错，但很不幸地它开始收费了。<br>
所以 Cloudflare 决定换到一个倒给钱的人机验证服务：hCaptcha<br>
然而不幸的是，hCaptcha 对用户来说非常不友好，而且挂了代理速度还是很慢，真的很烦。</span><br>
<br>
<b><span style="font-size: 26px">今天我就来教用正规方法你绕过 hCaptcha</span></b><br>
<span style="font-size: 15px">使用 hCaptcha 的辅助功能，官方介绍页：<a href="https://www.hcaptcha.com/accessibility" target="_blank" class="link link--external" data-proxy-href="/proxy.php?link=https%3A%2F%2Fwww.hcaptcha.com%2Faccessibility&amp;hash=b080b50ebfbd7536e1037421243f9a5b" rel="noopener">Accessibility</a></span><br>
<br>
<span style="font-size: 22px"><b>1.</b></span><b><span style="font-size: 22px">注册一个 hCaptcha 无障碍服务账号</span></b><br>
<span style="font-size: 15px">点击这个链接进行注册（和普通账号是分开的）<br>
<a href="https://dashboard.hcaptcha.com/signup?type=accessibility" target="_blank" class="link link--external" data-proxy-href="/proxy.php?link=https%3A%2F%2Fdashboard.hcaptcha.com%2Fsignup%3Ftype%3Daccessibility&amp;hash=7bfa9eee33db7919fa43e78b0252ecba" rel="noopener">https://dashboard.hcaptcha.com/signup?type=accessibility</a></span><br>
<div class="bbImageWrapper  js-lbImage" title="sjleGOodcXZ6EQ2.png" data-src="https://i.loli.net/2021/07/31/sjleGOodcXZ6EQ2.png" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1" data-fancybox="lb-post-111" data-caption="<h4>sjleGOodcXZ6EQ2.png</h4><p><a href=&quot;https:&amp;#x2F;&amp;#x2F;bbs.pha.pub&amp;#x2F;threads&amp;#x2F;36&amp;#x2F;#post-111&quot; class=&quot;js-lightboxCloser&quot;>10935336 · 2021-02-24， 02:20</a></p>" style="cursor: pointer;">
<img src="https://i.loli.net/2021/07/31/sjleGOodcXZ6EQ2.png" data-url="https://i.loli.net/2021/07/31/sjleGOodcXZ6EQ2.png" class="bbImage" data-zoom-target="1" style="width: 253px" alt="sjleGOodcXZ6EQ2.png" title="" width="" height="" loading="lazy">
</div>
<br>
<br>
<b><span style="font-size: 22px">2.收邮件</span></b><br>
<span style="font-size: 15px">你会收到一封这样的邮件</span><br>
<div class="bbImageWrapper  js-lbImage" title="21qXTKC6YuksDvW.png" data-src="https://i.loli.net/2021/07/31/21qXTKC6YuksDvW.png" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1" data-fancybox="lb-post-111" data-caption="<h4>21qXTKC6YuksDvW.png</h4><p><a href=&quot;https:&amp;#x2F;&amp;#x2F;bbs.pha.pub&amp;#x2F;threads&amp;#x2F;36&amp;#x2F;#post-111&quot; class=&quot;js-lightboxCloser&quot;>10935336 · 2021-02-24， 02:20</a></p>" style="cursor: pointer;">
<img src="https://i.loli.net/2021/07/31/21qXTKC6YuksDvW.png" data-url="https://i.loli.net/2021/07/31/21qXTKC6YuksDvW.png" class="bbImage" data-zoom-target="1" style="width: 383px" alt="21qXTKC6YuksDvW.png" title="" width="" height="" loading="lazy">
</div>
<br>
<span style="font-size: 15px">右键点击<code class="bbCodeInline">获取辅助功能 Cookie</code>复制链接地址<br>
你会得到<code class="bbCodeInline">https://accounts.hcaptcha.com/verify_email/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code><br>
这样的一条链接，把这条链接<b>保存</b>为浏览器书签之类的，以后还会用到。</span><br>
<br>
<b><span style="font-size: 22px">3.获得<s>饼干</s> Cookie</span></b><br>
<span style="font-size: 15px">访问你刚刚复制的链接，你会来到这个页面。</span><br>
<div class="bbImageWrapper  js-lbImage" title="3F4AQnEHR7gVwY2.png" data-src="https://i.loli.net/2021/07/31/3F4AQnEHR7gVwY2.png" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1" data-fancybox="lb-post-111" data-caption="<h4>3F4AQnEHR7gVwY2.png</h4><p><a href=&quot;https:&amp;#x2F;&amp;#x2F;bbs.pha.pub&amp;#x2F;threads&amp;#x2F;36&amp;#x2F;#post-111&quot; class=&quot;js-lightboxCloser&quot;>10935336 · 2021-02-24， 02:20</a></p>" style="cursor: pointer;">
<img src="https://i.loli.net/2021/07/31/3F4AQnEHR7gVwY2.png" data-url="https://i.loli.net/2021/07/31/3F4AQnEHR7gVwY2.png" class="bbImage" data-zoom-target="1" style="width: 351px" alt="3F4AQnEHR7gVwY2.png" title="" width="" height="" loading="lazy">
</div>
<br>
<span style="font-size: 15px">点击 <code class="bbCodeInline">设置 Cookie</code><br>
<br>
显示 <code class="bbCodeInline">Cookie集</code>。 即为成功。（迷之翻译）</span><br>
<div class="bbImageWrapper  js-lbImage" title="xWpzK7f3buhSJYs.png" data-src="https://i.loli.net/2021/07/31/xWpzK7f3buhSJYs.png" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1" data-fancybox="lb-post-111" data-caption="<h4>xWpzK7f3buhSJYs.png</h4><p><a href=&quot;https:&amp;#x2F;&amp;#x2F;bbs.pha.pub&amp;#x2F;threads&amp;#x2F;36&amp;#x2F;#post-111&quot; class=&quot;js-lightboxCloser&quot;>10935336 · 2021-02-24， 02:20</a></p>" style="cursor: pointer;">
<img src="https://i.loli.net/2021/07/31/xWpzK7f3buhSJYs.png" data-url="https://i.loli.net/2021/07/31/xWpzK7f3buhSJYs.png" class="bbImage" data-zoom-target="1" style="width: 161px" alt="xWpzK7f3buhSJYs.png" title="" width="" height="" loading="lazy">
</div>
<br>
<br>
<span style="font-size: 15px">现在你可以再次访问有 hCaptcha 的页面，只需要点击我是人类，就能不选图片轻松跳过。是不是很简单。<br>
<br>
<br>
<br>
#1 目前 hCaptcha 的 Cookie 有效时间只有 24 小时，24 小时后你需要访问你刚刚保存的那个链接，再次获取 Cookie。<br>
<br>
#2 部分情况下可能会出现勾选我是人类通过验证码后又跳出来验证码的情况，反复勾选可以通过，有时候需要 3-5 次。<br>
<br>
#3 部分情况下使用此方法可能导致无法通过 hCaptcha（似乎是由于广告屏蔽器？），这时你需要清理 Cookie ，将 accounts.hcaptcha.com、 dashboard.hcaptcha.com 、 hcaptcha.com 的 Cookie 全部清除。具体方法请自行搜索某某浏览器清理 Cookie。</span></div>


