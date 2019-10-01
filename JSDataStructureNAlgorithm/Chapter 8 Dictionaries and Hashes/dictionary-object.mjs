import { defaultToString } from "../util.mjs";

export class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    toString(){
        return `[#${this.key}: ${this.value}]`;
    }
}

export class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    // methods
    hasKey(key){
        // value不为null或undefined
        return this.table[this.toStrFn(key)] != null;
    }
    set(key, value){
        if(key == null || value == null){
            return false;
        }
        const tableKey = this.toStrFn(key);
        this.table[tableKey] = new ValuePair(key, value);
        return true;
    }
    remove(key){
        if(!this.hasKey(key)){
            return false;
        }
        delete this.table[this.toStrFn(key)];
        return true;
    }
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair === null ? undefined : valuePair.value;
    }
    valuePairs(){
        if(Object.values){
            return Object.values(this.table);
        }
        this.valuePairsLegacy();
    }
    valuePairsLegacy(){
        const values = [];
        for(const key in this.table){
            if(this.hasKey(key)){
                values.push(this.table[key]);
            }
        }
        return values;
    }
    keys(){
        return this.valuePairs().map(valuePair => valuePair.key);
    }
    values(){
        return this.valuePairs().map(valuePair => valuePair.value);
    }
    forEach(callback){
        const valuePairs = this.valuePairs();
        for(let i = 0; i < valuePairs.length; i++){
            const result = callback(valuePairs[i].key, valuePairs[i].value);
            if(result === false){
                break;
            }
        }
    }
    clear(){
        this.table = {};
    }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    toString(){
        if(this.isEmpty()){
            return ``;
        }
        const valuePairs = this.valuePairs();
        let str = `${valuePairs[0].toString()}`;
        for(let i = 1; i < valuePairs.length; i++){
            str = `${str},${valuePairs[i].toString()}`;
        }
        return str;
    }
}

// test example
// const dict = new Dictionary();
// dict.set('key','value');
// dict.set('1','wang');
// dict.set(1,'tsu');
// console.log(dict.hasKey(1));// true
// dict.set('3','ing');
// console.log(dict.get(1));// tsu
// console.log(dict.remove(2));// true
// console.log(dict.hasKey(2));// false
// console.log(dict.valuePairs());
// console.log(dict.keys());
// console.log(dict.values());
// console.log(dict.toString());