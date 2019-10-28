const assert = require('../common.js');

function whatsMyContext() {
  return this;
}
assert(whatsMyContext() === global, 'function call on global');

const getMyThis = whatsMyContext;

assert(getMyThis() === global, 'another function call in global');

const ninja1 = {
  getMyThis,
};
assert(ninja1.getMyThis() === ninja1, 'working with 1st ninja');

const ninja2 = {
  getMyThis,
};
assert(ninja2.getMyThis() === ninja2, 'working with 2nd ninja');