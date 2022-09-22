const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterResults = {};
  const lowercaseString = string.toLowerCase().replaceAll(" ", "");
  for (const letters of lowercaseString) {
    if (!letterResults[letters]) {
      letterResults[letters] = 0;
    }
    letterResults[letters]++;
  }
  return letterResults;
};

console.log(countLetters('LHL'));
console.log(countLetters('ABC'));
console.log(countLetters('abBc'));

console.log(countLetters('Lighthouse in the house'));

assertEqual(countLetters('LHL'), { l: 2, h: 1 });
assertEqual(countLetters('Lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });

