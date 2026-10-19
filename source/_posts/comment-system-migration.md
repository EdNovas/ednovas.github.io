---
title: 博客评论系统迁移记：Valine → Waline → Twikoo（附评论系统对比与 Cloudflare Workers + D1 部署教程）
tags: [评论系统,Twikoo,Waline,Valine,Cloudflare Workers,D1,博客]
categories:
  - - 建站
date: 2026-10-19 16:30:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

# 博客评论系统迁移记：Valine → Waline → Twikoo

这个博客从 2021 年开通评论区，五年多里换了三套评论系统：最早是 **Valine + LeanCloud**；今年 1 月 LeanCloud 发公告宣布停服，4 月我换成了 **Waline（Vercel + Neon）**；结果没过几个月 Vercel 账号被封，评论区整个挂掉，而我至少一个多月都没发现。这次干脆把评论后端搬到了 **Cloudflare Workers + D1**，换成 **Twikoo**，并把五年来的评论一条不落地迁了过来。

本文分三部分：

- 📜 **迁移历程**（第一章）：每一代评论系统用了多久、怎么出的事、数据是怎么救回来的
- ⚖️ **评论系统横向对比**（第二章）：Valine / Waline / Twikoo / Artalk / Giscus / Utterances / Gitalk / Disqus / Remark42 / Cusdis
- 🛠️ **部署教程**（第三～六章）：Twikoo + Cloudflare Workers + D1 从零部署、接入 Butterfly、导入旧评论

> **TL;DR**
>
> - 现在的方案：**Twikoo 2.0.15 + Cloudflare Workers + D1**，后端域名 `comment.ednovas.xyz`，前端用 Hexo + Butterfly 3.6.0 自带的 Twikoo 支持
> - 迁移结果：**536 条评论全部上线**，其中 530 条是 Valine 时代的老评论，另外 6 条是 Waline 时期的新评论，差点就丢了
> - 成本：**0 元**（不算域名本身）。全部在 Cloudflare 免费额度内，DNS 本来就托管在 Cloudflare
> - 最大的教训：免费 PaaS 账号说没就没。评论后端最好放在自己本来就离不开的平台上，并且定期导出

---

## 一、迁移历程

### 1.1 时间线

| 时间 | 事件 |
| :-- | :-- |
| 2021-02-23 | 收到第一条 Valine 评论（Valine + LeanCloud 时代开始） |
| 2026-01-12 | LeanCloud 发布停服公告，即日起停止新用户注册和新建应用（已有应用继续运行） |
| 2026-04-07 | Valine 时代的最后一条评论，累计 **530 条**，分布在 112 个页面 |
| 2026-04-13 | 迁到 Waline：Vercel 部署服务端，Neon PostgreSQL 存数据，530 条全部导入 |
| 2026-04-18 → 2026-06-02 | Waline 期间新增 **6 条**评论（5 条正常、1 条垃圾） |
| 最晚 2026-09-10 | Vercel 账号已被封，评论接口返回 `451`，全站评论区静默失效 |
| 2026-10-19 | 发现问题，从 LeanCloud 和 Neon 找回全部数据，迁到 Twikoo + Workers + D1，**536 条**上线 |
| 2027-01-12 | LeanCloud 正式停止全部对外服务（还没到，但已经确定） |

### 1.2 第一代：Valine + LeanCloud（2021-02 → 2026-04）

Butterfly 内置 Valine，在 LeanCloud 建个应用、把 AppID / AppKey 填进主题配置就能用，没有任何后端需要维护。五年多下来攒了 530 条评论。

它的问题是**完全依赖 LeanCloud**。LeanCloud 的官方停服公告写得很清楚：

- **2026-01-12 起**：停止新用户注册和新建应用，已有应用可以继续运行
- **2027-01-12**：正式停止全部对外服务，包括应用访问、数据读写、API 调用和控制台
- 停服后用户数据会被**永久销毁或匿名化，无法恢复**

Valine 本身也基本停更了，最后一个版本 v1.5.3 发布于 2024-12，邮件提醒和验证码从 v1.4.0 起就已废弃。

还有一个隐私问题：Valine 是前端直连 LeanCloud 的，AppKey 就写在页面里，任何拿到这个公开 key 的人都能通过 REST API 读出整张评论表，包括评论者的邮箱和 IP。所以**迁走之后一定要在 LeanCloud 控制台把 Comment 表的数据删掉（或直接删除应用）**，别等到 2027 年停服。

> ⚠️ 还在用 Valine 的朋友，务必在 **2027-01-12 之前**把数据导出来迁走。

### 1.3 第二代：Waline + Vercel + Neon（2026-04 → 最晚 2026-09-10）

2026-04-13，我在 AI 编程助手的帮助下迁到了 Waline：

- 🚀 服务端：Vercel 一键部署
- 🗄️ 数据库：在 Vercel 的 Storage（Marketplace）集成里创建的 Neon PostgreSQL
- 🌐 域名：`comment.ednovas.xyz`，CNAME 到 Vercel
- 📦 数据：从 LeanCloud 导出 JSON，转成 Waline `wl_comment` 表的 INSERT 语句导入 Neon

用起来一切正常，4 月到 6 月间还陆续收到了 6 条新评论。然后我就把这事忘了。

### 1.4 事故：Vercel 账号被封，评论区静默挂掉

某天开始（具体哪天我也不知道），`comment.ednovas.xyz` 变成了这样：

```text
状态码：451 Unavailable For Legal Reasons
响应头：X-Vercel-Error: DEPLOYMENT_DISABLED
页面：This content has been blocked for legal reasons
```

前端的表现是：每篇文章下的评论区都**一直加载不出来**，也没有任何显眼的报错，所以我至少一个多月都没发现。Wayback Machine 上这个接口最早的快照（2026-09-10）就已经是 451 了。

被封的原因 Vercel 没有给任何解释，而且是账号级别的封禁。查了一下 Vercel 的文档，`DEPLOYMENT_DISABLED` 对应的是 **402**（超出额度 / 需要付费），而我拿到的是 **451**（因法律原因屏蔽），文档里没有这种组合的说明，原因至今不明。我猜可能和同一个 Vercel 账号下的其他项目有关，但这只是猜测。

### 1.5 找回现场：后端到底部署在哪？

半年没碰，我已经忘了评论后端放在哪个平台、数据库是什么。排查过程：

```bash
# 1. 看评论域名指向哪里
nslookup -type=CNAME comment.ednovas.xyz
# → 指向 *.vercel-dns-017.com，原来在 Vercel

# 2. 看返回什么（Windows PowerShell 里要写 curl.exe，curl 是 Invoke-WebRequest 的别名）
curl -I https://comment.ednovas.xyz
# → 451，X-Vercel-Error: DEPLOYMENT_DISABLED
```

