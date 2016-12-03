'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new HtmlWebpackPlugin({
    chunks: ['app'],
    template: 'client/index.html', // eslint-disable-line no-use-before-define
  }),
  new ExtractTextPlugin("[name].css")
];
var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

module.exports = {
  entry: {
      app: './client/index.js',
      // service: './app/js/workers/service-workers.js',
      // worker: './app/js/workers/workers.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css?$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?importLoaders=1!postcss-loader'
      })},
      { test: /\.less?$/, exclude: /node_modules/, loaders: [
        'style',
        'css-loader?importLoaders=2',
        'postcss',
        'less'
      ]}
    ],
  },

  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  devServer: {
     contentBase: "./dist",
     noInfo: false,//true, //  --no-info option
     hot: true,
     inline: true
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ["shared", "node_modules", "client/js"],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
};
