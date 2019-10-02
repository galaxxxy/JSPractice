const map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf'));// true
console.log(map.size);// 3
console.log(map.keys());// { 'Gandalf', 'John', 'Tyrion' }
console.log(map.values());// { 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' }
console.log(map.get('Tyrion'));// tyrion@email.com

map.delete('John');