class Stack{
    constructor(){
        // 使用下划线命名约定来标记一个属性为私有属性
        this._count = 0;
        this._items = {};
    }
    // methods
    push(element){
        this._items[this._count] = element;
        this._count++;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }
    size(){
        return this._count;
    }
    isEmpty(){
        return this._count === 0;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._count - 1];
    }
    clear(){
        this._count = 0;
        this._items = {};
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objStr = `${this._items[0]}`;
        for(let i = 1; i < this._count; i++){
            objStr = `${objStr},${this._items[i]}`;
        }
        return objStr;
    }
}

// CommonJS modules
// module.exports = Stack;
// ES modules
export default Stack;