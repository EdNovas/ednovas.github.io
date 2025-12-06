---
title: 自定义隧道
tags: [VPS, 隧道]
categories:
  - - VPS
date: 2021-10-01 21:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/tunnel-icon-electronics-phone-text-face-transparent-png-2422981.png
# highlight_shrink: true
---

<div class="mdui-card-content markdown-body text_s">
<h2 id="原理">原理</h2>
<p>隧道入口 &lt;=<span style="border: dashed 1.5px;padding:2px">隧道</span>=&gt; 自定义隧道落地 &lt;=&gt; 目标</p>
<h2 id="安装后端">安装后端</h2>
<p>下载: (其他OS请自行替换下载连接: <a href="https://github.com/nkeonkeo/neko-relay-land/releases/tag/v1.0">https://github.com/nkeonkeo/neko-relay-land/releases/tag/v1.0</a>)</p>
<pre><code class="language-bash">wget https://github.com/nkeonkeo/neko-relay-land/releases/download/v1.0/neko-relay_linux_amd64 -O /usr/bin/neko-relay
chmod +x /usr/bin/neko-relay
</code></pre>
<p>初始化服务: <code>neko-relay -g init</code></p>
<p>菜单引导: <code>neko-relay -g menu</code></p>
<h2 id="添加转发">添加转发</h2>
<ol>
<li><p>首先在面板添加转发</p>
<p>选择支持自定义隧道的节点</p>
<p>选择 <code>ws_tunnel_client_tcp+udp</code> 类型</p>
<p>记住添加规则成功后提示的 <strong>规则ID、目标服务器、目标端口</strong></p>
</li>
<li><p>在隧道落地端(目标服务器)新增规则</p>
<pre><code class="language-bash">neko-relay -g add
</code></pre>
<ol>
<li><p>选择类型:</p>
<p>WS隧道加密端(TCP+UDP) 对应 面板 <code>ws_tunnel_client_tcp+udp</code> 类型</p>
<p>WSS隧道加密端(TCP+UDP) 对应 面板 <code>wss_tunnel_client_tcp+udp</code> 类型</p>
<p>MIX隧道加密端(TCP+UDP) 对应 面板 <code>mix_tunnel_client_tcp+udp</code> 类型</p>
</li>
<li><p>规则ID: </p>
<p>填写面板添加后提示的<code>规则ID</code>(如果忘记可以在面板上点击规则状态复制规则ID)</p>
</li>
<li><p>隧道落地端 - 本机端口:</p>
<p>面板添加规则时你填写的目标端口</p>
</li>
<li><p>隧道落地端 - 目标地址、目标端口: </p>
<p>隧道要转发的目标</p>
<p>假设面板规则目标服务器(隧道落地端)IP是<code>1.1.1.1</code>,面板规则目标端口是<code>1111</code>,最终目标为<code>2.2.2.2</code>:<code>2222</code>,那么:</p>
<p>隧道入口-&gt; <code>1.1.1.1</code>:<code>面板规则目标端口</code> -&gt; <code>2.2.2.2</code>(隧道落地端目标地址):<code>2222</code></p>
<p>当然目标可以是隧道落地端自己，像这样:</p>
<p>假设隧道落地端有Shadowsocks监听<code>23333</code>端口，目标地址为<code>127.0.0.1</code>,目标端口为<code>23333</code></p>
</li>
</ol>
</li>
</ol>
<h2 id="其他功能">其他功能</h2>
<p>菜单引导: <code>neko-relay -g menu</code></p>
<p>初始化服务: <code>neko-relay -g init</code></p>
<p>重启服务: <code>neko-relay -g restart</code></p>
<p>停止服务: <code>neko-relay -g stop</code></p>
<p>更新后端: <code>neko-relay -g update</code></p>
<p>查看规则列表: <code>neko-relay -g list</code></p>
<p>添加规则: <code>neko-relay -g add</code></p>
<p>删除规则: <code>neko-relay -g del</code></p>
</div>

> 转载自 https://relay.nekoneko.cloud/knowledge/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9A%A7%E9%81%93%E6%95%99%E7%A8%8B