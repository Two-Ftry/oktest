
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var path = require('path');
var deepcopy = require('deepcopy');

//读取命令行中启动的参数
var argv = require('yargs').argv;
// var env = argv.env;
var env = require('./env/' + argv.env);//根据命令行参数 --env 读取配置文件
env.__ENTRIES__ = [];
console.log('env.__BASE_DIR__:', env.__BASE_DIR__);

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var _port = '9527';

var outputFilename = '',
    destinationPath = '';
if(env.__DEBUG__){
  outputFilename = '[name].bundle.js';
  destinationPath = './';
}else{
  outputFilename = '[name]-[hash:6].bundle.js';//-[hash]-[hash:6]
  destinationPath = '../dist/';
}

var webpackConfig = {
  output: {
    path: destinationPath,
    filename: outputFilename,
    publicPath: env.__BASE_DIR__.replace(/"/g, '')
    // env.__BASE_DIR.replace(/"/g, ''),
  },
  cache: true,
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js', '.css', '.scss', '.sass', '.less']
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
        exclude: nodeModulesPath,
        // loader: 'style-loader!css-loader'
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(scss|sass)$/,
        exclude: nodeModulesPath,
        // loader: 'style-loader!css-loader!sass-loader'
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.html$/,
        exclude: nodeModulesPath,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        exclude: nodeModulesPath,
        loader: 'file-loader?name=[path][name]-[hash:6].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff)/,
        exclude: nodeModulesPath,
        // loader: 'url-loader'
        loader: 'file-loader?name=[path][name]-[hash:6].[ext]'
      },
      {
        test: /\.htc$/,
        exclude: nodeModulesPath,
        // loader: 'url-loader'
        loader: 'file-loader?name=[path][name]-[hash:6].[ext]'
      }
    ]
  },
  postcss: [
    autoprefixer({browsers:['last 2 versions']})
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('all.js')
  ]
};

//chrome 调试使用
if(env.__DEBUG__){
  webpackConfig.devtool = 'source-map';
}

var getAllFiles = require('./fileUtil.js');
var entryFiles = getAllFiles(path.resolve(__dirname), '.entry.js', 'node_modules');
if(env.__DEBUG__){
  entryFiles.unshift({"index": path.resolve(__dirname, './business/index.js')});
}
env.__ENTRIES__ = JSON.stringify(entryFiles);

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
    template: './common/template.ejs',
    baseDir: env.__BASE_DIR__.replace(/"/g, ''),
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

  if(env.__DEBUG__){
    config.plugins.push(new ExtractTextWebpackPlugin('[name].css'));
  }else{
    config.plugins.push(new ExtractTextWebpackPlugin('[name]-[contenthash:6].css'));
  }

  //第一个清空dist文件夹
  if(i == 0 && !env.__DEBUG__){
    config.plugins.push(new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }));
  }

  //最后一个加入自动打开浏览器功能
  if(i == len - 1){
    if(env.__DEBUG__){
      config.plugins.push(new OpenBrowserWebpackPlugin({url: 'http://localhost:' + _port}));
    }
    if(!env.__DEBUG__){
      config.plugins.push(new CopyWebpackPlugin([
        {from: path.resolve(__dirname, 'lib'),
          to: path.resolve(__dirname, destinationPath + 'lib')},
        {from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, destinationPath + 'assets')}
      ]));
    }
  }
  config.plugins.push(new webpack.DefinePlugin(env));

  webpackConfigArray.push(config);
}

module.exports = webpackConfigArray;
