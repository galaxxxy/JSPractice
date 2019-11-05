const assert = require('../common');

const ninjaPromise = new Promise((resolve, reject) => {
  // resolve('Hattori');
  reject('An error resolving a promise!');
});

ninjaPromise.then(ninja => {
  assert(ninja === 'Hattori', 'We were promised Hattori');
}, err => {
  console.log(`There shouldn't be an error`);
});
