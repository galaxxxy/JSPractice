const assert = require('../common');

const ninjas = [];
assert(ninjas.length === 0, 'An array starts empty');

ninjas.push('Kuma');
assert(ninjas[0] === 'Kuma', 'Kuma is the first item in the array');
assert(ninjas.length === 1, 'We have one item in the array');

ninjas.push('Hattori');
assert(ninjas[0] === 'Kuma', 'Kuma is still first');
assert(ninjas[1] === 'Hattori', 'Hattori is added to the end of the array');
assert(ninjas.length === 2, 'We have two items in the array!');

ninjas.unshift("Yagyu");
assert(ninjas[0] === "Yagyu", "Now Yagyu is the first item");
assert(ninjas[1] === "Kuma", "Kuma moved to the second place");
assert(ninjas[2] === "Hattori", "And Hattori to the third place");
assert(ninjas.length === 3, "We have three items in the array!");

const lastNinja = ninjas.pop();
assert(lastNinja === "Hattori", "We've removed Hattori from the end of the array");
assert(ninjas[0] === "Yagyu", "Now Yagyu is still the first item");
assert(ninjas[1] === "Kuma", "Kuma is still in second place");
assert(ninjas.length === 2, "Now there are two items in the array");

const firstNinja = ninjas.shift();
assert(firstNinja === "Yagyu", "We've removed Yagyu from the beginning of the array");
assert(ninjas[0] === "Kuma", "Kuma has shifted to the first place");
assert(ninjas.length === 1, "There's only one ninja in the array");