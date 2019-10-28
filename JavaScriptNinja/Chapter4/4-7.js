const assert = require('../common');

function Ninja() {
  this.skulk = function() {
    return this;
  };
}

const ninja1 = new Ninja();
const ninja2 = new Ninja();

assert(ninja1.skulk() === ninja1, 'the 1st ninja is skulking');
assert(ninja2.skulk() === ninja2, 'the 2nd ninja is skulking');