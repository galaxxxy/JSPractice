const assert = require('../common');

const ninjaCollection = {
  ninjas: ['Yoshi', 'Kuma', 'Hattori'],
  get firstNinja() {
    console.log('getting firstNinja');
    return this.ninjas[0];
  },
  set firstNinja(value) {
    console.log('setting firstNinja');
    this.ninjas[0] = value;
  }
};

assert(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja');

ninjaCollection.firstNinja = 'Hachi';

assert(ninjaCollection.firstNinja === 'Hachi' && ninjaCollection.ninjas[0] === 'Hachi', 'Now Hachi is the first ninja');