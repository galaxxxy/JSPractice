//用ES2015的WeakMap实现类

const _items = new WeakMap(),
      _count = new WeakMap();
// Object-Based
class Stack{
    constructor(){
        _items.set(this, {});
        _count.set(this, 0);
    }
    // methods
    push(elem){
        const items = _items.get(this);
        let count = _count.get(this);
        
        items[count] = elem;
        _count.set(this, count + 1);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        let count = _count.get(this);
        _count.set(this, count - 1);
        const items = _items.get(this);
        return items[count - 1];
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        const items = _items.get(this);
        let count = _count.get(this);
        return items[count - 1];
    }
    isEmpty(){
        let count = _count.get(this);
        return count === 0;
    }
    clear(){
        _items.set(this, {});
        _items.set(this, 0);
    }
    size(){
        let count = _count.get(this);
        return count;
    }
    print(){
        let stackStr = ``;
        if(this.isEmpty()){
            return stackStr;
        }
        const items = _items.get(this);
        let count = _count.get(this);

        stackStr = `${s[0]}`;
        for(let i = 1; i < this.size(); i++){
            stackStr = `${stackStr},${items[i]}`;
        }
        return stackStr;
    }
}

export default Stack;

// 实现了真正的私有属性，但代码可读性不强且扩展该类时无法继承私有属性