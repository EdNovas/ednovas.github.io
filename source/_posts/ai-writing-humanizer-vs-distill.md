---
title: 去掉文章的 AI 味：6 个去 AI 味 skill 和女娲蒸馏的对比测试
tags: [AI,写作,Claude Code,Skill,女娲,去AI味]
categories:
  - - AI
date: 2026-11-18 16:00:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

## 前言

博客里有 7 篇文章是 AI 起草、我们再编辑发布的，读起来总觉得不像自己写的。

网上现在有不少专门“去 AI 味”的 skill，GitHub 上星最多的有好几万。另外还有一种思路，是用女娲（nuwa-skill）把一个人的写法“蒸馏”成 skill，让 AI 照着这个人写。

我们两种都试了，拿同一篇稿子做了对比测试。

## AI 味在哪

我们从以前的文章里挑出 26 篇确实是自己手写的（2020 到 2023 年），和 7 篇 AI 生成的放在一起统计。挑的时候还发现，候选的 56 篇里有 17 篇其实是整篇转载，文里写着“转载自”，这些都不能算。

两边的句子长短、段落长短几乎一样，差别在排版和语气上。按每一万个中文字算：

手写的加粗 34 处，AI 写的 208 处。

手写的表格 12 行，AI 写的 175 行。

手写的 emoji 是 0 个，AI 写的有 90 个。

“吧、呢、哦”这种语气词，手写的有 13 个，AI 写的一个都没有。

另外手写的正文里一个破折号都没有，“不是……而是……”也一次都没出现过。

“不是……而是……”这个句式也不能一刀切。阮一峰的 24 篇文章里，他大约每 5000 字用一次，比如“我的第一感觉不是恐慌，也不是愤怒，而是无奈”。他一篇最多一次，只用来纠正一个真实的误解。AI 写的一篇里能有好几次，多半是在造金句。

## 参加测试的 skill

去 AI 味的选了 6 个（星数是 2026-11-18 在 GitHub 上看的）：

