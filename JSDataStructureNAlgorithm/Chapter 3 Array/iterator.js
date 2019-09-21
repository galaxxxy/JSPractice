function isEven(x){
    console.log(x);
    return x%2 === 0 ? true:false;
}
let nums = [1,2,3,4,5,6,7,8,9,10,11];
let result = 0;
// .every()
console.group(".every()");
result = nums.every(isEven);
console.log(result);
console.groupEnd();

// .some()
console.group(".some()");
result = nums.some(isEven);
console.log(result);
console.groupEnd();

// .forEach()
console.group(".forEach()");
result = nums.forEach(isEven);
console.log(result);
console.groupEnd();

// .map()
console.group(".map()");
result = nums.map(isEven);
console.log(result);
console.groupEnd();

// .filter()
console.group(".filter()");
result = nums.filter(isEven);
console.log(result);
console.groupEnd();

// .reduce()
console.group(".reduce()");
result = nums.reduce((prev,next) => {
    return prev + next;
});
console.log(result);
console.groupEnd();
