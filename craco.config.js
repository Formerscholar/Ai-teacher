const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const CracoVtkPlugin = require('craco-vtk')
const CracoLessPlugin = require('craco-less')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  devServer: {
    port: 8088,
    https: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://test.aictb.com:8080',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
      new HardSourceWebpackPlugin(),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 1024,
        minRatio: 0.8,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true,
          },
        },
      },
      UglifyJsPlugin: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
        },
      },
    },
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoVtkPlugin(),
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
