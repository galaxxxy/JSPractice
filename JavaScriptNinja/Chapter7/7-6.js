const assert = require('../common');

function Ninja() {}

const ninja = new Ninja()
const ninja2 = new ninja.constructor();

assert(ninja2 instanceof Ninja, 'It\'s a Ninja!');
assert(ninja2 !== Ninja, 'But not the same Ninja!');