const assert = require('../common.js');

const emperor = { name: 'Komei'};
const representative = new Proxy(emperor, {
  get: (target, key) => {
    console.log(`Reading ${key} through a proxy`);
    return key in target ? target[key]
                         : `Donnot bother the emperor!`;
  },
  set: (target, key, value) => {
    console.log(`Writing ${key} through a proxy`);
    target[key] = value;
  }
});

assert(emperor.name === 'Komei', 'The emperor\'s name is Komei');
assert(representative.name === 'Komei', 'We can get the name property through a proxy');

assert(emperor.nickname === undefined, 'The emperor doesn\'t have a nickname');
assert(representative.nickname === 'Donnot bother the emperor!', 'The proxy jumps in when we make inproper request');

representative.nickname = 'Tenno';
assert(emperor.nickname === 'Tenno', 'The emperor now has a nickname');
assert(representative.nickname === 'Tenno', 'The nickname is also accessible through the proxy');