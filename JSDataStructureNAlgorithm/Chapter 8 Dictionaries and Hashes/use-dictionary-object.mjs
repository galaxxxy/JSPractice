import { Dictionary } from "./dictionary-object.mjs";

const dict = new Dictionary();

dict.set('Gandalf', 'gandalf@email.com');
dict.set('John', 'johnsnow@email.com');
dict.set('Tyrion', 'tyrion@email.com');

console.log(dict.hasKey('Gandalf'));// true
console.log(dict.size());// 3
console.log(dict.keys());// ['Gandalf', 'John', 'Tyrion']
console.log(dict.values());// ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dict.get('Tyrion'));// tyrion@email.com

dict.remove('John');
console.log(dict.size());// 2
console.log(dict.values());// ["gandalf@email.com", "tyrion@email.com"]
dict.forEach((k,v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);
});
// forEach:  key: Gandalf, value: gandalf@email.com
// forEach:  key: Tyrion, value: tyrion@email.com