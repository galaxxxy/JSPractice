const assert = require('../common');
function Ninja() {
  let feints = 0;
  this.getFeints = () => feints;
  this.feint = () => feints++;
}

var ninja1 = new Ninja();
ninja1.feint();

var imposter = {};
imposter.getFeints = ninja1.getFeints;

assert(imposter.getFeints() === 1, 'the imposter has access to the feints varible');
