const promise = new Promise((resolve, reject) => {
  reject('Explicitly reject a promise!');
});

promise.then(() => {
  throw new Error('Happy path, won\'t be called');
}).catch(err => {
    console.log('Promise was also rejected');
});