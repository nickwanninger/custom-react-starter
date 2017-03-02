var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./src/index.js'
	],
	module: {
		loaders: [{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass', 'sass-bulk-import']

			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
