const assert = require('../common');

function Ninja() {
  let feints = 0;
  this.getFeints = () => feints;
  this.feint = () => feints++;
}

var ninja1 = new Ninja();
assert(ninja1.feints === undefined, 'and the private data is inaccessible to us');

ninja1.feint();
assert(ninja1.getFeints() === 1, `we are able to access the internal feint count`);

var ninja2 = new Ninja();
assert(ninja2.getFeints() === 0, `the second ninja object gets its own feints varible`);