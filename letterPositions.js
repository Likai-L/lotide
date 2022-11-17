const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💃💃💃Yay!! They're equal!💃💃💃`);
    return;
  }
  console.log(`🙅🙅🙅Nah!! They're not equal!🙅🙅🙅`);
};

// test if a string is a alphabetic letter
const isAlpha = function(str) {
  return /^[a-zA-Z()]+$/.test(str);
};

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

// test code
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
