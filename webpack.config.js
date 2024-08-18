const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// The source of react stuff
var DIR_React_Project_src = "src"

module.exports = {
    entry: path.join(__dirname, `./${DIR_React_Project_src}/index.js`),
    output: {
        filename: "build.js",
        path: path.join(__dirname, "/dist")
    },

    resolve: {
        modules: ['node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, `./${DIR_React_Project_src}/index.html`)
        })
    ]
}