const assert = require('../common');

function skulk(ninja) {
  report(ninja + ' skulking');
}
function report(message) {
  console.log(message);
}

skulk('Kuma');
skulk('Yoshi');