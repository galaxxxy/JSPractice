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
person2.sayName(); // "Nicholas"
