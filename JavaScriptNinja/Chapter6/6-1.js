const assert = require('../common');

function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
  yield 'Kusarigama';
}

for(let weapon of WeaponGenerator()) {
  assert(weapon !== undefined, weapon);
}