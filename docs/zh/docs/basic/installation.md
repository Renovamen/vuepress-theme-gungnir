---
title: 安装
date: 2020-10-18
---

创建一个项目 `blog`（或者叫别的什么名字）：

```bash
mkdir blog && cd blog
yarn init  # or: npm init
```

安装 VuePress 和主题 Gungnir：

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install -D vuepress vuepress-theme-gungnir@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress vuepress-theme-gungnir@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install -D vuepress vuepress-theme-gungnir@next
```

</CodeGroupItem>
</CodeGroup>

请确保你使用的是最新版本的 VuePress（2.0.0-beta.48）和主题。

参考 [VuePress 文档](https://v2.vuepress.vuejs.org/guide/)搭建目录结构。建议在 `package.json` 的 `dev` 和 `build` script 里添加 `--clean-cache`，即：

```json 
{
  "scripts": {
    "docs:dev": "vuepress dev docs --clean-cache",
    "docs:build": "vuepress build docs --clean-cache"
  }
}
```

然后在 `.vuepress/config.js` 或 `.vuepress/config.ts`（如果你在使用 TypeScript 的话）中指定主题：

<CodeGroup>
<CodeGroupItem title="JS" active>

```js{7}
// .vuepress/config.js

const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  ...
  theme: gungnirTheme({
    // 你的主题配置
  })
}
```

</CodeGroupItem>

<CodeGroupItem title="TS">

```ts{8}
// .vuepress/config.ts

import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  ...
  theme: gungnirTheme({
    // 你的主题配置
  })
});
```

</CodeGroupItem>
</CodeGroup>
