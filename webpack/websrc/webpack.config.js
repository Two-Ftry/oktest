
const webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  context: path.resolve(__dirname),
  // entry: ['js/index.js', 'js/login.js', 'js/register.js'],
  entry:{
    index: ['./js/index.js'],
    login: './js/login.js',
    register: './js/register.js'
  },
  resolve: {
    root: path.resolve(__dirname),
    extentions: ['', '.css', '.js'] //当require找不到时添加这些后缀
  },
  output: {
      path: '../dist/',
      // publicPath: '/dist/' //生成的文件中url href等的寻址地址
      filename: '[name].bundle.js',
      chunkFilename: '[id].bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(eot|svg|ttf|woff)/,
        exclude: /node_modules/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
