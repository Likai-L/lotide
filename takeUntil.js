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
    console.log(`💚💚💚  EQUAL!  💚💚💚 ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    return;
  }
  console.log(`💔💔💔NOT EQUAL!💔💔💔 ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
};

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

// test cases
const data1 = ["🐹", "🐰", "🐨", "🐼", "🦄", "🐉"];
const results1 = takeUntil(data1, animal => animal === "🦄" || animal === "🐉");
const data2 = [12, 22, 19, 27];
const results2 = takeUntil(data2, x => x < 20); // should return an empty array
const data3 = ["I", "will", "love", "you", "till", "the", "end", "of", "time"];
const results3 = takeUntil(data3, word => word === "the end of time"); // should return the whole array
// assertion test
assertArraysEqual(results1, ["🐹", "🐰", "🐨", "🐼"]);
assertArraysEqual(results2, []);
assertArraysEqual(results3, ["I", "will", "love", "you", "till", "the", "end", "of", "time"]);
