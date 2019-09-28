import { LinkedList } from "./linked-list.mjs";
import { defaultEquals } from "../util.mjs";
import { Node } from './linked-list-models.mjs'

class CircularLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
    }
    // methods
    insert(element, index){
        if(index < 0 || index > this.count){
            return false;
        }
        const node = new Node(element);
        let current = this.head;
        if(index === 0){
            if(this.count === 0){
                // empty
                this.head = node;
                node.next = this.head;
            }else{
                node.next = this.head;
                current = this.getElementAt(this.size() - 1);
                this.head = node;
                current.next = this.head;
            }
        }else if(index === this.count){
            current = this.getElementAt(this.size() - 1);
            current.next = node;
            node.next = this.head;
        }else{
            current = this.getElementAt(index - 1);
            node.next = current.next;
            current.next = node;
        }
        this.count++;
        return true;
    }

    removeAt(index){
        if(index < 0 || index >= this.count || this.head === null){
            return undefined;
        }
        let current = this.head,
            temp = current.element;
        if(index === 0){
            // remove the head node
            if(this.count === 1){
                this.head = null;
            }else{
                this.head = this.head.next;
                current = this.getElementAt(this.size() - 1);
                current.next = this.head;
            }
        }else{
            let previous = this.head;
            previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = current.next;
            temp = current.element;
        }
        this.count--;
        return temp;
    }
}

const cll = new CircularLinkedList();

// test example
console.log(cll.isEmpty());// true;
cll.push('hello');
cll.push('world');
console.log(cll.toString());// hello,world
cll.insert('my',1);
console.log(cll.toString());// hello,my,world
console.log(cll.size());// 3
console.log(cll.getElementAt(0));// Node {element: 'hello',next: Node {element: 'my',next: Node {element: 'world',next: Node}}}
console.log(cll.getElementAt(1));// Node {element: 'my',next: Node {element: 'world',next: Node}}
console.log(cll.remove('world'));// world
console.log(cll.removeAt(1));// my
console.log(cll.toString());// hello
console.log(cll.size());// 1
console.log(cll.indexOf('hello'));// 0