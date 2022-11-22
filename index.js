const head = require("./head");
const middle = require("./middle");
const tail = require("./tail");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const isAlpha = require("./isAlpha");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head: head,
  middle: middle,
  tail: tail,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  isAlpha: isAlpha,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
}