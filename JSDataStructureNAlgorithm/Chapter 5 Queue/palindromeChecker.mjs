import Deque from './deque-object.mjs';

function palindromeChecker(str){
    if(str === null || str === undefined){
        return false;
    }else if(!str.length){
        return false;
    }

    const deque = new Deque(),
          lowerStr = str.toLocaleLowerCase().split('').join('');
    let isEqual = true,
        firstChar = '',
        lastChar = '';

    // initialize
    for(let i = 0; i < lowerStr.length; i++){
        deque.addBack(lowerStr[i]);
    }

    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    return isEqual;
}

// test example
console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));