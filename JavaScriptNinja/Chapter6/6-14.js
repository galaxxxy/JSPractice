const promise = new Promise((resolve, reject) => {
  undeclaredVarible++;
});

promise.then(() => {
  console.log(`Happy path, won't be called`);
}).catch(err => {
  console.log(`Third promise was also rejected`);
});