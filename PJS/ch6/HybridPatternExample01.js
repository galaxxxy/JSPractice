function Person (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["shelby", "Court"];
}

Person.prototype = {
  constructor: Person,
  sayName () {
    console.log(this.name);
  }
}

const person1 = new Person("Nicholas", 29, "Software Engineer"),
      person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);