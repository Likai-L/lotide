const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`ððð  EQUAL!  ððð ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    return;
  }
  console.log(`ðððNOT EQUAL!ððð ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
};
module.exports = assertArraysEqual;