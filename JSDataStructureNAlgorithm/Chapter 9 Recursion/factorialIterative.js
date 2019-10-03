// 迭代阶乘
// function factorialIterative(number){
//     if(number < 0) return undefined;
//     let total = 1;
//     for(let i = number; i > 1; i--){
//         total *= i;
//     }
//     return total;
// }

// 递归阶乘
function factorialIterative(number){
    console.trace();
    if(number < 0) return undefined;
    if(number <= 1){
        return 1;
    }
    return factorialIterative(number - 1) * number;
}

console.log(factorialIterative(5));// 120