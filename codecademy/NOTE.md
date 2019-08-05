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
#### Concise Body Arrow Functions
JavaScript provides several ways to refactor arrow function syntax.The most condensed form of the function is known as concise body.We'll explore a few of these techniques below:
1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.However, if a function takes zero or multiple parameters,parentheses are required.
2. A function body composed of a single-line block does not need curly braces.Without the curly braces,whatever that line evaluates will be automatically returned.The contents of the block should immediately follow the arrow `=>` and the `return` keyword can be removed.This is referred to as implicit return.
