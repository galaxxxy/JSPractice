const assert = require('../common');

const ninjas = [
  {name: 'Yagyu', weapon: 'shuriken'},
  {name: 'Yoshi'},
  {name: 'Kuma', weapon: 'wakizashi'}
];

const allNinjasAreNamed = ninjas.every(ninja => 'name' in ninja);
const allNinjasAreArmed = ninjas.every(ninja => 'weapon' in ninja);

assert(allNinjasAreNamed, 'Every ninja has a name');
assert(!allNinjasAreArmed, 'But not every ninja is armed');

const someNinjasAreArmed = ninjas.some(ninja => 'weapon' in ninja);
assert(someNinjasAreArmed, 'But some ninjas are armed');