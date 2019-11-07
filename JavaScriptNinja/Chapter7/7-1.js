const assert = require('../common');

const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

assert('skulk' in yoshi, 'yoshi can skulk');
assert(!('sneak' in yoshi), 'yoshi cannot sneak');
assert(!('creep' in yoshi), 'yoshi cannot creep');

Object.setPrototypeOf(yoshi, hattori);
Object.setPrototypeOf(yoshi, hattori);

assert('sneak' in yoshi, 'yoshi can now sneak');
assert(!('creep' in hattori), 'hattori cannot creep');

Object.setPrototypeOf(hattori, kuma);

assert('creep' in hattori, 'hattori can now creep');
assert('creep' in yoshi, 'yoshi can also creep');