const assert = require('../common');

const dict = {
  ja: {
    'Ninjas for hire': 'レンタル用の忍者'
  },
  zh: {
    'Ninjas for hire': '忍者出租'
  }
};

assert(dict.ja["Ninjas for hire"] === 'レンタル用の忍者', 'We know how to say \'Ninjas for hire\' in Japanese!');
assert(typeof dict.ja['constructor'] === 'undefined', dict.ja['constructor']);