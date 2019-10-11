import { defaultCompare } from "../util.mjs";
function selectionSort(array, compareFn = defaultCompare){
    const {length} = array;
    let indexMin = 0;
    for(let i = 0; i < length; i++){
        indexMin = i;
        for(let j = i + 1; j < length; j++){
            if(compareFn(array[indexMin], array[j]) === 1){
                indexMin = j;
            }
        }
        if(indexMin !== i){
            swap(array, indexMin, i);
        }
    }
    return array;
}
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
array = selectionSort(array);
console.log(array);