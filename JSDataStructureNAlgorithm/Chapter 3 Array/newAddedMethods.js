const nums = [1,2,3,4,5,6];

// for...of
console.group("for...of:");
for(const num of nums){
    console.log(num%2 === 0 ? 'even':'odd');
}
console.groupEnd();

// @@iterator object
console.group("@@iterator object:");
let iterator = nums[Symbol.iterator]();
console.log(iterator.next().value);
for(const n of iterator){
    console.log(n);
}
// 所有值已迭代完
console.log(iterator.next().value);
console.groupEnd();

// entries()
console.group("entries():");
let aEntries = nums.entries();
console.log(aEntries.next().value);
for(const num of aEntries){
    console.log(num);
}
console.groupEnd();

// keys()
console.group("keys():");
let aKeys = nums.keys();
console.log(aKeys.next());
for(const num of aKeys){
    console.log(num);
}
console.log("已经无可迭代的值");
console.log(aKeys.next());
console.groupEnd();

// values()
console.group("values():");
let aValues = nums.values();
console.log(aValues.next());
for(const num of aValues){
    console.log(num);
}
console.log("已经无可迭代的值");
console.log(aValues.next());
console.groupEnd();

// Array.from()
console.group("from():");
let numsCopy = Array.from(nums);
console.log(numsCopy);
let evens = Array.from(nums,num => (num%2 === 0));
console.log(evens);
console.groupEnd();

// Array.of()
console.group("of():");
let nums1 = Array.of(1);// let nums1 = [1]; 
let nums2 = Array.of(1,2,3,4,5,6);// let nums2 = [1,2,3,4,5,6];

let numsCopy2 = Array.of(...nums2);
console.log(numsCopy2);
console.groupEnd();

// fill()
console.group("fill():");
nums2.fill(0);
console.log(nums2);
nums2.fill(2,1);
console.log(nums2);
nums2.fill(1,3,5);
console.log(nums2);
let ones = Array(6).fill(1);
console.log(ones);
console.groupEnd();

// copyWithin(start,from(contained),to(not contained))
console.group("copyWithin():");
let copyArray = [1,2,3,4,5];
copyArray.copyWithin(0,3);
console.log(copyArray);
copyArray.copyWithin(3,1,3);
console.log(copyArray);
console.groupEnd();