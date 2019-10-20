function SpecialArray () {
  const values = new Array();
  // values.push.apply(values, arguments);
  values.push(...arguments);
  values.toPipedString = function () {
    return this.join("|");
  };
  return values;
}

const colors = new SpecialArray("red", "blue", "yellow");
console.log(colors.toPipedString());