
require('../../common/css/normalize.css');
require('../../common/css/common.css');
require('../../common/css/fonts/iconfont.css');
require('./style.css');

import $ from 'jQuery';

var _class = {
  iconBox: 'ev-icon-box',
  orange: 'orange',
  img: 'ev-b-img',
  scale: 'img-scale',
  tx: 'ev-tx',
  mt: 'index-mt',
  borderRed: 'border-red'
};

var _isClick = false;

function init(){
  var dom = require('./template.html');
  $('#main').replaceWith(dom);
  initEvent();
}

function initEvent(){
  $('.' + _class.iconBox + ' li').click(function(){
    var $this = $(this);
    if($this.hasClass(_class.orange)){
      $this.removeClass(_class.orange);
    }else{
      $this.addClass(_class.orange);
    }
  });

  $('.' + _class.img).click(function(){
    var $this = $(this);
    if($this.hasClass(_class.scale)){
      $this.removeClass(_class.scale);
    }else{
      $this.addClass(_class.scale);
    }
  });

  $('.' + _class.tx).hover(function(){
    if(!_isClick){
      $(this).addClass(_class.scale);
      $(this).addClass(_class.mt);
    }
  }, function(){
    if(!_isClick){
      $(this).removeClass(_class.scale);
      $(this).removeClass(_class.mt);
    }
  });

  $('.' + _class.tx).click(function(){
    _isClick = !_isClick;
    if(_isClick){
      $('.' + _class.tx).addClass(_class.borderRed);
    }else{
      $('.' + _class.tx).removeClass(_class.borderRed);
    }
  });
}



$(function(){
  init();
  var html = '<img class="b-img ev-center-img ev-b-img" src="' + require('../../images/下载.png') + '" alt="" />';
  $('body').append(html);

});
