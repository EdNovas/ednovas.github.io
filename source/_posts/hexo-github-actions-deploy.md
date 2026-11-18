---
title: GitHub Actions 自动部署 Hexo 博客
tags: [Hexo,GitHub Actions,CI/CD,博客,自动化部署]
categories:
  - - 杂
date: 2026-03-05 14:23:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

## 前言

传统的 Hexo 博客部署流程是本地写文章，然后 `hexo clean && hexo generate`，再 `hexo deploy`。

这个流程有几个麻烦的地方。

换一台电脑就要重新配置整个 Hexo 环境（Node.js、npm 依赖等）。

配置文件里带着 API Key 这类敏感信息，直接提交到 Git 有安全风险。

每次部署都要手动执行好几个命令，繁琐，也容易出错。

所以这里用 GitHub Actions 做全自动部署：推送代码到 GitHub 仓库后，自动构建并发布到 GitHub Pages，敏感信息也不会进仓库。

## 整体架构

```
本地电脑 (写文章)
    │
    │  git push → dev 分支
    ▼
GitHub 仓库 (源码)
    │
    ├──── GitHub Actions 自动触发
    │         │
    │         ▼
    │    ┌─────────────────────────────────┐
    │    │  GitHub Actions Runner          │
    │    │                                 │
    │    │  1. 检出代码                     │
    │    │  2. 从模板 + Secrets 生成配置     │
    │    │  3. npm install                 │
    │    │  4. hexo generate               │
    │    │  5. 部署到 gh-pages 分支         │
    │    └─────────────────────────────────┘
    │         │
    │         ▼
    │    GitHub Pages (线上博客)
    │
    └──── Cloudflare Pages 自动触发
              │
              ▼
         ┌─────────────────────────────────┐
         │  Cloudflare Pages               │
         │                                 │
         │  • dev 分支 → Preview 预览环境   │
         │  • gh-pages 分支 → Production   │
         │  • 自动绑定自定义域名            │
         │  • 全球 CDN 加速                │
         └─────────────────────────────────┘
```

源码放在 `dev` 分支，里面只有模板配置文件，不含敏感信息。

GitHub Actions 在构建时通过 Secrets 加 `envsubst`，动态生成真实的配置文件，构建产物自动推送到 `gh-pages` 分支。

GitHub Pages 和 Cloudflare Pages 同时从 `gh-pages` 分支提供服务，互为冗余。Cloudflare Pages 还会为每次推送到 `dev` 分支的代码自动生成 Preview 预览环境。

## 准备工作

### 仓库分支结构

仓库需要两个分支。

`dev` 是源码分支，日常开发都在这里，放 Hexo 源码、文章和模板配置文件。

`gh-pages` 是部署分支，由 Actions 自动生成，内容是 Hexo 的构建产物（HTML/CSS/JS）。

如果你目前只有一个 `main` 分支，可以新建 `dev` 分支用来存放源码：

```bash
git checkout -b dev
git push -u origin dev
```

### GitHub Pages 设置

进入仓库 Settings → Pages，将 Source 设置为 `gh-pages` 分支的根目录。

## 配置文件模板化

这是整个方案最关键的一步：把包含敏感信息的配置文件改成模板文件，用环境变量占位符代替真实值。

### Hexo 主配置模板

创建 `_config.template.yml`，将 `_config.yml` 中的敏感信息替换为 `${变量名}` 的格式：

```yaml
# _config.template.yml

# ... 其他非敏感配置保持不变 ...

# Deployment - GitHub Actions 中不需要，留空
deploy:
  type: ''

# Algolia 搜索 - 敏感信息通过环境变量注入
algolia:
  appId: ${ALGOLIA_APP_ID}
  apiKey: ${ALGOLIA_API_KEY}
  adminApiKey: ${ALGOLIA_ADMIN_API_KEY}
  chunkSize: 5000
  indexName: "你的索引名"
  fields:
    - content:strip:truncate,0,200
    - tags
    - permalink
    - excerpt:strip
    - title
    - categories

# Web Push 通知 - 敏感信息通过环境变量注入
webPushNotification:
  webpushrKey: ${WEBPUSHR_KEY}
  webpushrAuthToken: ${WEBPUSHR_AUTH_TOKEN}
  trackingCode: ${WEBPUSHR_TRACKING_CODE}
```

