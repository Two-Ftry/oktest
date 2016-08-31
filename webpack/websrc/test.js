
var deepcopy = require('deepcopy');

var a = {a1: 'a1', a2: 'a2', plugins: []};
var b = {};

// b = Object.assign({}, a);
b = deepcopy(a);

b.plugins.push('bArray1');

b['b1'] = 'b1';

console.log('a', a);
console.log(b);

module.exports = a;
