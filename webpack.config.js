const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
	entry: {
		'app': path.resolve(__dirname, './src/app.js'),
		'vendors': ['react', 'react-router', 'history', 'antd'],
		'react-dom': ['react-dom'],
		'tools': ['lodash']
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: `[name].js`,
		chunkFilename: `[name].[chunkhash:5].chunk.js`
	},

	plugins: [
		new HTMLWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["chunk", "vendors", "react-dom", "tools"],
			minChunks: 2
		}),
	]
});