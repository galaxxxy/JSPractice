import { MinHeap } from './MinHeap.mjs';
// import { MaxHeap } from './MaxHeap.mjs';

const heap = new MinHeap();
// const heap = new MaxHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
console.log(heap);
// min:[ 2, 3, 4, 5 ]
// max:[ 5, 4, 3, 2 ] 

heap.insert(1);
console.log(heap);
// min:[ 1, 2, 4, 5, 3 ]
// max:[ 5, 4, 3, 2, 1 ] 

console.log('Extract minimum: ', heap.extract());// 1
// console.log('Extract maximum: ', heap.extract());// 5

