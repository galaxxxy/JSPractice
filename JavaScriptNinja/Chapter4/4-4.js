'use strict';
//严格模式下 改变arguments的值不会引起传入参数的变化
const assert = require('../common');

function infiltrate(person) {
  assert(person === 'gardener', 'the person is gardener');
  assert(arguments[0] === 'gardener', 'the first argument is gardener');
  arguments[0] = 'ninja';

  assert(arguments[0] === 'ninja', 'the first argument is a ninja');
  assert(person === 'gardener', 'the person is gardener once more');
}
infiltrate('gardener');