const assert = require('../common');

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu']);
const samurai = new Set(['Hattori', 'Oda', 'Tomoe']);

const ninjaSamurais = new Set(
  [...ninjas].filter(ninja => samurai.has(ninja))
);

assert(ninjaSamurais.size === 1, 'There\'s only one ninja samurai');
assert(ninjaSamurais.has('Hattori'), 'Hattori is his name')