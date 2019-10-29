const assert = require('../common');
let later;

const outerValue = "samurai";
function outerFunction() {
  const innerValue = 'ninja';
  function innerFunction() {
    assert(outerValue === 'samurai', 'i can see the samurai');
    assert(innerValue === 'ninja', 'i can see the ninja');
  }
  later = innerFunction;
}
outerFunction();
later();