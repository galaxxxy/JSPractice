const assert = require('../common');
const html = `<div class="test"><b>Hello</b> <i>world!</i></div>`;
const results = html.match(/<(\/?)(\w+)([^>]*?)>/);
assert(results[0] === '<div class="test">', 'The entire match.');
assert(results[1] === '', 'The (missing) slash');
assert(results[2] === 'div', 'The tag name.');
assert(results[3] === ' class="test"', 'The attributes.');

const all = html.match(/<(\/?)(\w+)([^>]*?)>/g);
assert(all[0] === "<div class='test'>", "Opening div tag.");
assert(all[1] === "<b>", "Opening b tag.");
assert(all[2] === "</b>", "Closing b tag.");
assert(all[3] === "<i>", "Opening i tag.");
assert(all[4] === "</i>", "Closing i tag.");
assert(all[5] === "</div>", "Closing div tag.");