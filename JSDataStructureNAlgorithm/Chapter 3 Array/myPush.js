//.push()
let nums = [1,2,3,4];
Array.prototype.myPush = function(value){
    this[this.length] = value;
}
nums.myPush(5);
console.log(nums);