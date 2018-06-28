const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const PATHS = require('./webpack-paths')

exports.babel = {
	test: /\.(js|jsx)$/,
	exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/, /node_modules/],
	use: ['babel-loader']
}

// exports.extractCss = (() => {
//   return {
//     test: /\.css$/,
//     use: ExtractTextPlugin.extract(
//       {
//         fallback: 'style-loader',
//         use: ['css-loader']
//       })
//   }
// })();

exports.extractCss = {
	test:    /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
				},
				options: {
					presets: ['react']
				}
      },
    ],
  }),
};

exports.devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port,
			contentBase: './dist',
		},
		plugins: [
			// new webpack.HotModuleReplacementPlugin({
			// 	multistep: true
			// })
		],
	};
};