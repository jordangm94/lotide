const assertEqual = require('../assertEqual');

const head = require('../head');

const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
  it("returns 'Listen' for ['Listen', 'to', 'me']", () => {
    assert.strictEqual(head(['Listen', 'to', 'me']), 'Listen'); 
  });
  it("returns 'to' for ['Listen', 'to', 'me']", () => {
    assert.strictEqual(head(['Listen', 'to', 'me']), 'Listen'); 
  });
  it("Assertion will fail when attempting to return 'Listen' for ['to']", () => {
    assert.strictEqual(head(['to']), 'Listen'); 
  });
  it("Assertion will fail when receving an empty array and trying to compare it to a word", () => {
    assert.strictEqual(head(['']), 'Listen'); 
  });
});