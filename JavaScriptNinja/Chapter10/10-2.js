const assert = require('../common');

const re1 = /test/i,
  re2 = new RegExp('test', 'i');

assert(re1.toString() === '/test/i', 'Verify the contents of the expression.');

assert(re1.test('TesT'), 'Yes, it\'s case-insenstive.');
assert(re2.test('TesT'), 'This one is too.');

assert(re1.toString() === re2.toString(), 'The regular expressions are equal.');

assert(re1 !== re2, 'But they are different objects.');