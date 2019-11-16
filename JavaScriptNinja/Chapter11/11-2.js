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

(function(module) {
  let numScrolls = 0;
  const handleScroll = () => {
    console.log(++numScrolls);
  };
  module.countScrolls = () => {
    document.addEventListener('scroll', handleScroll);
  };
})(MouseCounterModule);

assert(typeof MouseCounterModule.countClicks === 'function', 'We can access initial module functionality');
assert(typeof MouseCounterModule.countScrolls === 'function', 'We can access augmented module functionality');
console.log(MouseCounterModule);