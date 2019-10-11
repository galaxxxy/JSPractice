import { defaultCompare } from "../util.mjs";
function bubbleSort(array, compareFn = defaultCompare){
    const {length} = array;
    for(let i = 0; i < length; i++){
        // console.log(`${i}:`);
        for(let j = 0; j < length - i; j++){
            if(compareFn(array[j], array[j+1]) === 1){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            // console.log(array);
        }
    }
    return array;
}

function createNonSortedArray(size){
    const array = [];
    for(let i = size; i > 0; i--){
        array.push(i);
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array);
array = bubbleSort(array);
console.log(array);