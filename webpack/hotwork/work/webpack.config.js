
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

var path = require('path');
var deepcopy = require('deepcopy');
var argv = require('yargs').argv;
var env = argv.env;
var __ENV_DEVELOP__ = false;
if(env == 'develop'){
  __ENV_DEVELOP__ = true;
}

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var _port = '8080';

var outputFilename = '',
    destinationPath = '';
if(__ENV_DEVELOP__){
  outputFilename = '[name].bundle.js';
  destinationPath = './';
}else{
  outputFilename = '[name]-[hash:6].bundle.js';//-[hash]-[hash:6]
  destinationPath = '../dist/';
}

var webpackConfig = {
  output: {
    path: destinationPath,
    filename: outputFilename
  },
  cache: true,
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: nodeModulesPath,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: nodeModulesPath,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        exclude: nodeModulesPath,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        exclude: nodeModulesPath,
        loader: 'file-loader?name=/[path][name]-[hash:6].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff)/,
        exclude: nodeModulesPath,
        // loader: 'url-loader'
        loader: 'file-loader?name=/[path][name]-[hash:6].[ext]'
      }
    ]
  },
  plugins: []
};

//chrome 调试使用
if(__ENV_DEVELOP__){
  webpackConfig.devtool = 'source-map';
}

var getAllFiles = require('./fileUtil.js');
var entryFiles = getAllFiles(path.resolve(__dirname), '.entry.js', 'node_modules');
entryFiles.unshift({"index": path.resolve(__dirname, './business/index.js')});
// console.log('entryFiles', entryFiles, '\r\n');

var webpackConfigArray = [];

for(var i = 0, len = entryFiles.length; i < len; i++){

  var entryOption = entryFiles[i];

  var config = deepcopy(webpackConfig);

  config.entry = entryOption;

  var htmlFilename = '';
  for(var key in entryOption){
    htmlFilename = key;
  }
  if(!htmlFilename){
    return;
  }

  //plugins
  config.plugins.push(new HtmlWebpackPlugin({
    filename: destinationPath + htmlFilename + '.html',
    template: './common/template.html',
    inject: true,
    hash: true,
    minify: {
      removeComments: false,
      collapseWhitespace: false
    }
  }));

  //对index的输出做特殊处理(index带有hash值会导致无法热更新)
  if(htmlFilename.indexOf('index') != -1){
    config.output.filename = '[name].bundle.js';
  }

  //第一个清空dist文件夹
  if(i == 0 && !__ENV_DEVELOP__){
    config.plugins.push(new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }));
  }

  //最后一个加入自动打开浏览器功能
  if(i == len - 1){
    if(__ENV_DEVELOP__){
      config.plugins.push(new OpenBrowserWebpackPlugin({url: 'http://localhost:' + _port}));
    }
    if(!__ENV_DEVELOP__){
      config.plugins.push(new CopyWebpackPlugin([
        {from: path.resolve(__dirname, 'lib'),
          to: path.resolve(__dirname, destinationPath + 'lib')},
          {from: path.resolve(__dirname, 'assets'),
            to: path.resolve(__dirname, destinationPath + 'assets')}
      ]));
    }
  }

  webpackConfigArray.push(config);
}

module.exports = webpackConfigArray;
