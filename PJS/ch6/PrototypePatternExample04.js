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

person1.name = "Greg";
person1.sayName(); // "Greg"
console.log(person1.hasOwnProperty('name')); // true
console.log('name' in person1); // true

person2.sayName(); // "Nicholas"
console.log(person2.hasOwnProperty('name')); // false
console.log('name' in person2); // true


delete person1.name;
person1.sayName(); // "Greg"
console.log(person1.hasOwnProperty('name')); // false
console.log('name' in person1); // true
