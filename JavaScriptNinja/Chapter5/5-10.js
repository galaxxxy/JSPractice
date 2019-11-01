const assert = require('../common');

assert(typeof fun === 'function', 'we access the function');

var fun = 3;
assert(typeof fun === 'number', 'now we access the number');


function fun() {}

assert(typeof fun === 'number', 'still a number');