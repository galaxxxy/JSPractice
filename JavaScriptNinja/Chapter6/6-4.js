const assert = require('../common');

function* WarriorGenerator() {
  yield 'Sun Tzu';
  yield* NinjaGenerator();
  yield 'Genghis Khan';
}

function* NinjaGenerator() {
  yield 'Hattori';
  yield 'Yoshi';
}

for(let warrior of WarriorGenerator()) {
  assert(warrior !== undefined, warrior);
}