# @chialab/ginsenghino

[![NPM](https://img.shields.io/npm/v/@chialab/ginsenghino.svg)](https://www.npmjs.com/package/@chialab/ginsenghino)

Chai-based assertion library and testing utilities for JavaScript modules and apps.

It includes:
* [Chai assertion library](https://www.chaijs.com/)
* [Chai spies](https://www.chaijs.com/plugins/chai-spies/)
* [Chai DOM](https://www.chaijs.com/plugins/chai-dom/)
* [Chai assertions for Promises](https://www.chaijs.com/plugins/chai-as-promised/)
* [Chai a11y](https://open-wc.org/docs/testing/chai-a11y-axe/)

## Get the library

Usage via [unpkg.com](https://unpkg.com/) as ES6 module:

```js
import { expect, spy } from 'https://unpkg.com/@chialab/ginsenghino?module';
```

Install via NPM:

```sh
$ npm i @chialab/ginsenghino
$ yarn add @chialab/ginsenghino
```

```ts
import { expect, spy } from '@chialab/ginsenghino';
```

---

## Development

[![Build status](https://github.com/chialab/ginsenghino/workflows/Main/badge.svg)](https://github.com/chialab/ginsenghino/actions?query=workflow%3AMain)
[![codecov](https://codecov.io/gh/chialab/ginsenghino/branch/main/graph/badge.svg)](https://codecov.io/gh/chialab/ginsenghino)

### Build the project

Install the dependencies and run the `build` script:
```
$ yarn install
$ yarn build
```

This will generate the the ESM bundles in the `dist` folder, as well as the declaration files.

### Test the project

Run the `test` script:

```
$ yarn test
```

---

## License

**Ginsenghino** is released under the [MIT](https://github.com/chialab/ginsenghino/blob/main/LICENSE) license.
