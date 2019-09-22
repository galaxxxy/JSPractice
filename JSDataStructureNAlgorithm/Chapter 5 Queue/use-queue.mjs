// import Queue from './queue-object.mjs';
import Queue from './queue-array.mjs';

const queue = new Queue();

// test example
console.log(queue.isEmpty());// true
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());// John,Jack
queue.enqueue('Camila');
console.log(queue.toString());// John,Jack,Camila
console.log(queue.size());// 3
console.log(queue.isEmpty());// false
console.log(queue.peek()); // John
queue.dequeue();
queue.dequeue();
console.log(queue.toString());// Camila
queue.enqueue('John');
queue.enqueue('Jack');
queue.clear();
console.log(queue.isEmpty());// true