知道是 Vercel 之后，我在 AI 助手的本地会话记录里翻到了当初迁移时留下的笔记，这才想起数据库是 Neon。

### 1.6 抢救数据：LeanCloud + Neon 两头找

**LeanCloud 这边**：530 条 Valine 评论都还在，用应用的公开 key 通过 REST API 就能读出来。最新一条是 2026-04-07，说明 Waline 上线后从没往 LeanCloud 写过东西。

**Neon 这边**：虽然 Vercel 账号被封了，但通过 Vercel 创建的 Neon 项目，用同一个账号还能登录 `console.neon.tech`。我用 Neon CLI（`neon login`、`neon connection-string`）拿到连接串，再用 node-pg 以只读方式导出了 Waline 的所有表：

- `wl_comment` 共 **536 行** = 导入的 530 条 + Waline 期间新写入的 **6 条**（2026-04-18 → 2026-06-02，5 条正常、1 条垃圾）
- 也就是说，**一条都没丢**

导出时踩了两个小坑：

1. **列名是小写的**：Waline 建表时用的是不带引号的标识符，PostgreSQL 会把它转成小写，所以列名是 `createdat`，不是 `createdAt`
2. **时间差了几个小时**：列类型是 `timestamp without time zone`，存的是 UTC 时间，但 node-pg 会把它当成**本地时间**解析，读出来就偏了几个小时。解决办法是在 SQL 里直接转成文本

```sql
-- ❌ 报错：column "createdAt" does not exist
SELECT "createdAt" FROM wl_comment;

-- ✅ 列名用小写，并转成文本，避免 node-pg 按本地时区解析
SELECT id, createdat::text AS created_utc FROM wl_comment;
```

导出后我把前 530 行和 LeanCloud 的数据逐条比对：昵称、网址一致，时间差都在 0.5 秒的舍入误差以内。

> 💡 说实话这次纯属运气：LeanCloud 还没停服，Neon 控制台也还能登录。只要其中一个没了，就会丢一批评论。

### 1.7 第三代：Twikoo + Cloudflare Workers + D1（2026-10-19 起）

吸取教训，这次的原则是：**评论后端要放在我本来就离不开的平台上**。博客的 DNS 本来就在 Cloudflare，Twikoo 2.x 又正好有官方的 Cloudflare Workers + D1 适配器，于是就选了它。具体理由见第三章，部署过程见第四章。

---

## 二、评论系统横向对比

先说明一下：我自己真正用过的只有 Valine、Waline、Twikoo 三个，其他的信息来自各项目的仓库、npm 和官方文档。下表的版本号和维护状态都是 **2026-10-19** 核查的；「国内访问」一栏是按部署方式给出的经验判断，实际效果还要看线路。

### 2.1 基本信息

| 系统 | 最新版本 / 状态 | 数据存储 | 免费部署方式 | 评论需登录 | Butterfly 3.6.0 内置 |
| :-- | :-- | :-- | :-- | :-: | :-: |
| **Valine** | v1.5.3（2024-12），停更 | LeanCloud（前端直连） | LeanCloud（已停止新注册） | 否 | ✅ |
| **Waline** | 服务端 1.43.4 / 客户端 3.16.1，活跃 | Node 服务端 + MySQL / PostgreSQL / SQLite / MongoDB 等 | Vercel + Neon、Netlify、Zeabur 等 | 否（可强制登录） | ✅ |
| **Twikoo** | 2.0.15，活跃 | 云函数 + CloudBase / MongoDB / D1 等 | Workers + D1、Vercel / Netlify + MongoDB Atlas、Docker | 否 | ✅ |
| **Artalk** | v2.10.0，活跃 | Go 单体服务 + SQLite / MySQL / PostgreSQL / SQL Server | 无，需要自己的服务器 | 否（可开社交登录） | ❌ |
| **Giscus** | 托管服务，仍在维护 | GitHub Discussions | giscus.app 免费托管 | 是（GitHub） | ❌ |
| **Utterances** | 2022 年后停更 | GitHub Issues | utteranc.es 免费托管 | 是（GitHub） | ✅ |
| **Gitalk** | 1.8.1，1.x 已 EOL；2.0 仍是 beta | GitHub Issues（2.0 改为 Discussions） | 纯前端 + CORS 代理 | 是（GitHub） | ✅ |
| **Disqus** | 商业 SaaS | Disqus 服务器 | 官方托管（免费版带广告） | 可游客评论 | ✅ |
| **Remark42** | v1.18.0，活跃 | Go 单体服务 + 内嵌 BoltDB | 无，需要自己的服务器 | 默认需登录，可开匿名 | ❌ |
| **Cusdis** | 已停止维护，仓库已归档 | — | — | — | ❌ |

### 2.2 功能对比

| 系统 | 国内访问（经验） | 管理后台 | 通知 | 反垃圾 | 可导入 Valine |
| :-- | :-- | :-- | :-- | :-- | :-: |
| **Valine** | 停服后不可用 | 无（只能用 LeanCloud 控制台） | 邮件提醒 1.4 起已废弃 | 基本没有 | — |
| **Waline** | 看部署，`vercel.app` 必须换自定义域名 | 内置 `/ui` 后台 | 邮件、微信、QQ、Telegram、PushPlus、Discord、飞书 | Akismet（默认开）、审核模式、IP 限频、reCAPTCHA v3 / Turnstile | ✅ 官方迁移工具 |
| **Twikoo** | CloudBase 最快（需付费）；Workers 必须绑自定义域名 | 内嵌管理面板 | 邮件 + Server 酱 / Qmsg / Pushoo（IM 只通知博主） | Akismet、腾讯云内容安全、人工审核、IP 限频、Turnstile（CF 版没有 Akismet 和腾讯云） | ✅ 后台导入 |
| **Artalk** | 取决于你的服务器 | 独立控制中心，支持多站点 | 邮件 + Telegram / 飞书 / 钉钉 / Bark / Slack / Webhook 等 | Akismet、腾讯云 / 阿里云审核、多种验证码、频率限制 | ✅（经 Artrans 转换） |
| **Giscus** | 依赖 GitHub，时好时坏 | 在 GitHub 上管理 | GitHub 通知 | 靠 GitHub 的锁定 / 隐藏 / 屏蔽 | ❌ |
| **Utterances** | 同 Giscus | 同 Giscus | 同 Giscus | 同 Giscus | ❌ |
| **Gitalk** | 同 Giscus | 同 Giscus | 同 Giscus | 同 Giscus | ❌ |
| **Disqus** | 被墙，DisqusJS + 反代只能只读展示 | Disqus 后台 | 邮件 | 内置审核过滤 | ❌ |
| **Remark42** | 取决于服务器；Google 等登录方式国内用不了 | 在评论区内联管理 | Telegram / Slack / Webhook / 邮件 | 主要靠登录门槛和封禁用户 | ❌ |

