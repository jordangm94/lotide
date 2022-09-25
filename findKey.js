const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  let results = "";
  for (let keys in object) {
    if (callback(object[keys])) {
      results = keys;
      break;
    } else {
      undefined;
    }
  }
  return results;
};

// const results1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// console.log(results1);

// const results2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3) // => "Akaleri"

// console.log(results2);

// const results3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1) // => "Blue Hill"

// console.log(results3)

// assertEqual(results1, "noma");
// assertEqual(results2, "Akaleri");
// assertEqual(results3, "Blue Hill");

module.exports = findKey;