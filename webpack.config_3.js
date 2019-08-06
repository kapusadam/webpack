/* eslint-disable no-var */
var path = require('path');
var autoprefixer = require('autoprefixer');

const MATCH_ALL_NON_RELATIVE_IMPORTS = /^\w.*$/i;

module.exports = [{
    output: {
        filename: '[name].js',
        library: 'atrium-react-plugin-beta',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'), // where to place webpack files
    },
    entry: {
        plugin: './plugin.js',
        'server/run': './server/run.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel',
        }],
    },
    externals: [MATCH_ALL_NON_RELATIVE_IMPORTS, {
        './src/index.ts': 'commonjs ./src/index.ts',
    }],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    }
}, {
    output: {
        filename: '[name].js',
        library: 'atrium-react-plugin-beta',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'), // where to place webpack files
    },
    entry: {
        'src/index': './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                // eslint-disable-next-line max-len
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=atriumReactPlugin__[local]__[hash:base64:5]!postcss-loader',
            },
        ],
    },
    externals: [MATCH_ALL_NON_RELATIVE_IMPORTS],
    target: 'web'
}];