const assert = require('../common');

function Ninja() {
  this.swung = false;
  this.swingSword = function() {
    return !this.swung;
  };
}
Ninja.prototype.swingSword = function() {
  return this.swung;
};

const ninja = new Ninja();
assert(ninja.swingSword(), 'Called the instance method, not the prototype method.');