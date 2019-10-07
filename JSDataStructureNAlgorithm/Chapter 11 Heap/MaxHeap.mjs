import { MinHeap } from "./MinHeap.mjs";
import { defaultCompare } from '../util.mjs'

function reverseCompare(compareFn){
    return (a, b) => compareFn(b, a);
}

export class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}