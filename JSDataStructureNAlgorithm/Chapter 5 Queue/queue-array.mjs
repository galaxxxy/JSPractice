class Queue{
    constructor(){
        this._items = [];
    }
    //methods
    enqueue(elem){
        this._items.push(elem);
    }
    dequeue(){
        return this._items.shift();
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[0];
    }
    isEmpty(){
        return this._items.length === 0;
    }
    size(){
        return this._items.length;
    }
    clear(){
        this._items = [];
    }
    toString(){
        let str = ``;
        if(this.isEmpty()){
            return str;
        }
        str = `${this._items[0]}`;
        for(let i = 1; i < this.size(); i++){
            str = `${str},${this._items[i]}`;
        }
        return str;
    }
}

export default Queue;