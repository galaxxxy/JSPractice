const assert = require('../common');

const puppet = {
  rules: false,
};
function Emperor() {
  this.rules = true;
  return puppet;
}

const emperor = new Emperor();

assert(emperor === puppet, 'the emperor is merely a puppet');
assert(emperor.rules === false, 'the puppet does not know how to rule');