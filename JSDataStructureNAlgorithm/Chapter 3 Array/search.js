let nums = [1,2,3,4,5,6,7,8,9];
function multipleOf5(elem, index, arr){
    return elem%5 == 0;
}

// ECMAScript 2015 .find() & .findIndex(valueToFind[, fromIndex])
console.log(nums.find(multipleOf5));
console.log(nums.findIndex(multipleOf5));

// ECAMScript 7 .includes()
console.log(nums.includes(10));
console.log(nums.includes(2));
console.log(nums.includes(2,1));
console.log(nums.includes(2,3));
