import {defaultEquals} from '../util.mjs';

const DOES_NOT_EXIST = -1;

function sequentialSearch(array, value, equalsFn = defaultEquals){
    for(let i = 0; i < array.length; i++) {
        if(equalsFn(array[i], value)){
            return i;
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
array = sequentialSearch(array, 5);
console.log(array);