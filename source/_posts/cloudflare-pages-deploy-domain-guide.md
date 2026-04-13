---
title: Cloudflare Pages + Workers：部署小项目的终极方案 + 域名省钱指南
tags: [Cloudflare Pages,GitHub,静态网站,域名,建站]
categories:
  - - 杂
date: 2026-03-10 16:19:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

# Cloudflare Pages + Workers：部署小项目的终极方案

用了一段时间后越来越觉得，**Cloudflare Pages + Workers** 可能是目前部署小项目最舒服的方案——免费、快速、全球 CDN、自带防御，推送即上线。

我目前在 Cloudflare 上跑了十几个小项目，从博客到 API 到展示页面一应俱全，**全部零服务器成本**。本文详细分享这套工作流，以及域名购买的省钱技巧。

本文将详细介绍：
- 🚀 如何将 GitHub 仓库连接到 Cloudflare Pages，实现自动化部署
- 🌍 我的实际项目案例
- 🛡️ Cloudflare 生态配套功能
- 🌐 如何绑定自定义域名
- 💰 域名购买的省钱技巧

---

## 一、Cloudflare Pages 是什么？

Cloudflare Pages 是一个 **静态网站托管平台**，可以直接从 GitHub 仓库读取代码、自动构建并部署到 Cloudflare 的全球 CDN。

### 免费套餐

| 资源 | 免费额度 |
| :-- | :-: |
| 每月构建次数 | 500 次 |
| 并发构建 | 1 个 |
| 带宽 | **无限** |
| 站点数量 | 无限 |
| 自定义域名 | 无限 |
| SSL 证书 | 自动（免费） |

> 💡 **无限带宽** 是 Cloudflare Pages 最大的优势，即使你的网站流量很大也不会产生任何费用。

### 适合什么项目？

- ✅ 个人博客（Hexo / Hugo / Jekyll / VitePress）
- ✅ 项目文档站 / 下载页面
- ✅ 落地页 / 导航页 / 地址发布页
- ✅ 纯前端 SPA（React / Vue）
- ✅ 数据展示页面（地图、图表等）
- ✅ 搭配 Workers 做小型 API 服务
- ❌ 需要持久化数据库的重型后端（但 D1 + Workers 可以轻量搞定）

---

## 二、将 GitHub 仓库连接到 Cloudflare Pages

### 2.1 前置条件

