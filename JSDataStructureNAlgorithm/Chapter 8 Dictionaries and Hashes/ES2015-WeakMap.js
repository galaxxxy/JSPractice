const map = new WeakMap();

const obj1 = {name: 'Gandalf'};
const obj2 = {name: 'John'};
const obj3 = {name: 'Tyrion'};

map.set(obj1, 'gandalf@email.com');
map.set(obj2, 'johnsnow@email.com');
map.set(obj3, 'tyrion@email.com');

// can only use object as key
// only using key to visit value
console.log(map.has(obj1));// true
console.log(map.get(obj3));// tyrion@email.com
map.delete(obj2);


