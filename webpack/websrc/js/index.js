
require('../css/normalize.css');
require('../css/common.css');
require('../css/index.css');
require('../css/fonts/iconfont.css');

// require('../css/normalize');
// require('../css/common');
// require('../css/index');
// require('../css/fonts/iconfont');

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


});
