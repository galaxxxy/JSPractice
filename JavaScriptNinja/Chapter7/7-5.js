const assert = require('../common');

function Ninja() {}

const ninja = new Ninja();

assert(typeof ninja === 'object',
      'the type of the instance is object.');
assert(ninja instanceof Ninja,
      'instanceof identifies the constructor.');
assert(ninja.constructor === Ninja,
      'The ninja object was created by the Ninja function.');