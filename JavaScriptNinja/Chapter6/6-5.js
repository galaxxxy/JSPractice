const assert = require('../common');

function* IdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

assert(ninja1.id === 1, 'First ninja has id 1');
assert(ninja2.id === 2, 'Second ninja has id 2');
assert(ninja3.id === 3, 'Third ninja has id 3');