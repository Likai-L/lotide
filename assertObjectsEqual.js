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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (typeof object1[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚💚💚  EQUAL!  💚💚💚 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔NOT EQUAL!💔💔💔 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// EQUAL
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever",
  Taylor: ["folklore", "evermore", "midnights"],
  taylorGrammies: 11
}, {
  taylorGrammies: 11,
  Taylor: ["folklore", "evermore", "midnights"],
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever"
});

// NOT EQUAL
assertObjectsEqual({
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever",
  Taylor: ["folklore", "evermore", "midnights"],
  taylorGrammies: 11
}, {
  taylorGrammies: 11,
  Taylor: ["folklore", "evermore", "midnights"],
  Lana: ["NFR!", "ultraviolence", "born to die"],
  Billie: "happier than ever"
});