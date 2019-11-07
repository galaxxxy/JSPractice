const assert = require('../common');

function Ninja() {}

const ninja = new Ninja();

assert(ninja instanceof Ninja, 'our ninja is a Ninja');
Ninja.prototype = {};

assert(!(ninja instanceof Ninja), 'the ninja is now not a Ninja!?');