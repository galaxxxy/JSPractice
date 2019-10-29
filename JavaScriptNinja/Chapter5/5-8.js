const assert = require('../common');

const GLOBAL_NINJA = "Yoshi";
function reportActivity() {
  const functionActivity = "jumping";
  for (let i = 0; i < 3; i++) {
    let forMessage = `${GLOBAL_NINJA} ${functionActivity}`;
    assert(forMessage === "Yoshi jumping", "yoshi is jumping within the for block");
    assert(i, `current loop counter: ${i}`);
  }
}

reportActivity();
assert(typeof i === 'undefined' && typeof forMessage === 'undefined', 'we cannot see function varibles outside of a function');