（Butterfly 3.6.0 还内置了来必力 Livere 和 Facebook Comments，这次没有展开。）

### 2.3 逐个点评

**Valine：不建议新用，在用的尽快迁出。** 没有自己的后端，生死全看 LeanCloud。2027-01-12 停服后就彻底不能用了，而且公开 key 可以直接读出评论者的邮箱和 IP。Waline 官方迁移工具、Twikoo 后台导入、Artalk 的 Artrans 都能接 Valine 的数据。

**Waline：功能最全的 Valine 继任者。** 相当于「带后端的 Valine」：内置管理后台、用户系统（可选第三方登录）、浏览量统计、文章反应，通知渠道也最多。缺点是最常见的 Vercel 部署方案里，`*.vercel.app` 在国内访问很差，必须绑自定义域名；而且免费 PaaS 账号的风险我已经亲身体验过了。另外要注意，Butterfly 3.6.0 用的是 Waline v1 的 `new Waline()` 写法，CDN 地址没带版本号，jsDelivr 实际返回的是 **1.6.0（2022 年的版本）**，想用 3.x 客户端得升级主题或者自己改模板。

**Twikoo：国内友好、部署方式最多（本站现用）。** 2.x 改成了 pnpm monorepo，支持腾讯云 CloudBase、Vercel、Netlify、Cloudflare Workers、Docker 等一堆平台。内嵌管理面板、QQ 号自动补全昵称和头像、贴图、KaTeX、代码高亮都有。不过平台方面有些变化：CloudBase 现在需要付费套餐，Hugging Face 新建 Docker Space 也要付费了。Cloudflare 版的限制见第三章。

**Artalk：有服务器就很香。** Go 写的单体服务，Docker 一条命令就能跑，前端很轻。独立控制中心、多站点、社交登录、多种验证码、多种审核服务都有，是这几家里最「全家桶」的。代价是**必须有自己的服务器**，没有 Serverless 免费方案。

**Giscus：读者都有 GitHub 账号的话很合适。** 基于 GitHub Discussions，无广告、无追踪、零运维。但**评论必须登录 GitHub**，对非技术读者门槛高，国内访问 GitHub 也时好时坏。

**Utterances：能用，但已基本停更。** 基于 GitHub Issues，最后一次代码提交是 2022 年。新站直接选 Giscus 就好，思路一样、还在维护。

**Gitalk：1.x 已 EOL。** 2026-10-16 发布的 v1.8.1 是 1.x 的最终版本，之后不再修 bug、不出安全更新。1.x 的老问题是 `clientSecret` 写在前端、申请的权限是 `public_repo`（相当于能写评论者所有公开仓库），换 token 还依赖第三方 CORS 代理。2.0 改用 GitHub App + Discussions，但还是 beta。另外 v1.8.1 只发在了 GitHub Release 上，npm 上的 `gitalk` 仍停在 1.8.0，Butterfly 3.6.0 用 `gitalk@latest` 加载的就是它。

**Disqus：老牌 SaaS，国内基本不可用。** 免费版带广告，去广告需要付费订阅。国内只能靠 DisqusJS 只读展示。不用运维、可以游客评论，但广告、追踪、数据都在别人手里。

**Remark42：注重隐私的自托管方案，偏英文社区。** Go 单文件或 Docker 部署，数据是一个 BoltDB 文件，自带导出和自动备份。默认需要社交或邮箱登录，国内读者能用的登录方式有限。v1.18.0 修了两个 token 相关的安全问题，自托管的话建议尽快升级。

**Cusdis：已停止维护。** 2026-07 README 声明 deprecated，仓库已归档，2026-10-19 访问官网返回 Cloudflare 521，不要再选。

### 2.4 怎么选

| 你的情况 | 推荐 | 注意 |
| :-- | :-- | :-- |
| 域名在 Cloudflare、不想要服务器、读者在国内、需要匿名评论 | **Twikoo + Workers + D1**（本站方案） | 一定要绑自定义域名；邮件只能走 HTTP API，或改用 Telegram 推送 |
| 想要用户系统、浏览量、文章反应等最全功能 | **Waline** | 绑自定义域名、定期导出；别和高风险项目放在同一个免费 PaaS 账号 |
| 国内访问速度第一，愿意花点钱 | Twikoo / Waline 部署在腾讯云 CloudBase，或国内服务器自托管 | CloudBase 需要付费套餐 |
| 有 VPS，想完全掌控数据、多站点 | 中文博客选 **Artalk**，偏英文、重隐私选 **Remark42** | 要自己负责备份和安全更新 |
| 技术博客、读者基本都有 GitHub、主要面向海外 | **Giscus** | 不要再选 Utterances（停更）和 Gitalk 1.x（EOL） |
| 已经在用 Disqus | 海外站可以继续用 | 有国内读者的话加 DisqusJS 兜底，或迁到 Waline / Twikoo / Artalk |
| 还在用 Valine | 尽快迁走 | 截止日期 **2027-01-12**；注意路径编码、Markdown 混排、表情短码（见第六章） |

❌ **不要选**：Valine（LeanCloud 停服）、Cusdis（停止维护）、Utterances（停更，用 Giscus 代替）、Gitalk 1.x（EOL、权限过大）。

---

## 三、为什么选 Twikoo + Cloudflare Workers + D1

### 3.1 选择理由

- ☁️ **和 DNS 在同一个 Cloudflare 账号**：域名本来就托管在 Cloudflare，不再多依赖一个平台
- 💰 **免费**：Workers 和 D1 的免费额度对一个个人博客绰绰有余
- 🖥️ **没有服务器**：不用管系统更新、证书、备份脚本
- 🧩 **官方适配器**：Twikoo 2.0.9 把 Cloudflare Workers 适配器重写进了主仓库（`packages/server-cloudflare`），用 D1 存数据（1.x 时代是单独的 twikoojs/twikoo-cloudflare 仓库）
- 🦋 **主题原生支持**：Butterfly 3.6.0 内置 Twikoo，改几行配置就能切换
- 👤 **匿名评论 + 管理面板**：读者不用登录，我能在前端直接管理评论

### 3.2 免费额度够不够？

**Workers 免费版**：

