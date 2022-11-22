const eqArrays = require("../eqArrays");
const assert = require("chai").assert;
describe("#eqArrays", () => {
  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });

  it('returns false for [1, 2, 3] and [1, 2, 2]', () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 2]), false);
  });

  it('returns true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"],["1", "2", "3"]), true);
  });

  it('returns false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"],["1", "2", 3]), false);
  });

  it('returns true for two equal nested arrays', () => {
    const array1 = [1, 9, ["19", 6, [87, 9, [11, ["Taylor", ["Lana", "Charlie"]], 0], "90"]]];
    const array2 = [1, 9, ["19", 6, [87, 9, [11, ["Taylor", ["Lana", "Charlie"]], 0], "90"]]];
    assert.strictEqual(eqArrays(array1, array2), true);
  });
});
// to be tested: objects and arrays nested inside each other
// const array3 = [6, [8, [55, [], [13, [{person1: {name: "Lana", siblings: [{name: "Charlie", age: 29}, {name: "Charoline", age: 34}], age: 37}, person2: "Taylor"}, {}], 89]]], 90];
// const array4 = [6, [8, [55, [], [13, [{person1: {age: 37, name: "Lana", siblings: [{name: "Charlie", age: 29}, {age: 34, name: "Charoline"}]}, person2: "Taylor"}, {}], 89]]], 90];
// assertEqual(eqArrays(array3, array4), true);