[blader/humanizer](https://github.com/blader/humanizer)，约 7.1 万星，MIT 协议。英文原版，规则来自维基百科的 “Signs of AI writing”，SKILL.md 里列了 26 种模式，比如“Not X but Y”、强凑三段式、破折号当万能连接、意义拔高。

[op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh)，约 2.3 万星。中文版，基于 humanizer v3.0.0，又参考了 stop-slop，列了 31 种模式。

[conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing)，约 5700 星。英文，先按 P0、P1、P2 三级找问题，再改写。

[LifelongLazyLearner/qu-ai-wei](https://github.com/LifelongLazyLearner/qu-ai-wei)，约 760 星。专门针对简体中文，先“冻结”不能丢的内容，再扫八个模式族重写。

[sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) 里的 humanize-chinese。它本来带检测打分的 Python 脚本，这次只用了它的手工改写流程（脚本没跑）。

[MrGeDiao/shuorenhua](https://github.com/MrGeDiao/shuorenhua)（说人话），约 2700 星，MIT 协议。中文优先，默认只做最小必要的修改，中文长文默认保留原来的句段结构，想大改要指定“自由调整（structural）”。

蒸馏用的是 [女娲 nuwa-skill](https://github.com/alchaincyf/nuwa-skill)（约 3.9 万星）。它本身不管去 AI 味。用法是输入一个人名，它自动调研、提炼这个人的思维方式和表达方式，生成一个“XX 视角”的 skill。我们用它做了两个：

阮一峰的写法。用的快速档，调研了著作、访谈、决策三路，又拿 24 篇原文统计了句长、用词和标点。

我们自己的写法。走的是女娲“蒸馏用户自己”的流程，不联网，只分析那 26 篇手写文章。

## 测试方法

两道题，所有答题和评分都交给独立的子代理（Claude Sonnet），评分的代理不知道哪篇是哪个方法写的。

任务 A 是改写。拿博客评论系统那篇文章里原来 AI 写的一段 Resend 教程（17 处加粗、8 个 emoji、20 行表格），让每个方法去掉 AI 味，要求事实一个不能丢。一共 8 组：不带 skill、6 个去 AI 味 skill、我们自己的蒸馏 skill。

任务 B 是写作。给同一份素材，用阮一峰的风格写一篇《用 Cloudflare Pages 部署一个纯静态网页》。一共 5 组：不带 skill（只说“用阮一峰的风格”）、Humanizer-zh、qu-ai-wei、说人话、阮一峰蒸馏 skill。三个去 AI 味的组，是先按阮一峰风格写初稿，再用 skill 去 AI 味。

评分分两步。先用脚本统计加粗、emoji、表格，以及 33 项关键事实有没有保留。再让评分代理盲评“像不像真人手写”，打 1 到 10 分；写完第一步以后，才给它看本人的原文，让它判断哪篇最像本人。

说人话是后来补测的。补完以后，我们把所有稿子重新混在一起，换了一个新的评分代理再盲评一次，下面用的是第二次的分数。两次的分数有出入，但最像本人的两次都是蒸馏，像真人这一项两次都是 qu-ai-wei 排第一（第一次任务 A 是和蒸馏并列）。

## 任务 A：改写

33 项事实，8 组全部保留了，没有一组改错或者编新东西。

Humanizer-zh 那篇和原稿一模一样的行有 33 行（一共 43 行），17 处加粗一处没动，只删了 emoji。humanize-chinese 还留着 13 处加粗和 6 个 emoji。humanizer 和 avoid-ai-writing 把加粗和 emoji 都去掉了，但 20 行表格原样留着。qu-ai-wei 把表格砍到 10 行。不带 skill 的那组几乎没碰格式，加粗、emoji 都还在。

说人话在默认模式下一个字没改，交回来的和原稿完全一样，这和它“默认只做最小必要修改”的说明一致。换成 structural 模式再跑，也只去掉了 emoji，加粗和表格都留着（盲评用的是这一版）。我们另外试过一次，明确告诉它“加粗、emoji、表格也可以改”，它才把加粗和表格全去掉，改成了列表。它默认不把排版当成 AI 味，需要你自己说出来。

我们自己的蒸馏 skill 是唯一把加粗、表格、列表全部去掉的（都是 0），和原稿相同的行只剩 4 行。它的规则是从那 26 篇手写文章里统计出来的，比如“教程几乎不加粗”“配置项一行一项写成句子”。去 AI 味的 skill 盯的主要是句子里的套路，对排版管得少。

盲评“像真人手写”，qu-ai-wei 7 分，蒸馏 skill 6.5 分，humanizer 5.5 分，avoid-ai-writing 5 分，humanize-chinese 和不带 skill 的 4 分，Humanizer-zh 和说人话 3 分。

对照我们的原文以后，评分代理认为最像我们本人的也是蒸馏那篇，其次是 qu-ai-wei。不过它也说了，八篇都不算真像，都缺我们常用的语气词和“然后”“这里”“即可”这种口头连接，分数整体都不高。

## 任务 B：照着阮一峰写

盲评“像真人手写”：qu-ai-wei 8 分，Humanizer-zh 和说人话 6 分，阮一峰蒸馏 4 分，不带 skill 的 3 分。不带 skill 那篇最后来了个小结，还用一句“一个小工具，十分钟之内就能上线”收尾，这个“十分钟”素材里根本没有，是编的。

给评分代理看了阮一峰的四篇原文（技术写作的首要诀窍、DDoS 防范、OAuth 2.0、Git 远程操作）以后，再问哪篇最像阮一峰，排序是阮一峰蒸馏第一，说人话第二，qu-ai-wei 第三，Humanizer-zh 第四，不带 skill 的最后。（第一次盲评时，不带 skill 的那篇排第二，这次排到最后，这类排名本身的波动不小。）

蒸馏那篇对上的地方有：第一句先下定义（“Cloudflare Pages 是 Cloudflare 提供的静态网站托管服务，可以免费使用。”），第二段交代范围和读者（“本文针对没用过它的读者……”），小标题用“一、二、三”，一句一段，结尾是“（完）”，没有小结也没有金句。这些和他的 Git、OAuth 教程是同一个写法。

评分代理在盲评那一步，把“本文针对……”“（完）”“一、二、三编号”“一句一段”这几条当成 AI 味和模板感扣了分，而这几条都是阮一峰本人一直以来的写法。

去 AI 味的 skill 是照着一个“平均的人”去改的，作者自己的特征也会跟着被改掉。qu-ai-wei 那篇盲评分最高，“像阮一峰”却只排第三。

## 样例

每个方法交回来的稿子原样放在下面，没有改动。为了看得到加粗和 emoji 的标记，用代码块显示 Markdown 原文。说人话默认模式那篇和原稿一字不差，就不重复放了。评分代理也有自己的偏好，可以自己对比着看。

### 改写的原文

{% tabs task-a %}
<!-- tab 原稿 -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只通知博主。读者在评论区收到回复后，如果没有邮件提醒，只能等他自己哪天回到网站才看得到。所以我又给 Twikoo 配了**回复通知邮件**：有人回复了某条评论，原评论者就会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板的 `SMTP_SERVICE` 下拉提示里列了一长串邮箱服务（QQ、163、Gmail……），但那些都是 **SMTP 发信**。Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| **Resend** | ✅ 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用 |
| SendGrid / MailChannels | ❌ 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400） |

> 💡 Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**
2. 填一个用来发信的域名。官方建议用**子域名**，比如 `mail.example.com`，不影响主域名原有的邮箱设置
3. Resend 会在 **Records** 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里**逐条照抄**
4. 如果有 CNAME 记录，**一定要设成「仅 DNS」（灰色云朵）**，开了代理（橙色云朵）会验证失败
5. 回到 Resend 点 Verify，一般 15 分钟内就会通过（最长可能要 72 小时）
6. 验证通过后，建议再按 Resend 的提示加一条 **DMARC** 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况

#### 第二步：创建 API Key

**API Keys → Create API Key**，权限选只能发信的 **Sending access** 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步，不要发给别人，也不要写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但**不能为空** |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | **全部留空**，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | **建议留空**，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件：「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」，里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`，另外还有两个面板提示里没写、但源码支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，然后在管理面板的 **「邮件通知测试」** 里输入一个邮箱、点「发送测试邮件」，能收到就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条**留了邮箱**的评论（包括博主回复读者） | ✅ 发给原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | ❌ 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | ❌ 不发，博主那边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | ❌ 不发 |

所以 `BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 实测一下

用浏览器无痕窗口，填一个**你自己的另一个邮箱**，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就应该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

> 💡 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到；真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
<!-- tab 不带 skill -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只会通知我自己。读者回了评论，要是没有邮件提醒，就只能等他哪天碰巧回到网站才看得到。所以我又给 Twikoo 配了**回复通知邮件**：有人回复了某条评论，原评论者会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板里 `SMTP_SERVICE` 的下拉提示列了一大串邮箱服务（QQ、163、Gmail……），但这些全是 **SMTP 发信**，而 Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| **Resend** | ✅ 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客够用了 |
| SendGrid / MailChannels | ❌ 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板里的测试邮件能发出去，真到评论通知的时候，接口很可能直接拒绝（400） |

> 💡 Resend 的免费额度是我 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**
2. 填一个专门发信的域名。官方建议用**子域名**，比如 `mail.example.com`，这样不会动到主域名原来的邮箱设置
3. Resend 会在 **Records** 页面给出几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），去 Cloudflare 的 DNS 里**一条一条照抄**
4. 如果里面有 CNAME，**一定要设成「仅 DNS」（灰色云朵）**，开了代理（橙色云朵）会验证失败
5. 回 Resend 点 Verify，一般 15 分钟内能过，最长可能要 72 小时
6. 通过之后，建议再按 Resend 的提示补一条 **DMARC** 记录，这样发到 QQ 邮箱之类的地方，被扔进垃圾箱的情况会少一些

#### 第二步：创建 API Key

到 **API Keys → Create API Key**，权限选只能发信的 **Sending access** 就行，还能限定只准用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步用。别发给别人，也别写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但**不能为空** |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | **全部留空**，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | **建议留空**，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件，内容是「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」。邮件里的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。

想自己写模板也行，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`。另外还有两个面板提示里没写、但源码里支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，再去管理面板的 **「邮件通知测试」** 里输一个邮箱，点「发送测试邮件」，收到了就说明发信这条路通了。

#### 什么时候会发邮件

下面是按 2.0.15 的源码整理的：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条**留了邮箱**的评论（包括博主回复读者） | ✅ 发给原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | ❌ 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | ❌ 不发，博主这边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | ❌ 不发 |

所以 `BLOGGER_EMAIL` 一定要填，不然你回复读者的时候，系统分不清谁是博主。

#### 实测一下

开个浏览器无痕窗口，填**你自己的另一个邮箱**，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后，那个邮箱应该就收到回复通知了。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

> 💡 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流，或者改成人工审核。
````
<!-- endtab -->
<!-- tab humanizer -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费，配置最简单）

Telegram 推送只会通知我这个博主。读者的评论收到回复后，如果没有邮件提醒，就得等他哪天自己回到网站才看得到。所以我又给 Twikoo 配了回复通知邮件：有人回复了某条评论，原评论者会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板里 `SMTP_SERVICE` 的下拉提示列了一长串邮箱服务（QQ、163、Gmail……），但它们走的都是 SMTP 发信，而 Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| Resend | 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用 |
| SendGrid / MailChannels | 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400） |

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 Domains → Add Domain
2. 填一个专门用来发信的域名。官方建议用子域名，比如 `mail.example.com`，这样主域名原有的邮箱设置不受影响
3. Resend 会在 Records 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里逐条照抄
4. 如果其中有 CNAME 记录，一定要设成「仅 DNS」（灰色云朵），开了代理（橙色云朵）会验证失败
5. 回到 Resend 点 Verify，一般 15 分钟内通过，最长可能要 72 小时
6. 验证通过后，再按 Resend 的提示加一条 DMARC 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况

#### 第二步：创建 API Key

进 API Keys → Create API Key，权限选只能发信的 Sending access 就够了，还可以限定它只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步用，别发给别人，也别写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但不能为空 |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | 全部留空，在 Workers 上用不到 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空则用默认标题 |
| `MAIL_TEMPLATE` | 建议留空，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件，内容大致是「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」。里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，这两项要先填好。想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`。面板提示里没写、但源码支持的还有两个：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，到管理面板的「邮件通知测试」里输入一个邮箱，点「发送测试邮件」，收到了就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码，规则如下：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条留了邮箱的评论（包括博主回复读者） | 发，收件人是原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | 不发，博主这边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | 不发 |

所以 `BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 实测一下

用浏览器的无痕窗口，填一个你自己的另一个邮箱，以访客身份发一条评论，再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就该收到回复通知了。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得去翻一下。

> 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或者人工审核。
````
<!-- endtab -->
<!-- tab Humanizer-zh -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只通知博主。读者在评论区收到回复后，如果没有邮件提醒，只能等他自己哪天回到网站才看得到。所以我又给 Twikoo 配了**回复通知邮件**：有人回复了某条评论，原评论者就会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板的 `SMTP_SERVICE` 下拉提示里列了一长串邮箱服务（QQ、163、Gmail……），但那些都是 **SMTP 发信**。Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| **Resend** | 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用 |
| SendGrid / MailChannels | 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400） |

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**
2. 填一个用来发信的域名。官方建议用**子域名**，比如 `mail.example.com`，不影响主域名原有的邮箱设置
3. Resend 会在 **Records** 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里**逐条照抄**
4. 如果有 CNAME 记录，**一定要设成「仅 DNS」（灰色云朵）**，开了代理（橙色云朵）会验证失败
5. 回到 Resend 点 Verify，一般 15 分钟内就会通过（最长可能要 72 小时）
6. 验证通过后，建议再按 Resend 的提示加一条 **DMARC** 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况

#### 第二步：创建 API Key

**API Keys → Create API Key**，权限选只能发信的 **Sending access** 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步，不要发给别人，也不要写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但**不能为空** |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | **全部留空**，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | **建议留空**，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件：「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」。站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`，另外还有两个面板提示里没写、但源码支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，然后在管理面板的 **「邮件通知测试」** 里输入一个邮箱、点「发送测试邮件」，能收到就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条**留了邮箱**的评论（包括博主回复读者） | 发给原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | 不发，博主那边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | 不发 |

`BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 实测一下

用浏览器无痕窗口，填一个**你自己的另一个邮箱**，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就应该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

> 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
<!-- tab avoid-ai-writing -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只通知博主。读者在评论区收到回复后，如果没有邮件提醒，只能等他自己哪天回到网站才看得到。所以我又给 Twikoo 配了回复通知邮件：有人回复了某条评论，原评论者就会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板的 `SMTP_SERVICE` 下拉提示里列了一长串邮箱服务（QQ、163、Gmail……），但那些都是 SMTP 发信，Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| Resend | 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用 |
| SendGrid / MailChannels | 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400） |

Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 Domains → Add Domain
2. 填一个用来发信的域名。官方建议用子域名，比如 `mail.example.com`，这样不影响主域名原有的邮箱设置
3. Resend 会在 Records 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里逐条照抄
4. 如果有 CNAME 记录，一定要设成「仅 DNS」（灰色云朵），开了代理（橙色云朵）会验证失败
5. 回到 Resend 点 Verify，一般 15 分钟内就会通过（最长可能要 72 小时）
6. 验证通过后，建议再按 Resend 的提示加一条 DMARC 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况

#### 第二步：创建 API Key

进 API Keys → Create API Key，权限选只能发信的 Sending access 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步，不要发给别人，也不要写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但不能为空 |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | 全部留空，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | 建议留空，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件：「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」，里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`，另外还有两个面板提示里没写、但源码支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，然后在管理面板的「邮件通知测试」里输入一个邮箱、点「发送测试邮件」，能收到就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条留了邮箱的评论（包括博主回复读者） | 发给原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | 不发，博主那边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | 不发 |

所以 `BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 实测一下

用浏览器无痕窗口，填一个你自己的另一个邮箱，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就应该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到；真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
<!-- tab qu-ai-wei -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费，配置最简单）

Telegram 推送只通知博主。读者的评论被回复之后，如果没有邮件提醒，就得等他哪天自己回到网站才能看到。所以我又给 Twikoo 配了回复通知邮件：有人回复某条评论，原评论者会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板里 `SMTP_SERVICE` 的下拉提示列了一长串邮箱服务（QQ、163、Gmail……），这些走的都是 SMTP 发信，而 Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：Resend、SendGrid 和 MailChannels。

我推荐 Resend。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客用绰绰有余。

SendGrid 和 MailChannels 不建议碰。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板里的测试邮件能发出去，真正的评论通知却很可能被接口拒绝（400）。

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**。
2. 填一个专门发信的域名。官方建议用子域名，比如 `mail.example.com`，这样不影响主域名原有的邮箱设置。
3. Resend 会在 **Records** 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里逐条照抄。
4. 如果其中有 CNAME 记录，一定要设成「仅 DNS」（灰色云朵）。开了代理（橙色云朵）会验证失败。
5. 回到 Resend 点 Verify。一般 15 分钟内通过，最长可能要 72 小时。
6. 通过之后，按 Resend 的提示再加一条 DMARC 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱。

#### 第二步：创建 API Key

进 **API Keys → Create API Key**，权限选只能发信的 **Sending access** 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步用。别发给别人，也别写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但不能为空 |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | 全部留空，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | 建议留空，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件，内容是「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」。里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，这两项要先填好。

想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`。源码里还支持两个面板提示没写的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，到管理面板的「邮件通知测试」里输入一个邮箱，点「发送测试邮件」，收到就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码：

- 有人回复了一条留了邮箱的评论（包括博主回复读者），邮件发给原评论者。
- 原评论者没填邮箱，或者邮箱格式不对，不发。
- 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`），不发。博主那边走 Telegram 推送或博主通知邮件。
- 自己回复自己，不发。

所以 `BLOGGER_EMAIL` 一定要填。不填的话，你回复读者时系统分不清谁是博主。

#### 实测一下

用浏览器无痕窗口，填你自己的另一个邮箱，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

> 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
<!-- tab humanize-chinese -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费，配置也最简单）

Telegram 推送只会通知我自己。读者在评论区得到回复，要是没有邮件提醒，就只能等哪天再打开网站才发现。所以我又给 Twikoo 配了**回复通知邮件**：有人回复某条评论，原评论者会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板里 `SMTP_SERVICE` 的下拉提示列了一长串邮箱服务（QQ、163、Gmail……），可它们走的都是 **SMTP 发信**，而 Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| **Resend** | ✅ 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客用绰绰有余 |
| SendGrid / MailChannels | ❌ 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交。管理面板的测试邮件能通过，真正的评论通知却很可能被接口拒绝（400） |

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend，验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**。
2. 填一个专门发信的域名。官方建议用**子域名**，比如 `mail.example.com`，这样不会动到主域名原有的邮箱设置。
3. Resend 会在 **Records** 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里**照着逐条抄过去**。
4. 其中如果有 CNAME 记录，要设成「仅 DNS」（灰色云朵）。开了代理（橙色云朵）会验证失败。
5. 回 Resend 点 Verify，一般 15 分钟内通过，最长可能要 72 小时。
6. 通过之后，再按 Resend 的提示加一条 **DMARC** 记录，邮件被 QQ 邮箱之类扔进垃圾箱的情况会少一些。

#### 第二步：创建 API Key

进 **API Keys → Create API Key**。权限选只能发信的 **Sending access** 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步去用。别发给别人，也别写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但不能为空 |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名得是刚验证过的那个，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | 全部留空，在 Workers 上用不到 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空就用默认标题 |
| `MAIL_TEMPLATE` | 建议留空，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件，内容大致是「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」。里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，这两项得先填好。

想自己写模板的话，能用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`。面板提示里没写、但源码支持的还有两个：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，到管理面板的 **「邮件通知测试」** 里输入一个邮箱，点「发送测试邮件」。收到了，就说明发信通了。

#### 什么时候会发邮件

下面是按 2.0.15 源码整理的：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条**留了邮箱**的评论（博主回复读者也算） | ✅ 发给原评论者 |
| 原评论者没填邮箱，或邮箱格式不对 | ❌ 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | ❌ 不发，博主这边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | ❌ 不发 |

所以 `BLOGGER_EMAIL` 必须填。不填的话，你回复读者时系统分不清谁是博主。

#### 实测一下

开浏览器无痕窗口，填**你自己的另一个邮箱**，以访客身份发一条评论，再回正常窗口用博主身份回复它。几秒后，那个邮箱应该就能收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次收不到先翻翻垃圾箱。

免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇上垃圾评论刷屏，先在管理面板里打开 `LIMIT_PER_MINUTE` 限流，或者改成人工审核。
````
<!-- endtab -->
<!-- tab 说人话（structural） -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只通知博主。读者在评论区收到回复后，如果没有邮件提醒，只能等他自己哪天回到网站才看得到。所以我又给 Twikoo 配了**回复通知邮件**：有人回复了某条评论，原评论者就会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板的 `SMTP_SERVICE` 下拉提示里列了一长串邮箱服务（QQ、163、Gmail……），但那些都是 **SMTP 发信**。Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务：

| 服务 | 结论 |
| :-- | :-- |
| **Resend** | 推荐。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用 |
| SendGrid / MailChannels | 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400） |

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 第一步：注册 Resend 并验证发信域名

1. 注册 [Resend](https://resend.com/)，进入 **Domains → Add Domain**
2. 填一个用来发信的域名。官方建议用**子域名**，比如 `mail.example.com`，不影响主域名原有的邮箱设置
3. Resend 会在 **Records** 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里**逐条照抄**
4. 如果有 CNAME 记录，**一定要设成「仅 DNS」（灰色云朵）**，开了代理（橙色云朵）会验证失败
5. 回到 Resend 点 Verify，一般 15 分钟内就会通过（最长可能要 72 小时）
6. 验证通过后，建议再按 Resend 的提示加一条 **DMARC** 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况

#### 第二步：创建 API Key

**API Keys → Create API Key**，权限选只能发信的 **Sending access** 就够了，还可以限定只能用刚才那个域名。生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步，不要发给别人，也不要写进博客仓库。

#### 第三步：在 Twikoo 管理面板里填写

| 配置项 | 值 |
| :-- | :-- |
| `SMTP_SERVICE` | `Resend`（大小写都行） |
| `SMTP_USER` | 随便填，比如 `resend`，但**不能为空** |
| `SMTP_PASS` | 上一步的 API Key（`re_` 开头） |
| `SENDER_EMAIL` | 发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com` |
| `SENDER_NAME` | 发件人名称，比如 `EdNovas的小站`；不填的话会显示成 `undefined` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | **全部留空**，在 Workers 上没用 |
| `MAIL_SUBJECT` | 回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`；留空用默认标题 |
| `MAIL_TEMPLATE` | **建议留空**，用 Twikoo 自带的默认模板 |

默认模板是一封简洁的 HTML 邮件：「xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容」，里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`，另外还有两个面板提示里没写、但源码支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，然后在管理面板的 **「邮件通知测试」** 里输入一个邮箱、点「发送测试邮件」，能收到就说明发信通了。

#### 什么时候会发邮件

按 2.0.15 的源码：

| 情况 | 会不会发 |
| :-- | :-- |
| 有人回复了一条**留了邮箱**的评论（包括博主回复读者） | 发给原评论者 |
| 原评论者没填邮箱，或者邮箱格式不对 | 不发 |
| 回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`） | 不发，博主那边走 Telegram 推送或博主通知邮件 |
| 自己回复自己 | 不发 |

`BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 实测一下

用浏览器无痕窗口，填一个**你自己的另一个邮箱**，以访客身份发一条评论；再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就应该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

> 免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到；真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
<!-- tab 蒸馏（我们自己） -->
````markdown
### 4.10 评论回复邮件：用 Resend（免费、配置最简单）

Telegram 推送只会通知博主。读者在评论区收到回复后，如果没有邮件提醒，就只能等他哪天自己回到网站才看得到。所以我又给 Twikoo 配了回复通知邮件：有人回复了某条评论，原评论者就会收到一封邮件。

#### 为什么选 Resend

Twikoo 管理面板里 `SMTP_SERVICE` 的下拉提示列了一长串邮箱服务（QQ、163、Gmail……），但那些都是 SMTP 发信，而 Workers 不允许 SMTP 连接，选了也发不出去。Cloudflare 版 Twikoo 2.0.15 只支持三个走 HTTP API 的服务，分别是 Resend、SendGrid 和 MailChannels。

推荐 Resend。免费版每月 3,000 封、每天 100 封，最多 3 个自定义域名，个人博客完全够用。

SendGrid 和 MailChannels 不推荐。2.0.15 会把 `"发件人名称" <发件地址>` 整串当成邮箱地址提交，管理面板的测试邮件能过，真正的评论通知却很可能被接口拒绝（400）。

> Resend 的免费额度是 2026-11 查的，以官网 [Pricing](https://resend.com/pricing) 为准。

#### 注册 Resend 并验证发信域名

先注册 [Resend](https://resend.com/)，进入 Domains，点 Add Domain。

填一个用来发信的域名。官方建议用子域名，比如 `mail.example.com`，这样不影响主域名原有的邮箱设置。

Resend 会在 Records 页面生成几条 DNS 记录（DKIM、SPF 用的 TXT / MX 记录等），到 Cloudflare 的 DNS 里逐条照抄就行。

如果有 CNAME 记录，一定要设成“仅 DNS”（灰色云朵），开了代理（橙色云朵）会验证失败。

然后回到 Resend 点 Verify，一般 15 分钟内就会通过（最长可能要 72 小时）。

验证通过后，建议再按 Resend 的提示加一条 DMARC 记录，能减少邮件被 QQ 邮箱等扔进垃圾箱的情况。

#### 创建 API Key

进入 API Keys，点 Create API Key。权限选只能发信的 Sending access 就够了，还可以限定只能用刚才那个域名。

生成的 Key 以 `re_` 开头，只显示一次，直接复制到下一步用。不要发给别人，也不要写进博客仓库。

#### 填写 Twikoo 管理面板

`SMTP_SERVICE` 填 `Resend`，大小写都行。

`SMTP_USER` 随便填，比如 `resend`，但不能为空。

`SMTP_PASS` 填上一步的 API Key（`re_` 开头）。

`SENDER_EMAIL` 填发件地址，域名必须是刚验证过的，比如 `noreply@mail.example.com`。

`SENDER_NAME` 填发件人名称，比如 `EdNovas的小站`（不填的话会显示成 `undefined`）。

`SMTP_HOST`、`SMTP_PORT`、`SMTP_SECURE` 全部留空，在 Workers 上没用。

`MAIL_SUBJECT` 是回复通知的邮件标题，比如 `您在EdNovas的小站上的评论收到了回复`，留空就用默认标题。

`MAIL_TEMPLATE` 建议留空，直接用 Twikoo 自带的默认模板。

默认模板是一封简洁的 HTML 邮件：“xxx 同学，您曾发表评论：（原评论）／ yyy 回复说：（回复内容）／ 点击查看回复的完整内容”。里面的站点名和链接取自 `SITE_NAME` 和 `SITE_URL`，所以这两项要先填好。

想自己写模板的话，可用的变量有 `${SITE_URL}`、`${SITE_NAME}`、`${NICK}`、`${COMMENT}`、`${POST_URL}`、`${IMG}`、`${PARENT_IMG}`。另外还有两个面板提示里没写、但源码支持的：`${PARENT_NICK}`（原评论者昵称）和 `${PARENT_COMMENT}`（原评论内容）。

填完保存，然后在管理面板的“邮件通知测试”里输入一个邮箱，点“发送测试邮件”，能收到就说明发信通了。

#### 什么时候会发邮件

下面是按 2.0.15 的源码来的。

有人回复了一条留了邮箱的评论（包括博主回复读者），会发给原评论者。

原评论者没填邮箱，或者邮箱格式不对，不发。

回复的是博主自己的评论（邮箱等于 `BLOGGER_EMAIL`），不发，博主那边走 Telegram 推送或博主通知邮件。

自己回复自己，也不发。

所以 `BLOGGER_EMAIL` 一定要填，不然你回复读者时，系统分不清谁是博主。

#### 测试回复通知

用浏览器无痕窗口，填一个你自己的另一个邮箱，以访客身份发一条评论，再回到正常窗口，用博主身份回复它。几秒钟后那个邮箱就应该收到回复通知。发到 QQ 邮箱的信偶尔会进垃圾箱，第一次记得翻一下。

免费版每天 100 封的上限，对个人博客的回复量来说基本碰不到。真遇到垃圾评论刷屏，先在管理面板里开 `LIMIT_PER_MINUTE` 限流或人工审核。
````
<!-- endtab -->
{% endtabs %}

### 阮一峰风格的原文

{% tabs task-b %}
<!-- tab 不带 skill -->
````markdown
# 用 Cloudflare Pages 部署一个纯静态网页

你做了一个网页，只有 HTML、CSS、JS，不需要服务器。现在想让别人也能打开，怎么办？

最省事的办法，是把它放到 Cloudflare Pages 上。它可以免费托管纯静态网站，部署完成后，你会得到一个 `项目名.pages.dev` 的网址。

本文用一个真实的例子，演示整个过程。

## 一、例子

我们做了一个"滚轮回弹诊断"网页，用来检查鼠标滚轮的回弹问题。它一共 7 个文件：

```
index.html
app.js
core.js
styles.css
favicon.svg
_headers
README.md
```

没有构建步骤，也没有外部依赖。这意味着，文件夹里是什么，上线就是什么，不需要先 `npm run build`。

下面把这个文件夹叫做 `site`。

## 二、方式一：网页直接上传

这种方式不用装任何东西，只要有浏览器。

1. 登录 Cloudflare 控制台，进入 **Workers & Pages**。
2. 点"创建"，选 **Pages**，再选"上传资产"（Direct Upload）。
3. 填一个项目名，比如 `wheel-bounce`。注意，它会成为网址的一部分，也就是 `wheel-bounce.pages.dev`。
4. 把整个网站文件夹拖进上传框，点"部署"。

等一会儿，网址就能打开了。

以后要更新怎么办？在这个项目里点"创建新部署"，再把文件夹拖进去，就可以了。

## 三、方式二：命令行

如果你经常更新，用命令行更方便。前提是电脑上装了 Node.js。

第一步，登录。

```bash
npx wrangler login
```

第二步，部署。

```bash
npx wrangler pages deploy site --project-name=wheel-bounce
```

其中，`site` 是网站文件夹，`wheel-bounce` 是项目名。

### 一个坑

我们实际用命令行的时候，遇到了一个问题。

先要创建项目，也就是运行 `wrangler pages project create`。在 wrangler 4.151.2 这个版本里，这条命令默认会把 Pages 转到 Workers。结果报错：

```
This Worker does not exist on your account
```

什么都没部署上去。

解决办法，其实报错信息里已经写了：加上 `--force`，直接在旧版 Pages 上创建。

```bash
npx wrangler pages project create wheel-bounce --force
```

加了以后，项目创建成功。之后的 deploy 命令，不用再加 `--force`。

## 四、用 _headers 控制 HTTP 头

7 个文件里，有一个叫 `_headers`，值得单独说一下。

它放在网站根目录，Cloudflare Pages 会按照它，给响应加上 HTTP 头。

我们的例子里，它做了两件事。

**第一，设置安全策略。** 用的是 `Content-Security-Policy`，其中有一条 `connect-src 'none'`，意思是禁止页面向任何服务器发请求。这个网页本来就不需要联网，那就干脆从浏览器层面把路堵死。

**第二，设置缓存。** 给 `*.js` 和 `*.css` 加上了：

```
Cache-Control: public, max-age=3600
```

也就是缓存 3600 秒（1 小时）。

## 五、绑定自己的域名

`pages.dev` 的网址能用，但不够好记。可以绑定自己的域名。

在 Pages 项目里，选"自定义域"，添加域名。我们加的是 `wheel-bounce.e.show`。

如果这个域名托管在同一个 Cloudflare 账号里，DNS 记录会自动加好，你什么都不用做。

添加之后，要注意一个细节：状态一开始是 **pending**。这时候访问，会返回 522 错误。

别慌，这是正常的。我们等了大约 100 秒，状态变成 **active**，网页就正常打开了。

## 六、小结

回顾一下，部署一个纯静态网页，步骤很少：

- 准备一个文件夹，里面是你的静态文件；
- 网页上传，或者 `wrangler pages deploy`，二选一；
- 需要的话，加一个 `_headers` 文件；
- 想用自己的域名，就在项目里添加自定义域。

如果你只是偶尔发布一次，用网页上传就够了。如果要反复更新，命令行更顺手，只是别忘了创建项目时可能要加 `--force`。

整个过程，没有服务器，没有构建，也不花钱。一个小工具，十分钟之内就能上线。
````
<!-- endtab -->
<!-- tab Humanizer-zh -->
````markdown
# 用 Cloudflare Pages 部署一个纯静态网页

如果你的网页只有 HTML、CSS 和 JS，不需要服务器，那它最省事的去处之一，就是 Cloudflare Pages。它可以免费托管这类纯静态网站，部署完会给你一个 `项目名.pages.dev` 的网址。

这篇用一个实际例子来讲：我们做了一个“滚轮回弹诊断”网页，一共 7 个文件：`index.html`、`app.js`、`core.js`、`styles.css`、`favicon.svg`、`_headers`、`README.md`。没有构建步骤，也没有外部依赖，整个文件夹原样上传就行。

上传有两种办法，一种在网页上点几下，一种用命令行。

## 方式一：网页直接上传

不用装任何东西。

1. 登录 Cloudflare 控制台，进入 Workers & Pages。
2. 点“创建”，选 Pages，再选“上传资产（Direct Upload）”。
3. 填项目名，比如 `wheel-bounce`。它会成为网址的一部分，也就是 `wheel-bounce.pages.dev`。
4. 把整个网站文件夹拖进上传框，点“部署”。

以后要更新，进这个项目，点“创建新部署”，再把文件夹拖进去。

## 方式二：命令行

这条路需要 Node.js。先登录：

```bash
npx wrangler login
```

再部署，`site` 是网站文件夹：

```bash
npx wrangler pages deploy site --project-name=wheel-bounce
```

### 一个坑：`--force`

我们用命令行时碰到过一个问题。wrangler 版本是 4.151.2，运行 `wrangler pages project create`，默认会把 Pages 转到 Workers，结果报错：

```
This Worker does not exist on your account
```

什么都没部署上去。

报错信息里已经给了提示：加 `--force`，直接在旧版 Pages 上创建项目。加了以后项目创建成功，之后的 deploy 命令不用再加 `--force`。

## `_headers` 文件

`_headers` 放在网站根目录，Cloudflare Pages 会按它给响应加 HTTP 头。

我们的例子里设了两样东西：

- 安全策略 `Content-Security-Policy`，其中 `connect-src 'none'` 禁止页面向任何服务器发请求。
- 给 `*.js` 和 `*.css` 设置 `Cache-Control: public, max-age=3600`。

这个页面是纯本地的诊断工具，用不着联网，所以把请求口子直接关死。

## 绑定自己的域名

不想用 `pages.dev` 的话，在 Pages 项目里选“自定义域”，添加自己的域名，比如 `wheel-bounce.e.show`。

如果域名托管在同一个 Cloudflare 账号里，DNS 记录会自动加好，不用自己动手。

添加之后，状态一开始是 pending，这时访问会返回 522。大约 100 秒后它变成 active，页面就能正常打开了。看到 522 先别慌，等一会儿再刷新。

## 小结

- 纯静态网站，Cloudflare Pages 免费托管，部署后得到 `项目名.pages.dev`。
- 不想装东西，用网页上传；习惯命令行，用 `npx wrangler pages deploy`。
- 命令行创建项目报 “This Worker does not exist on your account”，加 `--force`。
- 要加安全策略或缓存规则，在根目录放 `_headers`。
- 自定义域刚添加时是 pending、访问返回 522，等大约 100 秒变 active 就好。
````
<!-- endtab -->
<!-- tab qu-ai-wei -->
````markdown
# 用 Cloudflare Pages 部署一个纯静态网页

只有 HTML、CSS、JS 的网页，不需要服务器，也不该为它操心服务器。Cloudflare Pages 可以免费托管这类网站，部署完会给你一个 `项目名.pages.dev` 的网址。

下面用我们做的一个小页面当例子，从上传一路讲到绑定域名。

## 例子长什么样

这个页面叫“滚轮回弹诊断”，一共 7 个文件：

```
index.html
app.js
core.js
styles.css
favicon.svg
_headers
README.md
```

没有构建步骤，也没有外部依赖，文件夹本身就是成品，拖上去就能跑。

## 方式一：网页直接上传

什么都不用装，浏览器里点几下就行。

1. 登录 Cloudflare 控制台，进入 **Workers & Pages**。
2. 点“创建”，选 **Pages**，再选“上传资产（Direct Upload）”。
3. 填项目名，比如 `wheel-bounce`。它会成为网址的一部分，也就是 `wheel-bounce.pages.dev`。
4. 把整个网站文件夹拖进上传框，点“部署”。

以后要更新，就回到这个项目，点“创建新部署”，把文件夹再拖一遍。

## 方式二：命令行

需要先装 Node.js。先登录：

```bash
npx wrangler login
```

再部署，`site` 是网站文件夹：

```bash
npx wrangler pages deploy site --project-name=wheel-bounce
```

### 一个坑：项目创建失败

我们用的是 wrangler 4.151.2。这个版本里，`wrangler pages project create` 默认会把 Pages 转到 Workers，然后报错：

```
This Worker does not exist on your account
```

什么都没部署上去。报错信息里其实给了提示：加 `--force`，直接在旧版 Pages 上创建。

```bash
npx wrangler pages project create wheel-bounce --force
```

加了以后项目创建成功。之后的 deploy 命令不用再加 `--force`。

## 用 _headers 加响应头

在网站根目录放一个 `_headers` 文件，Cloudflare Pages 会按里面的规则给响应加 HTTP 头。

我们的例子里写了两类规则。一类是安全策略 `Content-Security-Policy`，其中 `connect-src 'none'` 禁止页面向任何服务器发请求。另一类是给 `*.js` 和 `*.css` 加上 `Cache-Control: public, max-age=3600`，缓存一小时。

## 绑定自己的域名

默认的 `pages.dev` 网址能用，但想换成自己的域名也很简单。在 Pages 项目里选“自定义域”，添加域名，比如 `wheel-bounce.e.show`。

域名如果托管在同一个 Cloudflare 账号里，DNS 记录会自动加好，不用手动配。

添加之后，状态一开始是 pending。这时候访问会返回 522，别慌。我们等了大约 100 秒，状态变成 active，页面就正常打开了。

## 小结

网页上传不用装任何东西；命令行需要 Node.js，创建项目时如果遇到上面的报错，加一次 `--force`。`_headers` 管响应头，自定义域名绑上去之后，等状态变成 active 就能正常访问。
````
<!-- endtab -->
<!-- tab 说人话 -->
````markdown
# 用 Cloudflare Pages 部署一个纯静态网页

纯静态网站，就是 HTML、CSS、JS 这类文件，不需要服务器。Cloudflare Pages 可以免费托管这样的网站，部署完会给你一个 `项目名.pages.dev` 的网址。

下面用一个例子说明怎么做。这个例子是"滚轮回弹诊断"网页，一共 7 个文件：`index.html`、`app.js`、`core.js`、`styles.css`、`favicon.svg`、`_headers`、`README.md`。没有构建步骤，也没有外部依赖，整个文件夹原样上传就行。

上传有两种方式：网页上传和命令行。

## 一、网页直接上传

这种方式什么都不用装。

1. 登录 Cloudflare 控制台，进入 **Workers & Pages**。
2. 点"创建"，选 **Pages**，再选"上传资产（Direct Upload）"。
3. 填一个项目名，比如 `wheel-bounce`。它会成为网址的一部分，也就是 `wheel-bounce.pages.dev`。
4. 把整个网站文件夹拖进上传框，点"部署"。

以后要更新，就进这个项目，点"创建新部署"，再把文件夹拖进去。

## 二、命令行上传

需要先装 Node.js。

先登录：

```bash
npx wrangler login
```

再部署，其中 `site` 是网站文件夹：

```bash
npx wrangler pages deploy site --project-name=wheel-bounce
```

### 一个坑：项目创建失败

我们用命令行时碰到一个问题。wrangler 4.151.2 里，`wrangler pages project create` 默认会把 Pages 转成 Workers，结果报错：

```
This Worker does not exist on your account
```

什么都没部署上去。

报错信息里提示了解法：加 `--force`，直接在旧版 Pages 上创建。

```bash
npx wrangler pages project create wheel-bounce --force
```

加了以后项目创建成功。之后的 deploy 命令不用再加 `--force`。

## 三、用 `_headers` 加 HTTP 头

在网站根目录放一个 `_headers` 文件，Cloudflare Pages 会按它给响应加 HTTP 头。

我们的例子里设了两样东西：

- 安全策略 `Content-Security-Policy`，其中 `connect-src 'none'`，禁止页面向任何服务器发请求。
- 给 `*.js` 和 `*.css` 设置 `Cache-Control: public, max-age=3600`。

## 四、绑定自己的域名

在 Pages 项目里选"自定义域"，添加你的域名，比如 `wheel-bounce.e.show`。

如果域名托管在同一个 Cloudflare 账号里，DNS 记录会自动加好，不用手动配。

添加之后，状态先是 pending。这时访问会返回 522。大约 100 秒后，状态变成 active，就能正常打开了。

## 小结

- 纯静态网站，网页拖文件夹就能上线，不需要装任何东西。
- 想用命令行，装好 Node.js，一条 `wrangler pages deploy` 搞定；遇到 "This Worker does not exist on your account"，创建项目时加 `--force`。
- 需要加响应头，在根目录放 `_headers`。
- 想用自己的域名，在"自定义域"里添加，pending 时返回 522 属于正常，等大约 100 秒。
````
<!-- endtab -->
<!-- tab 蒸馏（阮一峰） -->
````markdown
# 用 Cloudflare Pages 部署一个纯静态网页

Cloudflare Pages 是 Cloudflare 提供的静态网站托管服务，可以免费使用。

本文针对没用过它的读者，讲怎么把一个纯静态网页（HTML、CSS、JS 这类文件，不需要服务器）放到网上。需要读者手上有一个 Cloudflare 账号，以及一个做好的网站文件夹。

部署成功后，你会得到一个`项目名.pages.dev`的网址。

下面的例子，是我们做的一个"滚轮回弹诊断"网页。它一共 7 个文件：

- index.html
- app.js
- core.js
- styles.css
- favicon.svg
- _headers
- README.md

它没有构建步骤，也没有外部依赖，文件夹本身就是最终的网站，所以可以直接上传。

## 一、网页上传

这种方式不用装任何东西。

1. 登录 Cloudflare 控制台，进入 Workers & Pages。
2. 点"创建"，选 Pages，再选"上传资产（Direct Upload）"。
3. 填一个项目名，比如 wheel-bounce。
4. 把整个网站文件夹拖进上传框，点"部署"。

项目名会成为网址的一部分，所以这个例子的网址是 wheel-bounce.pages.dev。

以后要更新，就在这个项目里点"创建新部署"，再把文件夹拖进去。

## 二、命令行上传

命令行需要先装好 Node.js。

先登录：

```bash
npx wrangler login
```

然后部署，其中 site 是网站文件夹：

```bash
npx wrangler pages deploy site --project-name=wheel-bounce
```

### 一个坑

我们实际用命令行时，遇到了一个问题。当时用的是 wrangler 4.151.2，里面的`wrangler pages project create`，默认会把 Pages 转到 Workers。

结果是报错：

```
This Worker does not exist on your account
```

什么都没部署。

报错信息里有提示，加上`--force`，直接在旧版 Pages 上创建：

```bash
npx wrangler pages project create wheel-bounce --force
```

加了以后，项目创建成功。之后的 deploy 命令，不用再加`--force`。

## 三、_headers 文件

`_headers`放在网站根目录。Cloudflare Pages 会按它的内容，给响应加上 HTTP 头。

我们的例子里，设置了两样东西。

第一是安全策略`Content-Security-Policy`，其中有一项`connect-src 'none'`，意思是禁止页面向任何服务器发请求。这个网页本来就不需要联网，所以这样设置比较放心。

第二是缓存。给`*.js`和`*.css`设置了：

```
Cache-Control: public, max-age=3600
```

也就是缓存 3600 秒，1 小时。

## 四、绑定自己的域名

默认的`pages.dev`网址能用，但如果有自己的域名，也可以绑上去。

在 Pages 项目里选"自定义域"，添加域名，比如 wheel-bounce.e.show。

如果域名托管在同一个 Cloudflare 账号里，DNS 记录会自动加好，不用自己去配。

添加之后，状态先是 pending。这时访问，会返回 522。

大约 100 秒后，状态变成 active，就能正常打开了。所以刚添加完打不开，不用着急，等一下再试。

（完）
````
<!-- endtab -->
{% endtabs %}

## 结果汇总

| 方法 | 任务 A 像真人（10 分） | 任务 A 像我们本人 | 任务 B 像真人（10 分） | 任务 B 像阮一峰 |
|---|---|---|---|---|
| 不带 skill | 4 | 第 6 | 3 | 第 5 |
| humanizer | 5.5 | 第 4 | 没测 | 没测 |
| Humanizer-zh | 3 | 第 7 | 6 | 第 4 |
| avoid-ai-writing | 5 | 第 3 | 没测 | 没测 |
| qu-ai-wei | 7 | 第 2 | 8 | 第 3 |
| humanize-chinese | 4 | 第 5 | 没测 | 没测 |
| 说人话 | 3 | 第 8 | 6 | 第 2 |
| 女娲蒸馏 | 6.5 | 第 1 | 4 | 第 1 |

（任务 A 的蒸馏是我们自己的 skill，任务 B 的蒸馏是阮一峰的 skill。说人话在任务 A 用的是 structural 模式，任务 B 是默认模式。分数是第二次盲评的。）

## 蒸馏的代价

女娲的完整蒸馏要开好几个子代理并行调研，作者自己在说明里提醒过，有用户用顶级模型跑一次花了几十美元。我们为了省钱，阮一峰用的是快速档，子代理也换成了 Sonnet。

它需要足够的原文。阮一峰写了二十多年，材料多，统计出来的句长、用词、开头结尾都很稳。我们自己能用的手写文章只有 26 篇，3 万多字，近三年几乎没有样本，蒸馏出来的东西就薄一些。

语料要先洗干净。我们挑出来的 56 篇候选里，真是自己写的只有 26 篇，其余是整篇转载或者大段引用，不剔除的话，蒸馏出来的就是别人的口吻。

还要测一测再改。我们自己的 skill 第一版写出来的稿子，配置表每一项都加了粗，对照原文才发现我们 2021 年的教程几乎不加粗，改了规则重测一次才对。

另外越有名的作者，模型本来就知道得越多。我们拿阮一峰的三件真实往事出题（比如 2010 年要不要继续译书），带 skill 的和不带的得分差不多（3 比 4，算打平）。蒸馏多出来的，主要是句长、用词、开头结尾怎么写这些能量化的细节。

## 怎么选

想要某一个具体的人的味道，不管是自己还是某个作者，而且手上有足够的原文，就用女娲蒸馏。

只是想把一篇 AI 稿子里的套话清掉，没有特定的目标风格，中文推荐 qu-ai-wei，这次两道题它都排在前面。Humanizer-zh 这次改得太保守，只去了 emoji，加粗一处没动。说人话默认更克制，适合只想动几个词、不想改结构的稿子，要清排版得自己说明。

两种叠着用要小心。先按某人的风格写、再用去 AI 味的 skill 扫一遍，作者的特征会被一起扫掉（任务 B 里 qu-ai-wei 和 Humanizer-zh 那两篇就是这样）。

每组只写了一篇，评分的也是 AI，结论只代表这一次测试。

> 参考：
> [blader/humanizer](https://github.com/blader/humanizer)
> [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh)
> [conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing)
> [LifelongLazyLearner/qu-ai-wei](https://github.com/LifelongLazyLearner/qu-ai-wei)
> [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills)
> [MrGeDiao/shuorenhua](https://github.com/MrGeDiao/shuorenhua)
> [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill)
> [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
