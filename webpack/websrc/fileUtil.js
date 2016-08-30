/*
 * @desc
 */

var path = require('path');
var fs = require('fs');

var getAllFiles = function(filepath, filter){
  if(!filepath){
    return;
  }
  var result = {};
  var files = fs.readdirSync(filepath);
  files.forEach(function(filename){
    var p = path.resolve(filepath, filename);
    var stat = fs.statSync(p);
    if(!stat.isDirectory()){
      if(filename.indexOf(filter) != -1){
        result[filename] = filename;
      }
    }else{
      var r = getAllFiles(p, filter);
      contactObjs(result, r);
    }
  });
  return result;
};

function contactObjs(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
}
// var p = path.resolve(__dirname, 'business');
// var r = getAllFiles(p, '.entry.js');
// console.log(r);

module.exports = getAllFiles;
