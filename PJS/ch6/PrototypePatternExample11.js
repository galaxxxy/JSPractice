String.prototype.startsWith = function (text) {
  return this.indexOf(text) === 0;
}

const message = "Hello world";
console.log(message.startsWith("He"));