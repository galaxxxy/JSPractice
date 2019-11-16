import { message, sayHiToNinja } from './11-6.mjs';

if (message === 'Hello') {
  console.log('We can access the imported variable');
}
if (sayHiToNinja() === 'Hello Yoshi') {
  console.log('We can say hi to Yoshi from outside the module');
}

if (typeof ninja === 'undefined') {
  console.log('we cannot access Yoshi directly');
}
