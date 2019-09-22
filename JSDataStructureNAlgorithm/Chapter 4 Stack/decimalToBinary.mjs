// import Stack from './stack-array.mjs';
// import Stack from './stack-object.mjs';
// import Stack from './stack-symbol.mjs';
import Stack from './stack-symbol2.mjs';
// import Stack from './stack-weakmap.mjs';
// import Stack from './stack-weakmap2.mjs';

function decimalToBinary(decNum){
    const remStack = new Stack();
    let rem = 0,
        binStr = ``;
    // ????
    decNum = Math.floor(decNum);
    while(decNum > 0){
        rem = decNum%2;
        remStack.push(rem);
        decNum = Math.floor(decNum/2);
    }
    while(!remStack.isEmpty()){
        binStr = `${binStr}${remStack.pop()}`;
    }
    return binStr;
}

// test example
console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));