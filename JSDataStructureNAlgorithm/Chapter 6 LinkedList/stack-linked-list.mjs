import { DoublyLinkedList } from "./doubly-linked-list.mjs";

class StackLinkedList{
    constructor(){
        this.items = new DoublyLinkedList();
    }
    // methods
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }
    peek(){
        return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty(){
        return this.items.isEmpty();
    }
    size(){
        return this.items.size();
    }
    clear(){
        this.items.clear();
    }
    toString(){
        return this.items.toString();
    }
}

const sll = new StackLinkedList();
console.log(sll.isEmpty());// true

sll.push(2);
sll.push(5);

console.log(sll.peek());// 5

sll.push(11);
console.log(sll.size());// 3
console.log(sll.isEmpty());// false

sll.push(15);
console.log(sll.pop());// 15
console.log(sll.pop());// 11
console.log(sll.size());// 2
console.log(sll.toString()); // 2,5