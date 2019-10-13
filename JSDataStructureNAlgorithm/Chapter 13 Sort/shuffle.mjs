// Fisher-Yates randomized algorithm

function shuffle(array){
    for(let i = array.length - 1; i > 0 ; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, randomIndex, i);
    }
    return array;
}

function swap(array, i, j){
    [array[i], array[j]] = [array[j], array[i]];
}

function createNonSortedArray(size){
    const array = [];
    for(let i = size; i > 0; i--){
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array);
array = shuffle(array, 5);
console.log(array);