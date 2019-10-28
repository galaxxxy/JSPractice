const assert = require('../common');
function forEach(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback.call(list[i], i);
  }
}
const weapons = [ { type: 'shuriken' },
                  { type: 'katana' },
                  { type: 'nunchucks' }];

forEach(weapons, function(index) {
  assert(this === weapons[index], `got the expected value of ${weapons[index].type}`);
})