### 主题配置模板

如果主题配置（比如 Butterfly）里也有敏感信息，同样要模板化。创建 `_config.butterfly.template.yml`：

```yaml
# _config.butterfly.template.yml

# ... 其他配置保持不变 ...

# Valine 评论系统 - 敏感信息通过环境变量注入
valine:
  appId: ${VALINE_APP_ID}
  appKey: ${VALINE_APP_KEY}
```

### 添加 .gitignore

`.gitignore` 里要排除真实的配置文件，只提交模板文件：

```
# 排除包含敏感信息的真实配置文件
_config.yml
_config.butterfly.yml

# 保留模板文件（不要排除）
# _config.template.yml
# _config.butterfly.template.yml

# Hexo 默认排除
node_modules/
public/
.deploy_git/
db.json
```

**如果你之前已经把包含敏感信息的 `_config.yml` 提交过，需要先从 Git 历史中清除，然后再添加到 `.gitignore`。**

## 配置 GitHub Secrets

在仓库 Settings → Secrets and variables → Actions 中添加下面这些 Secrets。

Algolia 搜索相关的有三个。ALGOLIA_APP_ID 填 Algolia Application ID，ALGOLIA_API_KEY 填 Algolia Search-Only API Key，ALGOLIA_ADMIN_API_KEY 填 Algolia Admin API Key。

评论系统这里以 Valine 为例。VALINE_APP_ID 填 LeanCloud Application ID，VALINE_APP_KEY 填 LeanCloud Application Key。

Web Push 通知相关的也是三个。WEBPUSHR_KEY 填 Webpushr Key，WEBPUSHR_AUTH_TOKEN 填 Webpushr Auth Token，WEBPUSHR_TRACKING_CODE 填 Webpushr Tracking Code。

GitHub Secrets 是加密存储的，只有 GitHub Actions 运行时可以读取，不会暴露在日志中。

## 创建 Workflow

### 开启 Actions 权限

创建 Workflow 之前，先确认仓库的 Actions 权限配置正确。

1. 进入仓库 Settings → Actions → General
2. 在 Actions permissions 中选择 Allow all actions and reusable workflows
3. 在 Workflow permissions 中选择 Read and write permissions（部署到 `gh-pages` 分支需要这个权限）
4. 勾选 Allow GitHub Actions to create and approve pull requests（可选）
5. 点击 Save 保存

### 创建 Workflow 文件

有两种方式。

先说在 GitHub 网页端创建：

1. 进入 GitHub 仓库页面，切换到 `dev` 分支
2. 点击 Add file → Create new file
3. 在文件名输入框中输入 `.github/workflows/deploy.yml`（GitHub 会自动创建中间目录）
4. 将下方的完整 Workflow 内容粘贴到编辑器中
5. 点击 Commit changes 提交

另一种是在本地创建并推送：

```bash
# 在项目根目录下创建 workflow 目录
mkdir -p .github/workflows

# 创建 workflow 文件
vim .github/workflows/deploy.yml

# 粘贴下方内容后保存，然后推送
git add .github/workflows/deploy.yml
git commit -m "添加 GitHub Actions 自动部署"
git push origin dev
```

### 完整 Workflow 文件

下面是完整的 `deploy.yml`：

