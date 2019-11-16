// import Ninja from './11-9.mjs';
// import { compareNinjas } from "./11-9.mjs";
import Ninja, { compareNinjas } from './11-9.mjs';

const ninja1 = new Ninja('Yoshi');
const ninja2 = new Ninja('Hattori');

if (ninja1 !== undefined && ninja2 !== undefined) {
  console.log('we can create a couple of Ninjas');
}

if (!compareNinjas(ninja1, ninja2)) {
  console.log('we can compare ninjas');
}