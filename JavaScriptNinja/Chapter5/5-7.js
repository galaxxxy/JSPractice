const assert = require('../common');

var globalNinja = 'Yoshi';

function reportActivity() {
  var functionActivity = 'jumping';

  for (var i = 0; i < 3; i++) {
    var forMessage = `${globalNinja} ${functionActivity}`;
    assert(forMessage === 'Yoshi jumping', 'Yoshi is jumping within the for block');
    assert(i === 3 && forMessage === 'Yoshi jumping', 'Loop varibles accessible outside of the loop');
  }
}

reportActivity();
assert(typeof i === 'undefined' && typeof forMessage === 'undefined', 'we cannot see function varibles outside of a function')