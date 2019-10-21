const person = {
  name : "Nicholas",
  friends : ["Shelby", "Court", "Van"]
};

const anotherPerson = Object.create(person, {
  name: {
    value: "Greg"
  }
});
console.log(anotherPerson.name);// "Greg"