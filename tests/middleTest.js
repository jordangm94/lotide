const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("Return empty array if array has less than 2 numbers", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2]), []));
  });
  it("If array of odd numbers, always return the middle number", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
  it("If array of even numbers, return the TWO middle number", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
});