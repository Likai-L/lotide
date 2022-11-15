// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑Assertion Passed🤑🤑: [${actual}] === [${expected}]`);
  } else {
    console.log(`💀💀Assertion Failed💀💀: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Taylor Swift is my mother", "Taylor Swift is my mother");
assertEqual("Taylor Swift is my mother", "Lana Del Rey is my mother");
assertEqual(19, 22);