const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
console.log("process.argv", process.argv);
var entry = {
    app: './src/index.js',
    adminApp: './src/index-admin.js'
}
var output = path.join(__dirname, '/dist');
if(process.argv[4] == "--admin") {
    entry = path.resolve(__dirname, 'src/index-admin.js');
    output = path.join(__dirname, '/dist-admin');
    console.log(entry);
}

module.exports = {
    entry: entry,
    output: {
        path: output,
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
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
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
