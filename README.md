React Redux Starter Kit
=======================

Requirements
------------

Node `^4.0.0` or `^5.0.0` ([npm3](https://www.npmjs.com/package/npm3) recommended).

Demo
--------
[redux-router-breadcrumbs](https://redux-router-breadcrumbs.herokuapp.com)

Features
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [React-Router](https://github.com/rackt/react-router) (`1.0.0-rc1`)
* [Redux](https://github.com/gaearon/redux) (`^3.0.0`)
  * redux-router (`^1.0.0-beta3`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display in a separate window.
  * redux-thunk middleware
* [React-Breadcrumbs](https://github.com/svenanders/react-breadcrumbs) (`1.1.0`)

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/svenanders/react-redux-breadcrumbs
$ cd react-redux-breadcrumbs
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

Usage
-----

#### `npm start`
Runs the webpack build system with webpack-dev-server (by default found at `localhost:3000`).

#### `npm run dev:nw`
Same as `npm run start` but opens the debug tools in a new window.

#### `npm run dev:no-debug`
Same as `npm run start` but disables devtools.

#### `npm run compile`
Runs the webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`).

#### `npm run test`
Runs unit tests with Karma and generates coverage reports.

#### `npm run test:dev`
Similar to `npm run test`, but will watch for changes and re-run tests; does not generate coverage reports.

#### `npm run lint`
Run ESLint against all `.js` files in `~/src`. This used to be a webpack preloader, but the browser console output could get fairly ugly. If you want development-time linting, consider using an `eslint` plugin for your text editor.

#### `npm run lint:tests`
Lint all `.spec.js` files in of `~/tests`.

#### `npm run deploy`
Helper script to run linter, tests, and then, on success, compile your application to disk.
