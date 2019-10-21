function SuperType () {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType () {
  this.subProperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype = {
  getSubValue : function () {
    return this.subProperty;
  },
  someOtherMethod : function () {
    return false;
  }
};

const instance = new SubType();
console.log(instance.getSuperValue()); // Error!