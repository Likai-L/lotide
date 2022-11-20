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
      continue;
    }
    if (typeof object1[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (typeof arr1[i] !== typeof arr2[i]) {
      return false;
    }
    if (Array.isArray(arr1[i]) !== Array.isArray(arr2[i])) {
      return false;
    }
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
    if (typeof arr1[i] === "object") {
      if (!eqObjects(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
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

// test codes
assertArraysEqual([], []);
assertArraysEqual([1], [1]);
assertArraysEqual([1, 2], [1, "2"]);
assertArraysEqual(["Taylor Swift", "Lana Del Rey"], ["Taylor Swift", "Lana Del Rey"]);
assertArraysEqual(["Taylor Swift"], ["Lana Del Rey"]);