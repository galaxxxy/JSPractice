function assert(exp, message = exp) {
  if(exp) {
    console.log(message);
  }
}

module.exports = assert;