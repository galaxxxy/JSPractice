const assert = require('../common');

const shogun = {
  name: 'Yoshiaki',
  clan: 'Ashikaga',
  get fullTitle() {
    return `${this.name} ${this.clan}`;
  },
  set fullTitle(value) {
    const segments = value.split(' ');
    this.name = segments[0];
    this.clan = segments[1];
  }
};

assert(shogun.name === 'Yoshiaki', 'our shogun Yoshiaki');
assert(shogun.clan === 'Ashikaga', 'of clan Ashikaga');
assert(shogun.fullTitle === 'Yoshiaki Ashikaga', 'the full name is now Yoshiaki Ashikaga');

shogun.fullTitle = 'Ieyasu Tokugawa';
assert(shogun.name === 'Ieyasu', 'Our shogun Ieyasu');
assert(shogun.clan === 'Tokugawa', 'of clan Tokugawa');
assert(shogun.fullTitle === 'Ieyasu Tokugawa', 'the full name is now Ieyasu Tokugawa');