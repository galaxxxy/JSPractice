import { HashTable } from "./hashTable.mjs";
import { defaultToString } from "../util.mjs";
import { ValuePair } from "./dictionary-object.mjs";

class HashTableLinearProbing extends HashTable{
    constructor(toStrFn = defaultToString){
        super(toStrFn);
    }
    // methods
    put(key, value){
        if(key == null || value == null){
            return false;
        }
        const position = this.hashCode(key);
        if(this.table[position] == null){
            this.table[position] = new ValuePair(key, value);
        }else{
            let index = position + 1;
            while(this.table[index] != null){
                index ++;
            }
            this.table[index] = new ValuePair(key, value);
        }
        return true;
    }
    get(key){
        const position = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                return this.table[position].value;
            }
            let index = position + 1;
            while(this.table[index] != null && this.table[index].key !== key){
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key){
                return this.table[key].value;
            }
        }
        return undefined;
    }
    remove(key){
        const position = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while(this.table[index] != null && this.table[index].key !== key){
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key){
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }
    verifyRemoveSideEffect(key, removedPosition){
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while(this.table[index] != null){
            const posHash = this.hashCode(this.table[index].key);
            if(posHash <= hash || posHash <= removedPosition){
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }
}

// test example
const hashTable = new HashTableLinearProbing();

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
// {4 => [#Ygritte: ygritte@email.com]},{5 => [#Jonathan: jonathan@email.com]},{6 => [#Jamie: jamie@email.com]},{7 => [#Jack: jack@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com]},{11 => [#Athelstan: athelstan@email.com]},{12 => [#Sue: sue@email.com]},{13 => [#Aethelwulf: aethelwulf@email.com]},{14 => [#Sargeras: sargeras@email.com]}
console.log('**** Get **** ');

console.log(hashTable.get('Nathan')); // nathan@email.com
console.log(hashTable.get('Loiane')); // undefined

console.log('**** Remove **** ');

hashTable.remove('Ygritte');
console.log(hashTable.get('Ygritte')); // undefined
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com]},{6 => [#Jamie: jamie@email.com]},{7 => [#Jack: jack@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com]},{11 => [#Athelstan: athelstan@email.com]},{12 => [#Sue: sue@email.com]},{13 => [#Aethelwulf: aethelwulf@email.com]},{14 => [#Sargeras: sargeras@email.com]}

console.log('**** Remove Test 2 **** ');
console.log('Removing Jonathan', hashTable.remove('Jonathan')); // true
console.log('**** Print **** ');
console.log(hashTable.toString());
// {5 => [#Jamie: jamie@email.com]},{6 => [#Sue: sue@email.com]},{7 => [#Jack: jack@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com]},{11 => [#Athelstan: athelstan@email.com]},{12 => [#Aethelwulf: aethelwulf@email.com]},{13 => [#Sargeras: sargeras@email.com]}

console.log(hashTable.get('Jamie')); // jamie@email.com
console.log('**** Print **** ');
console.log(hashTable.toString());
// {5 => [#Jamie: jamie@email.com]},{6 => [#Sue: sue@email.com]},{7 => [#Jack: jack@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com]},{11 => [#Athelstan: athelstan@email.com]},{12 => [#Aethelwulf: aethelwulf@email.com]},{13 => [#Sargeras: sargeras@email.com]}
