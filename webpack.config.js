const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'super.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        port: 3001
    },
    plugins: [
            new HtmlWebpackPlugin({
        title: 'Development',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
};