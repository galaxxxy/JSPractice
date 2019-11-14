const assert = require('../common');

const html = "<b class='hello'>Hello</b> <i>world!</i>";
const pattern = /<(\w+)([^>]*)>(.*?)<\/\1>/g;
let match = pattern.exec(html);
assert(match[0] === "<b class='hello'>Hello</b>", "The entire tag, start to finish.");
assert(match[1] === "b", "The tag name.");
assert(match[2] === " class='hello'", "The tag attributes.");
assert(match[3] === "Hello", "The contents of the tag.");
match = pattern.exec(html);
assert(match[0] === "<i>world!</i>", "The entire tag, start to finish.");
assert(match[1] === "i", "The tag name.");
assert(match[2] === "", "The tag attributes.");
assert(match[3] === "world!", "The contents of the tag.");