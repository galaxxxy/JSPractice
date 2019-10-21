function SuperType (name) {
  this.name = name;
}

function SubType (name, age) {
  SuperType.call(this, name);
  this.age = age;
}

const instance1 = new SubType("Nicholas", 29);
console.log(instance1.name);
console.log(instance1.age);