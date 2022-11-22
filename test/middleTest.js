const middle = require("../middle");
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
const assert = require("chai").assert;
describe("#middle", () => {
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('returns ["Happiness is a butterfly"] for ["The greatest", "Happiness is a butterfly", "Hope is a dangerous thing"]', () => {
    assert.deepEqual(middle(["The greatest", "Happiness is a butterfly", "Hope is a dangerous thing"]), ["Happiness is a butterfly"]);
  });

  it('returns ["Happiness is a butterfly", "Hope is a dangerous thing"] for ["California", "The greatest", "Happiness is a butterfly", "Hope is a dangerous thing", "Love song"]', () => {
    assert.deepEqual(middle(["The greatest", "Happiness is a butterfly", "Hope is a dangerous thing", "Love song"]), ["Happiness is a butterfly", "Hope is a dangerous thing"]);
  });
});
