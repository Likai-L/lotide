const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑Assertion Passed🤑🤑: [${actual}] === [${expected}]`);
  } else {
    console.log(`💀💀Assertion Failed💀💀: [${actual}] !== [${expected}]`);
  }
};

// test if a string is a alphabetic letter
const isAlpha = function(str) {
  return /^[a-zA-Z()]+$/.test(str);
};


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

// test code
console.log(countLetters("wewerefallinglikesnowonthebeach"));
console.log(countLetters("we were falling like snow on the beach"));
console.log(countLetters("We WeRe Falling Like snow oN the beAch"));
console.log(countLetters("we'were'falling,like,snow--on--the==beach!"));
assertEqual(countLetters(("we were falling like snow on the beach")).e, 6);
assertEqual(countLetters(("we were falling like snow on the beach")).w, 3);
assertEqual(countLetters(("we were falling like snow on the beach")).r, 1);
assertEqual(countLetters(("we were falling like snow on the beach")).f, 1);
assertEqual(countLetters(("we were falling like snow on the beach")).l, 3);
assertEqual(countLetters(("we were falling like snow on the beach")).i, 2);
assertEqual(countLetters(("we were falling like snow on the beach")).k, 1);
assertEqual(countLetters(("we were falling like snow on the beach")).s, 1);
assertEqual(countLetters(("we were falling like snow on the beach")).n, 2);