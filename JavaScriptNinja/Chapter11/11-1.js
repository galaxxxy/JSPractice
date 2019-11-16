const assert = require('../common');

const MouseCounterModule = function() {
  let numClicks = 0;
  const handleClick = () => {
    console.log(++numClicks);
  };
  return {
    countClicks: () => {
      document.addEventListener('click', handleClick);
    },
  };
}();

assert(typeof MouseCounterModule.countClicks === 'function', 'we can access module functionality');
assert(typeof MouseCounterModule.numClicks === 'undefined'
  && typeof MouseCounterModule.handleClick === 'undefined', 'We cannot access internal module details');
