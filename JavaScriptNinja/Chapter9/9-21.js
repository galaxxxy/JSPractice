const assert = require('../common');

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu']);
const samurai = new Set(['Hattori', 'Oda', 'Tomoe']);

const warriors = new Set([...ninjas, ...samurai]);

assert(warriors.has('Kuma'), 'Kuma is here');
assert(warriors.has('Hattori'), 'And Hattori');
assert(warriors.has('Yagyu'), 'And Yagyu');
assert(warriors.has('Oda'), 'And Oda');
assert(warriors.has('Tomoe'), 'Tomoe, last but not least'); assert(warriors.size === 5, 'There are 5 warriors in total');