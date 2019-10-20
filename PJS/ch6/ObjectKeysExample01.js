function Person () {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
}

let keys = Object.keys(Person.prototype);
console.log(keys);

const person = new Person();
person.name = "Greg";
person.age = 31;
let personKeys = Object.keys(person);
console.log(personKeys);
personKeys = Object.getOwnPropertyNames(Person.prototype);
console.log(personKeys);