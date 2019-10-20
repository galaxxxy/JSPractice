function Person () {
}

Person.prototype = {
  constructor: Person,
  age: 29,
  name: "Nicholas",
  friends: ["shelby", "Court"],
  sayName () {
    console.log(this.name);
  }
}

const person1 = new Person(),
      person2 = new Person();

person1.friends.push("Van");

console.log(person1.friends);
console.log(person2.friends);
console.log(person2.friends === person1.friends);