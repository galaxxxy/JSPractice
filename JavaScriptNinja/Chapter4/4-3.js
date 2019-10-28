const assert = require('../common');
function infiltrate(person) {
  assert(person === 'gardener', 'the person is gardener');
  assert(arguments[0] === 'gardener', 'the first argument is gardener');
  arguments[0] = 'ninja';
  
  assert(person === 'ninja', 'the person is a ninja now');
  assert(arguments[0] === 'ninja', 'the first argument is a ninja');
  
  person = 'gardener';
  assert(person === 'gardener', 'the person is gardener once more');
  assert(arguments[0] === 'gardener', 'the first argument is gardener again');
}
infiltrate('gardener');