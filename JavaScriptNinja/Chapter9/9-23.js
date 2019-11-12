const assert = require('../common');

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu']);
const samurai = new Set(['Hattori', 'Oda', 'Tomoe']);

const pureNinjas = new Set(
  [...ninjas].filter(ninja => !samurai.has(ninja))
);

assert(pureNinjas.size === 2, 'There\'s only one ninja samurai');
assert(pureNinjas.has('Kuma'), 'Kuma is a true ninja');
assert(pureNinjas.has('Yagyu'), 'Yagyu is a true ninja');