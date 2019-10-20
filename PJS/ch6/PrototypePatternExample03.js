function Person () {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
}

let person1 = new Person();
let person2 = new Person();

person1.name = null;
person1.sayName(); // null
person2.sayName(); // "Nicholas"

console.log(person1.hasOwnProperty('name')); // true

delete person1.name;
person1.sayName(); // "Nicholas"
console.log(person1.hasOwnProperty('name')); // false
