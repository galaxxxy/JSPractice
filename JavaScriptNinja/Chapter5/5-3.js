const assert = require('../common');
function Ninja() {
  let feints = 0;
  this.getFeints = () => feints;
  this.feint = () => feints++;
}

const ninja1 = new Ninja();
ninja1.feint();

assert(ninja1.feint === undefined, 'and the private data is inaccessible to us.');
assert(ninja1.getFeints() === 1, `we're able to access the internal feint count.`);

const ninja2 = new Ninja();
assert(ninja2.getFeints() === 0, 'the second ninja object gets its own feints varible.');