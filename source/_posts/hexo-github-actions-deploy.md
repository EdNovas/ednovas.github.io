---
title: GitHub Actions 自动化部署 Hexo 博客完全指南
tags: [Hexo,GitHub Actions,CI/CD,博客,自动化部署]
categories:
  - - 杂
date: 2026-03-05 14:23:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/ednovas/CDN/New%20folder/hexo-github-actions.png
#highlight_shrink: true
---

注： 本文由AI生成，ednovas编辑并审核发布。

# GitHub Actions 自动化部署 Hexo 博客完全指南

传统的 Hexo 博客部署流程通常是：本地写文章 → `hexo clean && hexo generate` → `hexo deploy`。这个流程有几个痛点：

- 🖥️ 换一台电脑就需要重新配置整个 Hexo 环境（Node.js、npm 依赖等）
- 🔑 配置文件中包含 API Key 等敏感信息，直接提交到 Git 有安全风险
- ⏱️ 每次部署都需要手动执行多个命令，繁琐且容易出错

本文将详细介绍如何使用 **GitHub Actions** 实现 Hexo 博客的全自动部署：推送代码到 GitHub 仓库后，自动构建并发布到 GitHub Pages，同时妥善保护敏感信息。

---

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

**核心思路：**
- 源码存放在 `dev` 分支（包含模板配置文件，不含敏感信息）
- GitHub Actions 在构建时通过 Secrets + `envsubst` 动态生成真实配置文件
- 构建产物自动推送到 `gh-pages` 分支
- **GitHub Pages** 和 **Cloudflare Pages** 同时从 `gh-pages` 分支提供服务，互为冗余
- Cloudflare Pages 还会为每个 `dev` 分支的推送自动生成 **Preview 预览环境**

---

## 一、前置准备

### 1.1 仓库分支结构

确保你的 GitHub 仓库有以下分支结构：

| 分支 | 用途 | 内容 |
| :-: | :-- | :-- |
| `dev` | 源码分支（日常开发） | Hexo 源码、文章、模板配置文件 |
| `gh-pages` | 部署分支（自动生成） | Hexo 构建产物（HTML/CSS/JS） |

如果你目前只有一个 `main` 分支，可以新建 `dev` 分支用于存放源码：

```bash
git checkout -b dev
git push -u origin dev
```

### 1.2 GitHub Pages 设置

进入仓库 **Settings → Pages**，将 Source 设置为 `gh-pages` 分支的根目录。

---

## 二、配置文件模板化（保护敏感信息）

这是整个方案最关键的一步：将包含敏感信息的配置文件改成**模板文件**，用环境变量占位符替代真实值。

### 2.1 Hexo 主配置模板

创建 `_config.template.yml`，将 `_config.yml` 中的敏感信息替换为 `${变量名}` 格式：

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

### 2.2 主题配置模板

如果你的主题配置（如 Butterfly）也包含敏感信息，同样需要模板化。创建 `_config.butterfly.template.yml`：

```yaml
# _config.butterfly.template.yml

# ... 其他配置保持不变 ...

# Valine 评论系统 - 敏感信息通过环境变量注入
valine:
  appId: ${VALINE_APP_ID}
  appKey: ${VALINE_APP_KEY}
```

### 2.3 添加 .gitignore

确保 `.gitignore` 中排除了真实的配置文件，只提交模板文件：

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

> ⚠️ 如果你之前已经把包含敏感信息的 `_config.yml` 提交过，需要先从 Git 历史中清除，然后再添加到 `.gitignore`。

---

## 三、配置 GitHub Secrets

在仓库 **Settings → Secrets and variables → Actions** 中添加以下 Secrets：

### 3.1 Algolia 搜索相关

| Secret 名称 | 说明 |
| :-- | :-- |
| `ALGOLIA_APP_ID` | Algolia Application ID |
| `ALGOLIA_API_KEY` | Algolia Search-Only API Key |
| `ALGOLIA_ADMIN_API_KEY` | Algolia Admin API Key |

