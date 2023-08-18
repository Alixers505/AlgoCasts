// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //Remove spaces and special characters and return lowercase
  const newA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const newB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();

  //Create object map of characters
  const createMap = str => {
    const charMap = {};
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };

  //Compare object maps of A/B
  const a = createMap(newA);
  const b = createMap(newB);
  // Return false if they don't have matching properties
  if (Object.getOwnPropertyNames(a).toString() !== Object.getOwnPropertyNames(b).toString()) { return false };

  // Check values
  for (let key in a) {
    if (a[key] !== b[key]) {
      console.log(a[key]);
      console.log(b[key]);
      return false
    }
  }
  return true;
}

module.exports = anagrams;
