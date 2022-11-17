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

// test codes
assertArraysEqual([], []);
assertArraysEqual([1], [1]);
assertArraysEqual([1, 2], [1, "2"]);
assertArraysEqual(["Taylor Swift", "Lana Del Rey"], ["Taylor Swift", "Lana Del Rey"]);
assertArraysEqual(["Taylor Swift"], ["Lana Del Rey"]);