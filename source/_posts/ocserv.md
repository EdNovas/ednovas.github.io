---
title: 使用 ocserv 搭建企业级 OpenConnect VPN 网关
tags: [ocserv,openconnect,vpn]
categories:
  - - 科学上网
date: 2022-02-16 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/anyconnect.jpg
---

> 转载自 Nova Kwok https://nova.moe/deploy-openconnect-ocserv-with-letsencrypt/


<div class="content">
				

<h2 id="anyconnect-和-openconnect">AnyConnect 和 OpenConnect<a href="#anyconnect-和-openconnect" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<blockquote>
<p>本文于 2019-02-21 更新，修改了关于申请 SSL 证书的章节。</p>
</blockquote>

<p>Wikipedia 上描述 OpenConnect 如下：</p>

<blockquote>
<p>OpenConnect is an open-source software application for connecting to virtual private networks (VPN), which implement secure point-to-point connections.</p>

<p>It was originally written as an open-source replacement for Cisco’s proprietary AnyConnect SSL VPN client,[2] which is supported by several Cisco routers. As of 2013, the OpenConnect project also offers an AnyConnect-compatible server,[3] and thus offers a full client-server VPN solution.</p>
</blockquote>

<p>可以简要地看出，OpenConnect 原本是由于 AnyConnect 有只能运行在 Cisco 设备上限制而开发出来的一个多系统支持的开源 VPN 实现方式，属于 SSL VPN，需要一个有效的 SSL 证书。</p>

<p>本文实行简单粗暴的原则，记录了一个 Ubuntu 服务器最小化搭建 ocserv（OpenConnect 服务端） 服务的过程，所以：不使用证书登录验证（使用用户名 + 密码组合），SSL 使用 Let’s Encrypt（而非网上许多文章所介绍的自签发）。</p>

<h2 id="why-openconnect">Why OpenConnect<a href="#why-openconnect" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p>可能有些小伙伴看到本文长度会问了，为什么要搞这么复杂？直接 ss-server 或者 OpenVPN 一键脚本安装不好么？</p>

<p>原因有三：</p>

<ul>
<li>我们需要的是安全内网访问，不是快速地绕过防火墙… 而且后期需要加入证书认证</li>
<li>OpenVPN 协议特征过于明显，虽然 AnyConnect 协议特征也十分明显，但是由于目前只有一些大厂在用，一般而言直接拨位与海外的 VPN 网关不容易受到干扰或受到的干扰较小</li>
<li>对于例如 iOS/BlackBerry BBOS 系统而言，一般自带 AnyConnect 连接工具</li>
</ul>

<p>本例中：</p>

<ul>
<li>一台全新的 Ubuntu 18.04 LTS（主要是考虑到 80 端口未被占用，给后文中获取 SSL 证书的方法提供可能）</li>
<li>域名为：vpn.example.com，并且已经做好了解析到服务器 IP</li>
<li>服务器 IP 为：1.2.3.4</li>
</ul>

<blockquote>
<p>2018-09-12 更新：如果 80 端口被占用了可以考虑使用 DNS Challenge 的方法获取 Let’s Encrypt 证书，相关步骤可以参考 <a href="/host-static-website-with-google-storage-and-google-cdn/">《使用 Google Cloud Platform 的 Storage 托管静态站点并通过 Google CDN 加速》</a></p>
</blockquote>

<h2 id="安装-ocserv-准备系统">安装 ocserv &amp; 准备系统<a href="#安装-ocserv-准备系统" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p>网上许多方法都是通过手动编译源代码包的方式安装，然而现在至少对于 Debian 系的系统来说已经有了编译好的软件包了，详情见 <a href="https://ocserv.gitlab.io/www/packages.html">Distribution Status</a>，对于 Debian 系服务器来说（比如本例的 Ubuntu）直接一条指令即可（非常感谢维护这个包的：Aron Xu，Liang Guo 和 Mike Miller）：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ sudo apt install ocserv -y</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>之后我们需要打开系统的转发功能，在 <code>/etc/sysctl.conf</code> 中加入如下行：</p>

<pre><code>net.ipv4.ip_forward=1
</code></pre>

<p>通过</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ sysctl -p</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>保存。</p>

