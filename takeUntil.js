const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item); //Note: Cannot return results.push(callback(item)) - because callback function in these examples only returns true or false!
    } else {
      break; //Helps to break out of the for loop!
    }
  }
  return results;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;