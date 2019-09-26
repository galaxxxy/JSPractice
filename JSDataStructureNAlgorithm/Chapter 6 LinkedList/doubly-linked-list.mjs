import { defaultEquals } from '../util.mjs';
import { Node } from "./linked-list-models.mjs";

class DoublyNode extends Node{
    constructor(element, next = null, prev = null){
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = null;
        this.tail = null;
        this.equalsFn = equalsFn;
    }
    // methods
    getHead(){
        return this.head;
    }
    isEmpty(){
        return this.head === null;
    }
    size(){
        return this.count;
    }
    push(element){
        const node = new DoublyNode(element);
        if(this.isEmpty()){
            this.head = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.count++;
    }
    removeAt(index){
        if(index < 0 || index >= this.count || this.count === 0){
            return undefined;
        }

        let current = this.head;// index = 0

        // 查找位于index的节点
        const node = this.getElementAt(index);
        // let node;
        // if(index === 0){
        //     node = current;
        // }else{
        //     for(let i = 0; i < index; i++){
        //         current = current.next;// index++
        //     }
        //     node = current;
        // }

        if(index === 0){// 删除头结点指向的元素
            if(this.count === 1){
                // 只有一个元素
                this.head = null;
                this.tail = null;
            }else{
                current.next.prev = null;
                this.head = current.next;
            }
        }else{
            const previous = node.prev;
            if(index !== this.count - 1){
                previous.next = node.next;
                node.next = previous;
            }else{
                previous.next = null;
                this.tail = previous;
            }
        }
        this.count--;
        return node.element;
    }
    getElementAt(index){
        if(index < 0 || index >= this.count || this.isEmpty()){
            return undefined;
        }
        let current = this.head;
        if(index === 0){
            return current;
        }
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    insert(element,index){
        if(index < 0 || index > this.count){
            return false;
        }
        const node = new DoublyNode(element);
        let current = this.head;
        if(index === 0){
            // node insert before the head node
            if(this.count === 0){
                // empty
                this.tail = node;
            }else{
                // not empty
                node.next = current;
                current.prev = node;
            }
            this.head = node;
        }else if(index === this.count){
            // node insert after the tail node
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        }else{
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            node.prev = previous;
            node.next = current;
            current.prev = node;
            previous.next = node;
        }
        this.count++;
        return true;
    }
    indexOf(element){
        let current = this.head;
        if(this.equalsFn(current.element, element)){
            return 0;
        }
        for(let i = 0; i < this.count - 1; i++){
            current = current.next;
            if(this.equalsFn(current.element, element)){
                return i + 1;
            }
        }
        return -1;
    }
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    toString(){
        let current = this.head,
            str = `${current.element}`,
            num = this.count - 1;
        if(this.isEmpty()){
            return ``;
        }else if(this.count === 1) {
            return str;
        }
        // not empty 
        while(num > 0){
            current = current.next;
            str = `${str},${current.element}`;
            num--;
        }
        return str;
    }
}

export {DoublyLinkedList as DoublyLinkedList};