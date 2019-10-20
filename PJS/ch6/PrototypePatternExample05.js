function hasPrototypeProperty (object, descripter) {
  if (descripter in object) {
    if (!object.hasOwnProperty(descripter)) {
      return true;
    }
  }
  return false;
  // return (descripter in object) && (!object.hasOwnProperty(descripter));
}

function Person () {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
}

let person = new Person();
console.log(hasPrototypeProperty(person, 'name')); // true

person.name = 'Greg';
console.log(hasPrototypeProperty(person, 'name')); // false