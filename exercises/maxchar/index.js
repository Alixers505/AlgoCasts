// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const arr = str.split('');
//   let newArr = [];
//   for (let unit of str) {
//     let filteredArr = arr.filter(char => char === unit);
//     if (filteredArr.length > newArr.length) {
//       newArr = filteredArr;
//     }
//   }
//   return newArr[0];
// }

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b);
}

// Josh
// function maxChar1(str) {
//   const charMap = {};
//   let high = 0;
//   let highChar  = null;
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;

//     if (charMap[char] > high) {
//       high = charMap[char];
//       highChar = char;
//     }
//   }

//   return highChar;
// }

module.exports = maxChar;
