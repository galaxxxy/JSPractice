// import Stack from './stack-array.mjs';
// import Stack from './stack-object.mjs';
// import Stack from './stack-symbol.mjs';
import Stack from './stack-symbol2.mjs';
// import Stack from './stack-weakmap.mjs';
// import Stack from './stack-weakmap2.mjs';

function baseConverter(decNum, base){
    const remStack = new Stack(),
          digits = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`;// 2～36进制
    let rem = 0,
        baseStr = ``;
    if(base < 2 || base > 36){
        console.log(`Base should be the number between 2 and 36!`);
        return ``;
    }
    // ????
    decNum = Math.floor(decNum);
    while(decNum > 0){
        rem = decNum % base;
        remStack.push(rem);
        decNum = Math.floor(decNum/base);
    }
    while(!remStack.isEmpty()){
        baseStr = `${baseStr}${digits[remStack.pop()]}`;
    }
    return baseStr;
}

// test example
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
console.log(baseConverter(100345, 1));