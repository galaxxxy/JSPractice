const assert = require('../common');

assert(typeof fun === 'function', 'fun is a function even though its definition isn\'t reached yet!');

assert(typeof myFunExp === 'undefined', 'but we cannot access function expression');

assert(typeof myArrow === 'undefined', 'Nor arrow functions');

function fun() {}

var myFunExp = function() {};
var  myArrow = x => x;
