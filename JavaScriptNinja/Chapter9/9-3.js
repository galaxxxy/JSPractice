const assert = require('../common');

const ninjas = ['Yagyu', 'Kuma', 'Hattori', 'Fuma'];

delete ninjas[1];

assert(ninjas.length === 4, 'Length still reports that there are 4 items');

assert(ninjas[0] === 'Yagyu', 'First item is Yagyu');
assert(ninjas[1] === undefined, 'We\'ve simply created a hole');
assert(ninjas[2] === 'Hattori', 'Hattori is still the third item');
assert(ninjas[3] === 'Fuma', 'And Fuma is the last item');