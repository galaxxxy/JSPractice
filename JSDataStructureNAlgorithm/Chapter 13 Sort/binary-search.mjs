import {defaultCompare} from '../util.mjs';
import {quickSort} from './quick-sort.mjs';

const DOES_NOT_EXIST = -1;
function binarySearch(array, value, compareFn = defaultCompare){
    const sortedArray = quickSort(array);
    let low = 0,
        high = sortedArray.length - 1;
    while(low !== high){
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];
        if(compareFn(element, value) === -1){
            low = mid + 1;
        }else if(compareFn(element, value) === 1){
            high = mid - 1;
        }else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

function createNonSortedArray(size){
    const array = [];
    for(let i = size; i > 0; i--){
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

let array = createNonSortedArray(10);
console.log(array);
array = binarySearch(array);
console.log(array);