//.reverse()
let nums = [1,2,3,4,5];
Array.prototype.myReverse = function(){
    let temp = 0;
    for(let i = 0; i < Math.floor(this.length/2); i++){
        temp = this[i];
        this[i] = this[this.length-1-i];
        this[this.length-1-i] = temp;
    }
}
console.log(".myReverse():");
nums.myReverse();
console.log(nums);

console.log(".reverse():");
nums.reverse();
console.log(nums);