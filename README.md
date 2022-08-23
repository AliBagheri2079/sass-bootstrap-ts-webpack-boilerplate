# Typescript Webpack Boilerplate

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE, 'License')

A starter frontend boilerplate built with:

- [Sass](https://sass.org/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [PurgeCSS](https://purgecss.com/)

This also uses [lint-staged](https://github.com/okonet/lint-staged) for running pre-commit checks.

## Features

- Support for both TypeScript and JavaScript as needed.
- May be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), or [Angular](https://angular.io/).
- Minification of TypeScript/JavaScript and CSS processed files.
- Assets optimization.
- Webpack Dev Server plugin for local development.
- Webpack Bundle Analyzer for visualising script output and usage.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)

## Folder structure

```none
src
├── assets
├── components
└── ...
├── index.ts
public
├── assets
└── index.html
```

- src
  - The entry typescript file is [index.ts](src/index.ts).
  - The [helpers/set-message](src/helpers/set-message) folder is a sample folder for how to test using Jest.
  - Local files are imported using the `'@'` alias. See [index.ts](src/index.ts) file for example.
- public
  - Edit the [index.html](public/index.html) in the public folder to suite your needs.
  - Replace the [favicon.ico](public/favicon.ico) with your own icon.
- public/assets.
  - Add your assets, to the [assets](public/assets) folder.

## Configuration

You may change the configuration for Webpack within the [webpack](webpack) folder.

## Setup

### Install dependencies

Run:

```sh
  yarn install
```

## Development

### Server

Run:

```sh
  yarn serve
```

This will create a server at `http://localhost:9000/` or at the port number specified in the [webpack/configuration/config.js](webpack/configuration/config.js) file.

Automatically reloads after each file change.

### Production build

Run:

```sh
  yarn build
```

Will output all build files into the `dist` folder.

## Linting

### All files

Run:

```sh
  yarn lint:all
```

To fix all possible errors automatically run:

```sh
  yarn lint:all:fix
```

### TypeScript (tsc)

Run:

```sh
  yarn lint:check-types
```

There is no automatic fix option for TypeScript.

### TypeScript and JavaScript (ESLint)

Run:

```sh
  yarn lint:scripts
```

To fix all possible errors automatically run:

```sh
  yarn lint:scripts:fix
```

### Styles (StyleLint)

Run:

```sh
  yarn lint:styles
```

To fix all possible errors automatically run:

```sh
  yarn lint:styles:fix
```

## Check bundle size

Run:

```sh
  yarn check-size
```

This will create a server at `http://localhost:8888/` or at the port number specified using the `-p or --port` option via the `cli`.

## License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
