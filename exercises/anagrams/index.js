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
  const charsA = {};
  const charsB = {};
  for (let char of stringA) {
    if (char == ' ' || char == '!') {
      continue
    }
    charsA[char] = charsA[char] + 1 || 1;
  }
  for (let char of stringB) {
    if (char == ' ' || char == '!') {
      continue
    }
    charsB[char] = charsB[char] + 1 || 1;
  }
  return JSON.stringify(Object.entries(charsA).sort()) === JSON.stringify(Object.entries(charsB).sort())
}

module.exports = anagrams;
