const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const CracoVtkPlugin = require('craco-vtk')
const CracoLessPlugin = require('craco-less')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devServer: {
    port: 8088,
    https: false,
    disableHostCheck: true,
    proxy: {
      '/teacher': {
        target: 'https://api2.aictb.com',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/teacher': '/teacher',
        },
      },
    },
  },
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
      // new UglifyJSPlugin({
      //   uglifyOptions: {
      //     mangle: true,
      //     warnings: false,
      //     compress: {
      //       pure_getters: true,
      //       unsafe: true,
      //       unsafe_comps: true,
      //       drop_debugger: true,
      //       drop_console: true,
      //     },
      //     output: {
      //       comments: false,
      //     },
      //   },
      //   exclude: [/\.min\.js$/gi],
      // }),
      new HardSourceWebpackPlugin(),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' + ['js', 'jsx', 'css', 'less'].join('|') + ')$'
        ),
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
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
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
            modifyVars: {
              'primary-color': '#E50304',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
