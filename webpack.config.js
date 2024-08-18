const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// The source of react stuff
var DIR_React_Project_src = "src"

module.exports = {
    entry: path.join(__dirname, `./${DIR_React_Project_src}/index.js`),

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },

    resolve: {
        modules: ['node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: [
            '.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.cjs', '.mjs'
        ],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, `./${DIR_React_Project_src}/index.html`)
        })
    ]
}