function SuperType () {
  this.color = ["red", "blue", "green"];
}

function SubType () {
}

SubType.prototype = new SuperType();

const instance1 = new SubType();
instance1.color.push("balck");
console.log(instance1.color);

const instance2 = new SubType();
console.log(instance2.color);