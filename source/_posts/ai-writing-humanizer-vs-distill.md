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
