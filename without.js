const without = function(sourceArr, itemsToRemove) {
  let newArr = [];
  for (let value of sourceArr) {
    if (!itemsToRemove.includes(value)) {
      newArr.push(value);
    }
  }
  return newArr;
};

module.exports = without;
// // test codes, should all pass
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without([], [1 ,2, 3]), []);
// assertArraysEqual(without([19, undefined, null, "NFR!", "Blue Banister"], ["Blue Banister", null, "19"]), [19, undefined, "NFR!"]);
// const words = ["hello", "world", "lighthouse"];
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);