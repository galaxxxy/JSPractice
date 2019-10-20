function Person (name, age, job) {
  const o = new Object();
  let _name = name,
      _age = age,
      _job = job;
  o.sayName = function () {
    console.log(_name);
  };
  return o;
}

const friend = new Person("Nicholas", 29, "SoftWare Engineer");
friend.sayName();