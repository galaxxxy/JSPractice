import { defaultToString } from "../util.mjs";
import { ValuePair } from "./dictionary-object.mjs";

export class HashTable{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    // methods
    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i);
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
        this.table[position] = new ValuePair(key, value);
        return true;
    }
    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    remove(key){
        const hash = this.hashCode(key),
              valuePair = this.table[hash];
        if(valuePair != null){
            delete this.table[hash];
            return true;
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
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }
}

// test example
// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');

// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// // 19 - Gandalf
// console.log(hash.hashCode('John') + ' - John');
// // 29 - John
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');
// // 16 - Tyrion

// console.log(hash.get('Gandalf'));// gandalf@email.com
// console.log(hash.get('Loiane'));// undefined

// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));// undefined
// console.log(hash.toString());
// {16 => [#Tyrion: tyrion@email.com]},{29 => [#John: johnsnow@email.com]}
