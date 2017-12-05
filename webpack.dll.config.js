const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: [
            'react',
            'react-dom',
            'react-router',
            'history'
            ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/bundle.manifest.json',
            name: '[name]_library',
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            comments: false,
            ie8: true
        })
    ]
};