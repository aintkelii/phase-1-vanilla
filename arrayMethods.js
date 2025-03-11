// array methods for iteration and working with arrays
// 1. find()
// 2. filter()
// 3. map()
// 4. forEach()
// 5. reduce()

// find() method:
// what does it do? --> it gives us the first element that matches our condition
// what does it return? --> first element that matches the condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// find even number(s)

const firstEvenNum = numbers.find((num) => {
  return num % 2 === 0;
});

// const alt = numbers.find((num) => num % 2 == 0);

// console.log(firstEvenNum); // output: 2

// filter() method
// what does it do? -->
// what does it return --> an array of all elements that match our condition
// e.g. filtering for even numbers 2, 4, 6, 8, 10

const evenNum = numbers.filter((num) => {
  return num % 2 === 0;
});

const random = [1, 7, 9, 11, 21, 23].filter((num) => {
  return num % 2 === 0;
});

// console.log(evenNum); // [2, 4, 6, 8, 10]
// console.log(random); // []

const students = [
  { name: 'john', age: 23 }, // object
  { name: 'jane', age: 16 }, // object
  { name: 'mary', age: 21 }, // object
  { name: 'matthew', age: 13 }, // object
];

// return all students who are adults. >= 18
const adults = students.filter((student) => {
  return student.age >= 18;
});
// console.log(adults);

// [
//     { name: 'john', age: 23 },
//     { name: 'jane', age: 16 },
//     { name: 'mary', age: 21 },
//     { name: 'matthew', age: 13 }
// ]

// map() method
// --> performs a function e.g adding numbers, dividing, uppercase values for names
// return --> returns an object

const multiply = numbers.map((num) => {
  return num * 4;
});

// console.log(multiply);

// function that capitalizes students names
const capitalizedNames = students.map((student) => {
  return student.name.toLocaleUpperCase();
});

// console.log(capitalizedNames);

// exercise --> a function that capitalizes the first letter of each name in students array
// ['john', 'jane', 'mary', 'matthew'] ---> ['John', 'Jane', 'Mary', 'Matthew'];
const capitalizedFirstLetterOfNames = students.map((student) => {
  // grab each name in the object/element
  studentName = student.name; // student['name']
  // split each character in each name
  // const characters = studentName.split('');
  return student.name.charAt(0).toUpperCase() + student.name.slice(1)
  // capitalize the first character of each name
  // const capitalizeFirstChar = characters.map((char, index) => {
  //   if (index === 0) {
  //     return char.toLocaleUpperCase();
  //   } else {
  //     return char;
  //   }
  // });
  // let capitalized = capitalizeFirstChar.join('');
  // return { name: capitalized, age: student.age };
});

// PSEUDOCODE
// - loop over the array to grab each element
// --->map()
// - be able to grab the name of each student (the name is nested inside an object)
// --->dot notation
// - grab the first letter/character of each and every name.
// --> split(), charAt by checking the index position of that first letter which is zero (0)
// - capitalizing the first character/index
// --> toUpperCase()
// return our modified array with the names

console.log(capitalizedFirstLetterOfNames);
