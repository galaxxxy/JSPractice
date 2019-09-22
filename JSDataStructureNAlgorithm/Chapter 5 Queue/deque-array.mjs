// Array-based
class Deque{
    constructor(){
        this._items = [];
    }
    //methods
    isEmpty(){
        return this._items.length === 0;
    }
    clear(){
        this._items = [];
    }
    size(){
        return this._items.length;
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
    addFront(elem){
        this._items.unshift(elem);
    }
    addBack(elem){
        this._items.push(elem);
    }
    removeFront(){
        return this._items.shift();
    }
    removeBack(){
        return this._items.pop();
    }
    peekFront(){
        return this._items[0];
    }
    peekBack(){
        return this._items[this._items.length - 1];
    }
}

export default Deque;