const assert = require('../common');

function Ninja() {
  this.swung = true;
}

const ninja1 = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

assert(ninja1.swingSword(), 'Method exists, even out of order.');

Ninja.prototype = {
  pierce: function() {
    return true;
  }
}

assert(ninja1.swingSword, 'Our ninja can still swing!');

const ninja2 = new Ninja();
assert(ninja2.pierce(), 'Newly created ninjas can pierce');
assert(!ninja2.swingSword, 'But they cannot swing!');