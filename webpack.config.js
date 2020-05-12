const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[hash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // devtool: false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        }),
    ]
}
