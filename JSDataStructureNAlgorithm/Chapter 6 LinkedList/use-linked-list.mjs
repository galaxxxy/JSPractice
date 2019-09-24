import { LinkedList } from "./linked-list.mjs";

const linkedList = new LinkedList();

// test example
console.log(linkedList.isEmpty());// true;
linkedList.push('hello');
linkedList.push('world');
console.log(linkedList.toString());// hello,world
linkedList.insert('my',1);
console.log(linkedList.toString());// hello,my,world
console.log(linkedList.size());// 3
console.log(linkedList.getElementAt(0));// Node {element: 'hello',next: Node {element: 'my',next: Node {element: 'world',next: null}}}
console.log(linkedList.getElementAt(1));// Node {element: 'my',next: Node {element: 'world',next: null}}
console.log(linkedList.remove('world'));// world
console.log(linkedList.removeAt(1));// my
console.log(linkedList.getHead());// Node {element: 'hello',next: Node {element: 'world', next: null}}
console.log(linkedList.toString());// hello
console.log(linkedList.size());// 1
console.log(linkedList.indexOf('hello'));// 0