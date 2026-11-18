---
title: Cloudflare Pages + Workers 部署小项目，以及域名购买省钱技巧
tags: [Cloudflare Pages,GitHub,静态网站,域名,建站]
categories:
  - - 杂
date: 2026-03-10 16:19:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

## 前言

用了一段时间后，我觉得 Cloudflare Pages + Workers 可能是目前部署小项目最舒服的方案。免费、快速、全球 CDN、自带防御，推送代码即上线。

我目前在 Cloudflare 上跑了十几个小项目，从博客到 API 到展示页面都有，全部零服务器成本。

这篇先讲怎么把 GitHub 仓库连到 Cloudflare Pages 自动部署，然后是我的实际项目和 Cloudflare 的配套功能，最后讲怎么绑定自定义域名，以及域名购买的省钱方法。

## Cloudflare Pages 简介

Cloudflare Pages 是静态网站托管平台，可以直接从 GitHub 仓库读取代码，自动构建并部署到 Cloudflare 的全球 CDN。

免费套餐每月可以构建 500 次，并发构建 1 个。
带宽无限，站点数量无限，自定义域名也无限，SSL 证书自动签发（免费）。

带宽无限是 Pages 最大的优势，即使网站流量很大也不会产生任何费用。

适合放在上面的项目有：个人博客（Hexo / Hugo / Jekyll / VitePress）、项目文档站和下载页面、落地页和导航页和地址发布页、纯前端 SPA（React / Vue）、数据展示页面（地图、图表等），再搭配 Workers 还能做小型 API 服务。

需要持久化数据库的重型后端就不太适合了（不过 D1 + Workers 可以轻量搞定）。

## 连接 GitHub 仓库