### 3.2 评论系统相关（以 Valine 为例）

| Secret 名称 | 说明 |
| :-- | :-- |
| `VALINE_APP_ID` | LeanCloud Application ID |
| `VALINE_APP_KEY` | LeanCloud Application Key |

### 3.3 Web Push 通知相关

| Secret 名称 | 说明 |
| :-- | :-- |
| `WEBPUSHR_KEY` | Webpushr Key |
| `WEBPUSHR_AUTH_TOKEN` | Webpushr Auth Token |
| `WEBPUSHR_TRACKING_CODE` | Webpushr Tracking Code |

> 💡 GitHub Secrets 是加密存储的，只有 GitHub Actions 运行时可以读取，不会暴露在日志中。

---

## 四、创建 GitHub Actions Workflow

### 4.1 开启 Actions 权限

在创建 Workflow 之前，需要确保仓库的 Actions 权限正确配置：

1. 进入仓库 **Settings → Actions → General**
2. 在 **Actions permissions** 中选择 **Allow all actions and reusable workflows**
3. 在 **Workflow permissions** 中选择 **Read and write permissions**（这是部署到 `gh-pages` 分支所必需的）
4. 勾选 **Allow GitHub Actions to create and approve pull requests**（可选）
5. 点击 **Save** 保存

### 4.2 创建 Workflow 文件

有两种方式创建 Workflow 文件：

#### 方式一：在 GitHub 网页端创建

1. 进入 GitHub 仓库页面，切换到 `dev` 分支
2. 点击 **Add file → Create new file**
3. 在文件名输入框中输入 `.github/workflows/deploy.yml`（GitHub 会自动创建中间目录）
4. 将下方的完整 Workflow 内容粘贴到编辑器中
5. 点击 **Commit changes** 提交

#### 方式二：本地创建并推送

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

### 4.3 完整 Workflow 文件

以下是完整的 `deploy.yml` 文件内容：

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

### 4.4 Workflow 每一步详解

#### ① 触发条件（`on`）

```yaml
on:
  push:
    branches:
      - dev           # dev 分支有新 push 时自动运行
  workflow_dispatch:   # 允许在 Actions 页面手动点击 "Run workflow" 触发
```

`workflow_dispatch` 非常实用——当你修改了 Secrets 或者需要手动重新部署时，不需要提交一个空 commit，直接在 GitHub 页面点击即可。

#### ② 检出代码（`actions/checkout@v4`）

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    fetch-depth: 0  # 拉取完整 Git 历史，Hexo 需要用到 Git 信息生成文章日期
```

`fetch-depth: 0` 确保拉取完整的 Git 提交历史。如果设为默认值 1（仅最近一次提交），Hexo 可能无法正确获取文章的创建和更新时间。

#### ③ 设置 Node.js（`actions/setup-node@v4`）

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '16'  # Hexo 5.x 推荐 Node 16，Hexo 7.x 可用 Node 18/20
```

> 💡 如何确认 Node 版本？在本地运行 `node -v` 查看你当前使用的版本，保持一致即可。

#### ④ 模板生成配置文件（`envsubst`）

这一步是整个方案的关键——从模板文件 + GitHub Secrets 动态生成真实的配置文件：

```bash
# envsubst 会读取 _config.template.yml 中的 ${变量名}
# 并用对应的环境变量值替换，输出到 _config.yml
envsubst < _config.template.yml > _config.yml
```

`tr -d '\n\r'` 的作用：GitHub Secrets 复制粘贴时可能带入不可见的换行符，这会破坏 YAML 格式，用 `tr` 命令预处理可以避免这个问题。

#### ⑤ 安装依赖（`npm install`）

```bash
npm config set registry https://registry.npmjs.org/  # 确保使用官方 npm 源
rm -f package-lock.json                               # 删除 lock 文件避免版本冲突
npm install --legacy-peer-deps                        # 安装依赖，忽略 peer 冲突
```

