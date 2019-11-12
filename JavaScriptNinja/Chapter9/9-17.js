const assert = require('../common');

const map = new Map();
const currentLocation = 'http://www.baidu.com';

const firstLink = new URL(currentLocation);
const secondLink = new URL(currentLocation);

map.set(firstLink, { description: 'firstLink' });
map.set(secondLink, { description: 'secondLink' });

assert(map.get(firstLink).description === 'firstLink', 'First link mapping');
assert(map.get(secondLink).description === 'secondLink', 'Second link mapping');
assert(map.size === 2, 'There are two mappings');