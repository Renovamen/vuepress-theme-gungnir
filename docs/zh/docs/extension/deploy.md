---
title: 部署
date: 2022-03-12
---

## 基本流程

假如你的 `package.json` 的 `scripts` 部分长这样：

```json 
{
  "scripts": {
    "docs:dev": "vuepress dev docs --clean-cache",
    "docs:build": "vuepress build docs --clean-cache"
  }
}
```

那么你需要在项目根目录下运行：

<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
yarn docs:build
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm run docs:build
```

</CodeGroupItem>
</CodeGroup>

这样 VuePress 就会在 `docs/.vuepress/dist` 目录下生成博客的静态文件。接下来你可以选择将上述目录下的文件推送到一个启用了 [Github Pages](https://pages.github.com/) 功能的 Github 仓库中，从而实现部署。也可以选择其他静态网站部署平台或使用自己的服务器。


## Github Actions

如果你选择部署到 Github Pages 的话，[Github Actions](https://docs.github.com/cn/actions)（Github 的持续集成服务）可以帮你自动实现打包和推送静态文件到 Github 仓库的指定分支这一步。

首先在项目根目录下创建 `.github/workflows` 目录（如果没有的话），然后在该目录中新建一个配置文件 `deploy.yaml`（叫别的名字也行）并在其中写入打包和部署脚本。


### Yarn

如果你使用 Yarn 作为包管理器，一个对于本主题适用（对其他主题应该也适用）的 workflow 是：

```yaml
# .github/workflows/deploy.yaml

name: build-and-deploy

on:
  push:
    branches: [ main ]  # main 分支有 commit 时自动触发该 workflow

jobs:
  build-and-deploy:  # 随便起个名字
    # 配置运行该 workflow 的系统
    runs-on: ubuntu-latest

    env:
      NODE_VERSION: '16'

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 配置 Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: yarn

      # 安装依赖
      - name: Install dependencies
        run: yarn --frozen-lockfile

      # 打包并生成静态文件
      - name: Build site
        run: yarn docs:build

      # 推送静态文件到 gh-pages 分支
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist  # 静态文件生成目录
          cname: zxh.io  # 你网站的域名
```


### pnpm

```yaml
# .github/workflows/deploy.yaml

name: build-and-deploy

on:
  push:
    branches: [ main ]  # main 分支有 commit 时自动触发该 workflow

jobs:
  build-and-deploy:
    # 配置运行该 workflow 的系统
    runs-on: ubuntu-latest

    env:
      NODE_VERSION: '16'

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 6

      # 配置 Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: pnpm

      # 安装依赖
      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      # 打包并生成静态文件
      - name: Build site
        run: pnpm build

      # 推送静态文件到 gh-pages 分支
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist  # 静态文件生成目录
          cname: zxh.io  # 你网站的域名
```
