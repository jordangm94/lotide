const assertEqual = require('./assertEqual');

const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(Number(i));
  }
  return results;
};

console.log(letterPositions("hello"));

module.exports = letterPositions;