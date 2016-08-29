
const webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');
var Q = require('q');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

readEntryFiles(path.resolve(__dirname, 'business'), '.entry.js').then(function(data){
  console.log('oooooooo-----xxxx', data);
}, function(error){
  console.log('entryFiles', error);
});


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

/* 读取entry.js后缀的文件 */
function readEntryFiles(filePath, filter){
  var deferred = Q.defer();
  fs.readdir(filePath, function(err, files){
    var result = {};
    files.forEach(function(filename, index){
      console.log('index ', index, files.length);
      var p = path.resolve(filePath, filename);
      getFileStat(p, filename, filter).then(function(data){
        contactObjs(result, data);
        console.log('readEntryFiles', result);
        if(index == files.length-1){
          deferred.resolve(result);
        }
      }, function(){
        deferred.reject({msg: 'error!!!'});
      });
    });

  });
  return deferred.promise;
}

function getFileStat(p, filename, filter){
  var deferred = Q.defer();
  fs.stat(p, function(err, stats){
    if(stats.isFile()){
      var result = {};
      addFile(result, filename, filter);
      deferred.resolve(result);
    }else if(stats.isDirectory()){
      readEntryFiles(p, filter).then(function(data){
        // contactObjs(result, data);
        console.log('getFileStat', data);
        deferred.resolve(data);
      }, function(){
        deferred.reject({msg:'nonono!!!'});
        console.log('readEntryFiles fail!!!');
      });
    }
  });
  return deferred.promise;
}

function contactObjs(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
}

function addFile(result, filename, filter){
  var flag = false;
  if(filter){
    if(filename.indexOf(filter) != -1){
      flag = true;
    }
  }else{
    flag = true;
  }
  if(flag){
    result[filename] = filename;
    // fs.readFile(filename, function(data){
    //   result[filename] = data;
    // });
  }
}
