const without = require("../without");
const assert = require("chai").assert;
describe("#without", () => {
  it('returns [2, 3] for [1, 2, 3] and [2, 3]', () => {
    assert.deepEqual(without([1, 2, 3],[1]), [2, 3]);
  });

  it('returns ["1", "2"] for ["1", "2", "3"] and [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"],[1, 2, "3"]), ["1", "2"]);
  });

  it('returns [1, 2, 3] for [1, 2, 3] and []', () => {
    assert.deepEqual(without([1, 2, 3],[]), [1, 2, 3]);
  });

  it('returns [] for [] and [1, 2, 3]', () => {
    assert.deepEqual(without([],[1, 2, 3]), []);
  });

  it('returns the right output for arrays with miscellaneous value types', () => {
    assert.deepEqual(without(["NFR!", "Love Song", 19, null, ""],[null, "NFR!"]), ["Love Song", 19, ""]);
  });
});
