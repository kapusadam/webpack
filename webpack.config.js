const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/index.ts',

    output: {
        filename: "bundle.js"
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: ['ts', 'js'],
        alias: {
            'node_modules': path.join(__dirname, 'node_modules'),
            'axios': path.join(__dirname, '/node_modules/axios/dist/axios.js'),
            'moment': path.join(__dirname, './node_modules/moment/moment.js'),
            'moment-range': path.join(__dirname, './node_modules/moment-range/dist/moment-range.js'),
        }
    },
    module: {
       rules:  [
           { test: /\.ts$/, loaders: "ts-loader" }
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '_': 'lodash',

        }),
        new HtmlWebPackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
        new LiveReloadPlugin({}),
        new webpack.IgnorePlugin(/^\.\/locale$/),
    ]
    // externals : [
    //     { "axios": {
    //             commonjs: "axios",
    //
    //         }},
    //     nodeExternals({
    //         // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
    //         whitelist: [/^lodash/, 'axios']
    //     })
    // ]
};