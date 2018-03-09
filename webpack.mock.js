const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    devtool: 'source-map',
    
	entry: {
        'app': path.resolve(__dirname, './src/app.js'),
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
        new webpack.DefinePlugin({
			'process.env':{
                'IS_MOCK': true,
                'NODE_ENV': JSON.stringify(
                    process.env.NODE_ENV || 'development'
                )
            }
		}),
    ]
});