function isThisAZipCode(candidate) {
  if (typeof candidate !== 'string' || candidate.length !== 10) {
    return false;
  }
  for (let n = 0; n < candidate.length; n++) {
    let c = candidate[n];
    switch (n) {
      case 0: case 1: case 2: case 3: case 4:
      case 6: case 7: case 8: case 9:
        if (c < '0' || c > '9') return false;
        break;
      case 5:
        if (c !== '-') return false;
    }
  }
  return true;
}

// function isThisAZipCode(candidate) {
//   return /^\d{5}-\d{4}$/.test(candidate);
// }