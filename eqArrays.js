const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  }
  return false;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([2, 2, 3], [1, 2, 3]), false);
// assertEqual(eqArrays([5, 2, 3], [7, 2, 9]), false);

module.exports = eqArrays;