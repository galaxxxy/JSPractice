import { LinkedList } from '../Chapter 6 LinkedList/linked-list.mjs'
import { ValuePair } from "./dictionary-object.mjs";
import { defaultToString } from "../util.mjs";

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key;
        }
        const tableKeys = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKeys.length; i++){
            hash += tableKeys.charCodeAt(i);
        }
        return hash % 37;
    }
    hashCode(key){
        return this.loseloseHashCode(key);
    }
    put(key, value){
        if(key == null || value == null){
            return false;
        }
        const position = this.hashCode(key);
        if(this.table[position] == null){
            this.table[position] = new LinkedList();
        }
        this.table[position].push(new ValuePair(key, value));
        return true;
    }
    get(key){
        const position = this.hashCode(key),
              linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key){
        const position = this.hashCode(key),
              linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null){
                if(current.element.key === key){
                    linkedList.remove(current.element);
                    if(linkedList.isEmpty()){
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    toString(){
        if(this.isEmpty()){
            return ``;
        }
        const keys = Object.keys(this.table);
        let str = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for(let i = 1; i < keys.length; i++){
            str = `${str},{${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return str;
    }
    size(){
        let count = 0;
        const linkedLists = Object.values(this.table);
        for(const key in linkedLists){
            count += linkedLists[key].size();
        }
        return count;
    }
    isEmpty(){
        return this.size() === 0;
    }
}

// test example
const hashTable = new HashTableSeparateChaining();

hashTable.put('Ygritte', 'ygritte@email.com');
hashTable.put('Jonathan', 'jonathan@email.com');
hashTable.put('Jamie', 'jamie@email.com');
hashTable.put('Jack', 'jack@email.com');
hashTable.put('Jasmine', 'jasmine@email.com');
hashTable.put('Jake', 'jake@email.com');
hashTable.put('Nathan', 'nathan@email.com');
hashTable.put('Athelstan', 'athelstan@email.com');
hashTable.put('Sue', 'sue@email.com');
hashTable.put('Aethelwulf', 'aethelwulf@email.com');
hashTable.put('Sargeras', 'sargeras@email.com');

console.log('**** Printing Hash **** ');

console.log(hashTable.toString());
// {4 => [#Ygritte: ygritte@email.com]},{5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log('**** Get **** ');

console.log(hashTable.get('Jamie')); // jamie@email.com
console.log(hashTable.get('Sue')); // sue@email.com
console.log(hashTable.get('Jonathan')); // jonathan@email.com
console.log(hashTable.get('Loiane')); // undefined

console.log('**** Remove **** ');

console.log(hashTable.remove('Ygritte')); // true
console.log(hashTable.get('Ygritte')); // undefined
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Sue')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Jamie')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Aethelwulf')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}