```yaml
name: Deploy Hexo Blog

on:
  push:
    branches:
      - dev  # 当 dev 分支有推送时触发
  workflow_dispatch:  # 允许手动触发

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # 第一步：检出代码
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # 第二步：设置 Node.js 环境
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '16'  # Hexo 5.x 推荐使用 Node 16

      # 第三步：从模板生成 Hexo 主配置文件
      - name: Generate Hexo config from template
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          ALGOLIA_ADMIN_API_KEY: ${{ secrets.ALGOLIA_ADMIN_API_KEY }}
          WEBPUSHR_KEY: ${{ secrets.WEBPUSHR_KEY }}
          WEBPUSHR_AUTH_TOKEN: ${{ secrets.WEBPUSHR_AUTH_TOKEN }}
          WEBPUSHR_TRACKING_CODE: ${{ secrets.WEBPUSHR_TRACKING_CODE }}
        run: |
          # 去除可能的换行符，避免 envsubst 注入异常
          export ALGOLIA_APP_ID=$(echo "$ALGOLIA_APP_ID" | tr -d '\n\r')
          export ALGOLIA_API_KEY=$(echo "$ALGOLIA_API_KEY" | tr -d '\n\r')
          export ALGOLIA_ADMIN_API_KEY=$(echo "$ALGOLIA_ADMIN_API_KEY" | tr -d '\n\r')
          export WEBPUSHR_KEY=$(echo "$WEBPUSHR_KEY" | tr -d '\n\r')
          export WEBPUSHR_AUTH_TOKEN=$(echo "$WEBPUSHR_AUTH_TOKEN" | tr -d '\n\r')
          export WEBPUSHR_TRACKING_CODE=$(echo "$WEBPUSHR_TRACKING_CODE" | tr -d '\n\r')
          envsubst < _config.template.yml > _config.yml

      # 第四步：从模板生成 Butterfly 主题配置文件
      - name: Generate Butterfly config from template
        env:
          VALINE_APP_ID: ${{ secrets.VALINE_APP_ID }}
          VALINE_APP_KEY: ${{ secrets.VALINE_APP_KEY }}
        run: |
          export VALINE_APP_ID=$(echo "$VALINE_APP_ID" | tr -d '\n\r')
          export VALINE_APP_KEY=$(echo "$VALINE_APP_KEY" | tr -d '\n\r')
          envsubst < _config.butterfly.template.yml > _config.butterfly.yml

      # 第五步：安装依赖
      - name: Install dependencies
        run: |
          npm config set registry https://registry.npmjs.org/
          rm -f package-lock.json
          npm install --legacy-peer-deps

      # 第六步：构建静态文件
      - name: Build Hexo
        run: npm run build

      # 第七步：部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
```

### 各步骤说明

#### 触发条件

```yaml
on:
  push:
    branches:
      - dev           # dev 分支有新 push 时自动运行
  workflow_dispatch:   # 允许在 Actions 页面手动点击 "Run workflow" 触发
```

`workflow_dispatch` 很实用。修改了 Secrets，或者需要手动重新部署的时候，不用再提交一个空 commit，直接在 GitHub 页面点击即可。

#### 检出代码

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    fetch-depth: 0  # 拉取完整 Git 历史，Hexo 需要用到 Git 信息生成文章日期
```

`fetch-depth: 0` 会拉取完整的 Git 提交历史。如果用默认值 1（只拉最近一次提交），Hexo 可能无法正确获取文章的创建和更新时间。

#### 设置 Node.js

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '16'  # Hexo 5.x 推荐 Node 16，Hexo 7.x 可用 Node 18/20
```

Node 版本不确定的话，本地运行 `node -v` 看一下，保持一致即可。

#### 模板生成配置文件

这一步从模板文件加 GitHub Secrets，动态生成真实的配置文件：

```bash
# envsubst 会读取 _config.template.yml 中的 ${变量名}
# 并用对应的环境变量值替换，输出到 _config.yml
envsubst < _config.template.yml > _config.yml
```

前面的 `tr -d '\n\r'` 是用来去掉换行符的。GitHub Secrets 复制粘贴时可能带入不可见的换行符，会破坏 YAML 格式，用 `tr` 预处理一下就能避免。

