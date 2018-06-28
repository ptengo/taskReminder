const webpack = require('webpack');
const PATHS = require('./webpack-paths')
const plugins = require('./webpack-plugins');
const loaders = require('./webpack-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

// module.exports = {
//   entry: [
//     'react-hot-loader/patch',
//     './src/index.js'
//   ],
//   module: {
//     rules: [
//       loaders.babel,
//       loaders.extractCss
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     plugins.loaderOptions,
//     plugins.environmentVariables,
//     plugins.manifest,
//     plugins.sw
//     // plugins.extractText
//   ],
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   },
//   performance: { 
//     hints: false 
//   }
// };

const common = {
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // loaders.babel,
      // loaders.extractCss,
    ],
  },
  resolve: {
    alias: {
      components: PATHS.components,
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
    plugins.extractText,
    // 'react-hot-loader/babel'
  ],
};

let config;

switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(
      common,
      {
        devtool: 'source-map',
        plugins: [
          plugins.loaderOptions,
          plugins.environmentVariables,
          // plugins.uglifyJs,
          plugins.manifest,
          plugins.sw,
        ],
      }
    );
    break;
  case 'development':
    config = merge(
      common,
      { devtool: 'eval-source-map'},
      loaders.devServer({
        host: process.env.host,
        port: process.env.port,
      })
    );
    break;
}

module.exports = config;