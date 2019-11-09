const assert = require('../common');

class Ninja{
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  swingSword() {
    return true;
  }

  static compare(ninja1, ninja2) {
    return ninja1.level - ninja2.level;
  }
}

const ninja1 = new Ninja('Yoshi', 4);
const ninja2 = new Ninja('Hattori', 3);

assert(!('compare' in ninja1) && !('compare' in ninja2), 'A ninja instance doesn\'t know how to compare');
assert(Ninja.compare(ninja1, ninja2) > 0, 'The Ninja class can do the comparsion');