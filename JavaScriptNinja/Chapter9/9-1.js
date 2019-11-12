const assert = require('../common');

const ninjas = ['Kuma', 'Hattori', 'Yagyu'];
const samurai = new Array('Oda', 'Tomoe');

assert(ninjas.length === 3, 'There are three ninjas');
assert(samurai.length === 2, 'And only two samurai');

assert(ninjas[0] === 'Kuma', 'Kuma is the first ninja');
assert(samurai[samurai.length - 1] === 'Tomoe', 'Tomoe is the last samurai');

assert(ninjas[4] === undefined, 'We get undefined if we try to access an out of bounds index');
ninjas[4] = 'Ishi';
assert(ninjas.length === 5, 'Array are automatically expended');

ninjas.length = 2;
assert(ninjas.length === 2, 'There are only two ninjas now');
assert(ninjas[0] === 'Kuma' && ninjas[1] === 'Hattori', 'Kuma and Hattori');
assert(ninjas[2] === undefined, 'But we\'ve lost Yagyu');