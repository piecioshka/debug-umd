'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        'debug-umd': './index.js',
        'debug-umd.min': './index.js'
    },

    devtool: 'source-map',

    output: {
        library: 'debug',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].js',
        path: 'dist/'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
