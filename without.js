const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const without = function(sourcearray, toberemoved) {
  let finalItems = [];
  for (let value of sourcearray) {
    if (!toberemoved.includes(value)) {
      finalItems.push(value);
    }
  }
  return finalItems;
};

// console.log(without([1, 2, 3], [1]));

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["world", "lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;