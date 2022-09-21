const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const evenArrayNumb = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length > 2 && array.length % 2 !== 0) {
    return [Math.floor(array.length / 2) + 1];
  } else if (array.length > 2 & array.length % 2 === 0) {
    evenArrayNumb.push(array.length / 2);
    evenArrayNumb.push(array.length / 2 + 1);
  }
  return evenArrayNumb;
};

//Console.log tests for odd number arrays and array less than 2. 
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("---------")
//Test assertions for if array has more than 2 numbers, and array.length is event
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));