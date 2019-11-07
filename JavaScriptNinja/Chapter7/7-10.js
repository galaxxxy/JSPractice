const assert = require('../common');

function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writable: true
});

const ninja = new Ninja();

assert(ninja.constructor === Ninja, 'Connection from ninja instances to Ninja constructor reestablished!');
for (let prop in Ninja.prototype) {
  assert(prop, 'The only enumerable property is dance');
}