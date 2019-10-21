const person = {
  name : "Nicholas",
  friends : ["Shelby", "Court", "Van"]
};

const anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

const yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]