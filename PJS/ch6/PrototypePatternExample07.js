function Person () {
}

Person.prototype = {
  // constructor: Person,
  // 手动调回[constructor]的值 但会导致它的[[Enumerable]]特性被设置为true
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName () {
    console.log(this.name);
  }
}
// reset constructor function
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person
});

let friend = new Person();

console.log(friend instanceof Person);
console.log(friend instanceof Object);
console.log(friend.constructor === Person);
console.log(friend.constructor === Object);
