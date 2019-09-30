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