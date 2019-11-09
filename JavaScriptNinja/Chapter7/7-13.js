const assert = require('../common');

class Ninja{
  constructor(name) {
    this.name = name;
  }

  swingSword() {
    return true;
  }
}

const ninja = new Ninja('Yoshi');

assert(ninja instanceof Ninja, 'Our ninja is a Ninja');
assert(ninja.name === 'Yoshi', 'named Yoshi');
assert(ninja.swingSword(), 'and he can swing a sword');