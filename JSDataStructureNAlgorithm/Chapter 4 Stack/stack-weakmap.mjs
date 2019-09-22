//用ES2015的WeakMap实现类
const _items = new WeakMap();

// Array-Based
class Stack{
    constructor(){
        _items.set(this, []);
    }
    // methods
    push(elem){
        const s = _items.get(this);
        s.push(elem);
    }
    pop(){
        const s = _items.get(this);
        return s.pop();
    }
    peek(){
        const s = _items.get(this);
        return s[s.length-1];
    }
    isEmpty(){
        const s = _items.get(this);
        return s.length === 0;
    }
    clear(){
        _items.delete(this);
        _items.set(this, []);
    }
    size(){
        const s = _items.get(this);
        return s.length;
    }
    print(){
        const s = _items.get(this);

        let stackStr = ``;
        if(this.isEmpty()){
            return stackStr;
        }
        stackStr = `${s[0]}`;
        for(let i = 1; i < this.size(); i++){
            stackStr = `${stackStr},${s[i]}`;
        }
        return stackStr;
    }
}

export default Stack;

// 实现了真正的私有属性，但代码可读性不强且扩展该类时无法继承私有属性