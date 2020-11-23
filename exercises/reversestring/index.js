// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // strを1文字ずつ取得する→
  let strLength = str.length;
  let result = [];
  for (let i = strLength; i >= 0; i--) {
    result = [...result, str.substr(i, 1)];
  }
  return result.join('');
}

module.exports = reverse;
