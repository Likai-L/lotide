const isAlpha = require("./isAlpha");
const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i in sentence) {
    if (isAlpha(sentence[i])) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(Number(i));
      } else {
        results[sentence[i]] = [Number(i)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
// // test code
// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);
