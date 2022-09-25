const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

//Testing for one elemnet in array and empty array: Should produce empty array!

// console.log(tail([2]));
// console.log(tail([]));

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// //Test Case 2: Check the returned array elements

// const result2 = tail(["Vanguard", "Cold War", "MW2"]);
// assertEqual(result2.length, 2);
// assertEqual(result2[0], "Cold War");
// assertEqual(result2[1], "MW2");


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;