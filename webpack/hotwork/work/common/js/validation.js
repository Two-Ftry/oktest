/*
 * @desc 验证方法
 */
 import $ from 'jQuery';

// (function($){
  var validation = {
    checkNull: function(obj){
      var val = this.__getValue(obj);
      return val ? true : false;
    },
    checkPhone: function(obj){
      var val = this.__getValue(obj);
      if(!val){
        return false;
      }
      // var regexp = new RegExp('/^[1-9][0-9]{10}$/', 'gi');
      // var regExp = new RegExp('/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/', 'gi');
      var phoneno = /^1[3|4|5|7|8]\d{9}$/;
      var r = phoneno.test(val);
      return r;
    },
    checkEmail: function(obj){
      var val = this.__getValue(obj);
      if(!val){
        return false;
      }
      // var regExp = new RegExp('/[0-9a-zA-Z]+@\w\d+\.\w+/', 'gi');
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var r = re.test(val);
      return r;
    },
    isSame: function(obj1, obj2){
      var val1 = this.__getValue(obj1);
      var val2 = this.__getValue(obj2);
      return val1 == val2 ? true : false;
    },
    __getValue: function(obj){
      if(!obj){
        return '';
      }
      if(typeof obj == 'string'){
        return $.trim(obj);
      }else if(obj instanceof $){
        return $.trim(obj.val());
      }else{
        var $obj = $(obj);
        if($obj.length > 0){
          return $.trim($obj.val());
        }
      }
    }
  };

module.exports = validation;
//   window.Validation = validation;
// })(jQuery);
