const assert = require('../common');

const promise = new Promise((resolve, reject) => {
  reject('Explicitly reject a promise');
});

promise.then(() => {
  throw new Error('Happy path, won\'t be called!');
}, err => {
  console.log('A promise was explictly rejected!');
});