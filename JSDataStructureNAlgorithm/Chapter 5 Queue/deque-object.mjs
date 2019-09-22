// Object-based
class Deque{
    constructor(){
        this._items = {};
        this._count = 0;
        this._lowestCount = 0;
    }
    //methods
    isEmpty(){
        return this._count === this._lowestCount;
    }
    clear(){
        this._items = {};
        this._count = 0;
        this._lowestCount = 0;
    }
    size(){
        return this._count - this._lowestCount;
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
    addFront(elem){
        this._lowestCount--;
        this._items[this._lowestCount] = elem;
    }
    addBack(elem){
        this._items[this._count] = elem;
        this._count++;
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const temp = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return temp;
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        const temp = this._items[this._count - 1];
        delete this._items[this._count - 1];
        this._count--;
        return temp;
    }
    peekFront(){
        return this._items[this._lowestCount];
    }
    peekBack(){
        return this._items[this._count - 1];
    }
}

export default Deque;