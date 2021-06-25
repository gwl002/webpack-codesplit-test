const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry:
    {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host: "localhost",
        open: true,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    optimization: {
        moduleIds: 'deterministic',
        // runtimeChunk: "single",
        splitChunks: {
            chunks: 'all',
        },
        minimize: false,
    }
};