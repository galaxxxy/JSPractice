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
                // find the last element
                for(let i = 0; i < this.count - 1; i++){
                    current = current.next;
                }
                this.head = node;
                current.next = this.head;
            }
        }else if(index === this.count){
            // find the last element
            for(let i = 0; i < this.count - 1; i++){
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }else{
            //find the previous element of the element whose index equals to index
            for(let i = 0; i < index - 2; i++){
                current = current.next;
            }
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
        let current = this.head;
        if(index === 0){
            // remove the head node
            const temp = this.head.element;
            if(this.count === 1){
                this.head = null;
            }else{
                this.head = this.head.next;
                // find the last element
                for(let i = 0; i < this.count - 1; i++){
                    current = current.next;
                }
                current.next = this.head;
            }
            this.count--;
            return temp;
        }else{
            let previous = this.head;
            // find the privious element of the target element
            for(let i = 0; i < index - 1; i++){
                previous = previous.next;
            }
            current = previous.next;
            previous.next = current.next;
            this.count--;
            return current.element;
        }
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