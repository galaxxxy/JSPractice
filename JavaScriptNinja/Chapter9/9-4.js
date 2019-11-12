const assert = require('../common');

const ninjas = ['Yagyu', 'Kuma', 'Hattori', 'Fuma'];

let removedItems = ninjas.splice(1, 1);

assert(removedItems.length === 1, 'One item was removed');
assert(removedItems[0] === 'Kuma');

assert(ninjas.length === 3, 'There are now three items in the array');
assert(ninjas[0] === 'Yagyu', 'The first item is still Yagyu');
assert(ninjas[1] === "Hattori", "Hattori is now in the second place");
assert(ninjas[2] === "Fuma", "And Fuma is in the third place");

removedItems = ninjas.splice(1, 2, 'Mochizuki', 'Yoshi', 'Momochi');
assert(removedItems.length === 2, "Now, we've removed two items");
assert(removedItems[0] === "Hattori", "Hattori was removed");
assert(removedItems[1] === "Fuma", "Fuma was removed");
assert(ninjas.length === 4, "We've inserted some new items");
assert(ninjas[0] === "Yagyu", "Yagyu is still here");
assert(ninjas[1] === "Mochizuki", "Mochizuki also");
assert(ninjas[2] === "Yoshi", "Yoshi also");
assert(ninjas[3] === "Momochi", "and Momochi");