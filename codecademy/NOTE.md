# Introduction To JavaScript
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

## Arrays
### Arrays with let and const
Elements in an array declared with `const` array remain mutable.Meaning that we can change the contents of a `const` array,but cannot reassign a new or a different value.
### The .push() Method
It will mutate an array by adding elements to its end.
### The .pop() Method
It will mutate an array by removing element from its end.
### The .shift() Method
It will mutate an array by removing element from its front.
### The .unshift() Method
It will mutate an array by adding elements to its front.
## Loops
empty for now
## Iterators
### Higher-Order Functions
Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
#### Functions as Parameters
We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.Anonymous functions can be arguments too.
### Iterators
The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators.Iterators are methods called on arrays to manipulate elements and return values.
#### The .forEach() Method
`forEach()` will execute the same code for each element of an array.
- `forEach()` takes an argument of callback function.A callback function is a function passed as an argument into another function.
- `forEach()` loops through the array and executes the callback function for each element.During each execution, the current element is passed as an argument to the callback function.
- The return value for `forEach()` will always be `undefined`.

Another way to pass a callback for `.forEach()` is to use arrow function syntax:
```
groceries.forEach(groceryItem => console.log(groceryItem));
```
#### The .map() Method
`.map()` works in similar manner to `.forEach()`.The major difference is that `.map()` returns a new array.
#### The .filter() Method
`.filter()` returns an array of elements after filtering out certain elements from the origin array.The callback function for the `.filter()` method should return `true` or `false` depending on the element that is passed to it.The elements that cause the callback function to return `true` are added to the new array.