| 项目 | 免费额度 | 本站实测 |
| :-- | :-- | :-- |
| 请求数 | 10 万次 / 天（UTC 0 点重置） | 个人博客远远用不完 |
| CPU 时间 | 10 ms / 请求（等待 D1 和网络的时间不计入） | 发表评论（含 jsdom + DOMPurify 消毒）不到 1 秒完成，没有触发 CPU 超限 |
| 脚本体积 | 64 MiB（未压缩） | 上传约 9 MB，gzip 后约 1.4 MB |
| 启动时间 | 1 秒 | 17 至 40 ms |

> 💡 Cloudflare 在 2026-09-04 取消了 Workers 压缩后体积的限制（以前免费版是压缩后 3 MB），现在只看未压缩体积，免费版和付费版都是 64 MiB。按旧规则，Twikoo 这个 1.4 MB 的 gzip 包其实也放得下。

**D1 免费版**：

| 项目 | 免费额度 |
| :-- | :-- |
| 单库容量 | 500 MB |
| 读取行数 | 500 万行 / 天 |
| 写入行数 | 10 万行 / 天 |
| 单条 SQL 语句 | 100 KB |
| 单行 / 单个值 | 2 MB |
| 每次 Worker 调用的查询数 | 50 次（见下方说明） |
| Time Travel（时间点恢复） | 7 天 |

> 💡 关于每次调用的查询数：D1 限制页写的是免费版 50 次，但 Workers 限制页和 2026-02-11 的更新日志写的是免费版对 Cloudflare 服务可发 1,000 次子请求。官方文档说法不一致，我按保守的 50 次来规划。

536 条评论（连同那几张 base64 截图）也就一两 MB，离单库 500 MB 的上限还差得远（可以用 `npx wrangler d1 info twikoo` 看实际大小）。部署后我也实测了一下：首页 29 篇文章的评论数在**一次请求**里查完，没有问题。

### 3.3 代价

这个方案也不是没有缺点，部署之前最好心里有数：

- 🔧 **要自己从源码构建**：Cloudflare 适配器没有发布到 npm（`@twikoojs/cloudflare` 是 private 包），而且 2.x 的根 `package.json` 要求 **Node.js 26** 和 pnpm 12.5.1。构建只是一次性的，Worker 本身跑在 workerd 上，跟你本机的 Node 版本无关
- 📧 **不能用 SMTP 发邮件**：Workers 上 25 端口被禁止，587 和 465 也连不上。邮件只能走 Resend / SendGrid / MailChannels 这类 **HTTP 邮件 API**，或者干脆用 Telegram 推送
- 🛡️ **没有 Akismet 和腾讯云内容安全**：Cloudflare 适配器不支持这两个，反垃圾只能靠频率限制、验证码、违禁词、人工审核或 AI 检测
- 🧱 **`workers.dev` 在国内被 DNS 污染**：必须绑自定义域名，国内访问速度也要看线路
- 📏 **免费版限制**：主要是 10 ms CPU 和每次调用的查询数。日常读写评论没问题，但一次性批量导入几百条评论就有风险（见第六章）

---

## 四、部署教程：Twikoo + Cloudflare Workers + D1

下面以 Twikoo **2.0.15** 为例，评论后端域名用 `comment.example.com` 代替，换成你自己的就行。

### 4.1 准备工作

- 一个 Cloudflare 账号，域名的 DNS 托管在 Cloudflare
- Git
- **Node.js 26**（只在构建时需要）
- 不需要提前安装 pnpm 和 wrangler，下面都用 `npx` 调用

> 💡 我本机是 Node 24，pnpm 直接拒绝安装，因为根 `package.json` 的 `engines` 要求 `node >=26`。我不想动系统里的 Node，就下载了一个 **Node 26.12.0 的便携版 zip**（校验过 SHA256），只在构建用的终端里临时加进 PATH：

```powershell
# PowerShell：只对当前终端生效
$env:Path = "D:\tools\node-v26.12.0-win-x64;" + $env:Path
node -v   # v26.12.0
```

### 4.2 克隆并构建

```bash
git clone --depth 1 --branch 2.0.15 https://github.com/twikoojs/twikoo.git twikoo-src
cd twikoo-src

# 可选但推荐：写入真实版本号
# 不做的话服务端会报告 0.0.0，管理面板会提示前后端版本不一致
node scripts/release-set-version.mjs 2.0.15

# 跳过 MongoDB 二进制的下载（D1 模式用不到）
export MONGOMS_DISABLE_POSTINSTALL=1          # PowerShell：$env:MONGOMS_DISABLE_POSTINSTALL = "1"

npx pnpm@12.5.1 install --frozen-lockfile
npx pnpm@12.5.1 -r --filter "@twikoojs/cloudflare..." build
```

`--filter "@twikoojs/cloudflare..."` 的意思是构建 Cloudflare 适配器**以及它依赖的所有 workspace 包**。构建完成后，产物在 `packages/server-cloudflare/dist/index.js`。

### 4.3 创建 D1 数据库

```bash
cd packages/server-cloudflare
npx wrangler login                              # 浏览器里授权 Cloudflare 账号
npx wrangler d1 create twikoo --location apac   # apac：主库放在亚太，离国内读者近一点
```

命令会输出一段配置片段和 `database_id`，下一步只需要其中的 id。片段里的 `binding` 是 `twikoo`，直接抄的话要改成 `DB`。

### 4.4 编写 wrangler.toml 并建表

仓库里**没有**现成的 `wrangler.toml`，需要在 `packages/server-cloudflare` 目录下自己写一个：

```toml
name = "twikoo"
main = "dist/index.js"
compatibility_date = "2026-09-01"
compatibility_flags = ["nodejs_compat"]
workers_dev = true

[[routes]]
pattern = "comment.example.com"
custom_domain = true

[[d1_databases]]
binding = "DB"                     # 必须叫 DB
database_name = "twikoo"
database_id = "<your-db-id>"       # 上一步 d1 create 输出的 id

[observability]
enabled = true                     # 在 Dashboard 里看日志，排错很有用
```

几个要点：

| 配置 | 说明 |
| :-- | :-- |
| `main = "dist/index.js"` | 必须指向构建产物，**不要**直接部署 `src/` |
| `nodejs_compat` | 必需，公共层依赖 Node API |
| `binding = "DB"` | 绑定名必须是 `DB`，适配器按这个名字找数据库 |
| `workers_dev = true` | 配了 `routes` 之后，wrangler 默认会**关掉** `workers.dev` 地址；想保留就显式写 `true` |
| `custom_domain = true` | 让 wrangler 自动创建 DNS 记录并签发证书 |

D1 模式下**不需要任何 secret 或环境变量**，所有设置都在 Twikoo 管理面板里改，存在 D1 的 `config` 表中。

配置写好后建表：

