// ARRAYS IN JAVASCRIPT
// Allows us to store multiple values in a single variable
// we can store different data types in an array
// we can store arrays, objects, strings, numbers, null, boolean in an array

// how do we create an array:
// 1. array literals --> brackets []
// const names = ['robert', 'john', 'jane', 'doe', 'smith'];
// console.log(names);
// 2. array constructor --> new Array()
const numbers = new Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5,]
// console.log(numbers);

// mixed data types in an array
const mixedArr = [
  'robert',
  1,
  true,
  null,
  undefined,
  { name: 'john', age: 23 },
  [1, 2, 3, 4, 5],
];

// accessing array elements
// we use the bracket notation to access array elements
// we do this by passing the index of the element we want to access
// index starts from 0
// console.log(mixedArr[0]);
// console.log(mixedArr[5]);
// console.log(mixedArr[6]);

function myArrFunc() {
  const names = ['robert', 'john', 'jane', 'doe', 'smith'];
  // return `the second element is ${names[1]}`;
  return names;
}
// console.log(names);
// console.log(myFunc());

// Array Methods - mutable and immutable
// mutable methods- change the original array
// immutable methods - transform the array, anc creates a copy with the changes without having to change the original.

// adding and removing elements in an array --> mutable methods
// 1. add an element to an array:
const animals = ['dog', 'cat'];
// console.log(animals);
// --> push() method --> adds elements to the end of an array --> 'snake', 'rabbit'
animals.push('snake');
// console.log(animals);

// 2. pop() - removes the last element in an array
animals.pop();
// console.log(animals);

// 3. unshift() add an element to the beginning of the array
animals.unshift('lion');
// console.log(animals);

// 4. shift() --> remove the first element in the array
animals.shift();
// console.log(animals);

// reverse() method
animals.reverse();
animals.push('snake');
// console.log(animals);
animals.reverse();
// console.log(animals);

// sort method
const numbersArr = [4, 3, 1, 5, 2];
numbersArr.sort();
// console.log(numbersArr);
const alphabet = ['e', 'a', 'd', 'b', 'c'];
alphabet.sort();
// console.log(alphabet);

// combine and slice arrays
// 1. concat --> merge arrays --> immutable
// 2. slice --> returns a section of our array --> immutable
// 3. splice --> Adds or removes elements at a specific index (Mutable).

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7, 8, 100];
const combined = arr1.concat(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 100 ]
// const combined2 = arr2.concat(arr1); // [4, 5, 6, 7, 8, 100, 1, 2, 3]
// console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// console.log(combined2);

// slice
const sliced = combined.slice(0, 4); // [1, 2, 3, 4]
// conditions we are passing inside our slice:
// --> 0 --> specify the index to start at and it will be included in the new/sliced array
// --> 4 --> specify the last index just before we stop, and it is not included in the new/sliced array
// console.log(sliced);
const sliced2 = combined.slice(1, 3); // [2, 3]
// console.log(sliced2);
// [3, 4, 5, 6, 7]
const sliced3 = combined.slice(2, 7);
console.log(sliced3);

console.log(combined.indexOf(1));
console.log(combined.includes(100));

// exercise for slice --> use negative index

//splice