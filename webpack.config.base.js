const path = require('path');
const webpack = require('webpack');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssFor = require('postcss-for');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractCssPluginConfig = new ExtractTextPlugin({
    filename: '[name].[hash].css',
    disable: false,
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
});

const IgnorePluginConfig = new webpack.IgnorePlugin(/\.test(.js|.jsx)?$/);

module.exports = {
    entry: {
        main: './src/index.jsx',
    },
    output: {
        path: path.resolve('_dist'),
        chunkFilename: '[name].[hash].[chunkhash].min.js',
        filename: '[name].[hash].min.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    importLoaders: 1,
                    localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                },
            },
            {
                test: /\.css$/,
                loader: 'postcss-loader',
                options: {
                    plugins: () => [
                        postcssNested,
                        postcssImport,
                        postcssFor,
                        postcssPresetEnv({
                            browsers: '>1%',
                            autoprefixer: {
                                grid: true,
                                browsers: ['>1%'],
                            },
                            insertBefore: {
                                'all-property': postcssSimpleVars,
                            },
                        }),
                    ],
                },
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.(pdf)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 8000, name: 'documents/[hash]-[name].[ext]' },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.svg'],
        modules: [path.resolve('./node_modules')],
        alias: {
            Pages: path.resolve(__dirname, 'src/pages/'),
            Sections: path.resolve(__dirname, 'src/sections/'),
            Components: path.resolve(__dirname, 'src/components/'),
            StyledComponents: path.resolve(__dirname, 'src/styled-components/'),
            Images: path.resolve(__dirname, 'src/images/'),
            Downloads: path.resolve(__dirname, 'src/downloads/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Enum: path.resolve(__dirname, 'src/enum/'),
            Data: path.resolve(__dirname, 'src/data/'),
            Utils: path.resolve(__dirname, 'src/utils/'),
        },
    },
    plugins: [
        ExtractCssPluginConfig,
        HtmlWebpackPluginConfig,
        IgnorePluginConfig,
    ],
};
