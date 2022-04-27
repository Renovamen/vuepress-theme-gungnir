---
title: Installation
date: 2020-10-18
---

Create a new project `blog` (or any other name you want):

```bash
mkdir blog && cd blog
yarn init  # or: npm init
```

Install VuePress and theme Gungnir. Currently, the theme is not compatible with VuePress >= 2.0.0-beta.40, please stick to VuePress 2.0.0-beta.39:

<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress@2.0.0-beta.39 vuepress-theme-gungnir@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install -D vuepress@2.0.0-beta.39 vuepress-theme-gungnir@next
```

</CodeGroupItem>
</CodeGroup>

Build your directory structure follow the guide of [VuePress's official documentation](https://v2.vuepress.vuejs.org/guide/getting-started.html) and specify this theme in `.vuepress/config.js` or `.vuepress/config.ts` (if you are using TypeScript):

<CodeGroup>
<CodeGroupItem title="JS" active>

```js{3}
module.exports = {
  ...
  theme: "gungnir"
}
```

</CodeGroupItem>

<CodeGroupItem title="TS">

```ts{6}
import { defineUserConfig } from "vuepress";
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";

export default defineUserConfig<GungnirThemeOptions>({
  ...
  theme: "gungnir"
});
```

</CodeGroupItem>
</CodeGroup>
