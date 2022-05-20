# Contribution Guides

This repository employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) setup with [pnpm workspaces](https://pnpm.io/workspaces). It hosts theme Gungnir and a number of plugins for [VuePress 2](https://v2.vuepress.vuejs.org/).


&nbsp;

## Pre-requirements

- [Node.js](http://nodejs.org/) **version 14+**
- [pnpm](https://pnpm.io/) **version 7+**


&nbsp;

## Development

Clone the repo and install dependencies:

```bash
pnpm install
```

Start watching source files:

```bash
pnpm dev
```

Open another terminal, and start developing the documentation site:

```bash
pnpm docs:dev
```

Main tools that used in this project:

- [TypeScript](https://www.typescriptlang.org/) as the development language
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code linting and formatting


&nbsp;

## License

By contributing to Gungnir, you agree that your contributions will be licensed under its [Apache-2.0](LICENSE) (theme) / MIT (plugins) license.
