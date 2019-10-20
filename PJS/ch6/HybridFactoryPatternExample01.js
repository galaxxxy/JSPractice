function Person (name, age, job) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

const friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();