`--legacy-peer-deps` 用于解决某些 Hexo 插件之间的 peerDependencies 版本冲突问题，Hexo 生态中这种情况比较常见。

#### ⑥ 构建静态文件（`hexo generate`）

```bash
npm run build  # 等同于 hexo generate，在 package.json 中定义
```

这一步会将所有 Markdown 文章编译为 HTML，生成到 `public/` 目录。

#### ⑦ 部署到 GitHub Pages（`peaceiris/actions-gh-pages@v3`）

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}  # 自动提供，无需手动创建
    publish_dir: ./public                       # 要发布的目录
    publish_branch: gh-pages                    # 目标分支
```

- **`GITHUB_TOKEN`**：每次 Actions 运行时 GitHub 自动注入的临时令牌，拥有对当前仓库的读写权限，无需在 Secrets 中手动添加
- **`publish_dir`**：Hexo 构建产物所在的目录（默认 `./public`）
- **`publish_branch`**：目标分支名，Action 会自动创建该分支（如果不存在），并将内容强制推送过去

### 4.5 查看部署状态

Workflow 推送后，进入仓库 **Actions** 标签页即可查看运行状态：

- ✅ **绿色对勾** — 部署成功
- ❌ **红色叉号** — 部署失败，点击进入查看具体哪一步出错
- 🟡 **黄色圆圈** — 正在运行中

点击具体的 Workflow Run，可以展开每个 Step 查看详细日志输出，方便排查问题。

### 4.6 手动触发部署

除了 push 自动触发外，也可以手动运行：

1. 进入仓库 **Actions** 标签页
2. 在左侧选择 **Deploy Hexo Blog** workflow
3. 点击右侧 **Run workflow** 按钮
4. 选择分支（默认 `dev`），点击 **Run workflow** 确认

---

## 五、日常使用流程

配置完成后，日常写博客只需要：

```bash
# 1. 写文章
vim source/_posts/my-new-post.md

# 2. 提交并推送到 dev 分支
git add .
git commit -m "新文章：xxxx"
git push origin dev

# 3. 自动完成！GitHub Actions 会自动构建并部署
```

你可以在仓库的 **Actions** 标签页查看构建状态和日志。

### 5.1 手动触发部署

如果需要手动触发一次部署（比如修改了 Secrets），可以在 **Actions** 页面点击 **Run workflow**。

### 5.2 本地预览

本地预览仍然可以正常使用，因为你本地有完整的 `_config.yml`：

```bash
hexo clean && hexo server
```

---

## 六、部署到 Cloudflare Pages（可选但推荐）

除了 GitHub Pages，我们还可以同时将博客托管到 **Cloudflare Pages**，获得全球 CDN 加速和自动 Preview 预览环境。整个过程零配置，Cloudflare 直接读取 GitHub 仓库的分支内容，无需额外构建。

### 6.1 创建 Cloudflare Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. 选择 **Pages** → **Connect to Git**
3. 授权 GitHub 并选择你的博客仓库（如 `ednovas/ednovas.github.io`）
4. 配置构建设置：

| 设置项 | 值 |
| :-- | :-- |
| **Production branch** | `gh-pages` |
| **Build command** | 留空（不需要，GitHub Actions 已构建） |
| **Build output directory** | 留空（直接使用分支内容） |

> 💡 因为 GitHub Actions 已经完成了构建并推送到 `gh-pages` 分支，Cloudflare Pages 只需要直接托管该分支的静态文件即可，**无需在 CF 端再次构建**。

5. 点击 **Save and Deploy**

### 6.2 分支与环境映射

Cloudflare Pages 会自动为不同分支创建不同的部署环境：

| 分支 | CF 环境 | 域名 | 用途 |
| :-: | :-: | :-- | :-- |
| `gh-pages` | **Production** | `你的项目.pages.dev` + 自定义域名 | 正式线上环境 |
| `dev` | **Preview** | `<commit-hash>.你的项目.pages.dev` | 每次 push 自动生成预览链接 |

Preview 环境非常实用：每次向 `dev` 分支推送代码后，Cloudflare 会自动生成一个独立的预览 URL，你可以在正式部署前查看效果。

### 6.3 绑定自定义域名

1. 在 Cloudflare Pages 项目中点击 **Custom domains** 标签
2. 添加你的域名（如 `ednovas.xyz`、`ed-novas.com` 等）
3. 如果域名的 DNS 已经托管在 Cloudflare，会自动配置 CNAME 记录
4. 如果域名在其他平台，按照提示添加 CNAME 记录指向 `你的项目.pages.dev`

> 💡 Cloudflare Pages 自动提供免费 SSL 证书和 DDoS 防护。

### 6.4 双托管的优势

同时使用 GitHub Pages 和 Cloudflare Pages 有以下好处：

| 特性 | GitHub Pages | Cloudflare Pages |
| :-- | :-: | :-: |
| **CDN 节点** | GitHub 全球节点 | Cloudflare 300+ 全球节点 |
| **国内访问** | 较慢 | 较快（通过 CF 节点） |
| **Preview 环境** | ❌ | ✅ 每次 push 自动生成 |
| **自定义域名** | ✅ | ✅（自动 SSL） |
| **冗余容灾** | 主站 | 备用 / 加速站 |

你可以将主域名解析到 Cloudflare Pages，将 `*.github.io` 作为备用访问地址。

---

## 七、进阶优化

### 7.1 添加缓存加速构建

在 `Install dependencies` 步骤前添加 npm 缓存，可以显著加速后续构建：

```yaml
      - name: Cache npm dependencies
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.OS }}-npm-cache-${{ hashFiles('**/package.json') }}
          restore-keys: |
            ${{ runner.OS }}-npm-cache-