```bash
npx wrangler d1 execute twikoo --remote --file=./schema.sql
```

> ⚠️ `wrangler d1 execute` **默认操作的是本地模拟库**，不加 `--remote` 的话，你以为建好了表，其实线上数据库什么都没有。
>
> 💡 按 README 的说法，这一步也可以省略，首次请求时会自动建表。不过我还是习惯手动建好。

### 4.5 部署并绑定自定义域名

```bash
npx wrangler deploy
```

第一次部署时报了这个错（这个错误码在 Cloudflare 文档里查不到）：

```text
Hostname 'comment.example.com' already has externally managed DNS records (A, CNAME, etc).
Delete them first or try a different hostname. [code: 100117]
```

原因是 DNS 里还留着以前指向 Vercel 的 CNAME 记录。Cloudflare 文档也写明了：**不能在已经有 CNAME 记录的主机名上创建 Workers 自定义域名**。解决办法：

1. Cloudflare Dashboard → 你的域名 → **DNS → Records**
2. 删除 `comment` 这条旧记录
3. 重新执行 `npx wrangler deploy`

部署成功后，wrangler 会自动创建 DNS 记录和证书，几分钟内就能访问。

### 4.6 验证

```bash
curl https://comment.example.com/
# {"code":100,"message":"Twikoo 云函数运行正常…","version":"2.0.15"}

curl -X POST https://comment.example.com/ \
  -H "Content-Type: application/json" \
  -d '{"event":"GET_FUNC_VERSION"}'
# 返回的 version 应该是 2.0.15
```

> 💡 上面是 bash 写法，Windows 上可以在 Git Bash 里执行。PowerShell 5.1 里 `curl` 是 `Invoke-WebRequest` 的别名，而且就算换成 `curl.exe`，`\` 续行也不能用，传 JSON 时内层双引号还会被吃掉。在 PowerShell 里直接用自带的命令更省事：

```powershell
Invoke-RestMethod https://comment.example.com/
Invoke-RestMethod -Method Post -Uri https://comment.example.com/ -ContentType 'application/json' -Body '{"event":"GET_FUNC_VERSION"}'
```

### 4.7 第一件事：设置管理员密码

**部署完立刻去设置管理员密码！** Twikoo 在没有设置密码时，**第一个来设置的人**就能拿到管理权限。如果被别人抢先，你的评论区就归别人管了。

问题是接入博客要等第五章，这段时间密码一直空着，而且任何人都能直接调用 `SET_PASSWORD` 接口抢先设置（不需要打开面板）。比较稳妥的做法是：部署完立刻在本地按第五章改好 `_config.butterfly.yml`，`hexo s` 后打开 `http://localhost:4000` 上的任意文章，点击评论列表上方「N 条评论」那一行右侧的**齿轮图标**（在搜索、刷新图标旁边），进入「Twikoo 管理面板」设置密码（Twikoo 对 localhost 永远放行 CORS），然后再去发布博客。

管理面板有四个功能：

- 📝 **评论管理**：全站评论按时间倒序，可按昵称 / 邮箱 / 网址 / IP / 内容 / 页面搜索，可筛选全部 / 显示 / 隐藏，每条评论可以查看、隐藏、置顶、删除
- ⚙️ **配置管理**：所有设置项都在这里
- 📥 **导入**：支持 Valine、Artalk、Disqus 等格式
- 📤 **导出**：定期导出备份

### 4.8 推荐的管理面板配置

| 配置项 | 示例 / 建议 | 说明 |
| :-- | :-- | :-- |
| `SITE_NAME` | `EdNovas的小站` | 通知里显示的站点名 |
| `SITE_URL` | `https://blog.example.com` | 站点地址 |
| `BLOGGER_NICK` | 你的昵称 | 博主昵称 |
| `BLOGGER_EMAIL` | 你的邮箱 | 设置后自己发的评论不会再通知自己 |
| `CORS_ALLOW_ORIGIN` | `https://blog.example.com` | 逗号分隔、**不要加空格**；留空表示允许所有来源。localhost 等本地地址永远放行，本地 `hexo s` 调试不用加 |
| `LIMIT_PER_MINUTE` | 默认 10 | 名字容易误会：源码里其实是**单个 IP 每 10 分钟**最多发几条，填 0 关闭 |
| `LIMIT_PER_MINUTE_ALL` | 默认 10 | 全站每 10 分钟最多几条 |
| `CAPTCHA_PROVIDER` | `Turnstile` | 配合 `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` 使用 Cloudflare 的验证码 |
| `HIDE_ADMIN_CRYPT` | 一个暗号 | 设置后，只有在昵称框输入这个暗号才会显示齿轮入口 |

Cloudflare 版没有 Akismet，如果垃圾评论多，还可以考虑这几个（都在公共层实现，CF 版可用）：

- `AKISMET_KEY` 填 `MANUAL_REVIEW`：开启**人工审核**，评论审核后才显示（这个值不会去调用 Akismet）
- `FORBIDDEN_WORDS`：命中违禁词的评论标记为垃圾
- `LLM_API_KEY` / `LLM_API_ENDPOINT` / `LLM_MODEL`：用兼容 OpenAI 接口的大模型做垃圾评论检测

> ⚠️ 注意这几项在源码里是 else-if 关系，不能随便叠加：`AKISMET_KEY` 只要非空（包括 `MANUAL_REVIEW`），LLM 检测就不会执行；开了 `MANUAL_REVIEW` 后违禁词也不再检查（反正所有评论都要人工审）。CF 版千万别填真实的 Akismet key：它不会生效，还会让 LLM 检测被跳过。

### 4.9 Telegram 通知（我用的方案）

既然发不了 SMTP 邮件，我就改用 Telegram 接收新评论通知。Twikoo 内置了 Pushoo，配置很简单：

1. 在 Telegram 里找 **@BotFather**，发送 `/newbot` 创建机器人，拿到 bot token
2. 打开你刚创建的机器人的对话框，**点一下 Start**（否则机器人没法给你发消息）
3. 找 **@userinfobot**，它会告诉你自己的 chat id
4. 在 Twikoo 管理面板里设置：

| 配置项 | 值 |
| :-- | :-- |
| `PUSHOO_CHANNEL` | `telegram` |
| `PUSHOO_TOKEN` | `<bot_token>#<chat_id>`（两者用 `#` 连接） |

几个注意点：

