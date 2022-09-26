const assertArraysEqual = require('../assertArraysEqual');

const eqArrays = require('../eqArrays');

const middle = require('../middle');

//Console.log tests for odd number arrays and array less than 2.
console.log(middle([1, 2, 3]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("---------")
// Test assertions for if array has more than 2 numbers, and array.length is event
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));