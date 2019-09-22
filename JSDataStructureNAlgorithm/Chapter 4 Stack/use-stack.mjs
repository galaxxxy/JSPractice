// ES modules
// import Stack from './stack-array.mjs';
// import Stack from './stack-object.mjs';
// import Stack from './stack-symbol.mjs';
import Stack from './stack-symbol2.mjs';
// import Stack from './stack-weakmap.mjs';
// import Stack from './stack-weakmap2.mjs';

// CommonJS modules
// const Stack = require('./stack-array');

const stack = new Stack();
console.log(stack.isEmpty());// true

stack.push(2);// items:[2]
stack.push(5);// items:[2,5]

console.log(stack.peek());// 5

stack.push(11);// items:[2,5,11]
console.log(stack.size());// 3
console.log(stack.isEmpty());// false

stack.push(15);// items:[2,5,11,15]
stack.pop();// 15
stack.pop();// 11
console.log(stack.size());// 2

// This is a test example for stack-symbol.mjs
// let objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
// stack[objectSymbols[0]].push(1);
// stack[objectSymbols[0]].push(3);
// console.log(stack.print());