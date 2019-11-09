const assert = require('../common');

class Person {
  constructor(name) {
    this.name = name;
  }

  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }
}

const person = new Person('Bob');

assert(person instanceof Person, `The person is a Person`);
assert(person.dance(), 'The person can dance.');
assert(person.name === 'Bob', 'We can call it by name');
assert(!(person instanceof Ninja), 'But it is not a Ninja');
assert(!('wieldWeapon' in person), 'And it cannot wield a weapon');

const ninja = new Ninja('Yoshi', 'Wakizashi');
assert(ninja instanceof Ninja, 'The ninja is a Ninja');
assert(ninja.wieldWeapon(), 'that can wield a weapon');
assert(ninja instanceof Person, 'but it is also a Person');
assert(ninja.name === 'Yoshi', 'That has a name');
assert(ninja.dance(), 'and enjoys dancing');