#### 安装依赖

```bash
npm config set registry https://registry.npmjs.org/  # 确保使用官方 npm 源
rm -f package-lock.json                               # 删除 lock 文件避免版本冲突
npm install --legacy-peer-deps                        # 安装依赖，忽略 peer 冲突
```

`--legacy-peer-deps` 用来解决某些 Hexo 插件之间 peerDependencies 的版本冲突，Hexo 生态里这种情况比较常见。

#### 构建静态文件

```bash
npm run build  # 等同于 hexo generate，在 package.json 中定义
```

这一步会把所有 Markdown 文章编译成 HTML，生成到 `public/` 目录。

#### 部署到 GitHub Pages

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}  # 自动提供，无需手动创建
    publish_dir: ./public                       # 要发布的目录
    publish_branch: gh-pages                    # 目标分支
```

`GITHUB_TOKEN` 是每次 Actions 运行时 GitHub 自动注入的临时令牌，对当前仓库有读写权限，不需要在 Secrets 里手动添加。

`publish_dir` 是 Hexo 构建产物所在的目录（默认 `./public`）。

`publish_branch` 是目标分支名，如果不存在，Action 会自动创建，并把内容强制推送过去。

### 查看部署状态

Workflow 推送后，进入仓库 Actions 标签页就能看到运行状态。

绿色对勾表示部署成功，红色叉号表示部署失败（点进去看具体是哪一步出错），黄色圆圈表示正在运行。

点击具体的 Workflow Run，可以展开每个 Step 查看详细日志，方便排查问题。

### 手动触发部署

除了 push 自动触发，也可以手动运行：

1. 进入仓库 Actions 标签页
2. 在左侧选择 Deploy Hexo Blog workflow
3. 点击右侧 Run workflow 按钮
4. 选择分支（默认 `dev`），点击 Run workflow 确认

## 日常使用

配置完成后，日常写博客只需要这几步：

```bash
# 1. 写文章
vim source/_posts/my-new-post.md

# 2. 提交并推送到 dev 分支
git add .
git commit -m "新文章：xxxx"
git push origin dev

# 3. 自动完成！GitHub Actions 会自动构建并部署
```

构建状态和日志在仓库的 Actions 标签页查看。如果需要手动触发一次部署（比如修改了 Secrets），在 Actions 页面点击 Run workflow 即可。

### 本地预览

本地预览照常使用，因为本地有完整的 `_config.yml`：

```bash
hexo clean && hexo server
```

## 部署到 Cloudflare Pages

除了 GitHub Pages，还可以同时把博客托管到 Cloudflare Pages，有全球 CDN 加速，还有自动的 Preview 预览环境。

这里不需要额外配置构建，Cloudflare 直接读取 GitHub 仓库的分支内容。

### 创建 Cloudflare Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create
2. 选择 Pages → Connect to Git
3. 授权 GitHub 并选择你的博客仓库（如 `ednovas/ednovas.github.io`）
4. 配置构建设置，下面三项照填
5. 点击 Save and Deploy

构建设置里，Production branch 填 `gh-pages`。

Build command 留空。

Build output directory 也留空（直接使用分支内容）。

GitHub Actions 已经构建好并推送到 `gh-pages` 分支，Cloudflare Pages 只需要直接托管该分支的静态文件，不需要在 CF 端再构建一次。

### 分支与环境

Cloudflare Pages 会自动为不同分支创建不同的部署环境。

`gh-pages` 分支对应 Production，域名是 `你的项目.pages.dev` 加上自定义域名，作为正式线上环境。

`dev` 分支对应 Preview，域名是 `<commit-hash>.你的项目.pages.dev`，每次 push 都会自动生成预览链接。

Preview 环境很方便：每次向 `dev` 分支推送代码后，Cloudflare 会生成一个独立的预览 URL，正式部署前可以先看效果。

### 绑定自定义域名

1. 在 Cloudflare Pages 项目中点击 Custom domains 标签
2. 添加你的域名（如 `ednovas.xyz`、`ed-novas.com` 等）
3. 如果域名的 DNS 已经托管在 Cloudflare，会自动配置 CNAME 记录
4. 如果域名在其他平台，按照提示添加 CNAME 记录指向 `你的项目.pages.dev`

Cloudflare Pages 自动提供免费 SSL 证书和 DDoS 防护。

### 双托管的对比

GitHub Pages 和 Cloudflare Pages 同时用，两边的区别如下：

| 特性 | GitHub Pages | Cloudflare Pages |
| :-- | :-: | :-: |
| CDN 节点 | GitHub 全球节点 | Cloudflare 300+ 全球节点 |
| 国内访问 | 较慢 | 较快（通过 CF 节点） |
| Preview 环境 | 没有 | 每次 push 自动生成 |
| 自定义域名 | 支持 | 支持（自动 SSL） |
| 冗余容灾 | 主站 | 备用 / 加速站 |

可以把主域名解析到 Cloudflare Pages，将 `*.github.io` 作为备用访问地址。

## 进阶优化

### 添加缓存加速构建

在 `Install dependencies` 步骤前加上 npm 缓存，后续构建会快不少：

```yaml
      - name: Cache npm dependencies
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.OS }}-npm-cache-${{ hashFiles('**/package.json') }}
          restore-keys: |
            ${{ runner.OS }}-npm-cache-
