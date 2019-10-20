function Person () {
}

Person.prototype = {
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
Person.prototype.sayHi = function () {
  console.log("hi");
}

friend.sayHi();