
//插件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

console.log('process.env.BUILD_DEV: %s \r\n', JSON.stringify(process.env)); //.BUILD_DEV
console.log('process.env.BUILD_PRERELEASE: %s \r\n', process.env.BUILD_PRERELEASE);
//
// var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');
var Q = require('q');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var deepcopy = require('deepcopy');

var _port = 9527;
// var devServerOption = {
//   url: 'webpack-dev-server/client?http://localhost:' + _port
// };

//webpack的通用配置信息
var webpackOption = {
  context: path.resolve(__dirname),
  // entry:{
  //   index: './js/index.js'
  // },
  resolve: {
    root: path.resolve(__dirname),
    extentions: ['', '.css', '.js'] //当require找不到时添加这些后缀
  },
  output: {
      path: '../dist/',
      // publicPath: '/dist/' //生成的文件中url href等的寻址地址
      filename: 'business/[name].bundle.js',
      chunkFilename: '[id].bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: nodeModulesPath,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: nodeModulesPath,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff)/,
        exclude: nodeModulesPath,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        exclude: nodeModulesPath,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin(
    //   {
    //     filename: '../dist/business/index.html',
    //     template: './common/template.html',
    //     inject: true,
    //     hash: true,
    //     minify: {
    //       removeComments: false,
    //       collapseWhitespace: false
    //     }
    //   }
    // )
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


var webpackOptions = [];

//根据约定，配置输出html和js
var getAllFiles = require('./fileUtil.js');
var p = path.resolve(__dirname);
var entryFiles = getAllFiles(p, '.entry.js', 'node_modules');
// console.log('entryFiles', entryFiles);
for(var i = 0, len = entryFiles.length; i < len; i++){
  var item = entryFiles[i];
  var entryOption = item;
  var htmlFilename = '';
  for(var key in item){
    htmlFilename = key;
  }
  var HtmlWebpackPluginOptin = {
      filename: '../dist/business/' + htmlFilename + '.html',
      template: './common/template.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false
      }
    };
  // var wbp = Object.assign({}, webpackOption);
  var wbp = deepcopy(webpackOption);
  // var wbp = util._extend({}, webpackOption);
  wbp.entry = entryOption;
  if(htmlFilename){
    // wbp.entry[htmlFilename].unshift(devServerOption.url);
    // console.log('wbp.entry[htmlFilename]:', wbp.entry[htmlFilename]);
  }
  // console.log('HtmlWebpackPluginOptin', HtmlWebpackPluginOptin);
  wbp.plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptin));
  //最后一个加入自动打开浏览器功能
  if(i == len - 1){
    wbp.plugins.push(new OpenBrowserWebpackPlugin({url: 'http://localhost:' + _port}));
  }
  // console.log('wbp', wbp);

  webpackOptions.push(wbp);


}
// console.log(webpackOptions);



module.exports = webpackOptions;
