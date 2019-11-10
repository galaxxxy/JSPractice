function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, args) => {
    console.time(`isPrime`);
    const result = target.apply(thisArg, args);
    console.timeEnd(`isPrime`);
    return result;
  }
});

isPrime(12299827);