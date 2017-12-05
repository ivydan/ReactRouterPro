const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //打包分析器

module.exports = {
	devtool : 'source-map',
	
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
	},

	output: {
		path: path.resolve(__dirname, './build'),
		filename: `[name].js`,
		chunkFilename: `[name].[chunkhash:5].chunk.js`
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'history': 'History',
        'antd': 'antd'
    },

	resolve: {
		extensions:['.js','.jsx','.json'],
		alias: {
            routes: path.resolve(__dirname, 'util/routes.js'),
            auth: path.resolve(__dirname, 'util/auth.js'),
            utils: path.resolve(__dirname, 'util/utils.js'),
            components: path.resolve(__dirname, 'components')
        }
	},

    module:{
    loaders:[
        {
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        },{
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
        }, {
            test: /\.less/,
            exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
        },{ 
            test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192' 
        }],
    },

	plugins: [
		new ExtractTextPlugin("style.css"),
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
            process.env.NODE_ENV || 'development'
            )
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:["chunk"],
            minChunks:2
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new OpenBrowserPlugin({url: 'http://localhost:8080'}),
		new BundleAnalyzerPlugin(),
	]
}