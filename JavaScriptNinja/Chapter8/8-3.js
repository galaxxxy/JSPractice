const assert = require('../common');

class NinjaCollection {
  constructor() {
    this.ninjas = ['Yoshi', 'Kuma', 'Hattori'];
  }

  get firstNinja() {
    console.log('getting firstNinja');
    return this.ninjas[0];
  }
  set firstNinja(value) {
    console.log('setting firstNinja');
    this.ninjas[0] = value;
  }
};

const ninjaCollection = new NinjaCollection

assert(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja');

ninjaCollection.firstNinja = 'Hachi';

assert(ninjaCollection.firstNinja === 'Hachi' && ninjaCollection.ninjas[0] === 'Hachi', 'Now Hachi is the first ninja');