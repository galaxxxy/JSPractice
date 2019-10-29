const assert = require('../common');
const outerValue = 'Ninja';

function outerFunction() {
  assert(outerValue === "Ninja", 'i can see the ninja');
}

outerFunction();