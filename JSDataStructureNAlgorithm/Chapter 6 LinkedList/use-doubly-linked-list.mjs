import { DoublyLinkedList } from "./doubly-linked-list.mjs";

const doublyLinkedList = new DoublyLinkedList();

// test example

console.log(doublyLinkedList.isEmpty());// true
console.log(doublyLinkedList.size());// 0
doublyLinkedList.push('hi');
doublyLinkedList.push('are');
console.log(doublyLinkedList.toString());// hi,are
doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.toString());// hi
doublyLinkedList.push('are');
doublyLinkedList.removeAt(0);
console.log(doublyLinkedList.toString());// are
console.log(doublyLinkedList.getElementAt(0));
doublyLinkedList.insert('hi',0);
doublyLinkedList.insert('you',2);
doublyLinkedList.insert('ok',1);
console.log(doublyLinkedList.toString());// hi,ok,are,you
console.log(doublyLinkedList.indexOf('hi'));// 0
console.log(doublyLinkedList.indexOf('you'));// 3
console.log(doublyLinkedList.remove('ok'));//ok
console.log(doublyLinkedList.toString());// hi,are,you
