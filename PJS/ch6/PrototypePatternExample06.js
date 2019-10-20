let o = {
  toString () {
    return "My Object";
  }
};

for (let prop  in o) {
  if (prop === "toString") {
    console.log("Found toString");
  }
}