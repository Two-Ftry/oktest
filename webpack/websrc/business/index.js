
// require('./style.css');
// import $ from 'jQuery';
//
// console.log('__ENTRIES__', __ENTRIES__);
console.log('__ENTRIES__', __ENTRIES__);

$(function(){
  for(var i = 0, len = __ENTRIES__.length; i < len; i++){
    var item = __ENTRIES__[i];
    for(var key in item){
      if(key.indexOf('index') == -1){
        $('body').append('<a href="' + key + '.html">' + key + '</a><br/>');
      }
    }
  }
});
