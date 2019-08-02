const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
    config.set(
        merge(createDefaultConfig(config), {
            files: [
                {pattern: './src/**/config.js', watched: true},
                {pattern: './src/**/test/api/**/*', watched: true, included: false, served: true},
                // runs all files ending with .test in the test folder,
                // can be overwritten by passing a --grep flag. examples:
                //
                // npm run unit -- --grep test/foo/bar.test.js
                // npm run unit -- --grep test/bar/*
                {pattern: config.grep ? config.grep : './src/main/test/**/*.test.js', type: 'module'}
            ],
            esm: {
                // if you are using 'bare module imports' you will need this option
                nodeResolve: true
            },
            proxies: {
                '/sfm/': '/base/src/main/test/'
            },
        }),
    );
    return config;
};