- 📌 IM 推送**只通知博主**，回复提醒发给评论者还是得靠邮件
- 📌 配置了 IM 推送后，Twikoo **默认不再给博主发邮件**，如果两个都想要，把 `SC_MAIL_NOTIFY` 设为 `true`
- 📌 评论邮箱等于 `BLOGGER_EMAIL` 的评论不会推送（按邮箱判断，不看登录状态），测试时换一个邮箱、以访客身份发一条；用隐身窗口只是为了不带上浏览器记住的昵称和邮箱
- 📌 推送内容里包含评论者的**邮箱和 IP**（Twikoo 的推送模板写死的），所以 chat id 只填你自己和机器人的私聊，不要推到群组或频道
- 📌 Telegram 消息用的是 Markdown 解析模式，而 Twikoo 只转义了 `*` 和 `_`。如果评论里有奇怪的方括号、反引号，**推送可能会失败**，不过评论本身照常发表

### 4.10 邮件通知（HTTP API）

如果还是想发邮件，只能用 HTTP 邮件 API：

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend` / `SendGrid` / `MailChannels` |
| `SMTP_PASS` | 对应服务的 API Key |
| `SMTP_USER` | 随便填，但**不能为空** |
| `SENDER_EMAIL` | 发件地址（需要在邮件服务那边验证过域名） |
| `SENDER_NAME` | 发件人名称，不填的话发件人会显示成 `undefined` |

`SMTP_HOST` / `SMTP_PORT` 在 Workers 上配什么都没用，直连 SMTP 是建立不了连接的。

> ⚠️ 2.0.15 的源码里，SendGrid / MailChannels 通道会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交。管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400）。目前建议用 Resend。

### 4.11 以后怎么升级

```bash
cd twikoo-src
# 先撤销上次 release-set-version 改过的 package.json
# （否则 checkout 会报错，版本脚本的基线校验也过不了）；wrangler.toml 没被 Git 跟踪，不受影响
git checkout -- .
git fetch --depth 1 origin tag X.Y.Z      # X.Y.Z 换成新版本号
git checkout X.Y.Z
node scripts/release-set-version.mjs X.Y.Z
export MONGOMS_DISABLE_POSTINSTALL=1       # PowerShell：$env:MONGOMS_DISABLE_POSTINSTALL = "1"
# pnpm / Node 版本以新版 package.json 的 packageManager / engines 为准（记得先把便携版 Node 加进 PATH）
npx pnpm@12.5.1 install --frozen-lockfile
npx pnpm@12.5.1 -r --filter "@twikoojs/cloudflare..." build
cd packages/server-cloudflare
npx wrangler deploy
```

然后别忘了：

1. 把博客里前端 CDN 的版本号改成同一个版本（见第五章）
2. 看一眼 release notes，有没有数据库结构变更或配置项变化
3. `wrangler.toml` 是自己写的、没有被 Git 跟踪的文件，切换 tag 不会覆盖它，但最好另外备份一份。如果哪天官方仓库自己加了 `wrangler.toml`，checkout 会因为同名未跟踪文件而中止，先把自己的挪走再切换
4. `release-set-version.mjs` 只能在版本号为 0.0.0 的干净源码上运行，所以升级前一定要先还原（上面的 `git checkout -- .` 就是干这个的）

---

## 五、Butterfly 配置

### 5.1 修改 `_config.butterfly.yml`

```yaml
comments:
  use:
    - Twikoo
  # ...其他选项保持不变

twikoo:
  envId: https://comment.example.com   # 必须带 https://
  region:
  option:

CDN:
  # ...
  twikoo: https://cdn.jsdelivr.net/npm/twikoo@2.0.15/dist/twikoo.min.js
