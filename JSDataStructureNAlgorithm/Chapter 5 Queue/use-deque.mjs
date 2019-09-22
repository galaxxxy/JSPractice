// import Deque from './deque-object.mjs';
import Deque from './deque-array.mjs';

const deque = new Deque();

// test example
console.log(deque.isEmpty());// true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());// John,Jack
deque.addBack('Camila');
console.log(deque.toString());// John,Jack,Camila
console.log(deque.size());// 3
console.log(deque.isEmpty());// false
deque.removeFront();
console.log(deque.toString());// Jack,Camila
deque.removeBack();
console.log(deque.toString());// Jack
deque.addFront('John');
console.log(deque.toString());// John,Jack
console.log(deque.peekFront());// John
console.log(deque.peekBack());// Jack
deque.clear();
console.log(deque.isEmpty());// true

deque.addFront('-3');
deque.addFront('-2');
deque.addFront('-1');
deque.addBack('0');
deque.addBack('1');
deque.addBack('2');
console.log(deque.toString());// -1,-2,-3,0,1,2
console.log(deque);