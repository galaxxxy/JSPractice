const text = 'Domo arigato!';
console.log('Before defining functions');

function useless(ninjaCallback) {
  console.log('In useless function');
  return ninjaCallback();
}

function getText() {
  console.log('In getText function');
  return text;
}

console.log('Before making all the calls');
if(useless(getText) === text) {
  console.log(`The useless function works! ${text}`);
}
console.log('After the calls have been made');