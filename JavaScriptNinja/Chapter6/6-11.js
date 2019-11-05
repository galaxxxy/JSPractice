const assert = require('../common');

console.log('At code start');
const ninjaDelayedPromise = new Promise((resolve, reject) => {
  console.log('ninjaDelayedPromise');
  setTimeout(() => {
    console.log('Resolving ninjaDelayedPromise');
    resolve('Hattori');
  }, 500);
});

assert(ninjaDelayedPromise !== null, 'After creating ninjaDelayedPromise');

ninjaDelayedPromise.then(ninja => {
  assert(ninja === 'Hattori', 'ninjaDelayedPromise resolve handled with Hattori');
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
  console.log('ninjaImmediatePromise executor. Immediate resolve.');
  resolve('Yoshi');
});

ninjaImmediatePromise.then(ninja => {
  assert(ninja === 'Yoshi', 'ninjaImmediatePromise resolve handled with Hattori');
})

console.log('At code end');
