// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  let maxchar = '';
  let maxlength = 0;
  for (let char in chars) {
    let length = chars[char];
    if (length > maxlength) {
      maxlength = length
      maxchar = char
    }
  }
  return maxchar
}

module.exports = maxChar;
