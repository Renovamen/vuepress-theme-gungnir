# Change Log

## [0.3.0](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.2.1...v0.3.0) (2021-11-22)

### Bug Fixes

- **plugin-mermaid:** edit language token `mermaid` -> `mermaidjs` to avoid being conflict with [PrismJS](https://prismjs.com/) ([f89a7a6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f89a7a6094323a47b12019deff598ac57c1b3ca0))
- **plugin-markmap:** remove plugin-markmap due to some unsolved issues ([f89a7a6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/f89a7a6094323a47b12019deff598ac57c1b3ca0))

### BREAKING CHANGES

- **plugin-mermaid**: The usage of plugin-mermaid has changed:

  ~~~diff
  - ```mermaid
  + ```mermaidjs
  ~~~

- **plugin-markmap:** plugin-markmap has been removed

### Notice

- No further update expected for Gungnir v0 except bug fixes, because I'm now working on [Gungnir v2](https://github.com/Renovamen/vuepress-theme-gungnir/tree/v2) which is powered by [VuePress 2](https://v2.vuepress.vuejs.org/).


## [0.2.1](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.2.0...v0.2.1) (2021-08-26)

### Features

- **plugin-chart**: enable functions to be passed as options ([a0f6833](https://github.com/Renovamen/vuepress-theme-gungnir/commit/a0f6833ff5551aa49fa29aa06b33678e4dddb62f)) ([#17](https://github.com/Renovamen/vuepress-theme-gungnir/pull/17))

### BREAKING CHANGES

- **plugin-chart**: Chart.js has been upgraded to v3.x and some of the APIs have been changed, see the [documentation](https://www.chartjs.org/docs/latest/) of Chart.js for details.


## [0.2.0](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.8...v0.2.0) (2021-08-18)

### Features

- support customizing Unsplash API ([d207489](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d207489a07446fec9c35f8903d96f4e25515fb51))
- support switching header images from Unsplash on home page ([fe568d6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fe568d647c3c015e2713825ccd943ee44f3e3f22))

### BREAKING CHANGES

- the way to configure `homeHeaderImages` has been changed ([d207489](https://github.com/Renovamen/vuepress-theme-gungnir/commit/d207489a07446fec9c35f8903d96f4e25515fb51), [fe568d6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fe568d647c3c015e2713825ccd943ee44f3e3f22))


## [0.1.8](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.7...v0.1.8) (2021-06-16)

### Bug Fixes

- upgrade Vssue to fix the server url of `cors-anywhere` ([vssue#131](https://github.com/meteorlxy/vssue/issues/131), [cors-anywhere#301](https://github.com/Rob--W/cors-anywhere/issues/301)) ([cc010f4](https://github.com/Renovamen/vuepress-theme-gungnir/commit/cc010f4ad7eb65e188db4563668fb5eed9640012))

### Features

- add `hitokoto.api` configuration item ([6a15ea9](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6a15ea97b028bbf1ebe1e3ebdc6bccdc91109ed9))


## [0.1.7](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.6...v0.1.7) (2021-04-05)

### Bug Fixes

- fill the feature images in post list ([#2](https://github.com/Renovamen/vuepress-theme-gungnir/issues/2)) ([b682462](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b68246237e0d774b4300cc2407de1efb28a58868))
- fix hover animation ([05ffc0b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/05ffc0ba36b613e1cdf5e67c054ee9ccd2f4540e))

### Features

- support code groups ([#2](https://github.com/Renovamen/vuepress-theme-gungnir/issues/2)) ([743240c](https://github.com/Renovamen/vuepress-theme-gungnir/commit/743240c0c0c9625c817637f7dc025327537cf6c9))
- sns links can be customized now ([bd8ef00](https://github.com/Renovamen/vuepress-theme-gungnir/commit/bd8ef00bc01ce6b7371e466c9a60fa79b57082f4))
- search and language icon can be configured now ([05ffc0b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/05ffc0ba36b613e1cdf5e67c054ee9ccd2f4540e))

### Chore

- edit style of code blocks in details containers ([cad0f83](https://github.com/Renovamen/vuepress-theme-gungnir/commit/cad0f8392ba0de575610d925fad6920a9ec7657e))


## [0.1.6](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.5...v0.1.6) (2021-03-31)

### Bug Fixes

- set sitename link to "/" for all languages ([af89fdb](https://github.com/Renovamen/vuepress-theme-gungnir/commit/af89fdb53e1597170546cb8a65ad2aa4e349508b))

### Features

- add markmap plugin ([1e942dc](https://github.com/Renovamen/vuepress-theme-gungnir/commit/1e942dc5058bcf291e546a965a6fe99b7cb88d40))

### Chore

- change sidebar button icon ([651210d](https://github.com/Renovamen/vuepress-theme-gungnir/commit/651210db1611af251e761459279020bf16058d67))


## [0.1.5](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.4...v0.1.5) (2021-02-28)

### Bug Fixes

- fix code theme ([cecf854](https://github.com/Renovamen/vuepress-theme-gungnir/commit/cecf854f84d00fed92e861fd0d75929e40635153))
- fix hover effect of post list cover images (due to the refactoring in v0.1.3) ([4e79d99](https://github.com/Renovamen/vuepress-theme-gungnir/commit/4e79d995c47736e999e058ec611c63d1057e1961))
- fix initial catalog position after router change ([b5bbf17](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b5bbf17cb4e65a881ebf202cfd9233be8cf19b94))
- fix links page item style ([38bc90c](https://github.com/Renovamen/vuepress-theme-gungnir/commit/38bc90c069f9016976c60c8f5c3d07247cd0b7dc))
- fix pager ([0435bf6](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0435bf60a5f77ecb06d14b2f62fb85aba43ab971))


## [0.1.4](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.3...v0.1.4) (2021-02-04)

### Bug Fixes

Bugs due to the refactoring in v0.1.3:

- fix go to bottom ([5fad11c](https://github.com/Renovamen/vuepress-theme-gungnir/commit/5fad11c6cf3c6581de8f99d0a0d4eabb4cba4554))
- fix tag page ([1af9f5b](https://github.com/Renovamen/vuepress-theme-gungnir/commit/1af9f5b0d2e306ad55d66658c9972fc51313dc0e))

### Features

- **reading-time:** allow to exclude code and tex blocks ([b8f7c78](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b8f7c784773374366cc8c7f7c7171fcdd8c8a653))


## [0.1.3](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.2...v0.1.3) (2021-02-04)

### Bug Fixes

- fix code block highlighting themes ([9dea15f](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9dea15f8d3b2144e85ff2500a16e9fd2521cdb6b))

### Features

- multi-language support ([6b221a2](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6b221a2aeade6dba3a17396376a3e8e4f46cad51))
- use Unsplash API for default home page cover image ([229d2f7](https://github.com/Renovamen/vuepress-theme-gungnir/commit/229d2f731afa89368684a9affc2981ade6ae369f))

### BREAKING CHANGES

- modify theme config api ([13e5b37](https://github.com/Renovamen/vuepress-theme-gungnir/commit/13e5b3726f868cd371e668f233aee2a786e5233b))


## [0.1.2](https://github.com/Renovamen/vuepress-theme-gungnir/compare/v0.1.1...v0.1.2) (2021-02-01)

### Bug Fixes

- catalog will not show when there is no title in article ([fe9b39a](https://github.com/Renovamen/vuepress-theme-gungnir/commit/fe9b39a0a27f91c77e47004905b3548a6ba417cb))
- correct min-height of some pages ([9151816](https://github.com/Renovamen/vuepress-theme-gungnir/commit/9151816e36987d694a2b6edb42216bce77252c46))
- scroll percentage is right now ([b2720e1](https://github.com/Renovamen/vuepress-theme-gungnir/commit/b2720e1d52d6c77416dcc9e221af4e3173e33917))
- refresh vssue when navigating directly between `<Page>` ([3da4993](https://github.com/Renovamen/vuepress-theme-gungnir/commit/3da4993cc0a3ea4072bbf402c55c57e5a198b1c4))

### Features

- use oh-vue-icons for icon support ([0b4b50c](https://github.com/Renovamen/vuepress-theme-gungnir/commit/0b4b50c865c42e0f339e7a2575c732befd1c5034))
- add chart.js plugin ([8a0a9c3](https://github.com/Renovamen/vuepress-theme-gungnir/commit/8a0a9c3796bfac4b46c838f6f85ef5669322889b))
- add mermaid plugin ([6c1d135](https://github.com/Renovamen/vuepress-theme-gungnir/commit/6c1d135319c08ac8e2895bf1df37d37621ea5b2d))
- add roughViz.js plugin ([1a7da3f](https://github.com/Renovamen/vuepress-theme-gungnir/commit/1a7da3f4dd7e4c4e732bf62e31a6cb43e5405928))


## [0.1.1](https://github.com/Renovamen/vuepress-theme-gungnir/compare/19d247557ba96bcc6e178095a59ebf5a27d76a3f...v0.1.1) (2020-11-24)

### Features

- the first release version
