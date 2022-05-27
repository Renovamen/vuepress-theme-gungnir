---
title: Others
date: 2022-03-12
---

::: info
These features are disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::

[plugin-md-plus](/plugins/md-plus) is used for adding more syntax in Markdown. It now supports:

- Footnote
- Mark
- Subscript
- Superscript

You can enable all features simply by:

```js
theme: gungnirTheme({
  themePlugins: {
    mdPlus: {
      all: true // enable all features (default: false)
    }
  }
});
```

or enable them separately:

```js
theme: gungnirTheme({
  themePlugins: {
    mdPlus: {
      footnote: true, // Footnote (default: false)
      mark: true, // Mark (default: false)
      sub: true, // Subscript (default: false)
      sup: true // Superscript (default: false)
    }
  }
});
```

## Footnote

Add footnotes for text[^1]

::: details Syntax

```
Add footnotes for text[^1]

[^1]: Write your footnote here.
```

:::

## Mark

Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."

::: details Syntax

```
Yes, it's ==nine fifteen==.
```

:::

## Subscript

H~2~O

::: details Syntax

```markdown
H~2~O
```

:::

## Superscript

29^th^

::: details Syntax

```
29^th^
```

:::

---

[^1]: Write your footnote here.
