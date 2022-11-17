const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑Assertion Passed🤑🤑: [${actual}] === [${expected}]`);
  } else {
    console.log(`💀💀Assertion Failed💀💀: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(object, value) {
  for (key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}

// test code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestLanaDelReySongsByAlbum = {
  "Born To Die": "Video Games",
  "Ultraviolence": "West Coast",
  "Honeymoon": "Salvatore",
  "Lust For Life": "Cherry",
  "Norman Fucking Rockwell!": "Happiness is a butterfly",
  "Chemtrails Over The Country Club": "White Dress",
  "Blue Banister": "Wildflower Wildfire"
};

assertEqual(findKeyByValue(bestLanaDelReySongsByAlbum, "West Coast"), "Ultraviolence");
assertEqual(findKeyByValue(bestLanaDelReySongsByAlbum, "Cherry"), "Lust For Life");
assertEqual(findKeyByValue(bestLanaDelReySongsByAlbum, "White Dress"), "Chemtrails Over The Country Club");
assertEqual(findKeyByValue(bestLanaDelReySongsByAlbum, "Love Song"), undefined); // it's close to be the best on NFR tho


