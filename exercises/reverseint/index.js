// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString().split('').reduce((rev, char) => char + rev, '');
  if (n >= 0) {
    return parseInt(str);
  }
  return -Math.abs(parseInt(str));
}

module.exports = reverseInt;
