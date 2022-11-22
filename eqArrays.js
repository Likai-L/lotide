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
    // This statement deals with cases where there are obejcts nested inside 
    // arrays, but this would cause circular dependency leading to a bug
    // where eqArrays can't ne recognized, so it's better to merge eqArrays and 
    // eqObjects into one single function that compares all obejecs including arrays. 
    // However, we're required to write eqArrays and eqObjects seperately, so 
    // for now, this function only deals with nested arrays
    // if (typeof arr1[i] === "object") {
    //   if (!eqObjects(arr1[i], arr2[i])) {
    //     return false;
    //   }
    //   continue;
    // }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;