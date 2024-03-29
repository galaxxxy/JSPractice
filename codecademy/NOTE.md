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
#### The .findIndex() Method
Calling `.findIndex()` on an array will return the index of the first element that evaluates to `true` in the callback function.If there isn't a single element in the array that satisfies the condition in the callback, then `.findIndex()` will return `-1`.
#### The .reduce() Method
The `.reduce()` method returns a sigle value after iterating through the elements of an array, thereby reducing the array.
- `.reduce()` takes in a callback function as argument.The callback function has two parameters, the value of first parameter starts off as the value of the first element in the array and the second parameter start as the second element.
- As `.reduce()` iterates through the array, the return value of the callback function becomes the first parameter value for the next iteration, the second parameter takes on the value of the current element in the looping process.

The `.reduce()` method can also take an optional second parameter to set an initial value for the first parameter of callback function.
## Objects
### Creating Object Literals
We fill an object with unordered data.This data is organized into key-value pairs.A key's value can be of any data type in the language including functions or other objects.
### Accessing Properties
We can access a key's value by using dot notation(`.`) or bracket notation(`[ ]`).<br/>
We must use bracket notation when accessing keys that have numbers,spaces,or special characters in them.<br/>
With bracket notation you can also use a variable inside the brackets to select the keys of an object.
### Property Assignment
One of two things can happen with property assignment:
- If this property already exists on the object,whatever value it held before will be replaced with the newly assigned value.
- If there was no property with that name,a new property will be added to the object.

We can't reassign an object declared with `const`,but we can still add new properties and change the properties that are here.You can delete a property from an object with the `delete` operator.
### Methods
We can include methods in our object literals by creating ordinary,comma-separated key-value pairs.The key serves as our method's name,while the value is an anonymous function expression.<br/>
With the new method syntax introduced in ES6 we can omit the colon and the `function` keyword.
### Nested Objects
Nested Object is an object has another object as property which in turn could have a property that is an array of even more objects.We can chain operators to access nested properties.
### Pass By Reference
When we pass a variable assigned to an object into a function as an argument,the computer interprets the parameter name as pointing to the space in memory holding that object.Therefore,functions which change object properties actually mutate the object permanently even when the object is assigned to a `const` variable.
## Advanced Objects
### The this Keyword
The `this` keyword references the calling object which provides access to the calling objects's properties.
### Arrow Functions and this
Arrow functions inherently bind,or tie,an already defined `this` value to the function itself that is Not the calling object.`this` retains the value of the enclosing lexical context's `this`.
### Privacy
To place an underscore `_` before the name of a property to mean that the property is not intended to be directly manipulated.
#### Getters
- We use the `get` keyword followed by a function.
- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- getter methods do not need to be called with a set of parentheses.
#### Setters
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. 
### Factory Functions
A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.
### Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.We can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes.
```
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  };
};

//property value shorthand
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  };
};
```
### Destructured Assignment
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces `{ }` and assign to it the object. We can even use destructured assignment to grab nested properties of an object.
```
var a, b;

({a, b} = {a: 1, b: 2});
//or 
var {a, b} = {a: 1, b: 2};
```
The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
### Built-in Object Methods
#### Object.keys()
The `Object.keys()` method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
#### Object.entries()
The Object.entries() method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a `for...in` loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array should be sorted first like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.
#### Object.assign()
The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