```

### 7.2 自定义域名

如果使用自定义域名，在 `source/` 目录下创建 `CNAME` 文件：

```
ednovas.xyz
```

这样每次部署后 GitHub Pages 的自定义域名设置不会丢失。

### 7.3 构建通知

可以在 Workflow 末尾添加 Telegram 通知：

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

---

## 八、常见问题

### Q: 构建失败，提示 npm 依赖安装错误？

- 确认 `node-version` 与你本地使用的版本一致（Hexo 5.x 推荐 Node 16）
- 使用 `--legacy-peer-deps` 参数忽略 peerDependencies 冲突
- 删除 `package-lock.json` 后重新构建

### Q: 构建成功但页面没有更新？

- 检查 GitHub Pages 是否设置为 `gh-pages` 分支
- 清除浏览器缓存或等待 CDN 刷新（通常 1-5 分钟）
- 确认 `CNAME` 文件是否正确

### Q: envsubst 替换后配置文件格式错误？

- 确保 Secrets 值中不包含特殊字符（如 `$`、`"`）
- 使用 `tr -d '\n\r'` 去除多余的换行符
- 检查模板文件中的 `${变量名}` 是否拼写正确

### Q: 如何查看构建日志？

进入仓库 **Actions** 标签页，点击对应的 workflow run，展开各步骤查看详细日志。

### Q: GITHUB_TOKEN 权限不足？

确保仓库 **Settings → Actions → General → Workflow permissions** 设置为 **Read and write permissions**。

### Q: Cloudflare Pages 部署失败？

- 确认 Production branch 设置为 `gh-pages`（而不是 `dev` 或 `main`）
- 确保 Build command 和 Build output directory 均留空
- 检查 GitHub 仓库授权是否正常

---

## 九、安全注意事项

1. **永远不要**把包含真实 API Key 的 `_config.yml` 提交到 Git
2. 定期轮换 API Key，在 GitHub Secrets 中更新即可
3. 如果不小心泄露了 Key，立即在相应服务平台重新生成
4. `.gitignore` 中确保排除了所有敏感配置文件
5. 利用 GitHub 的 [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) 功能自动检测泄露

---

## 参考资料

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [Hexo 官方文档](https://hexo.io/docs/)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [envsubst 用法](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html)
