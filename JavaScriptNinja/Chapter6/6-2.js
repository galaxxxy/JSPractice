const assert = require('../common');

function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
}

const weaponsIterator = WeaponGenerator();

const result1 = weaponsIterator.next();
assert(typeof result1 === 'object' &&
  result1.value === 'Katana' && !result1.done, 'Katana received!');

const result2 = weaponsIterator.next();
assert(typeof result2 === 'object' &&
  result2.value === 'Wakizashi' && !result2.done, 'Wakizashi received!');

const result3 = weaponsIterator.next();
assert(typeof result3 === 'object' &&
  result3.value === undefined && result3.done, 'There are no more results!');