const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterResults = {};
  const lowercaseString = string.toLowerCase();
  for (const letters of lowercaseString) {
    if (!letterResults[letters]) {
      letterResults[letters] = 0;
    }
    letterResults[letters]++;
  }
  return letterResults;
}

console.log(countLetters('LHL'));
console.log(countLetters('ABC'));
console.log(countLetters('abBc'));
console.log(countLetters('Lighthouse in the house'));

assertEqual(countLetters('LHL'), { l: 2, h: 1 });

