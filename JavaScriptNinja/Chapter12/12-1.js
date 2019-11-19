const assert = require('../common');

const tags = /^(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

function convert(html) {
  return html.replace(/(<(\w+)[^>]*?)\/>/g, (all, front, tag) => {
    return tags.test(tag) ? all : `${front}></${tag}>`;
  });
}

assert(convert(`<a/>`) === `<a></a>`, 'Check anchor conversion');
assert(convert(`<hr/>`)  === `<hr/>`, 'Check hr conversion');