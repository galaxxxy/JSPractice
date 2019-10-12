function countingSort(array){
    if(array.length < 2){
        return array;
    }
    const maxValue = findMaxValue(array),
          counts = new Array(maxValue+1);
    array.forEach(element => {
        if(!counts[element]){
            counts[element] = 0;
        }
        counts[element]++;
    });

    let sortedIndex = 0;
    counts.forEach((count, i) => {
        while(count > 0){
            array[sortedIndex++] = i;
            count--;
        }
    });
    return array;
}

function findMaxValue(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
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
array = countingSort(array);
console.log(array);