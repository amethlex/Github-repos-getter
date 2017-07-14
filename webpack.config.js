/*
    ./webpack.config.js
*/
'use strict'
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  devtool: "cheap-source-map",
  
  resolve: {
    // Files with the following extensions here can be "import"
    // without the extension.
    //
    // Needs ".json" and ".scss" for Grommet.
  extensions: [".wepack.js", ".web.js",
                     ".jsx", ".js",
                     ".json",
                     ".scss", ".css",
                     ".png", ".svg"],

  alias: {
            store: path.resolve(__dirname, "src/store"),
            components: path.resolve(__dirname, "src/components"),
      }
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}},  "less-loader"]
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  node: {
  dns: 'mock',
  net: 'mock',
  },
  plugins: [HtmlWebpackPluginConfig]
}
