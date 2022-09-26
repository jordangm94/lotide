const assertEqual = require('../assertEqual');

const tail = require('../tail');

const assert = require('chai').assert;

describe("#tail", () => {
  it("returns an empty array if nothing is inputted in the array []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns an empty array if nothing is inputted in the array []", () => {
    assert.deepEqual(tail([2]), []);
  });
  it("If incoming array is populated, returns a new array with everything but the first element", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});