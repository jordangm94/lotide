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

const words = ["ground", "control", "to", "major", "tom"];
const games = ["call of duty", "last of us", 'god of war'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
/*This step below is us calling our map function. We plug in words array into parameter 1, 
and we are then plugging in a callback function into parameter 2. In this instance our callback
function is sifting through each word in the array and it is returning the first letter of each word.*/ 
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(games, game => game[0]);
//Below is how we call our map function and plug in our callback without ES6 Arrow Notation
// const results1 = map(words, function (word) {return word[0]});
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["c", "l", "g"]);

//The map function will return a 
//new array based on the results of the callback function.