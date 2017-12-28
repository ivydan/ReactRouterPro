const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: [
            'react',
            'react-dom',
            'react-router',
            'history',
            'lodash',
            'antd'
        ],
    },
    output: {
        path: path.resolve(__dirname, './dllPlugins'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: './dllPlugins/manifest.json',
            name: '[name]_library',
            context: __dirname,
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     comments: false,
        //     ie8: true
        // })
    ]
};