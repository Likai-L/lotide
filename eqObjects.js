const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑Assertion Passed🤑🤑: [${actual}] === [${expected}]`);
  } else {
    console.log(`💀💀Assertion Failed💀💀: [${actual}] !== [${expected}]`);
  }
};

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
      return eqObjects(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// test code: primitie values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

//test code: array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// test code: nested object values
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
const nestedObj1 = {layer: 1, subObj: {layer: "purple", subObj: {layer: "blue", subObj: {layer: "yellow"}}}};
const nestedObj2 = {subObj: {layer: "purple", subObj: {subObj: {layer: "yellow"}, layer: "blue"}}, layer: 1};
assertEqual(eqObjects(nestedObj1, nestedObj2), true);