const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
// // test code
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "Rihannah":      { grammys: 9 },
//   "Billie Eilish": { grammys: 7 },
//   "Taylor Swift":  { grammys: 11 },
//   "Adele":         { grammys: 15 },
//   "Beyoncé":       { grammys: 28 },
// }, artist => artist.grammys > 20), "Beyoncé");

// assertEqual(findKey({
//   "Été 85": { "IMDb rating": 6.9 },
//   "Submarine":                       { "IMDb rating": 7.3 },
//   "Arrival":                         { "IMDb rating": 7.9 },
//   "The Perks of Being a Wallflower": { "IMDb rating": 8 },
//   "Interstellar":                    { "IMDb rating": 8.6 },
//   "A Man Called Ove":                { "IMDb rating": 7.7 },
//   "Twilight":                        { "IMDb rating": 5.3 }
// }, movie => movie["IMDb rating"] >= 8), "The Perks of Being a Wallflower");

// assertEqual(findKey({
//   "Time Is a Mother":                { "Goodreads rating": 4.07 },
//   "Bright Dead Things":              { "Goodreads rating": 4.22 },
//   "And Then There Were None":        { "Goodreads rating": 4.28 },
//   "On Earth We're Briefly Gorgeous": { "Goodreads rating": 4.05 },
//   "Rebecca":                         { "Goodreads rating": 4.24 },
//   "The Little Prince":               { "Goodreads rating": 4.32 },
//   "The Picture of Dorian Gray":      { "Goodreads rating": 4.11 }
// }, book => book["Goodreads rating"] >= 4.4), undefined);



