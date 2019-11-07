const assert = require('../common');

let ninja = {};
ninja.name = 'Yoshi';
ninja.weapon = 'kusarigama';

Object.defineProperty(ninja, 'sneaky', {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true
});

assert('sneaky' in ninja, 'we can access the new property');

for (let prop in ninja) {
  assert(prop !== undefined, `An enumerated property: ${prop}`);
}