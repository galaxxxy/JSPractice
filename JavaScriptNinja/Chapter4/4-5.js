const assert = require('../common');

function ninja() {
  return this;
}

function samurai() {
  'use strict';
  return this;
}

assert(ninja() === global, `in a 'nonstrict' ninja function, the context is the global object`);
assert(samurai() === undefined, `in a 'strict' samurai function, the context is undefined`);
