/*
 * @desc
 */

var path = require('path');
var fs = require('fs');

var getAllFiles = function(filepath, filter, exclude){
  if(!filepath){
    return;
  }
  var result = [];
  if(filepath && exclude && filepath.indexOf(exclude) != -1){
    return result;
  }
  var files = fs.readdirSync(filepath);
  files.forEach(function(filename){
    var p = path.resolve(filepath, filename);
    var stat = fs.statSync(p);
    if(!stat.isDirectory()){
      if(filename.indexOf(filter) != -1){
        // var key = filename.split(filter)[0];
        // var keySourceString = path.resolve(filepath, filename);
        var keySourceString = path.resolve(filepath);
        if(keySourceString.indexOf('\\')  != -1){//window \\ mac linux /
          keySourceString = keySourceString.replace(new RegExp('\\\\', 'gm'), '/');
          // keySourceString = keySourceString.replaceAll('\\', '/');
          console.log('keySourceString:', keySourceString);
        }
        var keys = keySourceString.split('work/');
        var key = keys[keys.length-1];
        if(!key){
          return;
        }
        // key = key.split(filter)[0];
        // if(!key){
        //   return;
        // }
        var obj = {};
        // obj[key] = path.resolve(filepath, filename);
        obj[key] = [];
        obj[key].push(path.resolve(filepath, filename));
        result.push(obj);
      }
    }else{
      var r = getAllFiles(p, filter, exclude);
      // contactObjs(result, r);
      result = result.concat(r);
    }
  });
  return result;
};

// var p = path.resolve(__dirname);
// var r = getAllFiles(p, '.entry.js', 'node_modules');
// console.log(r);

module.exports = getAllFiles;
