const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: path.join(__dirname, 'src/index.js')
	},
	output: {
		path: path.join(__dirname, '/assets'),
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/, //ReGex
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'react', 'stage-2' ],
							plugins: [ 'transform-decorators-legacy' ]
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, 'src/index.html'),
			filename: path.join(__dirname, 'assets/index.html')
		})
	]
}
