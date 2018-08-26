/**
 * Usage
 * // babel.config.js 
 * module.exports = require('futurenda-babel-config')()
 */
module.exports = ({
    debug = false,
    targets = { android: '4.4', ios: '9' },
    plugins = [],
    presets = []
} = {}) => ({
    presets: [
        ['@babel/preset-env', {
            debug,
            targets,
            modules: false,
            useBuiltIns: 'usage',
            loose: true,
            exclude: [
                'transform-regenerator',
                'es6.typed.data-view',
                'es6.typed.int8-array',
                'es6.typed.uint8-array',
                'es6.typed.uint8-clamped-array',
                'es6.typed.int16-array',
                'es6.typed.uint16-array',
                'es6.typed.int32-array',
                'es6.typed.uint32-array',
                'es6.typed.float32-array',
                'es6.typed.float64-array',
                'es6.object.set-prototype-of',
                'es6.function.name',
                'es6.regexp.match',
                'es6.regexp.replace',
                'es6.regexp.split',
                'es6.regexp.search',
                'web.dom.iterable'
            ]
        }]
    ].concat(presets),
    plugins: [
        'babel-plugin-transform-string-to-import',

        '@babel/plugin-syntax-jsx',
        'babel-plugin-transform-vue-jsx',

        // Stage 1
        '@babel/plugin-proposal-export-default-from',
        //'@babel/plugin-proposal-logical-assignment-operators',
        ['@babel/plugin-proposal-optional-chaining', { loose: true }],
        //['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
        '@babel/plugin-proposal-do-expressions',

        // Stage 2
        //['@babel/plugin-proposal-decorators', { legacy: true }],
        //'@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-export-namespace-from',
        //'@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',

        // Stage 3
        '@babel/plugin-syntax-dynamic-import',
        //'@babel/plugin-syntax-import-meta',
        //['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings'
    ].concat(plugins)
})