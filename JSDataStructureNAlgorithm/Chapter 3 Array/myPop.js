//.pop()
let nums = [1,2,3,4];
Array.prototype.myPop = function(){
    let temp = this[this.length-1];
    this.length--;
    return temp;
}
console.log(nums.myPop());
console.log(nums);