import { insertionSort } from "./insertion-sort.mjs";
function bucketSort(array, bucketSize = 5){
    if(array.length < 2){
        return array;
    }
    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
}

function createBuckets(array, bucketSize){
    let minValue = array[0],
        maxValue = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < minValue){
            minValue = array[i];
        }else if(array[i] > maxValue){
            maxValue = array[i];
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for(let i = 0; i < bucketCount; i++){
        buckets[i] = [];
    }
    for(let i = 0; i < array.length; i++){
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }
    return buckets;
}
function sortBuckets(buckets){
    const sortedArray = [];
    for(let i = 0; i < buckets.length; i++){
        if(buckets[i].length !== 0) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]);
        }
    }
    return sortedArray;
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
array = bucketSort(array, 10);
console.log(array);