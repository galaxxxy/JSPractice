const assert = require('../common');

const ninjas = ['Yagyu', 'Yoshi', 'Kuma', 'Yoshi'];

assert(ninjas.indexOf('Yoshi') === 1, 'Yoshi is at index 1');
assert(ninjas.lastIndexOf('Yoshi') === 3, 'and at index 3');

const yoshiIndex = ninjas.findIndex(ninja => ninja === 'Yoshi');

assert(yoshiIndex === 1, 'Yoshi is still at index 1');