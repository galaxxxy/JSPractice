const assert = require('../common.js');
function whatever(a, b, c) {
  assert(a === 1,'the value of a is 1');
  assert(b === 2,'the value of b is 2');
  assert(c === 3,'the value of c is 3');

  assert(arguments.length === 5, 'we\'ve passed in 5 parameters');
  assert(arguments[0] === a, 'the first argument is assigned to a');
  assert(arguments[1] === b, 'the second argument is assigned to b');
  assert(arguments[2] === c, 'the third argument is assigned to c');
  assert(arguments[3] === 4, 'we cam access the fourth argument');
  assert(arguments[4] === 5, 'we cam access the fifth argument');
}

whatever(1, 2, 3, 4, 5);