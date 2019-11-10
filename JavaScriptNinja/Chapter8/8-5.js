const assert = require('../common');

function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    get: () => _skillLevel,
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError('Skill level should be a number');
      }
      _skillLevel = value;
    }
  });
}

const ninja = new Ninja();

ninja.skillLevel = 10;
assert(ninja.skillLevel === 10, 'The value was updated');

try {
  ninja.skillLevel = 'Great';
} catch (e) {
  console.log('Setting a non-integer value throws an exception');
}