//.splice()
let nums = [0,1,2,3,4,5];
let del = [];
del = nums.splice(0,2);
console.log("remain:"+nums);
console.log("delete:"+del);
nums.splice(0,0,1);
console.log("after add:"+nums);