<p>打开 NAT 功能：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash"><span class="c1"># iptables -t nat -A POSTROUTING -j MASQUERADE</span></code></pre><button class="highlight-copy-btn">Copy</button></div>
<h2 id="配置-let-s-encrypt-证书">配置 Let’s Encrypt 证书<a href="#配置-let-s-encrypt-证书" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p><code>ocserv</code> 需要 SSL 证书（用来加密连接流量，保证连接安全，放心，这一步不复杂），网上许多教程中使用的是自签发证书，方法复杂且容易被 MITM 攻击，好在现在有 Let’s Encrypt 可以免费为自己域名添加证书，本例中使用 <code>certbot</code> 来获取一个 Let’s Encrypt 证书。</p>

<p>下载<code>certbot</code>，方法很多，在本例中为：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>其他系统请参考 <a href="https://certbot.eff.org">Certbot 官方网站</a>。</p>

<hr>

<p>这一步比较 Tricky，请仔细阅读：<strong>certbot 获取 SSL 证书有多种方式，例如它可以在你机器上起一个临时的网页服务器，并且让自己的 Authority 来尝试连接临时服务器用来确认你机器的所有权，也可以通过 DNS 设置 TXT 记录的方式来验证，以下方式使用的是开一个临时服务器的方式来获取，如果希望通过 DNS 修改 TXT 记录的方式获取，请参考<a href="/host-static-website-with-google-storage-and-google-cdn/">《使用 Google Cloud Platform 的 Storage 托管静态站点并通过 Google CDN 加速》</a>一文中的“获取 SSL 证书章节”。</strong></p>

<p>此外，有热心读者指出：ocserv 程序在安装后会使用 443 端口导致开启临时网页服务器的时候失败，读者给出的建议如下：</p>

<blockquote>
<p>在进行 <code>certbot</code> 获取证书之前，先以管理员权限修改 <code>/lib/systemd/system/ocserv.socket</code> 配置文件，将其中的两个443端口号修改为其他未被占用的端口号后，再运行  <code>certbot</code>  即可，这样做的好处是，可以利用  <code>certbot</code>  的自动证书续期功能。</p>

<p>另外，<code>/lib/systemd/system/ocserv.socket</code> 中指定的端口号无需与  <code>/etc/ocserv/ocserv.conf</code> 中的端口号保持一致。在使用 OpenConnect 或者 AnyConnect 客户端时，使用在 <code>/lib/systemd/system/ocserv.socket</code> 中指定的端口号即可。</p>
</blockquote>

<p>非常感谢这位读者的邮件，欢迎大家在测试的时候进行尝试~</p>

<hr>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ certbot certonly</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>会看到：</p>

