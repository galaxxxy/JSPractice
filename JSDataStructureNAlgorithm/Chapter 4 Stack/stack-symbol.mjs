// 用ES2015的限定作用域Symbol实现类
const _items = Symbol('stackItems');

// Array-based
class Stack{
    constructor(){
        this[_items] = [];
    }
    // methods
    push(elem){
        this[_items].push(elem);
    }
    pop(){
        return this[_items].pop();
    }
    peek(){
        return this[_items][this[_items].length - 1];
    }
    isEmpty(){
        return this[_items].length === 0;
    }
    clear(){
        this[_items] = [];
    }
    size(){
        return this[_items].length;
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

// 这种方法创建了一个假的私有属性，通过ES2015新增的
// `Object.getOenPropertySymbol`方法能够取到类
// 中所有Symbols属性:
// let objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);// 1
// console.log(objectSymbols);// [Symbol(stackItems)]
// console.log(objectSymbols[0]);// Symbol(stackItems)
// stack[objectSymbols[0]].push(1);
// console.log(stack.print());// 1



// CommonJS modules
// module.exports = Stack;
// ES modules
export default Stack;