// 用于比较两个JS对象或值是否相等
export function defaultEquals(a, b){
    return a === b;
}

// 用于将输入转化成字符串
export function defaultToString(item){
    if(item === null){
        return `NULL`;
    }else if(item === undefined){
        return `UNDEFINED`;
    }else if(typeof item === `string` || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

// 比较两个数大小
export function defaultCompare(a, b){
    if(a > b){
        return 1;
    }else if( a < b){
        return -1;
    }else{
        return 0;
    }
}