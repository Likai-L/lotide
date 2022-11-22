const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
  return array.slice(array.length / 2 - .5, array.length / 2 + .5);
}
module.exports = middle;
