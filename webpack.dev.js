const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理构建文件夹 

module.exports = {
	devtool : 'source-map',
	
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
		vendors: ['react', 'react-dom', 'react-router', 'history'],
		'react-dom': ['react-dom']
	},

	output: {
		publicPath: '/build/',
		path: path.resolve(__dirname, './build'),
		filename: `[name].js`,
		chunkFilename: `work/[name].[chunkhash:5].chunk.js`
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
		new HTMLWebpackPlugin(),
		new ExtractTextPlugin("style.css"),
		new CleanWebpackPlugin(
			['build/*.js','build/*.html'],
			{
        root: __dirname,       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
    	}),
		new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify(
	      process.env.NODE_ENV || 'prod'
	  	)
	  }),
	  new webpack.optimize.CommonsChunkPlugin({
	    name:["chunk", "vendors", "react-dom"],
	    minChunks:2
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
	]
}