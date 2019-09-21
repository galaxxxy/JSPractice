//.shift()
let nums = [0,1,2,3,4,5];
Array.prototype.myShift = function(){
    let temp = this[0];
    for(let i = 1; i < this.length; i++){
        this[i-1] = this[i];
    }
    this.length--;
    return temp;
}
console.log(nums.myShift());
console.log(nums);