<pre><code>Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Spin up a temporary webserver (standalone)
2: Place files in webroot directory (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
</code></pre>

<p>由于我们仅仅是想要一个证书，这里选择 1，让 <code>certbot</code> 来搞定证书获取的过程，之后输入自己的域名，比如本例中的 <code>vpn.example.com</code> ，稍等片刻应该可以看到类似如下的输出（记住证书存放的地址，后面会用到）：</p>

<pre><code>IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/vpn.example.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/vpn.example.com/privkey.pem
   Your cert will expire on 2018-11-11. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
</code></pre>

<h2 id="配置-ocserv">配置 ocserv<a href="#配置-ocserv" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p>默认安装好后在<code>/etc/ocserv/</code>下有一个很长的配置文件<code>ocserv.conf</code>，着重注意以下配置字段：</p>

<pre><code># 登录方式，使用用户名密码登录，密码文件稍后生成
auth = "plain[/etc/ocserv/ocpasswd]"

# 允许同时连接的客户端数量
max-clients = 4

# 限制同一客户端的并行登陆数量
max-same-clients = 2

# 服务监听的 TCP/UDP 端口（默认为 443）
tcp-port = 443
udp-port = 443

# 自动优化 MTU，尝试改善网络性能
try-mtu-discovery = true

# 服务器证书与密钥，就是上一步中生成的证书和私钥的位置
server-cert = /etc/letsencrypt/live/vpn.example.com/fullchain.pem
server-key = /etc/letsencrypt/live/vpn.example.com/privkey.pem

# 服务器域名
default-domain = vpn.example.com

# 客户端连上 vpn 后使用的 DNS，这里使用 Cloudflare 的 1.1.1.1
dns = 1.1.1.1

# 注释掉所有的 route 和 no-route，让服务器成为 gateway
#route = 192.168.1.0/255.255.255.0
#no-route = 192.168.5.0/255.255.255.0

# 启用 Cisco 客户端兼容性支持
cisco-client-compat = true
</code></pre>

<p>由于使用用户名密码登录，我们需要生成一个密码文件，指令如下：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ ocpasswd -c /etc/ocserv/ocpasswd &lt;用户名&gt;</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>此时会要求你输入两边密码，如果需要再添加用户只需重复上述指令即可。</p>

<p>配置好后启动 VPN：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">$ ocserv -c /etc/ocserv.conf</code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>确认已经开启：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash">root@vpn:/etc/ocserv# netstat -tulpn <span class="p">|</span> grep <span class="m">443</span>
tcp        <span class="m">0</span>      <span class="m">0</span> <span class="m">0</span>.0.0.0:443             <span class="m">0</span>.0.0.0:*               LISTEN      <span class="m">1987</span>/ocserv
tcp6       <span class="m">0</span>      <span class="m">0</span> :::443                  :::*                    LISTEN      <span class="m">1987</span>/ocserv
udp        <span class="m">0</span>      <span class="m">0</span> <span class="m">0</span>.0.0.0:443             <span class="m">0</span>.0.0.0:*                           <span class="m">1987</span>/ocserv
udp6       <span class="m">0</span>      <span class="m">0</span> :::443                  :::*                                <span class="m">1987</span>/ocserv</code></pre><button class="highlight-copy-btn">Copy</button></div>
<h2 id="connecting-through-vpn">Connecting Through VPN<a href="#connecting-through-vpn" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p>配置好 VPN 后让自己的所有服务器全部拨上 VPN：</p>
<div class="highlight"><pre class="chroma"><code class="language-bash" data-lang="bash"><span class="c1"># openconnect https://vpn.example.com/</span></code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>对于个人用户访问，这里以黑莓 Passport 为例（请无视那个现在并不存在企业名称），截图如下：</p>

<p><img src="https://nova-moe-blog-assets.webp.se/pics/openconnect/username.png" alt="">
<img src="https://nova-moe-blog-assets.webp.se/pics/openconnect/banner.png" alt=""></p>

<p>拨通后可以看到自己的内网 IP ：</p>

<p><img src="https://nova-moe-blog-assets.webp.se/pics/openconnect/address.png" alt=""></p>

<p>然后，开始在 VPN 的保护下畅游自己的大内网吧～</p>

<h2 id="off-topic">Off-Topic<a href="#off-topic" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<p>如果直接用浏览器去访问 VPN 网关（比如本例中：<a href="https://vpn.example.com">https://vpn.example.com</a>）的话，返回的是如下 HTML 内容：</p>
<div class="highlight"><pre class="chroma"><code class="language-html" data-lang="html"><span class="cp">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="p">&lt;</span><span class="nt">config-auth</span> <span class="na">client</span><span class="o">=</span><span class="s">"vpn"</span> <span class="na">type</span><span class="o">=</span><span class="s">"auth-request"</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">version</span> <span class="na">who</span><span class="o">=</span><span class="s">"sg"</span><span class="p">&gt;</span>0.1(1)<span class="p">&lt;/</span><span class="nt">version</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">auth</span> <span class="na">id</span><span class="o">=</span><span class="s">"main"</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">message</span><span class="p">&gt;</span>Please enter your username.<span class="p">&lt;/</span><span class="nt">message</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">form</span> <span class="na">method</span><span class="o">=</span><span class="s">"post"</span> <span class="na">action</span><span class="o">=</span><span class="s">"/auth"</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">"text"</span> <span class="na">name</span><span class="o">=</span><span class="s">"username"</span> <span class="na">label</span><span class="o">=</span><span class="s">"Username:"</span> <span class="p">/&gt;</span>
<span class="p">&lt;/</span><span class="nt">form</span><span class="p">&gt;&lt;/</span><span class="nt">auth</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">config-auth</span><span class="p">&gt;</span></code></pre><button class="highlight-copy-btn">Copy</button></div>
<p>此外如果开启了 <code>ocserv</code> 之后在  <code>sudo</code>  的时候卡住并提示：”sudo: unable to resolve host vpn: Resource temporarily unavailable” 的话，着重关注一下自己的<code>/etc/hosts</code>文件中是否包含一行：</p>

<pre><code>127.0.0.1	localhost
</code></pre>

<h2 id="参考连接">参考连接<a href="#参考连接" class="anchor" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg></a></h2>

<ol>
<li><a href="https://www.logcg.com/archives/1343.html">使用 ocserv 搭建 Cisco Anyconnect 服务器</a></li>
<li><a href="https://www.vultr.com/docs/setup-openconnect-vpn-server-for-cisco-anyconnect-on-ubuntu-14-04-x64">Setup OpenConnect VPN Server for Cisco AnyConnect on Ubuntu 14.04 x64</a></li>
</ol>

			</div>