import { defaultCompare } from "../util.mjs";

export function quickSort(array, compareFn = defaultCompare){
    return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn){
    let index = 0;
    if(array.length > 1){
        index = partition(array, left, right, compareFn);
        if(left < index - 1){
            quick(array, left, index - 1, compareFn);
        }
        if(index < right){
            quick(array, index, right, compareFn);
        }
    }
    return array;
};

function partition(array, left, right, compareFn){
    const pivot = array[Math.floor((right+left)/2)];
    let i = left,
        j = right;
    while(i <= j){
        while(compareFn(array[i], pivot) === -1){
            i++;
        }
        while(compareFn(array[j], pivot) === 1){
            j--;
        }
        if(i <= j){
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
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
array = quickSort(array);
console.log(array);