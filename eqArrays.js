const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  }
  return false;
};

module.exports = eqArrays;