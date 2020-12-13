// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let prevStr = ''
  let resultStr = ''
  str.split('').forEach((s, i) => {
    if (i == 0 || prevStr == ' ') {
      prevStr = s
      resultStr += s.toUpperCase()
    } else {
      prevStr = s
      resultStr += s
    }
  });
  return resultStr;
}

module.exports = capitalize;
