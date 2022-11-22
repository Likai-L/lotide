# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @likailiu/lotide`

**Require it:**

`const _ = require('@likailiu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(x, y)`: runs an assertion test on primitive values x and y to determine if x === y, printing pass/fail messages to the console.

* `eqArrays(array1, array2)`: determines if the values in array1 and array2 are equal; only supports primitive values and nested arrays.

* `eqObjects(object1, object2)`: determines if the key-value pairs in object1 and object2 are equal; supports primitive values, arrays and objects.

* `assertArraysEqual(array1, array2)`: calls eqArrays on array1 and array2 and logs EQUAL/NOT EQUAL messages to the console.

* `assertObjectsEqual(object1, object2)`: calls eqObjects on object1 and object2 and logs EQUAL/NOT EQUAL messages to the console.

* `head(array)`: returns the "head" of an array: a new array containig the first element of the original array.

* `middle(array)`: returns the "middle" of an array: a new array containing the middle element(s) of the original array.

* `tail(array)`: returns the "tail" of an array: a new array containing the all the elements except for the first one of the original array.

* `countLetters(string)`: returns an object of the numbers of each alphabetic letter (case insensitive) in a string.

* `letterPositions(string)`: returns an object of each letter(case insensitive) in a string and all the indices they are at.

* `isAlpha`: returns true if an character is alphabetic and false if not; helps distinguish alphabetic characters from non-alphabetic characters in functions like countLetters and letterPositions, since they only work on alphabetic letters.

* `countOnly(allItems, itemsToCount)`: returns an object of the item-number pairs based on how many times an item appears in the allItems array; only those items with a truthy value in itemsToCount will be counted.

* `findKey(object, callback)`: returns the first property name in an object that, when passed to the callback function, leads to a return value of true.

* `findKeyByValue(object, value)`: returns the first property name whose value is equal to the value passed in.

* `map(array, callback)`: a home-made version of array.prototype.map(): returns an new array populated with the return values of the callback function when each element in the original array is passed as an argument.

* `takeUntil(array, callback)`: returns a new array populated with the items in an array up until(not including) the first item that leads to a return value of true when passed as argument.

* `without(sourceArray, itemsToRemove)`: returns a new array populated with the items that are in the source array but not in the itemsToRemove array, in the same order as the source array.