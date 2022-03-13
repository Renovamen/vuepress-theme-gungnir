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

一个对于本主题适用（对其他主题应该也适用）的 workflow 是：

```yaml
# .github/workflows/deploy.yaml

name: build and deploy

on:
  push:
    branches: [ master ]  # master 分支有 commit 时自动触发该 workflow

jobs:
  build-and-deploy-vuepress:  # 随便起个名字
    # 配置运行该 workflow 的系统
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      # 配置 Node.js
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Get yarn cache
        id: yarn-cache
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ${{ steps.yarn-cache.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 打包并生成静态文件
      - name: Build
        run: |
          yarn install --frozen-lockfile
          yarn docs:build

      # 推送静态文件到 gh-pages 分支
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist  # 静态文件生成目录
          cname: zxh.io  # 你网站的域名
```
