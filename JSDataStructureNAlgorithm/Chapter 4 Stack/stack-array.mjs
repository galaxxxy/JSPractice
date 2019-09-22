class Stack{
    constructor(){
       this.items = []; 
    }
    // methods
    push(elem){
        this.items.push(elem);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
}

// CommonJS modules
// module.exports = Stack;
// ES modules
export default Stack;