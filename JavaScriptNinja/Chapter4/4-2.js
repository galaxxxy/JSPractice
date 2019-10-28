const assert = require('../common.js');
function sum() {
  return Array.from(arguments).reduce((acc, next) => acc + next);
}
assert(sum(1, 2) === 3, 'we can add two numbers');
assert(sum(1, 2, 3) === 6, 'we can add three numbers');
assert(sum(1, 2, 3, 4) === 10, 'we can add four numbers');