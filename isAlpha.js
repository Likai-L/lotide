const isAlpha = function(character) {
  // test if this character is in the range of a-z or A-Z
  // it is alphabetic if returns true
  return /^[a-zA-Z]$/.test(character);
};

module.exports = isAlpha;