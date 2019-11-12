const assert = require('../common');
const ninjas = ['Yagyu', 'Kuma', 'Hattori'];

ninjas.forEach(ninja => {
  assert(ninja !== null, ninja);
});