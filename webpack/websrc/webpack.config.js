
//插件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//
// var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');
var Q = require('q');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var deepcopy = require('deepcopy');

var _port = 9527;

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
      path: path.resolve(__dirname, '../dist'),
      // publicPath: path.resolve(__dirname, '/'), //生成的文件中url href等的寻址地址
      filename: '[name]-[hash].bundle.js',
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
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   exclude: nodeModulesPath,
      //   loader: 'url-loader'
      // },
      { test: /\.(jpg|jpeg|png|gif)$/,
        exclude: nodeModulesPath,
        loader: "file-loader?name=/[path][name]-[hash:8].[ext]"
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
console.log('entryFiles: ', entryFiles, '\r\n');
var isDev = false;
for(var i = 0, len = process.argv.length; i < len; i++){
  var item = process.argv[i];
  if(item.indexOf('webpack-dev-server') != -1){
    isDev = true;
    break;
  }
}
for(var i = 0, len = entryFiles.length; i < len; i++){
  var item = entryFiles[i];
  var entryOption = item;
  var htmlFilename = '';
  for(var key in item){
    htmlFilename = key;
  }
  // var htmlFilenames = htmlFilename.split('/');
  // htmlFilename = '';
  // for(var j = 0, jlen = htmlFilenames.length; j < jlen - 1; j++){
  //   htmlFilename += htmlFilenames[j] + '/';
  // }
  var HtmlWebpackPluginOptin = {
      filename: '../dist' + htmlFilename + '.html',
      template: './common/template.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false
      }
    };
  var wbp = deepcopy(webpackOption);
  wbp.entry = entryOption;
  if(htmlFilename){
    // wbp.entry[htmlFilename].unshift(devServerOption.url);
  }
  wbp.plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptin));
  //第一个清空dist文件夹
  if(i == 0 && !isDev){
    wbp.plugins.push(new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }));
  }
  //最后一个加入自动打开浏览器功能
  if(i == len - 1){
    wbp.plugins.push(new OpenBrowserWebpackPlugin({url: 'http://localhost:' + _port}));
    wbp.plugins.push(new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'lib'),
        to: path.resolve(__dirname, '../dist/lib')},
        {from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, '../dist/assets')}
    ]));
  }

  webpackOptions.push(wbp);

}



module.exports = webpackOptions;
