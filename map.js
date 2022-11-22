const map = (arr, callback) => {
  const newArr = [];
  for (let item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
};

module.exports = map;

// test code
// const words1 = "the white parts of my eyeballs illuminate".split(" ");
// const words2 = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5, 6];

// const results1 = map(words1, word => word[0]);
// const results2 = map(words2, word => word[word.length - 1]);
// const results3 = map(numbers, number => number * 6);
// assertArraysEqual(results1, ['t', 'w', 'p', 'o', 'm', 'e', 'i']);
// assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']);
// assertArraysEqual(results3, [6, 12, 18, 24, 30, 36]);

