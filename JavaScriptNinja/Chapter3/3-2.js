const store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};

function ninja() {}

if(store.add(ninja)) {
  console.log('Function was safely added');
}
if(!store.add(ninja)) {
  console.log('But it was only added once');
}