const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理构建文件夹 

module.exports = merge(common, {
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: `[name].js`,
		chunkFilename: `[name].[chunkhash:5].js`
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'react-router': 'ReactRouter',
		'history': 'History',
		'antd': 'antd',
		'lodash': '_'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["chunk"],
			minChunks: 2
		}),
		new CleanWebpackPlugin(
			['build/*.js', 'build/*.html'],
			{
				root: __dirname,       　　　　　　　　　　//根目录
				verbose: true,        　　　　　　　　　　//开启在控制台输出信息
				dry: false        　　　　　　　　　　//启用删除文件
			}),
		new webpack.DefinePlugin({
			'process.env': {
				'IS_MOCK': false,
				'NODE_ENV': JSON.stringify(
					process.env.NODE_ENV || 'prod'
				)
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false,
			ie8: true
		})
	],
});