```

### 自定义域名

如果使用自定义域名，在 `source/` 目录下创建 `CNAME` 文件：

```
ednovas.xyz
```

这样每次部署后，GitHub Pages 的自定义域名设置不会丢失。

### 构建通知

可以在 Workflow 末尾加一个 Telegram 通知：

```yaml
      - name: Send Telegram notification
        if: always()
        uses: appleboy/telegram-action@master
        with:
          to: ${{ secrets.TELEGRAM_CHAT_ID }}
          token: ${{ secrets.TELEGRAM_BOT_TOKEN }}
          message: |
            🚀 博客部署 ${{ job.status }}
            提交: ${{ github.event.head_commit.message }}
            链接: https://ednovas.xyz
```

## 常见问题

### npm 依赖安装报错

确认 `node-version` 与本地使用的版本一致（Hexo 5.x 推荐 Node 16）。

加上 `--legacy-peer-deps` 参数忽略 peerDependencies 冲突。

还不行的话，删除 `package-lock.json` 后重新构建。

### 构建成功但页面没有更新

检查 GitHub Pages 是否设置为 `gh-pages` 分支，再确认 `CNAME` 文件是否正确。

也可能是缓存，清除浏览器缓存或者等 CDN 刷新（通常 1-5 分钟）。

### envsubst 替换后格式错误

Secrets 的值里不要带特殊字符（如 `$`、`"`）。

用 `tr -d '\n\r'` 去掉多余的换行符。

再检查模板文件中的 `${变量名}` 有没有拼错。

### 查看构建日志

进入仓库 Actions 标签页，点击对应的 workflow run，展开各步骤查看详细日志。

### GITHUB_TOKEN 权限不足

确保仓库 Settings → Actions → General → Workflow permissions 设置为 Read and write permissions。

### Cloudflare Pages 部署失败

确认 Production branch 设置为 `gh-pages`（不是 `dev` 或 `main`）。

Build command 和 Build output directory 都要留空。

再检查 GitHub 仓库的授权是否正常。

## 安全注意事项

不要把包含真实 API Key 的 `_config.yml` 提交到 Git，`.gitignore` 里要排除所有敏感配置文件。

API Key 建议定期轮换，在 GitHub Secrets 中更新即可。如果不小心泄露了 Key，马上去对应的服务平台重新生成。

另外可以用 GitHub 的 [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) 功能自动检测泄露。

## 参考资料

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [Hexo 官方文档](https://hexo.io/docs/)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [envsubst 用法](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html)
