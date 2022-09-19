/*Note in this example, you did not concatanate the strings and variables. 

I.e. actual + " === " + expected

Instead you used template literals "${variable}" to put everything together.
This method takes up a lot less computer memory and is easier! Must use back ticks
is the only difference! */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Call of duty", "Battlefield");
assertEqual("Pizza", "Pizza");
assertEqual(5, 5);
assertEqual(4, 5);