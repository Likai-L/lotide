const assert = require("chai").assert;
const eqObjects = require("../eqObjects");
// test code: primitie values
describe("#eqObjects", () => {
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns false for { a: "1", b: "2" } and { b: "2", a: "1", c: "3"}', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1", c: "3"}), false);
  });

  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns true for equal array values', () => {
    assert.strictEqual(eqObjects({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] }), true);
  });

  it('returns false for unequal array values', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", "3"] }), false);
  });

  it('returns true for equal nested object values', () => {
    const object1 = {array: [1, "2", undefined], object: {person1: {name: "Lana", age: 37, siblings: {sister: "Charolie", brother: "Charlie"}}, person2: {name: "Taylor", age: 32, albums: ["folklore", "evermore"]}}};
    const object2 = {array: [1, "2", undefined], object: {person2: {name: "Taylor", age: 32, albums: ["folklore", "evermore"]}, person1: {name: "Lana", age: 37, siblings: {brother: "Charlie", sister: "Charolie"}}}};
    assert.strictEqual(eqObjects(object1, object2), true);
  });

  it('returns false for unequal nested object values', () => {
    const object1 = {array: ["2", 1, undefined], object: {person2: {name: "Taylor", age: 32, albums: ["folklore", "evermore"]}, person1: {name: "Lana", age: 37, siblings: {brother: "Charlie", sister: "Charolie"}}}};
    const object2 = {array: ["2", 1, undefined], object: {person1: {name: "Lana", age: 37, siblings: {sister: "Charolie", brother: "Charlie"}}, person2: {name: "Taylor", age: "32", albums: ["folklore", "evermore"]}}};
    assert.strictEqual(eqObjects(object1, object2), false);
  });
});
// to be tested: objects nested inside arrays