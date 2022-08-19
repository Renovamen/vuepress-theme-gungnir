# [2.0.0-alpha.26](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.25...v2.0.0-alpha.26) (2022-08-19)


### Bug Fixes

* home page pager arrows ([9343d7e](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9343d7e6a3ddbdba0b9fe033add8a8dc070544bd))
* scrollbar style in code blocks [#77](https://github.com/Renovamen/vuepress-theme-gungnir/issues/77) ([#81](https://github.com/Renovamen/vuepress-theme-gungnir/issues/81)) ([1125d08](https://github.com/Renovamen/vuepress-theme-gungnir/commit/1125d089bbdd199636ed9d4ba832b0300ec49fff))


### Performance Improvements

* replace span element with a element to optimize SEO ([#78](https://github.com/Renovamen/vuepress-theme-gungnir/issues/78)) ([ebf8638](https://github.com/Renovamen/vuepress-theme-gungnir/commit/ebf8638a4f309fd2558eb0c652be943d9ccc27ca))



# [2.0.0-alpha.25](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.24...v2.0.0-alpha.25) (2022-06-20)


### Bug Fixes

* replaceAll -> replace, to support Node 14 [#69](https://github.com/Renovamen/vuepress-theme-gungnir/issues/69) ([766a0e5](https://github.com/Renovamen/vuepress-theme-gungnir/commit/766a0e56919b1bfcf0d7b46c28f0003704f951ba))


### Features

* support `colorMode` and `colorModeSwitch` options ([901d635](https://github.com/Renovamen/vuepress-theme-gungnir/commit/901d6355efd3126e7567bd27efd25803a2826cf4))



# [2.0.0-alpha.24](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.23...v2.0.0-alpha.24) (2022-05-29)


### Bug Fixes

* code block line number, close [#65](https://github.com/Renovamen/vuepress-theme-gungnir/issues/65) ([d98067f](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d98067f4856b4a78b1427145adbd68c30d552e18))
* compatible with vuepress v2.0.0-beta.46 [#69](https://github.com/Renovamen/vuepress-theme-gungnir/issues/69) [#68](https://github.com/Renovamen/vuepress-theme-gungnir/issues/68) [#61](https://github.com/Renovamen/vuepress-theme-gungnir/issues/61) ([f28e131](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f28e131a4ca73d12eafe274df8d61da01c2ccd51))


### Features

* change fullscreen button display ([#66](https://github.com/Renovamen/vuepress-theme-gungnir/issues/66)) ([1c0b2d7](https://github.com/Renovamen/vuepress-theme-gungnir/commit/1c0b2d777d84e6f2f054c2a0de1e068a2bd30575))
* improve pager style & add sub&sup syntax suppor ([#67](https://github.com/Renovamen/vuepress-theme-gungnir/issues/67)) ([c152796](https://github.com/Renovamen/vuepress-theme-gungnir/commit/c152796655f7dc2be015141bfc1beb2615401d8d))
* support disabling Giscus of a certain page ([d874e5a](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d874e5a0f1659f2d764427ab0f987b8a87156771))



# [2.0.0-alpha.23](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.22...v2.0.0-alpha.23) (2022-05-20)


### IMPORTANT

To be compatible with VuePress >= 2.0.0-beta.40, this release contains important breaking changes, see [here](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md#200-beta40-2022-04-25) for details.

You could migrate your config file as follow, and check our latest docs for more details:

```diff
- module.exports = {
-   theme: "gungnir",
-   themeConfig: {
-     // your theme configs
-   }
- }

+ const { gungnirTheme } = require("vuepress-theme-gungnir");
+
+ module.exports = {
+   theme: gungnirTheme({
+     // you theme configs
+   })
+ }
```

```diff
- module.exports = {
-   plugins: [
-     [
-       "vuepress-plugin-giscus",
-       {
-         repo: "[repo]",
-         repoId: "[repo id]",
-         category: "[category name]",
-         categoryId: "[category id]"
-       }
-     ]
-   ]
- }

+ const { giscusPlugin } = require("vuepress-plugin-giscus");
+
+ module.exports = {
+   plugins: [
+     giscusPlugin({
+         repo: "[repo]",
+         repoId: "[repo id]",
+         category: "[category name]",
+         categoryId: "[category id]"
+     })
+   ]
+ }
```


### Bug Fixes

* **plugin-chart:** replace eval() with safer Function() ([ffd7913](https://github.com/Renovamen/vuepress-theme-gungnir/commit/ffd7913335971bc033e7234552065a39d72546c2))


### Features

* improve SEO (render blog list on server side) [#62](https://github.com/Renovamen/vuepress-theme-gungnir/issues/62) [#28](https://github.com/Renovamen/vuepress-theme-gungnir/issues/28) ([419b2c8](https://github.com/Renovamen/vuepress-theme-gungnir/commit/419b2c82169d2337283055ed27db2bda13710834))





# [2.0.0-alpha.22](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.21...v2.0.0-alpha.22) (2022-05-01)


### Bug Fixes

* catalog height [#60](https://github.com/Renovamen/vuepress-theme-gungnir/issues/60) ([e3483b2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/e3483b2ed3d97562cdb91e4fb71e62459d3c7aa0))





# [2.0.0-alpha.21](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.20...v2.0.0-alpha.21) (2022-04-18)


### Bug Fixes

* **plugin-giscus:** fix giscus lang options setting, close [#57](https://github.com/Renovamen/vuepress-theme-gungnir/issues/57) ([#58](https://github.com/Renovamen/vuepress-theme-gungnir/issues/58)) ([bb200e2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/bb200e230ef2179d96ea4fec7f0d41d850994e70))
* pwa default option ([a3d680a](https://github.com/Renovamen/vuepress-theme-gungnir/commit/a3d680ad28e280e5971e5b8785a9e1e4021a8307))





# [2.0.0-alpha.20](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.19...v2.0.0-alpha.20) (2022-04-13)


### Bug Fixes

* compatible with vuepress v2.0.0-beta.39 [#55](https://github.com/Renovamen/vuepress-theme-gungnir/issues/55) ([e68d31b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/e68d31b404cea050a0ca8847d99dfa4c7244498f))
* link-card title and icon name clash. error replace ([#50](https://github.com/Renovamen/vuepress-theme-gungnir/issues/50)) ([9db4cda](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9db4cda145fbf3fc6998e0d0bb83d4c78b908c2f)), closes [#49](https://github.com/Renovamen/vuepress-theme-gungnir/issues/49) [#49](https://github.com/Renovamen/vuepress-theme-gungnir/issues/49)


### Features

* **plugin-rss:** add author, get title and desc from theme config ([0388ed2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0388ed2c4fde666b8ba70ba9e902ab7e410913d4))
* update link container styles ([dd9eb74](https://github.com/Renovamen/vuepress-theme-gungnir/commit/dd9eb74f8f0342838a616683b6a9b0836528c4b2))





# [2.0.0-alpha.19](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.18...v2.0.0-alpha.19) (2022-03-29)


### Bug Fixes

* remove outlines of headings and sidebar button ([f8d7d49](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f8d7d49b8c36c8f368e5d45a8fa9c16afcef8875))


### Features

* add link card container (close [#36](https://github.com/Renovamen/vuepress-theme-gungnir/issues/36)) ([#38](https://github.com/Renovamen/vuepress-theme-gungnir/pull/38)) ([415e5a2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/415e5a2ccfac337f08cdb44d9cd63f5f41acc4b3))
* allows to hide site domain in link card container ([934ecae](https://github.com/Renovamen/vuepress-theme-gungnir/commit/934ecaed0e4e2efdab64de4edb2282f82e80eff5))
* **plugin-giscus:** added support for lazy load of the comments ([#45](https://github.com/Renovamen/vuepress-theme-gungnir/pull/45)) ([fecc326](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fecc326ed91915d97153fbff6227ad4a5514b6c0))
* **plugin-chart:** support custom code block token ([0a48ac7](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0a48ac7a6210e21b9d3ff6a4cbbc15e1e78dc43e))
* **plugin-mermaid:** support custom code block token [#46](https://github.com/Renovamen/vuepress-theme-gungnir/issues/46) ([54b6a00](https://github.com/Renovamen/vuepress-theme-gungnir/commit/54b6a003f3550d082f513ddcd8bba82ca473f24d))
* support crediting the source of the header image in blog ([9608ccf](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9608ccf568c851593c67e4611ed17c2d2ca078f8))
* support custom navbar brand title [#43](https://github.com/Renovamen/vuepress-theme-gungnir/issues/43) ([4ef34d1](https://github.com/Renovamen/vuepress-theme-gungnir/commit/4ef34d1d900491d84b9dca82ddea8378e02e5d29))


### Performance Improvements

* don't fetch hitokoto util hovering avatar ([487c439](https://github.com/Renovamen/vuepress-theme-gungnir/commit/487c439db5c0d5d61ea97beb7dc36f92dcc13009))





# [2.0.0-alpha.18](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2022-03-19)


### Bug Fixes

* giscus import ([54bcd47](https://github.com/Renovamen/vuepress-theme-gungnir/commit/54bcd47605a057de13a804b026ab4eaf085a62eb))
* handle <RouterLink> in blog excerpt, close [#42](https://github.com/Renovamen/vuepress-theme-gungnir/issues/42) ([21c7e47](https://github.com/Renovamen/vuepress-theme-gungnir/commit/21c7e47617d4107945f794bf23c0fa608d70662b))
* mobile pager style ([4bec742](https://github.com/Renovamen/vuepress-theme-gungnir/commit/4bec7429b6267566e546ee81e438be37448f96c8))
* **plugin-mermaid:** set `overflow: auto` to remove scrollbar [#39](https://github.com/Renovamen/vuepress-theme-gungnir/issues/39) ([f3ed781](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f3ed781f51068667289b87cb528e8187b44018fb))
* video style in page content ([b51e18b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b51e18b2790089e71ac2d84fba1b454bf3c64c5a))


### Features

* custom search text ([526926f](https://github.com/Renovamen/vuepress-theme-gungnir/commit/526926f6365f5cde8cd444476ed9baa1ee3aaef9))
* hide a blog in home page and tags page [#41](https://github.com/Renovamen/vuepress-theme-gungnir/issues/41) ([50a2e4b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/50a2e4b36208ca25561e057b97a83863db01ac1c))
* **plugin-mermaid:** support setting and switching (light/dark) theme [#40](https://github.com/Renovamen/vuepress-theme-gungnir/issues/40) ([5c5d766](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5c5d7668bd8bcdc51f95fa91171161f2cef97a7a))





# [2.0.0-alpha.17](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2022-03-11)


### Bug Fixes

* don't show catalog btn on docs page ([5f5647e](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5f5647e0d0b75b080dac1887537cbd4b728b1edf))
* don't show empty .pager element ([f6ee9af](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f6ee9af6a4ccf872a0ea0b482ff59b8d892ec746))
* don't show sidebar on pages other than docs ([608ee3e](https://github.com/Renovamen/vuepress-theme-gungnir/commit/608ee3e120305200fd5624fe9ffadd5f306b142e))
* **plugin-search:** move SearchPage component into plugin ([0299077](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0299077bbe823af8461f6b1593b074080048e05f))
* style conflicts with @vuepress/plugin-search ([7ce033d](https://github.com/Renovamen/vuepress-theme-gungnir/commit/7ce033def88bfeccf842bcb12a3155833515399c))


### Features

* customize giscus dark/light theme ([9c39433](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9c3943396853c02ddbbe6307c9f9a18a9de4ba98))
* support @vuepress/plugin-docsearch ([6348db7](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6348db700a918e03633abc9ee4c34031152e7157))
* support @vuepress/plugin-search ([86782ec](https://github.com/Renovamen/vuepress-theme-gungnir/commit/86782ec90b6b5ce4f36f3f95e7b412d9b7bbc8c2))





# [2.0.0-alpha.16](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2022-02-28)


### Bug Fixes

* **plugin-chart:** fix import error of json-fn ([f4719ec](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f4719ec9726e246a67f281234b3d2cf8a02068dd))
* **plugin-mermaid:** fix mermaid import ([#35](https://github.com/Renovamen/vuepress-theme-gungnir/issues/35)) ([5c67699](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5c67699ef0516b5f961d072adcd55ba8d22c9d4e))





# [2.0.0-alpha.15](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2022-02-26)


### Bug Fixes

* catalog settings ([91317cb](https://github.com/Renovamen/vuepress-theme-gungnir/commit/91317cb35fdd2f2b32080a4f4ebc2e784bde1a83))





# [2.0.0-alpha.14](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2022-02-11)


### Bug Fixes

* add missing page titles ([3f9dc62](https://github.com/Renovamen/vuepress-theme-gungnir/commit/3f9dc6253807a8cdbda0e0998a173dac15cd4b9a))
* resolve style conflict between article tags and katex tags ([98c0d89](https://github.com/Renovamen/vuepress-theme-gungnir/commit/98c0d89c8d8aeffff771399e375d44fa3e5f19cf))





# [2.0.0-alpha.13](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2022-02-02)


### Bug Fixes

* [#31](https://github.com/Renovamen/vuepress-theme-gungnir/issues/31) fixed ([b6fe1af](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b6fe1af8e3faee1963f5b8cfa2e1844d5207a2bc))


### Features

* **theme:** Add Vuepress2 plugin PWA support  ([#32](https://github.com/Renovamen/vuepress-theme-gungnir/issues/32)), closed ([#27](https://github.com/Renovamen/vuepress-theme-gungnir/issues/27)) ([92bc2e0](https://github.com/Renovamen/vuepress-theme-gungnir/commit/92bc2e015749d967ff4ca56c852f597a9d8cbc1e))





# [2.0.0-alpha.12](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2022-01-27)


### Bug Fixes

* pre-render tags and pagination pages instead of using dynamic routes, fix [#28](https://github.com/Renovamen/vuepress-theme-gungnir/issues/28) ([fd5d6ca](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fd5d6ca47d860f157f4a26805e3dcb145ae90eac))


### Features

* add "auto" appearance mode explicitly ([47e4bb4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/47e4bb4263951acc485469fdd5ca44f1dae0071a))
* **theme:** enhance page link and button click feeling ([bc13bcc](https://github.com/Renovamen/vuepress-theme-gungnir/commit/bc13bcc46b7924f6baf71ce69b5b010661ac5152))





# [2.0.0-alpha.11](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2022-01-24)


### Bug Fixes

* svg style in customize container ([534afd4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/534afd4bf05bf3c354ecdd9629f1df1d5715d119))





# [2.0.0-alpha.10](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2022-01-24)


### Features

* add icons for customize containers ([6bbb471](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6bbb471337a6ecdf194ad1b25eb2f10a4b7db7aa))





# [2.0.0-alpha.9](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2021-12-31)


### Bug Fixes

* home page header image ([a4bc90d](https://github.com/Renovamen/vuepress-theme-gungnir/commit/a4bc90d39751d01146214ed0b7acfd22cf350a00))
* **plugin-giscus:** handle ssr ([2d78110](https://github.com/Renovamen/vuepress-theme-gungnir/commit/2d781102f6790644d3f728e3265040085e0032f4))


### Features

* **plugin-rss:** add supports for RSS ([f477c51](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f477c51258b336c375b5ef348ebbc1e547610d4c))





# [2.0.0-alpha.8](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2021-12-30)


### Bug Fixes

* "show all tags" button, close [#25](https://github.com/Renovamen/vuepress-theme-gungnir/issues/25) ([4055b8a](https://github.com/Renovamen/vuepress-theme-gungnir/commit/4055b8a39c3dd906f02760c0c6d78ed0baba15d8))


### Features

* adding customized sns ([#24](https://github.com/Renovamen/vuepress-theme-gungnir/issues/24)) ([08e1352](https://github.com/Renovamen/vuepress-theme-gungnir/commit/08e13528f8fa10f41cd5ca4884cbfc8c5eb3572b))





# [2.0.0-alpha.7](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2021-12-28)


### Bug Fixes

* **plugin-search:** handle client code when bundler is vite ([950492c](https://github.com/Renovamen/vuepress-theme-gungnir/commit/950492c98e2a65f55f918580d9cea157a048ec2e))





# [2.0.0-alpha.6](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2021-12-28)

**Note:** Version bump only for package vuepress-theme-gungnir





# [2.0.0-alpha.5](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2021-12-27)


### Bug Fixes

* toggling search page on mobile ([6aec0ab](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6aec0ab27beb9692eee876d441a853dbac767c93))


### Features

* **plugin-md-plus:** support footnote and mark ([dfeceb0](https://github.com/Renovamen/vuepress-theme-gungnir/commit/dfeceb0772e3be831c000400c5817ce90595226f))





# [2.0.0-alpha.4](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2021-12-27)


### Features

* baidu tongji ([fd93b60](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fd93b603cd6d983edb0aaf233c70fbf14b1c7e92))
* google analytics ([3af6d12](https://github.com/Renovamen/vuepress-theme-gungnir/commit/3af6d1205dd3ebd7794e299662d6125d4824d44f))
* navbar icons ([2341354](https://github.com/Renovamen/vuepress-theme-gungnir/commit/2341354a9b01c9c96a370b55e2b2e07979adefa2))
* search ([f6824ad](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f6824ada3c87ec521cf877ef7b155c47ed61e6e9))





# [2.0.0-alpha.3](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2021-12-25)


### Bug Fixes

* sidebar styles on mobile ([6898037](https://github.com/Renovamen/vuepress-theme-gungnir/commit/689803708ea5f9042e9e615ed28cd92b51097521))


### Features

* i18n (English, Simplified Chinese) ([eb918a1](https://github.com/Renovamen/vuepress-theme-gungnir/commit/eb918a1f85e36b32815a7571760dc39a21a56c11))
* links page ([f1406c4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f1406c4749c0ac8fef90ae859bbff6eeb10dcb11))
* **plugin-reading-time:** add `options.includes` ([#23](https://github.com/Renovamen/vuepress-theme-gungnir/issues/23)) ([7faa78e](https://github.com/Renovamen/vuepress-theme-gungnir/commit/7faa78e9b1d274401c7fb13c925139f80582871f))
* tags page ([b3d9459](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b3d94593686fd89f04ff7171f065f581dbe15e06))





# 2.0.0-alpha.2 (2021-12-12)


### Bug Fixes

* article header styles and type error in PostList ([d57cf11](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d57cf11ab95ccee0d62676f64f0bdcca832eb0ba))
* edit links ([6189b90](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6189b908d38d155c912f88d172b6e3099ba1eb1a))
* only display lang switcher on doc page ([d921eb3](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d921eb3798b030fbab8b54b1b1ec545df38323df))
* post list pager ([8f15377](https://github.com/Renovamen/vuepress-theme-gungnir/commit/8f1537752c94860107febc86e70bba1ee02d15f2))
* styles for code groups and code blocks in detail containers ([72f5518](https://github.com/Renovamen/vuepress-theme-gungnir/commit/72f5518096b253c25c1c8f9e21c991bd2b94dffd))


### Features

* add footer ([cad820a](https://github.com/Renovamen/vuepress-theme-gungnir/commit/cad820a9404068cc2842567100fdda63d3c514f5))
* add menu button ([9e45868](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9e45868830e49b2557947ab79365ea33f1ad789d))
* add pager to home page ([6d7e9e2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6d7e9e2a43197021f84648cf3f529363f7d7e3a8))
* add pager to post ([b1dd449](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b1dd449ea8b48da6259103069a7d5856523bf0ae))
* add reading time to article ([a5356e6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/a5356e69fd9952b8db9e5974c35fee0f2b5469df))
* article header ([3e28a67](https://github.com/Renovamen/vuepress-theme-gungnir/commit/3e28a67bf36497a1898d3788e9a3870101dce76e))
* code block styles, buttons and full screen code blocks ([5ae1e3e](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5ae1e3e64442a67f4692d4fd65e806b10ed6929e))
* container style ([4705f73](https://github.com/Renovamen/vuepress-theme-gungnir/commit/4705f73d626ad092781edfaf4aaa23156416e39b))
* edit sidebar style ([d581b75](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d581b75878321ed8ef956e2f28b5170ea796e592))
* home page (ing) ([82bc364](https://github.com/Renovamen/vuepress-theme-gungnir/commit/82bc364b245615d72b68f186fa151440f907870a))
* navbar style ([53bad78](https://github.com/Renovamen/vuepress-theme-gungnir/commit/53bad78228525656d4a12cfd4b08e38f963ff993))
* **plugin-chart:** add plugin-chart ([2e79497](https://github.com/Renovamen/vuepress-theme-gungnir/commit/2e79497b3628ea3461e08caea530026476f24744))
* **plugin-giscus:** resolve site's lang and handle lang switching ([700c7cf](https://github.com/Renovamen/vuepress-theme-gungnir/commit/700c7cf9f59724cd705ba8d3c0fe8c9d46361286))
* **plugin-giscus:** support comments by adding plugin-giscus ([#19](https://github.com/Renovamen/vuepress-theme-gungnir/issues/19)) ([d4001d3](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d4001d3f875f1c8c7f2713293042ab2cb1de980f))
* **plugin-katex:** add plugin-katex ([76d06a4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/76d06a40cf1b5c9b3ed70bc8b62168c10008e98b))
* **plugin-mermaid:** add plugin-mermaid ([6a268e0](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6a268e0a3abdf0f1422776cd0ee95c95e7d3fcba))
* **plugin-reading-time:** add plugin-reading-time ([5f91561](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5f91561fdac184698bcdebac4f0d0e324e464120))
* post catalog ([beb81c4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/beb81c400b5615eceb051503cbd2ab42e652b667))
* post content style ([0069df1](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0069df164ec4cc22078c500d5f6469de5affa653))
* sns links ([8839ddc](https://github.com/Renovamen/vuepress-theme-gungnir/commit/8839ddc63417fd252f0231188e4ed6a94335aee3))


### Performance Improvements

* **plugin-giscus:** handle props changing on-the-fly ([5d45eb5](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5d45eb5fbad8218fcfc3c0d90d9deafbf157c234))
