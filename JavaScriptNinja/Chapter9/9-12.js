const assert = require('../common');

const numbers = [1, 2, 3, 4];
let sum = 0;

numbers.forEach(number => sum += number);

assert(sum === 10, 'The sum of first four numbers is 10');
