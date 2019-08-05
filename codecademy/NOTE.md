# Introduction To JavaScript
## Introduction
### Variable
- The `var` keyword is used in pre-ES6 versions of JS.
- `let` is the preferred way to declare a variable when it can be resigned, and `const` is the preferred way to declare a variable with a constant value.
- In ES6, template literals use backticks `` ` `` and `${}` to interpolate values into a string.
## Functions
### Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special "fat arrow" `() =>`notation.<br/>
Arrow functions remove the need to type out the keyword `function` every time you need to create a function.Instead, you first inclued the parameters inside the `( )` and then add an arrow `=>` that points to the function body surrounded in `{ }` like this:
```
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
```