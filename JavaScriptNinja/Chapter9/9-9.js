const assert = require('../common');

const ninjas = [
  {name: 'Yagyu', weapon: 'shuriken'},
  {name: 'Yoshi'},
  {name: 'Kuma', weapon: 'wakizashi'}
];

const ninjaWithWakizashi = ninjas.find(ninja => ninja.weapon === 'wakizashi');

assert(ninjaWithWakizashi.name === 'Kuma'
    && ninjaWithWakizashi.weapon === 'wakizashi',
    'Kuma is wielding a wakizashi');
    
    const ninjaWithKatana = ninjas.find(ninja => ninja.weapon === 'katana');
assert(ninjaWithKatana === undefined,
    'We couldn\'t find a ninja that wields a katana');

const armedNinjas = ninjas.filter(ninja => 'weapon' in ninja);
assert(armedNinjas.length === 2, 'There are two armed ninjas:'); assert(armedNinjas[0].name === 'Yagyu'
    && armedNinjas[1].name === 'Kuma', 'Yagyu and Kuma');