const assert = require('../common');

function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = { dance: Person.prototype.dance };

const ninja = new Ninja();
assert(ninja instanceof Ninja, 'ninja receives functionality from the Ninja prototype');
assert(ninja instanceof Person, '... and the Person prototype');
assert(ninja instanceof Object, '... and the Object prototype');