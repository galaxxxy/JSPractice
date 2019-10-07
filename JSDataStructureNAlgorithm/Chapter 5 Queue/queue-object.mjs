export class Queue{
    constructor(){
        this._count = 0;
        this._lowestCount = 0;
        this._items = {};
    }
    //methods
    enqueue(elem){
        this._items[this._count] = elem;
        this._count++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const temp = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return temp;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._lowestCount];
    }
    isEmpty(){
        return this._count === this._lowestCount;
    }
    size(){
        return this._count - this._lowestCount;
    }
    clear(){
        this._count = 0;
        this._lowestCount = 0;
        this._items = {};
    }
    toString(){
        let str = ``;
        if(this.isEmpty()){
            return str;
        }
        str = `${this._items[this._lowestCount]}`;
        for(let i = this._lowestCount + 1; i < this._count; i++){
            str = `${str},${this._items[i]}`;
        }
        return str;
    }
}
