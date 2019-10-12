import { defaultCompare } from "../util.mjs";

function mergeSort(array, compareFn = defaultCompare){
    if(array.length > 1){
        const {length} = array,
              middle = Math.floor(length / 2),
              left = mergeSort(array.slice(0, middle), compareFn),
              right = mergeSort(array.slice(middle), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}
function merge(left, right, compareFn = defaultCompare){
    let i = 0,
        j = 0;
    const result = [];
    while(i < left.length && j < right.length){
        if(compareFn(left[i], right[j]) === -1){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    const remain = i < left.length ? left.slice(i) : right.slice(j);
    result.push(...remain);
    return result;
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
array = mergeSort(array);
console.log(array);