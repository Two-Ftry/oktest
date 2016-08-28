// require('babel-polyfill');
import 'babel-polyfill';
import $ from 'jQuery';
// var cats = require('./test.js');
import cats from './test.js';

var html = '<ul>';
for(var i = 0, len = cats.length; i < len; i++){
  html += '<li>' + cats[i] + '</li>';
}
html += '</ul>';

$('body').append(html);

console.log(cats);