- 一个 [GitHub](https://github.com/) 账号
- 一个 [Cloudflare](https://dash.cloudflare.com/) 账号（免费注册）
- 一个包含静态网站源码的 GitHub 仓库

### 2.2 创建 Cloudflare Pages 项目

#### 第一步：进入 Pages 面板

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单中选择 **Workers & Pages**
3. 点击 **Create** 按钮
4. 选择 **Pages** 标签页
5. 点击 **Connect to Git**

#### 第二步：授权 GitHub

1. 选择 **GitHub** 作为 Git 提供商
2. 点击 **Connect GitHub**
3. 如果是首次连接，会弹出 GitHub 授权窗口
4. 选择 **授权给特定仓库** 或 **所有仓库**（推荐选择特定仓库，更安全）
5. 点击 **Install & Authorize**

#### 第三步：选择仓库和分支

1. 在仓库列表中选择你要部署的仓库
2. 点击 **Begin setup**
3. 配置项目基本信息：

| 设置项 | 说明 | 示例 |
| :-- | :-- | :-- |
| **Project name** | 项目名称（决定了默认域名） | `my-blog` |
| **Production branch** | 生产环境分支 | `main` 或 `gh-pages` |

#### 第四步：配置构建设置

这一步是关键——根据你使用的框架选择对应的预设：

| 框架 | Build command | Build output directory |
| :-- | :-- | :-- |
| **纯 HTML**（无需构建） | 留空 | `/` |
| **Hexo** | `npm run build` | `public` |
| **Hugo** | `hugo` | `public` |
| **VitePress** | `npm run docs:build` | `docs/.vitepress/dist` |
| **React (Vite)** | `npm run build` | `dist` |
| **Vue (Vite)** | `npm run build` | `dist` |
| **Next.js (Static)** | `npx next build && npx next export` | `out` |
| **Jekyll** | `jekyll build` | `_site` |

> 💡 **如果你的仓库已经包含构建好的静态文件**（比如 GitHub Actions 已经构建并推送到 `gh-pages` 分支），Build command 和 Build output directory 都**留空**，让 CF Pages 直接使用分支内容即可。

#### 第五步：环境变量（可选）

如果你的构建过程需要环境变量（如 Node.js 版本），可以在 **Environment variables** 中添加：

| 变量名 | 值 | 说明 |
| :-- | :-- | :-- |
| `NODE_VERSION` | `18` | 指定 Node.js 版本 |
| `NPM_FLAGS` | `--legacy-peer-deps` | npm 安装参数 |

#### 第六步：部署

点击 **Save and Deploy**，Cloudflare 会自动开始构建和部署。首次部署通常需要 1-3 分钟。

部署完成后，你会获得一个默认域名：
```
https://my-blog.pages.dev
```

---

## 三、自动化部署流程

连接成功后，每次你向 GitHub 仓库推送代码，Cloudflare Pages 会**自动触发部署**：

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

### 3.1 Production vs Preview

Cloudflare Pages 有两种部署环境：

| 环境 | 触发条件 | 域名 | 用途 |
| :-: | :-- | :-- | :-- |
| **Production** | 推送到生产分支（如 `main`） | `项目名.pages.dev` + 自定义域名 | 正式线上环境 |
| **Preview** | 推送到其他分支 / Pull Request | `<hash>.项目名.pages.dev` | 预览测试环境 |

Preview 环境非常实用：
- 每次 Push 到非生产分支自动生成独立的预览 URL
- 创建 Pull Request 时自动生成预览链接
- 可以在合并前确认效果

### 3.2 回滚部署

如果新版本有问题，可以快速回滚：

1. 进入 Cloudflare Pages 项目 → **Deployments**
2. 找到之前正常的部署
3. 点击右侧 **...** → **Rollback to this deployment**

---

## 四、实际项目案例

以下是我用 Cloudflare Pages + Workers 部署的一些真实项目，可以直观感受它的灵活性：

| 项目 | 类型 | 技术方案 | 说明 |
| :-- | :-: | :-: | :-- |
| **博客** | Pages | Hexo + GitHub Actions | 写文章推送到 `dev` 分支，Actions 构建后推送到 `gh-pages`，CF Pages 自动部署 |
| **节点地图** | Workers | JS + amCharts | 动态抓取订阅信息，在世界地图上展示全球节点分布 |
| **下载页面** | Pages | 纯 HTML/JS | 从 GitHub Release 自动拉取最新版本，展示下载链接 |
| **地址发布页** | Workers | JS 跳转 | 一个简洁的跳转中转页，自动重定向到最新地址 |
| **导航页** | Pages | 静态 HTML | 个人常用网址导航页面 |
| **节点监控** | Workers + KV | JS + Telegram Bot | 接收国内服务器上报的检测结果，自动切换 DNS、发送告警 |

可以看到，无论是 **纯静态展示**（Pages）还是 **需要后端逻辑的小 API**（Workers），Cloudflare 平台都能轻松搞定，而且全部在免费额度内。

> 💡 **一个 Cloudflare 账号**就能管理所有这些项目，统一的 Dashboard、统一的域名管理、统一的分析面板——运维成本几乎为零。

---

## 五、Cloudflare 生态配套功能

除了 Pages 和 Workers 本身，Cloudflare 提供了大量免费的配套功能，这才是真正让人离不开的理由：

### 5.1 自动 DDoS 防护

所有通过 Cloudflare 的流量都自动受到 DDoS 防护，不需要任何配置。即使你只是一个小博客，也能抵御大规模攻击。

### 5.2 Web Analytics（网站分析）

Cloudflare 提供免费的 Web Analytics，无需嵌入 JS 代码，直接在 Dashboard 查看：
- 页面访问量 / 独立访客数
- 来源国家分布
- 热门页面排行
- 带宽使用情况

比 Google Analytics 更轻量，而且**不影响页面加载速度**。

### 5.3 快捷域名管理

在 CF Pages 项目中绑定域名非常简单：
- 点击 **Custom domains → Add**
- 如果 DNS 已在 Cloudflare，CNAME 记录自动创建
- SSL 证书自动签发和续期
- 整个过程不超过 1 分钟

### 5.4 请求分析和 API 限流

对于 Workers 项目，Cloudflare 提供：
- **请求分析**：每个 Worker 的调用次数、延迟、错误率一目了然
- **Rate Limiting**：可以配置 API 限流规则，防止滥用
- **WAF 规则**：自定义防火墙规则，过滤恶意请求

### 5.5 Workers 付费套餐（$5/月）

免费套餐对大多数小项目已经足够，但如果你有稍大的 API 请求量，Workers Paid Plan 也非常划算：

| 对比 | 免费套餐 | Workers Paid ($5/月) |
| :-- | :-: | :-: |
| **每日请求** | 100,000 | **无限** |
| **CPU 时间** | 10ms / 请求 | 30ms / 请求 |
| **KV 读取** | 100,000 / 天 | 10,000,000 / 月 |
| **KV 写入** | 1,000 / 天 | 1,000,000 / 月 |
| **D1 数据库** | 5GB | 5GB + 更多读写 |
| **Durable Objects** | ❌ | ✅ |

5 美元一个月，能跑无限请求、海量 KV 读写，比任何 VPS 都便宜，还自带全球 CDN 和 DDoS 防护。对于稍大一些的 API 服务来说简直是白给。

> 💡 **总结一句话**：Cloudflare 生态好用又贴心还便宜，从建站到运维到安全一站式搞定。

---

## 六、绑定自定义域名

默认的 `*.pages.dev` 域名虽然能用，但自定义域名更专业。

### 4.1 前提条件

- 你已经拥有一个域名
- 域名的 DNS 托管在 Cloudflare（推荐）或其他平台

### 4.2 添加自定义域名

1. 进入 Cloudflare Pages 项目 → **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `blog.example.com` 或 `example.com`）
4. 点击 **Continue**

#### 情况一：DNS 已在 Cloudflare

如果域名的 DNS 已经托管在 Cloudflare，系统会 **自动添加 CNAME 记录**，无需手动操作。

点击 **Activate domain** 即可，SSL 证书会在几分钟内自动签发。

#### 情况二：DNS 在其他平台

如果域名在 Namesilo / GoDaddy / Porkbun 等其他平台：

1. 按照提示添加 CNAME 记录：
   ```
   类型: CNAME
   名称: blog（或 @ 表示根域名）
   目标: 项目名.pages.dev
   ```
2. 等待 DNS 生效（通常几分钟到几小时）
3. 回到 Cloudflare Pages 确认域名已激活

> 💡 **强烈建议将 DNS 迁移到 Cloudflare**。在 Cloudflare 管理 DNS 不仅免费，还可以享受 DDoS 防护和 CDN 加速。迁移方法：在 Cloudflare Dashboard 添加你的域名，按照提示修改域名的 NS 记录即可。

### 4.3 强制 HTTPS

Cloudflare Pages 默认就是 HTTPS，而且自动签发和续期 SSL 证书，无需任何配置。

---

## 七、域名购买省钱指南

### 5.1 查询域名价格：TLD-List

购买域名前，强烈推荐先去 **[TLD-List](https://tld-list.com/)** 查询价格。这个网站会列出各个注册商的域名价格，包括注册、续费和转入价格。

**使用方法**：
1. 打开 [https://tld-list.com/](https://tld-list.com/)
2. 在搜索框输入你想要的后缀（如 `.com`、`.dev`、`.xyz`）
3. 网站会按价格排序列出所有注册商的报价
4. 注意区分 **New**（首次注册）、**Renewal**（续费）和 **Transfer**（转入）价格

> ⚠️ **重点看续费价格**！很多注册商首年便宜但续费很贵，要综合考虑。

### 5.2 省钱策略

#### 🏆 最佳方案：Porkbun 首年注册 + Cloudflare 续费

| 阶段 | 推荐平台 | 原因 |
| :-: | :-- | :-- |
| **首年注册** | [Porkbun](https://porkbun.com/) | 首年价格通常最低，很多后缀有大幅折扣 |
| **日常续费** | [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) | **成本价续费**，不加任何利润 |

#### Porkbun 的优势

- 🏷️ **首年价格极低**：很多后缀首年注册价低于其他所有注册商
- 🔒 **免费 WHOIS 隐私保护**：其他注册商通常另外收费
- 🎨 **界面简洁友好**：没有各种广告和推销
- 💳 **支持多种支付方式**：信用卡、PayPal、支付宝等

#### Cloudflare Registrar 的优势

- 💰 **成本价续费**：Cloudflare 承诺域名注册不赚取任何利润，直接按注册局批发价续费
- 🔄 **与 Pages/Workers 无缝集成**：DNS 管理、SSL、CDN 一站式
- 📊 **价格透明**：没有隐藏费用

**操作流程**：

```
1️⃣ 在 Porkbun 注册域名（享受首年低价）
   ↓
2️⃣ 第一年使用期间，将 DNS 迁移到 Cloudflare（免费）
   ↓
3️⃣ 域名到期前，从 Porkbun 转入（Transfer）到 Cloudflare
   ↓
4️⃣ 之后在 Cloudflare 以成本价续费
```

### 5.3 域名转入 Cloudflare

将域名从其他注册商转入 Cloudflare：

1. 确保域名已注册 **60 天以上**（ICANN 规定）
2. 在原注册商（如 Porkbun）**解锁域名** 并获取 **Auth Code（EPP Code）**
3. 在 Cloudflare Dashboard → **Domain Registration → Transfer**
4. 输入要转入的域名
5. 输入 Auth Code
6. 支付转入费用（等于续费一年的成本价）
7. 确认转入（原注册商会发邮件确认，需在 5 天内批准）

> 💡 转入时会自动 **续费一年**，所以建议在 **域名快到期时转入**，这样最划算。

### 5.4 价格对比示例

以下是常见后缀在不同平台的价格对比（仅供参考，实际请以 TLD-List 查询为准）：

| 后缀 | Porkbun 首年 | Porkbun 续费 | Cloudflare 续费 | 备注 |
| :-: | :-: | :-: | :-: | :-- |
| `.com` | ~$5.99 | ~$10.47 | ~$9.15 | 最通用 |
| `.dev` | ~$10.99 | ~$16.48 | ~$13.18 | 开发者专属，强制 HTTPS |
| `.xyz` | ~$1.00 | ~$13.06 | ~$10.44 | 首年超便宜，续费注意 |
| `.me` | ~$3.00 | ~$22.48 | ~$15.85 | 个人站常用 |
| `.io` | ~$25.99 | ~$44.99 | ~$39.00 | 科技/创业公司常用，较贵 |

> ⚠️ 以上价格仅为参考，实际价格可能随时变动。购买前请到 [TLD-List](https://tld-list.com/) 查询最新价格。

### 5.5 选域名的建议

- **优先 `.com`**：认知度最高，SEO 友好
- **个人博客**：`.me`、`.dev`、`.xyz` 都不错
- **项目/文档**：`.dev`、`.io`、`.sh`
- **避免过长域名**：短域名更容易记忆和输入
- **避免特殊字符**：不要用中文域名或带连字符的域名

---

## 八、完整建站流程总结

从零开始建站的最佳路径：

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

**总成本**：域名费用（首年可低至 $1）+ 0（托管、CDN、SSL 全免费）

---

## 九、常见问题

### Q: Cloudflare Pages 和 GitHub Pages 有什么区别？

| 特性 | Cloudflare Pages | GitHub Pages |
| :-- | :-: | :-: |
| 带宽 | 无限 | 100GB/月 |
| 构建次数 | 500/月 | 无限（Actions 分钟数限制） |
| CDN 节点 | Cloudflare 300+ | GitHub 全球节点 |
| Preview 环境 | ✅ 每个分支自动生成 | ❌ |
| 自定义域名 | ✅ 无限 | ✅ 1 个 |
| 构建框架支持 | 多种预设 | 需配合 Actions |

两者可以同时使用，互为备份。

### Q: 部署失败怎么办？

1. 检查 **Build command** 和 **Build output directory** 是否正确
2. 查看构建日志，通常会明确提示错误原因
3. 确认 `NODE_VERSION` 环境变量是否与本地一致
4. 尝试在本地运行构建命令，确认能正常通过

### Q: 域名转入 Cloudflare 需要多久？

通常 1-5 天。发起转入后，原注册商会发确认邮件，尽快批准可以加快流程。部分注册商（如 Porkbun）支持即时批准。

### Q: Cloudflare Pages 支持服务端渲染（SSR）吗？

支持！通过 Cloudflare Pages Functions（基于 Workers），可以实现 SSR、API 路由等服务端功能。Next.js、Nuxt 等框架有官方适配。

---

## 参考资料

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [TLD-List 域名价格比较](https://tld-list.com/)
- [Porkbun](https://porkbun.com/)
