const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([5, 2, 3], [7, 2, 9]), false);