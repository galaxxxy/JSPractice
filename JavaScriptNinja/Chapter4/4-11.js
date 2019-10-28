const assert = require('../common');

function juggle() {
  this.result = Array.from(arguments).reduce((acc, next) => acc + next);
}
const ninja1 = {},
      ninja2 = {};

juggle.apply(ninja1,[1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

assert(ninja1.result === 10, 'juggle via apply');
assert(ninja2.result === 26, 'juggle via call');