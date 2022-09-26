const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;