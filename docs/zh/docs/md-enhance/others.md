---
title: 其他
date: 2022-03-12
---

::: info
默认不启用这些功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::

通过插件 [plugin-md-plus](/zh/docs/plugins/md-plus/) 来在 Markdown 中加入更多语法和功能。目前支持：

- 脚注
- 高亮标记
- 下标
- 上标

你可以一键启用所有功能：

```js
theme: gungnirTheme({
  themePlugins: {
    mdPlus: {
      all: true // 全部启用（默认：false）
    }
  }
});
```

也可以分别启用：

```js
theme: gungnirTheme({
  themePlugins: {
    mdPlus: {
      footnote: true, // 脚注（默认：false）
      mark: true, // 高亮标记（默认：false）
      sub: true, // 下标（默认：false）
      sup: true // 上标（默认：false）
    }
  }
});
```

## 脚注

给文字加上脚注[^1]

::: details 语法

```
给文字加上脚注[^1]

[^1]: 脚注内容
```

:::

## 高亮标记

高亮标记重要的内容：衬衫的价格是 ==九磅十五便士==

::: details 语法

```
衬衫的价格是 ==九磅十五便士==
```

:::

## 下标

H~2~O

::: details 语法

```markdown
H~2~O
```

:::

## 上标

29^th^

::: details 语法

```
29^th^
```

:::

---

[^1]: 脚注内容
