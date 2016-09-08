
// require('../../common/css/normalize.css');
// require('../../common/css/common.css');
// require('../../common/css/fonts/iconfont.css');
require('./style.css');

import $ from 'jQuery';

var Validation = require('../../common/js/common.js');
require('../../common/js/validation.js');

var _class = {
  username: 'ev-username',
  pwd: 'ev-pwd',
  checkCode: 'ev-check-code'
}

function init(){
  var dom = require('./template.html');
  $('#main').replaceWith(dom);
  initEvent();
}

function initEvent(){
  $('.ev-login-btn').click(function(){
    var username = $('.' + _class.username).val();
    var pwd = $('.' + _class.pwd).val();
    var checkCode = $('.' + _class.checkCode).val();

    var r = true;
    //用户名
    r = Validation.checkPhone(username);
    if(!r){
      r = Validation.checkEmail(username);
    }
    if(!r){
      alert('用户名不正确!!!');
      return;
    }

    //密码
    r = Validation.checkNull(pwd);
    if(!r){
      alert('密码不能为空');
      return ;
    }

    // 验证码
    r = Validation.checkNull(checkCode);
    if(!r){
      alert('验证码不能为空!!!');
      return;
    }

    window.location.href = 'center.html';

  });

}



$(function(){

  init();


});
