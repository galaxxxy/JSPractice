const assert = require('../common');

function* NinjaGenerator() {
  try {
    yield 'Hattori';
    fail('The expected exception didn\'t occur');
  } catch (error) {
    assert(error === 'Catch this!', 'Aha! we caught an expection');
  }
}
const ninjaIterator = NinjaGenerator();

const result1 = ninjaIterator.next();
assert(result1.value === 'Hattori', 'we got Hattori');

ninjaIterator.throw('Catch this!');