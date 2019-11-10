const assert = require('../common');

function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    return new TypeError('Expected an array');
  }
  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, value) => {
      index = +index;
      return target[index < 0 ? target.length + index : index] = value;
    }
  });
}

const ninjas = ['Yoshi', 'Kuma', 'Hattori'];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

assert(ninjas[0] === 'Yoshi' && ninjas[1] === 'Kuma' && ninjas[2] === 'Hattori', 'Array items accessed through positive indexes');

assert(proxiedNinjas[0] === 'Yoshi' && proxiedNinjas[1] === 'Kuma' && proxiedNinjas[2] === 'Hattori', 'Array items accessed through positive indexes on a proxy');

assert(ninjas[-1] === undefined
  && ninjas[-2] === undefined
  && ninjas[-3] === undefined,
  'Items cannot be accessed through positive indexes on a array');

  assert(proxiedNinjas[-3] === 'Yoshi' && proxiedNinjas[-2] === 'Kuma' && proxiedNinjas[-1] === 'Hattori', 'But they can be accessed through negative indexes on a proxy');

  proxiedNinjas[-1] = 'Hachi';
  assert(proxiedNinjas[-1] === 'Hachi' && ninjas[2] === 'Hachi', 'Items can be changed through negative indexes');