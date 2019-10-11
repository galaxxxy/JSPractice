import { defaultCompare } from "../util.mjs";
function insertionSort(array, compareFn = defaultCompare){
    const {length} = array;
    for(let i = 0; i < length; i++){
        let j = i;
        const temp = array[j+1];
        while(j >= 0 && compareFn(array[j], temp) === 1){
            swap(array, j+1, j);
            j--;
        }
    }
    return array;
};

function swap(array, a, b){
    [array[a], array[b]] = [array[b], array[a]];
}

function createNonSortedArray(size){
    const array = [];
    for(let i = size; i > 0; i--){
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array);
array = insertionSort(array);
console.log(array);