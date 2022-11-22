const isAlpha = require("./isAlpha");
const countLetters = function(string) {
  let results = {};
  // eliminate the effect of differently-cased instances of the same letter
  string = string.toLowerCase();
  for (let letter of string) {
    if (isAlpha(letter)) {
      if (results[letter]) {
        results[letter] ++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

// // test code
// console.log(countLetters("wewerefallinglikesnowonthebeach"));
// console.log(countLetters("we were falling like snow on the beach"));
// console.log(countLetters("We WeRe Falling Like snow oN the beAch"));
// console.log(countLetters("we'were'falling,like,snow--on--the==beach!"));
// assertEqual(countLetters(("we were falling like snow on the beach")).e, 6);
// assertEqual(countLetters(("we were falling like snow on the beach")).w, 3);
// assertEqual(countLetters(("we were falling like snow on the beach")).r, 1);
// assertEqual(countLetters(("we were falling like snow on the beach")).f, 1);
// assertEqual(countLetters(("we were falling like snow on the beach")).l, 3);
// assertEqual(countLetters(("we were falling like snow on the beach")).i, 2);
// assertEqual(countLetters(("we were falling like snow on the beach")).k, 1);
// assertEqual(countLetters(("we were falling like snow on the beach")).s, 1);
// assertEqual(countLetters(("we were falling like snow on the beach")).n, 2);