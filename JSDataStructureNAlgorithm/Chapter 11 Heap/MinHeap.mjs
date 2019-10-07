import { defaultCompare } from '../util.mjs'

export class MinHeap{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index){
        return index * 2 + 1;
    }
    getRightIndex(index){
        return index * 2 + 2;
    }
    getParentIndex(index){
        if(index === 0){
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }
    // methods
    insert(value){
        if(value != null){
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }
    siftUp(index){
        function swap(arr, a, b){
            const temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        let parent = this.getParentIndex(index);
        while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > -1){
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
    size(){
        return this.heap.length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    findMinimum(){
        return this.isEmpty() ? undefined : this.heap[0];
    }
    extract(){
        if(this.isEmpty()){
            return undefined;
        }
        const removedValue = this.heap.shift();
        if(this.size() > 1){
            this.siftDown(0);
        }
        return removedValue;
    }
    siftDown(index){
        function swap(arr, a, b){
            const temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        let element = index;
        const left = this.getLeftIndex(index),
              right = this.getRightIndex(index),
              size = this.size();
        if(left < size && this.compareFn(this.heap[element], this.heap[left]) > -1){
            element = left;
        }
        if(right < size && this.compareFn(this.heap[element], this.heap[right]) > -1){
            element = right;
        }
        if(index !== element){
            swap(this.heap, index, element);
            this.siftDown(element);
        }
    }
}