SystemJS Babel Plugin
===

[![Build Status][travis-image]][travis-url]

Provides Babel transpilation in the browser and in builds when using SystemJS 0.19.12+ and SystemJS Builder 0.15+.

Compatible with the the automatic Rollup optimizations in SystemJS Builder.

## Usage

### SystemJS

The plugin can be used in SystemJS with the following configuration:

```javascript
SystemJS.config({
  map: {
    'plugin-babel': 'path/to/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});
```

The plugin can also be configured as a `loader` through metadata in SystemJS.

### jspm

**This plugin is compatible with jspm 0.17 beta, but is not supported in jspm 0.16.**

```
jspm install plugin-babel
```

Then set `transpiler: 'plugin-babel'` in the `jspm.js` config file.

Alternatively use `jspm init -p` to set up the plugin automatically.

### ES Features

This repo comes with its own Babel build which includes all ES6 and Stage 2 and Stage 3 features by default, except for the ES6 library polyfills.

If ES6 polyfills are desired it is advisable to import core-js libraries manually as needed.

To use Stage 1 features, these need to be manually enabled via configuration:

```javascript
SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        stage1: true
      }
    }
  }
});
```

If running in NodeJS or browsers that have ES2015 support, ES2015 feature transpilation can be disabled similarly:

```javascript
SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        es2015: false
      }
    }
  }
});
```

This allows workflows that just support ES modules and stage proposal transforms.

### Building and Bundling

Build support works with no further configuration through the standard jspm build and bundle commands.

To build with SystemJS builder manually, use the following build configuration:

```javascript
builder.config({
  map: {
    'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-node.js'
  }
});
builder.bundle('app.js', 'out-bundle.js'); // create a named bundle
builder.buildStatic('app.js', 'out-static.js', { format: 'cjs' }); // create a static optimized build
```

When using `builder.buildStatic`, the ES module structure will be preserved and [Rollup optimizations](https://github.com/rollup/rollup) will included automatically
allowing for static dead code removal.

### Custom Presets and Transforms

Custom presets and transforms can be set via `babelOptions` config:

```javascript
SystemJS.config({
  map: {
    'custom-preset': 'path/to/custom-preset.js',
    'custom-plugin': 'path/to/custom-plugin.js'
  },
  meta: {
    '*.js': {
      babelOptions: {
        presets: ['custom-preset'],
        plugins: ['custom-plugin']
      }
    }
  }
});
```

This way JSX support or other features can be included as needed (eg see http://jspm.io/0.17-beta-guide/installing-the-jsx-babel-plugin.html for jspm jsx support)

You can also pass options to Babel plugins the same way as in Node, without creating custom presets.

```javascript
SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        plugins: [
          // best installed via jspm install npm:babel-plugin-transform-async-to-module-method
          ["babel-plugin-transform-async-to-module-method", {
            "module": "bluebird",
            "method": "coroutine"
          }]
        ]
      }
    }
  }
});
```

LICENSE
---

MIT

[travis-url]: http://travis-ci.org/systemjs/plugin-babel
[travis-image]: http://travis-ci.org/systemjs/plugin-babel.svg?branch=master
