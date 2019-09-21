//.unshift()
let numbers = [1,2,3,4];
Array.prototype.myUnshift = function(value){
    for(let i = this.length; i > 0; i--){
        this[i] = this[i-1];
    }
    this[0] = value;
}
numbers.myUnshift(0);
console.log(numbers);