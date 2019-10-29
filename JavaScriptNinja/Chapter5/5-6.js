const assert = require('../common');

const firstConst = 'samurai';
assert(firstConst === 'samurai', 'firstConst is a samurai');

try {
  firstConst = 'ninja';
  fail('shouldnt be here');
} catch(e) {
  console.log('An expextion has occured');
}

assert(firstConst === 'samurai', 'firstConst is still a samurai');

const secondConst = {};

secondConst.weapon = 'wakizashi';
assert(secondConst.weapon === 'wakizashi', 'we can add new properties');

const thirdConst = [];
assert(thirdConst.length === 0, 'no items in our array');

thirdConst.push("Yoshi");

assert(thirdConst.length === 1, 'the array has changed');