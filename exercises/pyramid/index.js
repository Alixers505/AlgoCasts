// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let row = 1;
  let columns = n * 2 - 1;

  if (n === 0) {
    return;
  } else if (n === 1) {
    console.log('#');
  } else {
    for (let i = 0; i < n; i++) {
      let stones = '#'.repeat(row);
      let space = (columns - row) / 2;
      let air = ' '.repeat(space);
      console.log(air + stones + air);
      row = row + 2;
    }
  }
}

module.exports = pyramid;
