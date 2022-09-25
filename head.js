const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Listen", "to", "me"]), "Listen");
// assertEqual(head(["to"]), "Listen");
// assertEqual(head([]), "Listen");

module.exports = head;