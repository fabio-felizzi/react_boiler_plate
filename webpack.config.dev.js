const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const WebpackHotModuleReplacementConfig = new webpack.HotModuleReplacementPlugin();

const PurgeCSSConfig = new PurgecssPlugin({
    paths: glob.sync(path.join(__dirname, '/src/**/*'), { nodir: true }),
});


module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
        },
    },
    resolve: {
        alias: {
            services: path.resolve(__dirname, 'src/services'),
        },
    },
    plugins: [
        WebpackHotModuleReplacementConfig,
        PurgeCSSConfig,
    ],
});
