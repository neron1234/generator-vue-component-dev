/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:  [/node_modules/, /dist/],
      },
    ],
  },
  devServer: {
    contentBase: './',
    port: 9001,
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      '<%= packageName %>': '../../dist/index',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