```

我的博客是 GitHub Actions 构建的，CI 里还有一份配置模板，那份也要同步改。

Butterfly 3.6.0 初始化 Twikoo 时不传 `path`，所以 Twikoo 用的是 `window.location.pathname`，也就是**经过百分号编码的路径**。这一点在导入旧评论时很关键（见第六章）。

### 5.2 坑：改了配置，页面上还是 Waline

改完配置一构建，页面上显示的还是 Waline。查了半天，原因在 Hexo 的配置合并逻辑上。

Hexo 5 会把站点的 `_config.butterfly.yml` 和主题自带的 `themes/butterfly/_config.yml` 做深度合并，但 hexo-util 的 `deepMerge` 对**数组**的处理不是替换，而是**去重后追加**：

```javascript
// hexo-util deepMerge 对数组的行为（简化示意）
deepMerge({ use: ['Waline'] }, { use: ['Twikoo'] })
// 结果是 { use: ['Waline', 'Twikoo'] }，而不是 ['Twikoo']
```

主题自带的配置里写的是 `[Waline]`，站点配置是 `[Twikoo]`，合并后变成 `[Waline, Twikoo]`。而 Butterfly 永远拿 `use[0]` 当默认评论系统，所以显示的还是 Waline。

**解决办法**：把 `themes/butterfly/_config.yml` 里的 `comments.use` 也改成 Twikoo。以后换评论系统，两个文件都要检查。

### 5.3 用 `twikoo.min.js`，并锁定版本号

| 文件 | 大小 | 区别 |
| :-- | :-: | :-- |
| `twikoo.min.js` | 约 357 KB | 不含腾讯云 CloudBase SDK |
| `twikoo.all.min.js` | 约 821 KB | 含 CloudBase SDK |

后端不是腾讯云的话，用 `twikoo.min.js` 就够了，体积小了一半多。

CDN 地址一定要**写死版本号**（`twikoo@2.0.15`），并且和服务端版本保持一致。不写版本号的话，jsDelivr 哪天给你换成了新版，前后端不匹配就可能出问题。

### 5.4 坑：部署完访客看到的还是旧评论区

博客重新部署后，我用正常浏览器打开，评论区还是 Waline。看了一下响应头：

```text
cf-cache-status: HIT
cache-control: max-age=18000
```

原来 Cloudflare 把博客的 HTML 缓存了 **5 小时**。解决办法：Cloudflare Dashboard → 你的域名 → **Caching → Configuration → Purge Everything**。

---

## 六、旧评论迁移

### 6.1 为什么不用后台的导入功能？

Twikoo 管理面板的「导入」确实支持 Valine 的 JSON。但在 D1 上，**每条评论是一次插入查询**，而整个导入是在**一次请求**里完成的。D1 文档写的免费版每次调用最多 50 次查询（虽然官方文档之间有出入），再加上 10 ms 的 CPU 限制，500 多条评论一次导完，有可能导到一半就停了。

而且我的数据里还有一堆格式问题要处理（下面细说），所以干脆**在本地生成 SQL 文件，用 wrangler 直接执行**。

### 6.2 Twikoo 的评论表

| 字段 | 说明 |
| :-- | :-- |
| `_id` | 主键（TEXT），我直接沿用了 LeanCloud 原来的 objectId |
| `nick` / `mail` / `mailMd5` / `link` / `avatar` | 昵称、邮箱、邮箱 MD5、网址、头像 |
| `ua` / `ip` / `ipRegion` | 浏览器 UA、IP、IP 属地 |
| `master` | 是否博主（0 / 1） |
| `url` / `href` | 页面路径 / 完整地址 |
| `comment` | 评论内容，**HTML** |
| `pid` / `rid` | 直接父评论 / 所在楼层的根评论 |
| `"like"` / `top` / `isSpam` | 点赞（`'[]'`）、置顶、是否垃圾评论 |
| `created` / `updated` | **毫秒**时间戳（INTEGER） |
| `extra` | 扩展字段（JSON） |

### 6.3 转换时踩的九个坑

**① 路径编码不一致（影响 40 条）**

Valine 存的是解码后的路径，比如 `/支持/`；Twikoo 匹配的是 `location.pathname`，也就是 `/%E6%94%AF%E6%8C%81/`。不处理的话，所有中文路径页面下的评论都**看不到**。统一用 `encodeURI(decodeURI(url))` 转换。

**② 内容格式混杂**

- 早期 Valine 存的是 HTML，回复会带一个前缀 `<p><a class="at" href="#id">@nick </a> , `。Twikoo 本身会显示「回复 @xxx」，所以把这个前缀去掉了（73 条回复）
- 后期 Valine（1.4 之后）和 Waline 存的是原始 Markdown / 纯文本（294 条），用 `marked` 渲染成 HTML，选项和 Twikoo 前端一致（`gfm: true, breaks: true`）
- Waline 的回复带 `[@nick](#id): ` 前缀，同样去掉

**③ Valine 表情短码**

像 `:doge:`、`:bad laugh:` 这样的短码（34 条评论、21 种），Twikoo 不认识，会原样显示成文字。我把它们映射成了 Valine 默认表情包的图片地址。

**④ 统一消毒**

所有内容最后都过一遍 DOMPurify，选项和 Twikoo 服务端一致（禁止 `style` 标签和 `style` 属性）。

**⑤ 评论里贴的 base64 截图**

有 13 条评论直接粘贴了 `data:image` 格式的 base64 图片，其中 9 条超过 40 KB（最大的一条 393 KB），转成十六进制后单条 INSERT 放不下。D1 单条 SQL 语句上限 100 KB（单行可以到 2 MB，所以存得下，只是一条语句塞不进去）。办法是：先插入一条内容为空的记录，再用 `UPDATE ... SET comment = comment || <分段>` 每次追加约 40 KB。第一段用赋值而不是追加，这样重复执行也不会重复拼接。

**⑥ SQL 转义**

所有文本值都写成 `CAST(X'<utf8 的十六进制>' AS TEXT)`，引号、换行、反斜杠全都不用管。注意 **`CAST` 不能省**：直接写 `X'...'` 存进去的是 BLOB，和 `url`、`_id` 的文本比较永远匹配不上，评论就「消失」了。

**⑦ 楼中楼关系**

Twikoo 的 `pid` 是直接回复的那条评论，`rid` 是这一楼的根评论。Waline 用的是自增整数 id，我把它们映射回 LeanCloud 原来的 objectId（作为 `_id`），这样新旧数据的回复关系能对上；Waline 时期新增的 6 条没有 objectId，单独分配了 `_id`。

另外 LeanCloud 里有 5 条回复的父评论早就被删了，4 月导入 Waline 时它们已经被改成了顶层评论，这次沿用。自己迁移时要注意处理这种情况，否则会断链。

**⑧ 时间戳**

Twikoo 用毫秒时间戳。老评论直接用 LeanCloud 里精确的 `createdAt`，Waline 时期的 6 条用 Neon 里导出的 UTC 时间（就是 1.6 节那个时区坑）。

**⑨ 博主标记和头像**

我自己的 50 条评论设置 `master = 1`，显示博主标识。头像字段统一留空，让 Twikoo 按邮箱哈希走 `GRAVATAR_CDN` 生成头像。**不要**把 `qlogo.cn/...&nk=<QQ号>` 这种地址写进 `avatar`：Twikoo 的公开接口不返回邮箱，但会原样返回 `avatar`，等于把读者的 QQ 号（也就是 QQ 邮箱）公开了。

### 6.4 关键代码（示意）

转换脚本用 Node.js 写的，核心就这几个函数（省略了读文件和拼装 INSERT 的部分）：

```javascript
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const DOMPurify = createDOMPurify(new JSDOM('').window)

// ① 路径统一成 location.pathname 的编码形式
const normUrl = (u) => encodeURI(decodeURI(u))

// ② ④ Markdown → HTML（选项与 Twikoo 前端一致），再消毒
function toHtml(text, isHtml) {
  const html = isHtml ? text : marked.parse(text, { gfm: true, breaks: true })
  return DOMPurify.sanitize(html, { FORBID_TAGS: ['style'], FORBID_ATTR: ['style'] })
}

// ⑥ 任意文本 → 不需要转义的 SQL 字面量（CAST 不能省）
const sqlText = (s) =>
  `CAST(X'${Buffer.from(String(s ?? ''), 'utf8').toString('hex')}' AS TEXT)`

// ⑤ 超长内容分段写入：第一段赋值，后面追加，重跑也不会重复
function chunkedUpdate(id, html, size = 40000) {
  const sql = []
  for (let i = 0; i < html.length; i += size) {
    const part = sqlText(html.slice(i, i + size))
    const value = i === 0 ? part : `comment || ${part}`
    sql.push(`UPDATE "comment" SET comment = ${value} WHERE _id = ${sqlText(id)};`)
  }
  return sql
}
```

> 💡 十六进制编码会让体积翻倍，所以 40 KB 一段，生成的语句约 80 KB，刚好在 100 KB 以内。这里按字符切分，base64 图片是纯 ASCII，所以没问题；如果要切中文长文，得按字节算。

生成的 `import.sql` 大致长这样：

```sql
INSERT OR IGNORE INTO "comment" (_id, nick, url, comment, pid, rid, master, created, updated, ...)
VALUES (CAST(X'...' AS TEXT), CAST(X'...' AS TEXT), CAST(X'...' AS TEXT), ..., 1700000000000, 1700000000000, ...);

-- 超长评论：先插入空内容，再分段写入
UPDATE "comment" SET comment = CAST(X'...' AS TEXT) WHERE _id = CAST(X'...' AS TEXT);
UPDATE "comment" SET comment = comment || CAST(X'...' AS TEXT) WHERE _id = CAST(X'...' AS TEXT);
```

用 `INSERT OR IGNORE` 的好处是**可以放心重跑**，已经存在的记录会被跳过。

### 6.5 先本地，再线上

```bash
# 1. 先导入本地模拟库，检查数量和回复关系
npx wrangler d1 execute twikoo --local --file=./schema.sql
npx wrangler d1 execute twikoo --local --file=./import.sql
npx wrangler d1 execute twikoo --local --command "SELECT COUNT(*) FROM comment"

# 2. 确认没问题再导入线上
npx wrangler d1 execute twikoo --remote --file=./import.sql
```

检查楼中楼有没有断链（`pid` 和 `rid` 都要查，Twikoo 按 `rid` 给回复分楼），可以用这条 SQL（结果应为 0）：

```sql
SELECT COUNT(*) FROM comment c
WHERE (COALESCE(c.pid, '') != '' AND NOT EXISTS (SELECT 1 FROM comment p WHERE p._id = c.pid))
   OR (COALESCE(c.rid, '') != '' AND NOT EXISTS (SELECT 1 FROM comment r WHERE r._id = c.rid));
```

> ⚠️ 导入线上库期间，wrangler 会提示数据库**暂时无法响应查询**。数据量小的话很快，但最好挑访问少的时候做。

### 6.6 迁移结果

| 项目 | 数量 |
| :-- | :-: |
| 评论总数 | **536** |
| 回复 | 170 |
| 断链的回复 | 0 |
| 垃圾评论 | 1 |
| 博主评论 | 50 |

导入后我在线上抽查了几个页面：比如「支持」页面显示 21 条顶层评论，E5 那篇文章有 54 个评论楼，回复和表情都正常显示。

### 6.7 备份

- 💾 LeanCloud 的导出、Neon 的导出、生成的 SQL 都在本地留了一份。这些文件，以及 `wrangler d1 export` 和管理面板「导出」得到的文件，都含有评论者的邮箱和 IP，**千万不要提交到公开仓库**（博客源码仓库就是公开的）
- 🗑️ 迁移完成、备份确认无误后，删掉 LeanCloud 上的评论数据和不再使用的 Neon 项目，它们同样存着评论者的邮箱和 IP。主题配置里旧的 `valine.appId` / `appKey` 也可以删掉，不过它们还留在 Git 历史里，所以删掉 LeanCloud 上的数据才是关键
- 📤 定期在 Twikoo 管理面板里点「导出」
- 🗄️ 也可以用 wrangler 直接导出整个 D1：

```bash
npx wrangler d1 export twikoo --remote --output=twikoo-backup.sql
```

D1 自带 Time Travel，免费版可以恢复到 7 天内的任意时间点，算是最后一道保险。

---

## 七、踩坑汇总

数据转换的坑见 6.3，这里只列部署和配置时最容易遇到的问题，方便对照报错查：

| 问题 | 原因 | 解决 |
| :-- | :-- | :-- |
| pnpm install 报 Node 版本不符 | 根 `package.json` 要求 `node >=26` | 用 Node 26（便携版即可，只用于构建） |
| 管理面板提示前后端版本不一致 | 源码构建的服务端版本号是 0.0.0 | 构建前执行 `release-set-version.mjs` |
| 升级时版本脚本报「发布基线校验失败」 | 上次 `release-set-version.mjs` 改过的 `package.json` 没还原 | 先 `git checkout -- .` 再切换 tag |
| 部署报 `[code: 100117]` | 旧的 Vercel CNAME 记录还在 | 在 DNS 里删掉旧记录后重新部署 |
| 配了 `routes` 后 `workers.dev` 地址不可用 | 有 `routes` 时 `workers_dev` 默认为 false | 显式写 `workers_dev = true` |
| 不加 `--remote` 时线上库里没有表 | `wrangler d1 execute` 默认操作本地库 | 加 `--remote` |
| 改成 Twikoo 后页面还是 Waline | Hexo 合并主题配置时数组是去重追加，变成 `[Waline, Twikoo]` | 主题自带的 `_config.yml` 也改掉 |
| 部署后访客看到的还是旧评论区 | Cloudflare 缓存了 HTML 5 小时 | Purge Everything |
| 收不到邮件通知 | Workers 上不能直连 SMTP | 用 HTTP 邮件 API，或者改用 Telegram |
| SendGrid / MailChannels 测试邮件能发，评论通知可能发不出 | 2.0.15 把「名称 + 地址」整串当成发件地址提交 | 改用 Resend |
| Telegram 推送可能失败 | Markdown 解析模式下只转义了 `*` 和 `_` | 评论本身不受影响，可以忽略 |

---

## 八、总结

折腾一圈下来，评论区终于又活过来了，而且五年来的 536 条评论一条没丢。几点体会：

- ☁️ **免费 PaaS 账号说没就没**，而且可能连个解释都没有。评论后端最好放在自己本来就离不开的基础设施上（我这里就是托管 DNS 的那个 Cloudflare 账号），也不要和其他有风险的项目混在同一个账号里
- 📝 **把部署信息写下来**：域名指向哪个平台、数据库在哪、怎么登录。我才过了半年就全忘了
- 💾 **定期导出备份**：管理面板点「导出」或者 `wrangler d1 export`，别再把数据安全寄托在运气上
- 📌 **前后端版本要锁定且一致**，主题配置的合并行为要心里有数，切换评论系统后记得清 CDN 缓存
- 🔔 **给评论区加个监控**：这次评论区挂了一个多月我都没发现。Telegram 推送只能告诉我「有新评论」，后端挂了它是不会响的，所以最好再加一个定时请求评论接口的监控（UptimeRobot 之类的服务，或者用 Workers Cron 自己写一个）

如果你也还在用 Valine，别拖了，**2027-01-12** 之前一定要迁走。有问题欢迎在下面评论区留言，这次评论区是真的能用了 😄

---

## 参考资料

- [Twikoo 仓库](https://github.com/twikoojs/twikoo)
- [Twikoo 文档：后端部署](https://twikoo.js.org/backend.html)
- [LeanCloud 停止对外提供服务的通知](https://docs.leancloud.cn/sdk/announcements/sunset-announcement/)
- [Cloudflare Workers 限制](https://developers.cloudflare.com/workers/platform/limits/)
- [Cloudflare D1 限制](https://developers.cloudflare.com/d1/platform/limits/)
- [Workers 自定义域名](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [D1 的 Wrangler 命令](https://developers.cloudflare.com/d1/wrangler-commands/)
- [Vercel 错误：DEPLOYMENT_DISABLED](https://vercel.com/docs/errors/DEPLOYMENT_DISABLED)
- [Waline 文档](https://waline.js.org/)
- [Artalk 文档](https://artalk.js.org/)
- [Giscus](https://giscus.app/)
- [Remark42](https://remark42.com/)
