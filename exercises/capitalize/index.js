// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capitalWords = [];
  let acc = 0;
  for (let char of str) {
    if (acc !== 0 && char !== " ") {
      capitalWords.push(char);
      acc++;
    } else if (char === " ") {
      capitalWords.push(char);
      acc = 0;
    } else if (acc === 0) {
      capitalWords.push(char.toUpperCase());
      acc++;
    }
  }

  return capitalWords.join('').toString();
}

module.exports = capitalize;
