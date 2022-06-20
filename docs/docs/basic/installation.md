---
title: Installation
date: 2020-10-18
---

Create a new project `blog` (or any other name you want):

```bash
mkdir blog && cd blog
yarn init  # or: npm init
```

Install VuePress and theme Gungnir:

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
npm install -D vuepress@2.0.0-beta.39 vuepress-theme-gungnir@next
```

</CodeGroupItem>
</CodeGroup>

Please make sure you are using the latest version of VuePress (2.0.0-beta.48) and theme Gungnir.

Build your directory structure follow the guide of [VuePress's official documentation](https://v2.vuepress.vuejs.org/guide/getting-started.html) and specify this theme in `.vuepress/config.js` or `.vuepress/config.ts` (if you are using TypeScript):

<CodeGroup>
<CodeGroupItem title="JS" active>

```js{7}
// .vuepress/config.js

const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  ...
  theme: gungnirTheme({
    // you theme configs
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
    // you theme configs
  })
});
```

</CodeGroupItem>
</CodeGroup>
