class QueueElement {
    constructor(elem, priority) {
        this.elem = elem;
        this.priority = priority;// 越大优先级越大
    }
}
class PriorityQueue {
    constructor() {
        this._items = {};
        this._count = 0;
        this._lowestCount = 0;
    }
    // methods
    enqueue(elem) {
        if (this._count === this._lowestCount) {
            // empty
            this._items[this._count] = elem;
            this._count++;
        } else {
            // not empty
            if (elem.priority <= this._items[this._count - 1]['priority']) {
                // elem has a lowest priority
                this._items[this._count] = elem;
            }else{
                for(let i = this._count; i > this._lowestCount; i--){
                    if(elem.priority > this._items[i - 1]['priority']){
                        this._items[i] = this._items[i - 1];
                        this._items[i-1] = elem;
                    }else{
                        this._items[i] = elem;
                        break;
                    }
                }
            }
            this._count++;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const temp = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return temp;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount];
    }
    isEmpty() {
        return this._lowestCount === this._count;
    }
    size() {
        return this._count - this._lowestCount;
    }
    clear() {
        this._count = 0;
        this._lowestCount = 0;
        this._items = {};
    }
    toString() {
        let str = ``;
        if (this.isEmpty()) {
            return str;
        }
        str = `${this._items[this._lowestCount]['elem']}`;
        for (let i = this._lowestCount + 1; i < this._count; i++) {
            str = `${str},${this._items[i]['elem']}`;
        }
        return str;
    }
}

// test example
let priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());// true
priorityQueue.enqueue(new QueueElement('John', 1));
priorityQueue.enqueue(new QueueElement('Jack', 2));
priorityQueue.enqueue(new QueueElement('Camila', 2));
console.log(priorityQueue.toString()); // Jack,Camila,John
priorityQueue.clear();
console.log(priorityQueue.isEmpty());// true
priorityQueue.enqueue(new QueueElement('Sigma', 2));
priorityQueue.enqueue(new QueueElement('John', 1));
priorityQueue.enqueue(new QueueElement('Camila', 2));
priorityQueue.enqueue(new QueueElement('Jack', 3));
console.log(priorityQueue.isEmpty());// false
console.log(priorityQueue.toString()); // Jack,Sigma,Camila,John
priorityQueue.dequeue();
console.log(priorityQueue.toString()); // Sigma,Camila,John
console.log(priorityQueue.size());// 3
console.log(priorityQueue.peek());// QueueElement {elem: "sigma", priority: 2}
