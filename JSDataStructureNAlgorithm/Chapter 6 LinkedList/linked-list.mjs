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
            //头为空
            this.head = node;
        }else{
            //找到最后一项
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
            this.count++;
        }
    }
    insert(element, index){
        if(index < 0 || index >this.count){
            return false;
        }
        const node = new Node(element);
        if(this.head === null && index === 0){
            this.head = node;
        }else{
            let current = this.getElementAt(index - 1),
            next = current.next;
            node.next = next;
            current.next = node;
        }
        this.count++;
        return true;
    }
    getElementAt(index){
        if(index >= 0 && index <= this.count && !this.isEmpty()){
            let current = this.head;
            if(index === 0){
                return current;
            }
            for(let i = 0; i < index; i++){
                current = current.next;
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
            console.log(count);
        }
        return -1;
    }
    removeAt(index){
        if(index >= 0 && index <= this.count && this.head !== null){
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
        return this.count + 1;
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