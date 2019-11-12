const assert = require('../common');

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu', 'Hattori']);

assert(ninjas.has('Hattori'), 'Hattori is in our set');
assert(ninjas.size === 3, 'There are only three ninjas in our set!');

assert(!ninjas.has('Yoshi'), 'Yoshi is not in, yet...');
ninjas.add('Yoshi');
assert(ninjas.has('Yoshi'), 'Yoshi is added');
assert(ninjas.size === 4, 'There are four ninjas in our set');

assert(ninjas.has('Kuma'), 'Kuma is already added');
ninjas.add('Kuma');
assert(ninjas.size === 4, 'Adding Kuma again has no effect');

for (let ninja of ninjas) {
  assert(ninja !== null, ninja);
}