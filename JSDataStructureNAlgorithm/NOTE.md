# 学习JavaScript数据结构与算法
## Stack
### ES模块与CommonJS模块
CommonJS 模块在普通的.js文件中使用`module.exports`进行定义，然后使用`require()`函数在其他.js文件中使用:
```
// foo.js
module.exports = function(){
    return 'Hello foo!';
}

// index.js
var foo = require('./foo');
console.log(foo());// Hello foo!
```
Node v8.5开始，可以使用`--experimental-modules`标志对ES模块规范的各种支持。Node v12.4开始，ES模块可以在.mjs文件中定义:
```
// foo.mjs
export function foo(){
    return 'Hello foo!';
}

// index.mjs
import { foo } from './foo.mjs';
console.log(foo());// Hello foo!
```
使用 `node --experimental-modules index.mjs`命令运行此事例。