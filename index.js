//This file makes all functions from Lotide accessible via one require!

//This document references just a key in the object to define the key
//and reference the value thanks to new ES6 Syntax. Hence, instead of
//writing head: head, we can just right head

const head = require('./head');

const tail = require('./tail');

const middle = require('./middle');

const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = require('./countLetters');

const countOnly = require('./countOnly');

const eqObjects = require('./eqObjects');

const findKey = require('./findKey');

const findKeyByValue = require('./findKeyByValue');

const letterPositions = require('./letterPositions');

const map = require('./map');

const takeUntil = require('./takeUntil');

const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};