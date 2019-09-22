// 用ES2015的限定作用域Symbol实现类
const _items = Symbol('stackItems');
const _count = Symbol('StackCount');

// Object-based
class Stack{
    constructor(){
        this[_items] = {};
        this[_count] = 0;
    }
    // methods
    push(elem){
        this[_items][this[_count]] = elem;
        this[_count]++;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this[_count]--;
        const temp = this[_items][this[_count]];
        delete this[_items][this[_count]];
        return temp;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this[_items][this[_count] - 1];
    }
    isEmpty(){
        return this[_count] === 0;
    }
    clear(){
        this[_items] = {};
        this[_count] = 0;
    }
    size(){
        return this[_count];
    }
    print(){
        let stackStr = ``;
        if(this.isEmpty()){
            return undefined;
        }
        stackStr = `${this[_items][0]}`;
        for(let i = 1; i < this.size(); i++){
            stackStr = `${stackStr},${this[_items][i]}`;
        }
        return stackStr;
    }
}

// test example
// let stack = new Stack()
// stack.push(2);
// stack.push(4);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.peek());
// console.log(stack.size());
// stack.clear();
// console.log(stack.isEmpty());
// stack.push(2);
// stack.push(4);
// console.log(stack.print());

// CommonJS modules
// module.exports = Stack;
// ES modules
export default Stack;