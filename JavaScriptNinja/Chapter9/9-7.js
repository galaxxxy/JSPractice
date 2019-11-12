const assert = require('../common');

const ninjas = [
  {name: 'Yagyu', weapon: 'shuriken'},
  {name: 'Yoshi', weapon: 'katana'},
  {name: 'Kuma', weapon: 'wakizashi'}
];

const weapons = ninjas.map(ninja => ninja.weapon);

assert(weapons[0] === "shuriken"
    && weapons[1] === "katana"
    && weapons[2] === "wakizashi"
    && weapons.length === 3,
    "The new array contains all weapons");