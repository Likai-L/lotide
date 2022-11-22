const takeUntil = (arr, callback) => {
  let result = [];
  for (let item of arr) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

// test cases
// const data1 = ["🐹", "🐰", "🐨", "🐼", "🦄", "🐉"];
// const results1 = takeUntil(data1, animal => animal === "🦄" || animal === "🐉");
// const data2 = [12, 22, 19, 27];
// const results2 = takeUntil(data2, x => x < 20); // should return an empty array
// const data3 = ["I", "will", "love", "you", "till", "the", "end", "of", "time"];
// const results3 = takeUntil(data3, word => word === "the end of time"); // should return the whole array
// // assertion test
// assertArraysEqual(results1, ["🐹", "🐰", "🐨", "🐼"]);
// assertArraysEqual(results2, []);
// assertArraysEqual(results3, ["I", "will", "love", "you", "till", "the", "end", "of", "time"]);
