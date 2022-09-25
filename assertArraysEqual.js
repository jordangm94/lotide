const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertArraysEqual([5, 2, 3], [7, 2, 9]);
// assertArraysEqual([5, 2, 3], [5, 2, 3]);

module.exports = assertArraysEqual;
