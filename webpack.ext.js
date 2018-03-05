const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const PROXY = {
    host: "http://10.45.9.88"
}

module.exports = merge(common,{
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
        'antd': 'antd'
    },

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            name: ["chunk"],
            minChunks: 2
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        proxy:{
            "/api/*": {
                target: PROXY.host
            }
        }
    }
});