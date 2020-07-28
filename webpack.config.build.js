const { merge } = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const WebpackCleanupPluginConfig = new WebpackCleanupPlugin({
  exclude: ['webpack.stats.json'],
  quiet: true,
});

module.exports = () =>
  merge(baseConfig, {
    mode: 'production',
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
      noEmitOnErrors: true,
      concatenateModules: true,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
      ],
    },
    plugins: [WebpackCleanupPluginConfig],
  });
