let arr = [1,2,3,4,undefined];
Array.prototype.reIndex = function(array){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== undefined){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log("arr:"+arr);
console.log("newArray:"+arr.reIndex(arr));