const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';

const plugins = [
	new HTMLWebpackPlugin(),
	new ExtractTextPlugin("style.css"),
	new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
	  	)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
]

if(nodeEnv === 'production'){
	plugins.push(
		new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            ie8: true
        }))
}else{
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
	)
}

module.exports = {
	devtool : 'source-map',
	
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
		vendor: ['react', 'react-dom']
	},

	output: {
		publicPath: '/build/',
		path: path.resolve(__dirname, './build'),
		filename: `app.js`,
		chunkFilename: `[name].[chunkhash:5].chunk.js`
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

	plugins: plugins
}