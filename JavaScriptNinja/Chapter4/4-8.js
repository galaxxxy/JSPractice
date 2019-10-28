const assert = require('../common');

function Ninja() {
  this.skulk = function() {
    return this;
  };
  return 1;
}

assert(Ninja() === 1, 'return value honored when not called as a constructor');

const ninja = new Ninja();

assert(typeof ninja === 'object', 'object returned when called as a constructor');
assert(typeof ninja.skulk === 'function', 'ninja object has a skulk method');