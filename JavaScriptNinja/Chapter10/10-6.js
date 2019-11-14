const assert = require('../common');
const html = `<div class="test"><b>Hello</b> <i>world!</i></div>`;
const tag = /<(\/?)(\w+)([^>]*?)>/g;
let match, num = 0;

while ((match = tag.exec(html)) !== null) {
  assert(match.length === 4, 'Every match finds each tag and 3 captures');
  num++;
}
assert(num === 6, '3 opening and 2 closing tags found');