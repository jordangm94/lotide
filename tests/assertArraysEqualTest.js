const assertArraysEqual = require('../assertArraysEqual');

const eqArrays = require('../eqArrays');

assertArraysEqual([5, 2, 3], [7, 2, 9]);
assertArraysEqual([5, 2, 3], [5, 2, 3]);