const assert = require('../common');

const ninjaIslandMap = new Map();

const ninja1 = { name: 'Yoshi' };
const ninja2 = { name: 'Hattori' };
const ninja3 = { name: 'Kuma' };

ninjaIslandMap.set(ninja1, { homeIsland: 'Honshu' });
ninjaIslandMap.set(ninja2, { homeIsland: 'Hokkaido' });

assert(ninjaIslandMap.get(ninja1).homeIsland === 'Honshu', 'The first mapping works');
assert(ninjaIslandMap.get(ninja2).homeIsland === 'Hokkaido', 'The second mapping works');

assert(ninjaIslandMap.size === 2, `We've created two mappings`);

assert(ninjaIslandMap.has(ninja1) && ninjaIslandMap.has(ninja2), `We have mappings for the first two ninjas`);
assert(!ninjaIslandMap.has(ninja3), `But not for the third ninja!`);

ninjaIslandMap.delete(ninja1);
assert(!ninjaIslandMap.has(ninja1) && ninjaIslandMap.size === 0, `There's no first ninja mapping anymore`);

ninjaIslandMap.clear();
assert(ninjaIslandMap.size === 0, 'All mappings have been cleared');