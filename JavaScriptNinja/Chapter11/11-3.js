const requirejs = require('requirejs');

requirejs.define('MouseCounterModule', ['jQuery'], $ => {
  let numClicks = 0;
  const handleClick = () => {
    console.log(++numClicks);
  };
  return {
    countClicks: () => {
      $(document).on('click', handleClick);
    },
  };
});