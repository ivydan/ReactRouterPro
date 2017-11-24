const webpack = require('webpack');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
  'react-router'
];

module.exports = {
  output: {
    path: path.resolve(__dirname, './plugin'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      ie8: true
    })
  ],
};