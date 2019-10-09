module.exports = function(config) {

    config.set({
        basePath: './',
        frameworks: ['jasmine'],

        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/systemjs/dist/system-polyfills.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
            { pattern: 'node_modules/reflect-metadata/Reflect.js.map', included: false, watched: false },

            // Paths loaded via module imports:
            // Angular itself
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

            { pattern: 'system.config.js', included: false, watched: false },
            { pattern: "src/**/*.js", included: false },
            { pattern: "spec/**/*.js", included: false },
            { pattern: "node_modules/@syncfusion/ej2-base/**/*.js", included: false },
            'test-main.js'
        ],

        // Proxied base paths for loading assets
        proxies: {

        },

        exclude: [],
        preprocessors: {},
        reporters: ['progress'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS', 'Chrome', 'Firefox'],
        singleRun: false
    })
}