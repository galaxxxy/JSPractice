function object (o) {
  function F () {}
  F.prototype = o;
  return new F();
}

const person = {
  name : "Nicholas",
  friends : ["Shelby", "Court", "Van"]
};

const anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

const yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]