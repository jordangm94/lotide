const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  }
  return false;
};

const assertArrayEquals = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEquals([5, 2, 3], [7, 2, 9]);
assertArrayEquals([5, 2, 3], [5, 2, 3]);