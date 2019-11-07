const assert = require('../common');

function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

const ninja = new Ninja();
assert(ninja instanceof Ninja, 'ninja receives functionality from the Ninja prototype');
assert(ninja instanceof Person, '... and the Person prototype');
assert(ninja instanceof Object, '... and the Object prototype');
assert(typeof ninja.dance === 'function', '... and can dance!');