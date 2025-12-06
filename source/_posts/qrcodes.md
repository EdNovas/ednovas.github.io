---
title: 生成微信QQ支付宝三合一收款码
tags: [二维码,微信,支付宝,QQ]
id: '1221'
categories:
  - - 建站
date: 2021-03-12 21:15:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/39677-76134-headerl-xl.jpg
# highlight_shrink: true
---

>转载自 https://www.0353com.cn/74.html

## EdNovas的DEMO站

https://qrcode.ednovas.xyz

## 大西瓜收款码三合一

https://qr.no0a.cn/

![](https://attach.52pojie.cn/forum/201903/10/202310sl888la84icea8yy.gif)


## 原理

剖析之后发现只需求两个页面。

### 生成页面

这个就是网站主页面，有两个功用，一个是上传qq、微信、支付宝收款码并将它们解析成链接，还有一个是将这几个链接合起来，然后生成兼并之后的二维码。解析和生成都是用了jQuery的`qrcode`插件，为了美观，用`canvas`绘制收款码的款式。

### 收款页面

当挪动设备扫描了之前生成的收款码，这个页面被翻开并会获取收款码中传入的三个参数（qq、微信、支付宝链接），然后依据阅读器UA判别当前是什么软件扫的二维码，qq和微信不能直接唤起支付，这时显现二维码界面供用户长按付款，支付宝能够直接进去转账页面。

这样的话这个网站就做好了，生成页面自创了收款啦 和 优启梦收款码，为了不太单调而且不把他们的功用生搬硬套的弄过来，想了一会就弄了个换色的功用(觉得没什么用，完整是凑内容的哈哈)，假如需求其他款式的话，能够去他们的网站生成。还有由于这三个收款码链接加起来特别长，生成的二维码比拟密集（也就是丑），然后就经过suo.im将长网址缩短，这样生成的二维码就会简单一点。

## 源码下载地址

最新版GitHub下载: https://github.com/BWmelon/qrcode

gitee：https://gitee.com/BWmelon/qrcode

(以下可能更新不及时)

下载地址：[收款码在线生成系统源码 无限制.rar](https://u4108918.ctfile.com/fs/4108918-367829048)

百度网盘：[收款码在线生成系统源码 无限制.rar](https://pan.baidu.com/s/15t9SYWdfx_RTfC2IDNq4ag)

EdNovas的蓝奏云：https://ednovas.lanzoux.com/iVvrkmuy79c

## 添加自定义新样式

<p>1、添加样式背景图</p>
<ul>
<li>使用外部图片链接方式，如淘宝链接：
上传图片到各大图床，如淘宝图床，然后获取图片链接，然后在index.html 页面中 <code>"swiper-wrapper"</code> 类下添加代码：
<code>&lt;div class="swiper-slide" style="background-image:url(这是外部图片链接)" mould-name="new"&gt;&lt;/div&gt;</code></li>
</ul>
<p>其中<code>mould-name="new"&gt;</code>中的<code>new</code>为自定义样式名。</p>
<ul>
<li>使用本地图片方式：
将背景图添加到 ./imgs/bgimgs/ 文件夹下，文件名以 "new.png" 为例，然后在 index.html 页面中 <code>"swiper-wrapper"</code> 类下添加样式：</li>
</ul>
<p><code>&lt;div class="swiper-slide" style="background-image:url(imgs/bgimgs/new.png)"&gt;&lt;/div&gt;</code></p>
<p>其中的<code>new</code>也为样式名。</p>
<p>2、打开根目录下 config.json 文件，添加json数据，根节点名必须为样式名，如 "new"，其他子节点参考下表：</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>说明</th>
<th>参考</th>
</tr>
</thead>
<tbody>
<tr>
<td>qrWidth</td>
<td>整数</td>
<td>二维码宽度</td>
<td>300</td>
</tr>
<tr>
<td>qrHeight</td>
<td>整数</td>
<td>二维码高度，建议和二维码宽度相同</td>
<td>300</td>
</tr>
<tr>
<td>foreground</td>
<td>字符串</td>
<td>二维码前景色，支持十六进制、rgb、rgba</td>
<td>"#000", "rgb(0, 0, 0)", "rgba(0, 0, 0, 0.5)"</td>
</tr>
<tr>
<td>background</td>
<td>字符串</td>
<td>二维码背景色，支持十六进制、rgb、rgba</td>
<td>"#fff", "rgb(255, 255, 255)", "rgba(255, 255, 255, 0.5)"</td>
</tr>
<tr>
<td>imgWidth</td>
<td>整数</td>
<td>背景图宽度</td>
<td>900（其他尺寸未兼容）</td>
</tr>
<tr>
<td>imgHeight</td>
<td>整数</td>
<td>背景图高度</td>
<td>1200（其他尺寸未兼容）</td>
</tr>
<tr>
<td>font</td>
<td>字符串</td>
<td>字体和大小</td>
<td>"70px '黑体'"</td>
</tr>
<tr>
<td>fontColor</td>
<td>字符串</td>
<td>文字颜色（未填写收款名则不生成）</td>
<td>"#fff", "rgb(255, 255, 255)", "rgba(255, 255, 255, 0.5)"</td>
</tr>
<tr>
<td>recNameLeft</td>
<td>空串或整数</td>
<td>文字距离左侧距离，建议为空串，此时文本将自适应居中显示</td>
<td>"", 100</td>
</tr>
<tr>
<td>recNameTop</td>
<td>整数</td>
<td>文字距离顶部距离</td>
<td>170</td>
</tr>
<tr>
<td>qrLeft</td>
<td>整数</td>
<td>二维码距离左侧距离</td>
<td>270</td>
</tr>
<tr>
<td>qrTop</td>
<td>整数</td>
<td>二维码距离顶部距离</td>
<td>320</td>
</tr>
</tbody>
</table>
<p>这样就成功添加了一个新的样式，新增的json内容内容大致为下图所示：</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/deac7f7569bc0ec97c2532d5c8236a54ce28f0715297a80bff12b5f14343ddde/68747470733a2f2f696d67732e62776d656c6f6e2e636f6d2f32303230303931333231313133302e706e67"><img src="https://camo.githubusercontent.com/deac7f7569bc0ec97c2532d5c8236a54ce28f0715297a80bff12b5f14343ddde/68747470733a2f2f696d67732e62776d656c6f6e2e636f6d2f32303230303931333231313133302e706e67" alt="参考" data-canonical-src="https://imgs.bwmelon.com/20200913211130.png" style="max-width: 100%;"></a></p>
<p>3、小提示：
如果不想在背景中生成收款名，可以将fontColor属性设为transparent。</p>
<p>如需修改样式滑动效果，可以参考<a href="https://www.swiper.com.cn/api/index.html" rel="nofollow">Swiper中文网</a>文档。</p>


