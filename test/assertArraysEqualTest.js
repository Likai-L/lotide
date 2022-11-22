const assertArraysEqual = require("../assertArraysEqual");
assertArraysEqual([], []);
assertArraysEqual([1], [1]);
assertArraysEqual([1, 2], [1, "2"]);
assertArraysEqual(["Taylor Swift", "Lana Del Rey"], ["Taylor Swift", "Lana Del Rey"]);
assertArraysEqual(["Taylor Swift"], ["Lana Del Rey"]);