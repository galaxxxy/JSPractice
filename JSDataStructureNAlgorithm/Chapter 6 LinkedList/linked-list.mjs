import { defaultEquals } from "../util.mjs";
import { Node } from "./linked-list-models.mjs";

class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    // methods
    push(element){
        const node = new Node(element);
        let current = this.head;
        if(current === null){
            // empty
            this.head = node;
        }else{
            // find the last element
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    insert(element, index){
        if(index < 0 || index >this.count){
            return false;
        }
        const node = new Node(element);
        let current = this.head;
        if(index === 0){
            // insert before the head node
            if(this.count !== 0){
                // not empty
                node.next = this.head;
            }
            this.head = node;
        }else if(index === this.count){
            // insert behind the last element
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }else{
            current = this.getElementAt(index - 1);
            node.next = current.next;
            current.next = node;
        }
        this.count++;
        return true;
    }
    getElementAt(index){
        if(index >= 0 && index < this.count && !this.isEmpty()){
            let current = this.head;
            if(index !== 0){
                for(let i = 0; i < index; i++){
                    current = current.next;
                }
            }
            return current;
        }
        return null;
    }
    remove(element){
        const index = this.indexOf(element);
        const value = this.removeAt(index);
        return value;
    }
    indexOf(element){
        let current = this.head,
            count = 0;
        if(this.equalsFn(element, current.element)){
            return count;
        }
        while(current.next !== null){
            current = current.next;
            count++;
            if(this.equalsFn(element, current.element)){
                return count;
            }
        }
        return -1;
    }
    removeAt(index){
        if(index >= 0 && index < this.count && this.head !== null){
            let target = this.getElementAt(index);
            if(index === 0){
                this.head = target.next;
            }else{
                let previous = this.getElementAt(index - 1);
                previous.next = target.next;
                target.next = null;
            }
            this.count--;
            return target.element;
        }
        return undefined;
    }
    isEmpty(){
        return this.head === null;
    }
    size(){
        return this.count;
    }
    getHead(){
        return this.head;
    }
    toString(){
        let str = ``,
            current = this.head;
        if(this.isEmpty()){
            return str;
        }
        str = `${current.element}`;
        while(current.next !== null){
            current = current.next;
            str = `${str},${current.element}`;
        }
        return str;
    }
    clear(){
        this.count = 0;
        this.head = null;
    }
}

export {LinkedList as LinkedList};