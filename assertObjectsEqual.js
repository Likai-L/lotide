const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`ððð  EQUAL!  ððð ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`ðððNOT EQUAL!ððð ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;