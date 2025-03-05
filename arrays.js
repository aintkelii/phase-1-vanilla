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
console.log(mixedArr[0]);
console.log(mixedArr[5]);
console.log(mixedArr[6]);

function myArrFunc() {
  const names = ['robert', 'john', 'jane', 'doe', 'smith'];
    // return `the second element is ${names[1]}`;
    return names
}
// console.log(names);
console.log(myFunc());


