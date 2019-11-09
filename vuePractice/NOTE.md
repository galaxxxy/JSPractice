## Introduction
### Conditionals and Loops
The `v-if` directive can be used to conditionally render the element based on the truthy-ness of the expression value.The `v-for` directive can be used for displaying a list of items using the data from an Array.
### Handling User Input
The `v-on` directive can be used to attach event listeners that invoke methods on Vue instances.The `v-model` directive can make a two-way binding between form input and app state.
### Composing with Components
In Vue, a component is essentially a Vue instance with pre-defined options. Registering a component in Vue is straightforward:
```
// Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue(...)
```

## Template Syntax
### Directives
#### Dynamic Arguments
Dynamic arguments are expected to evaluate to a string,with the exception of `null`.The `null` can be used to remove the binding.Any other value can trigger a warning.<br/>
Dynamic argument expressions have some syntax constraints because certain characters, such as spaces and quotes, are invalid inside HTML attribute names.The workaround is to either use expressions without spaces or quotes,or replace the complex expression with a computed property.<br/>
When using in-DOM templates (templates directly written in an HTML file), you should avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase.
#### Modifiers
