// 迭代求值
// function fibonacciIterative(num){
//     if(num < 1) return 0;
//     if(num <= 2) return 1;
//     let prevOne = 1,
//         prevTwo = 1,
//         fibN = num;
//     for(let i = 2; i < num; i++){
//         fibN = prevOne + prevTwo;
//         prevTwo = prevOne;
//         prevOne = fibN;
//     }
//     return fibN;
// }

// 递归求值
// function fibonacciIterative(num){
//     if(num < 1) return 0;
//     if(num <= 2) return 1;
//     return fibonacciIterative(num - 1) + fibonacciIterative(num - 2);
// }

// 记忆化递归
function fibonacciMemoiztion(){
    const memo = [0,1,1];
    return function(num){
        if(memo[num] != null) return memo[num];
        memo[num] = memo[num - 1] + memo[num - 2];
        return memo[num]
    }
}

// console.log(fibonacciIterative(5));
const fun = fibonacciMemoiztion()
console.log(fun(1));
console.log(fun(2));
console.log(fun(3));
console.log(fun(4));
console.log(fun(5));
console.log(fun(6));
console.log(fun(7));