准备三样东西：一个 [GitHub](https://github.com/) 账号，一个 [Cloudflare](https://dash.cloudflare.com/) 账号（免费注册），一个包含静态网站源码的 GitHub 仓库。

### 进入 Pages 面板

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单中选择 Workers & Pages
3. 点击 Create 按钮
4. 选择 Pages 标签页
5. 点击 Connect to Git

### 授权 GitHub

1. 选择 GitHub 作为 Git 提供商
2. 点击 Connect GitHub
3. 如果是首次连接，会弹出 GitHub 授权窗口
4. 选择授权给特定仓库或所有仓库（推荐选择特定仓库，更安全）
5. 点击 Install & Authorize

### 选择仓库和分支

在仓库列表中选择要部署的仓库，然后点击 Begin setup。

Project name 写项目名称，它决定了默认域名，比如 `my-blog`。

Production branch 写生产环境分支，比如 `main` 或 `gh-pages`。

### 构建设置

这里是关键，根据使用的框架选择对应的预设：

- 纯 HTML（无需构建）：Build command 留空，Build output directory 填 `/`
- Hexo：Build command 填 `npm run build`，输出目录填 `public`
- Hugo：Build command 填 `hugo`，输出目录填 `public`
- VitePress：Build command 填 `npm run docs:build`，输出目录填 `docs/.vitepress/dist`
- React (Vite)：Build command 填 `npm run build`，输出目录填 `dist`
- Vue (Vite)：Build command 填 `npm run build`，输出目录填 `dist`
- Next.js (Static)：Build command 填 `npx next build && npx next export`，输出目录填 `out`
- Jekyll：Build command 填 `jekyll build`，输出目录填 `_site`

如果仓库里已经是构建好的静态文件（比如 GitHub Actions 已经构建并推送到了 `gh-pages` 分支），Build command 和 Build output directory 都留空，让 CF Pages 直接使用分支内容即可。

### 环境变量

如果构建过程需要环境变量，可以在 Environment variables 中添加。

NODE_VERSION 填 `18`，用来指定 Node.js 版本。

NPM_FLAGS 填 `--legacy-peer-deps`，是 npm 的安装参数。

### 部署

点击 Save and Deploy，Cloudflare 会自动开始构建和部署。首次部署通常需要 1-3 分钟。

部署完成后，会得到一个默认域名：
```
https://my-blog.pages.dev
```

## 自动部署

连接成功后，每次向 GitHub 仓库推送代码，Cloudflare Pages 都会自动触发部署：

```
git add .
git commit -m "更新文章"
git push origin main
       │
       ▼
GitHub 仓库收到 push
       │
       ▼
Cloudflare Pages 自动触发构建
       │
       ▼
部署到全球 CDN（通常 30 秒内完成）
```

### Production 和 Preview

Cloudflare Pages 有两种部署环境。

Production 在推送到生产分支（如 `main`）时触发，域名是 `项目名.pages.dev` 加上自定义域名，也就是正式线上环境。

Preview 在推送到其他分支或者提交 Pull Request 时触发，域名是 `<hash>.项目名.pages.dev`，用来预览测试。

Preview 很实用。每次 Push 到非生产分支都会自动生成独立的预览 URL，创建 Pull Request 时也会自动生成预览链接，合并前就可以确认效果。

### 回滚部署

如果新版本有问题，可以快速回滚：

1. 进入 Cloudflare Pages 项目，点击 Deployments
2. 找到之前正常的部署
3. 点击右侧的 ...，再点 Rollback to this deployment

## 我的项目案例

下面是我用 Cloudflare Pages + Workers 部署的一些项目，可以看看它能做到什么程度。

博客用 Pages，Hexo + GitHub Actions。写文章推送到 `dev` 分支，Actions 构建后推送到 `gh-pages`，CF Pages 自动部署。

节点地图用 Workers，JS + amCharts。动态抓取订阅信息，在世界地图上展示全球节点分布。

下载页面用 Pages，纯 HTML/JS。从 GitHub Release 自动拉取最新版本，展示下载链接。

地址发布页用 Workers，JS 跳转。一个简洁的跳转中转页，自动重定向到最新地址。

导航页用 Pages，静态 HTML。就是个人常用网址的导航页面。

节点监控用 Workers + KV，JS + Telegram Bot。接收国内服务器上报的检测结果，自动切换 DNS、发送告警。

纯静态展示用 Pages，需要后端逻辑的小 API 用 Workers，都能搞定，而且全部在免费额度内。

这些项目都在同一个 Cloudflare 账号下，Dashboard、域名管理和分析面板是统一的，运维成本几乎为零。

## Cloudflare 配套功能

除了 Pages 和 Workers 本身，Cloudflare 还提供了不少免费的配套功能。

### DDoS 防护

所有通过 Cloudflare 的流量都自动受到 DDoS 防护，不需要任何配置。即使只是一个小博客，也能抵御大规模攻击。

### Web Analytics

Cloudflare 提供免费的 Web Analytics，无需嵌入 JS 代码，直接在 Dashboard 查看页面访问量、独立访客数、来源国家分布、热门页面排行和带宽使用情况。

比 Google Analytics 更轻量，而且不影响页面加载速度。

### 域名管理

在 CF Pages 项目中绑定域名很简单，点击 Custom domains 再点 Add 即可。

如果 DNS 已经在 Cloudflare，CNAME 记录会自动创建，SSL 证书自动签发和续期，整个过程不超过 1 分钟。

### 请求分析和限流

对于 Workers 项目，请求分析里每个 Worker 的调用次数、延迟、错误率一目了然。

Rate Limiting 可以配置 API 限流规则，防止滥用。WAF 规则可以自定义防火墙规则，过滤恶意请求。

### Workers 付费套餐

免费套餐对大多数小项目已经足够，但如果 API 请求量稍大，Workers Paid Plan（5 美元一个月）也很划算。

每日请求数，免费套餐是 100,000，付费套餐不限。

CPU 时间，免费套餐 10ms / 请求，付费套餐 30ms / 请求。

KV 读取，免费套餐 100,000 / 天，付费套餐 10,000,000 / 月。

KV 写入，免费套餐 1,000 / 天，付费套餐 1,000,000 / 月。

D1 数据库两边都是 5GB，付费套餐有更多读写额度。

Durable Objects 只有付费套餐能用。

5 美元一个月，能跑无限请求、海量 KV 读写，比任何 VPS 都便宜，还自带全球 CDN 和 DDoS 防护。

## 绑定自定义域名

默认的 `*.pages.dev` 域名能用，但自定义域名更专业。

前提是已经有一个域名，并且域名的 DNS 托管在 Cloudflare（推荐）或其他平台。

1. 进入 Cloudflare Pages 项目，点击 Custom domains
2. 点击 Set up a custom domain
3. 输入你的域名（如 `blog.example.com` 或 `example.com`）
4. 点击 Continue

### DNS 在 Cloudflare

如果域名的 DNS 已经托管在 Cloudflare，系统会自动添加 CNAME 记录，无需手动操作。

点击 Activate domain 即可，SSL 证书会在几分钟内自动签发。

### DNS 在其他平台

如果域名在 Namesilo / GoDaddy / Porkbun 等其他平台：

1. 按照提示添加 CNAME 记录：
   ```
   类型: CNAME
   名称: blog（或 @ 表示根域名）
   目标: 项目名.pages.dev
   ```
2. 等待 DNS 生效（通常几分钟到几小时）
3. 回到 Cloudflare Pages 确认域名已激活

建议把 DNS 迁移到 Cloudflare。在 Cloudflare 管理 DNS 免费，还可以享受 DDoS 防护和 CDN 加速。迁移方法是在 Cloudflare Dashboard 添加你的域名，然后按照提示修改域名的 NS 记录即可。

### HTTPS

Cloudflare Pages 默认就是 HTTPS，SSL 证书自动签发和续期，无需任何配置。

## 域名购买省钱技巧

### 查询域名价格

购买域名前，建议先去 [TLD-List](https://tld-list.com/) 查价格。这个网站会列出各个注册商的域名价格，包括注册、续费和转入价格。

1. 打开 [https://tld-list.com/](https://tld-list.com/)
2. 在搜索框输入想要的后缀（如 `.com`、`.dev`、`.xyz`）
3. 网站会按价格排序列出所有注册商的报价
4. 注意区分 New（首次注册）、Renewal（续费）和 Transfer（转入）价格

**重点看续费价格，很多注册商首年便宜但续费很贵，要综合考虑。**

### Porkbun 首年注册，Cloudflare 续费

首年推荐 [Porkbun](https://porkbun.com/)，首年价格通常最低，很多后缀有大幅折扣。

日常续费推荐 [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)，成本价续费，不加任何利润。

Porkbun 很多后缀的首年注册价低于其他所有注册商。WHOIS 隐私保护免费（其他注册商通常另外收费）。界面简洁，没有各种广告和推销。支付方式也多，信用卡、PayPal、支付宝等都支持。

Cloudflare Registrar 承诺域名注册不赚取任何利润，直接按注册局批发价续费，价格透明，没有隐藏费用。而且和 Pages/Workers 集成在一起，DNS 管理、SSL、CDN 都在一处。

操作流程如下：

```
1️⃣ 在 Porkbun 注册域名（享受首年低价）
   ↓
2️⃣ 第一年使用期间，将 DNS 迁移到 Cloudflare（免费）
   ↓
3️⃣ 域名到期前，从 Porkbun 转入（Transfer）到 Cloudflare
   ↓
4️⃣ 之后在 Cloudflare 以成本价续费
```

### 域名转入 Cloudflare

将域名从其他注册商转入 Cloudflare：

1. 确保域名已注册 60 天以上（ICANN 规定）
2. 在原注册商（如 Porkbun）解锁域名，并获取 Auth Code（EPP Code）
3. 在 Cloudflare Dashboard 进入 Domain Registration，再点 Transfer
4. 输入要转入的域名
5. 输入 Auth Code
6. 支付转入费用（等于续费一年的成本价）
7. 确认转入（原注册商会发邮件确认，需在 5 天内批准）

转入时会自动续费一年，所以建议在域名快到期时转入，这样最划算。

### 价格对比

下面是常见后缀在不同平台的价格对比，仅供参考，实际请以 TLD-List 查询为准：

| 后缀 | Porkbun 首年 | Porkbun 续费 | Cloudflare 续费 | 备注 |
| :-: | :-: | :-: | :-: | :-- |
| `.com` | ~$5.99 | ~$10.47 | ~$9.15 | 最通用 |
| `.dev` | ~$10.99 | ~$16.48 | ~$13.18 | 开发者专属，强制 HTTPS |
| `.xyz` | ~$1.00 | ~$13.06 | ~$10.44 | 首年超便宜，续费注意 |
| `.me` | ~$3.00 | ~$22.48 | ~$15.85 | 个人站常用 |
| `.io` | ~$25.99 | ~$44.99 | ~$39.00 | 科技/创业公司常用，较贵 |

以上价格可能随时变动，购买前请到 [TLD-List](https://tld-list.com/) 查询最新价格。

### 域名选择

优先 `.com`，认知度最高，SEO 友好。

个人博客可以选 `.me`、`.dev`、`.xyz`，项目和文档可以选 `.dev`、`.io`、`.sh`。

域名别太长，短域名更容易记忆和输入。也别用特殊字符，不要用中文域名或带连字符的域名。

## 建站流程

从零开始建站，大致是下面这个顺序：

```
1️⃣ 选择域名后缀 → TLD-List 比价
   ↓
2️⃣ 在 Porkbun 注册域名（首年低价）
   ↓
3️⃣ 将域名 DNS 迁移到 Cloudflare（免费）
   ↓
4️⃣ 创建 GitHub 仓库，推送网站代码
   ↓
5️⃣ Cloudflare Pages 连接 GitHub 仓库
   ↓
6️⃣ 绑定自定义域名
   ↓
7️⃣ 推送代码 → 自动部署 → 网站上线 🎉
   ↓
8️⃣ 域名到期前转入 Cloudflare（成本价续费）
```

总成本是域名费用（首年可低至 $1）加 0（托管、CDN、SSL 全免费）。

## 常见问题

### Cloudflare Pages 和 GitHub Pages 的区别

带宽，Cloudflare Pages 无限，GitHub Pages 是 100GB/月。

构建次数，Cloudflare Pages 是 500/月，GitHub Pages 无限（受 Actions 分钟数限制）。

CDN 节点，Cloudflare 有 300+，GitHub 是全球节点。

Preview 环境，Cloudflare Pages 每个分支自动生成，GitHub Pages 没有。

自定义域名，Cloudflare Pages 无限，GitHub Pages 1 个。

构建框架支持，Cloudflare Pages 有多种预设，GitHub Pages 需配合 Actions。

两者可以同时使用，互为备份。

### 部署失败

1. 检查 Build command 和 Build output directory 是否正确
2. 查看构建日志，通常会明确提示错误原因
3. 确认 `NODE_VERSION` 环境变量是否与本地一致
4. 尝试在本地运行构建命令，确认能正常通过

### 域名转入时间

通常 1-5 天。发起转入后，原注册商会发确认邮件，尽快批准可以加快流程。部分注册商（如 Porkbun）支持即时批准。

### 服务端渲染

Cloudflare Pages 支持 SSR。通过 Cloudflare Pages Functions（基于 Workers），可以实现 SSR、API 路由等服务端功能。Next.js、Nuxt 等框架有官方适配。

## 参考资料

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [TLD-List 域名价格比较](https://tld-list.com/)
- [Porkbun](https://porkbun.com/)
