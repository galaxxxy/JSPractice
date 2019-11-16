import * as ninjaModule from './11-5.mjs'

if (ninjaModule.message === 'hello') {
  console.log('We can access the imported variable');
}
if (ninjaModule.sayHiToNinja() === 'hello Yoshi') {
  console.log('We can say hi to Yoshi from outside the module');
}

if (typeof ninjaModule.ninja === 'undefined') {
  console.log('we cannot access Yoshi directly');
}