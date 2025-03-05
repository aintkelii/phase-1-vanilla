const myName = 'Rodgers Ogada'; // 'Rodgers Ogada', `Rodgers Ogada`
// myName = "John" // Error: Assignment to constant variable.
let location = 'Nairobi, Kenya';
// location = 'Kisumu'
// console.log(location)

// string interpolation is used with backticks ``
// let aboutMe = 'My name is ${myName} and I live in ${location}';
let aboutMe = `My name is ${myName} and I live in ${location}`;
// console.log(aboutMe)

// My school is Moringa School and I am learning JavaScript.
let mySchool = 'Moringa School';
let progLang = 'JavaScript';
let myDetails = `My school is ${mySchool} and I am learning ${progLang}.`;
// console.log(myDetails);

let myAge = 25;
let age = '25';
let sum = myAge + age;
// console.log(sum);
// console.log(typeof sum);
// console.log(typeof myAge);
// console.log(myAge + 25);

// booleans are used to check for the truthiness of something
let isStudent = true;
let isTeacher = false;

// ARRAYS AND OBJECTS
// Objects are used to store key-value pairs
// object = { key: value }
// 'My name is Rodgers and I am 25 years old. I live in Nairobi, Kenya'
let person = {
  name: 'Rodgers',
  age: 25,
  location: 'Nairobi, Kenya',
  isStudent: false,
  phoneNumber: null, // '0712345678'
};

// camel case --> phoneNumber, myName, myAge, myLocation, isPhoneNumberValid
// snake case --> phone_number, my_name, my_age, my_location

let phone = person.phoneNumber ?? 'not available';

// console.log(person.name, person.age, person.location, person.phoneNumber);
// console.log(`my name is ${person.name} and i live in ${person.location} and my phone number is ${phone}.`)

// Arrays are used to store multiple values in a single variable
let fruits = ['apple', 'banana', 'mango', 'orange'];
// console.log(fruits.length)
// console.log(fruits[3])

let students = [
  {
    id: 1,
    name: 'Andrew',
    age: 23,
    location: 'Nairobi, Kenya',
    technicalMentor: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
    location: 'Kisumu, Kenya',
    technicalMentor: 'John Doe',
  },
  {
    id: 3,
    name: 'John',
    age: 30,
    location: 'Mombasa, Kenya',
    technicalMentor: 'Jane Doe',
  },
];
// console.log(students.length);
// console.log(students[0]);

// arithmetic operators
// +, -, *, /, %, ++, --

let num = 10;
let num2 = 15;
// find the sum of the two numbers: num and num2 --> +
let mySum = num + num2; // 10+15
// console.log(mySum)

// find the difference of the two numbers: num and num2 --> -
let diff = num2 - num; // 15-10
// console.log(diff)

// multiply the two numbers
let pdt = num * num2; // 10*15
// console.log(pdt)

// divide the two numbers
let div = num / num2; // 15/10
// console.log(div)

// find the square of num and num2 and the exponent of num and num2 --> **
let sqr = num ** 2; // 10^2
let sqr2 = num2 ** 2; // 15^2
let exp = num ** num2; // 10^15
// console.log(sqr, sqr2, exp)

// find the remainder of num2 divided by num --> %
let rem = num2 % num; // 15 % 10
// console.log(rem)
// console.log(4 % 2)
// console.log(9 % 2)

// Increment a value by a certain number --> ++, num = 10, num2 = 15, num3 = 3
// Post-increment
// let increment = num++
// console.log(increment, num) // output: 10, 11
// let inc2 = num2++
// console.log(inc2, num2)

// Pre-increment
// let inc = ++num
// console.log(inc, num)

// decrement a value by a certain number --> --, num = 10, num2 = 15
// Post-decrement and Pre-decrement
// let dec = num--
// console.log(dec, num)
// let dec2 = --num
// console.log(dec2, num)

// COMPARISON OPERATORS
// returns a boolean
// == --> equal to  // loose equality
// === --> equal value and equal type // strict equality
// != --> not equal // loose inequality
// !== --> not equal value or not equal type // strict inequality
// >= --> greater than or equal to
// <= --> less than or equal to
// > --> greater than
// < --> less than

// num = 10, num2 = 15, num3 = 3,
(val = '10'), (val2 = '15');
// console.log(num == num2)
// console.log(10 == '10') // true
// console.log(10 === '10') // false

// console.log(10 != 15) // true
// console.log(10 !== 15) // true
// console.log(10 != '10') // false
// --> loose inequality check
// does not check for data types --> LHS-10-->number; RHS-'10'-->string
// type coercion --> '10' is being converted to 10 -->  '10' --> 10
// 10 != 10 --> false

// console.log(10 !== '10') // true
// strict inequality check (both values and data types)
// values check --> 10 != '10' is coerced to 10 != 10 therefore we expect false
// data type check --> number != string --> true

// num = 10, num2 = 15
// console.log(num > num2) // false
// console.log(num >= num2) // false
// console.log(num < num2) // true
// console.log(num <= num2) // true
// console.log(10 <= 10)

// IF STATEMENTS & ELSE IF STATEMENTS
// if (condition) {
// do something is the condition is met
// }

let myNum = 6;
if (myNum % 2 === 0) {
  // console.log('the number is even')
} else {
  // console.log('the number is odd')
}

let userAge = 12;
// if you are above the age of 18 you can get a DL

if (userAge >= 18) {
  // console.log('you can have a DL')
} else {
  // console.log('you cannot have a DL')
}

// create a grading system (0-100)
// A >= 70
// B >= 60
// C >=50
// D >= 40
// E >= 0
// --> check for values greater than 100% and values less than 0

let score = 72;

if (score >= 70) {
  // console.log('A')
} else if (score >= 60) {
  // console.log('B')
} else if (score >= 50) {
  // console.log('C')
} else if (score >= 40) {
  // console.log('D')
} else if (score >= 0) {
  // console.log('E')
} else {
  // console.log('Invalid grade')
}

// SWITCH STATEMENTS --
// expressions
// cases for values we're comparing to our single expression --> scenarios to be met
// default case --> optional
// --> break keyword
// --> syntax

let applicantAge = 15;

switch (true) {
  case applicantAge >= 18: // returns a boolean --> for 15 this returns false
    // condition to run if the expression is equal to value1
    // console.log('you can register for a DL')
    break;
  case applicantAge < 18: // returns a boolean --> for 15 this returns true
    // condition to run if the expression is equal to value2
    // console.log('you cannot register for a DL')
    break;
  default:
  // condition to run if the expression is not equal to any of the values
  // console.log('Invalid age')
}

// LOGICAL OPERATORS --> &&, ||, !
// --> usually return a boolean value
// --> used to combine multiple conditions
// AND --> &&
// --> both conditions must be true
// --> returns true if both conditions are met
// OR --> ||
// --> either condition must be true
// --> returns true if at least one condition is met
// NOT --> ! --> this is used to negate a condition/boolean value
// --> returns the opposite of the condition
// --> returns true if the condition is false and vice versa

let isCitizen = true;

if (userAge >= 18 && isCitizen) {
  // console.log('User is a citizen above the age of 18 years and can vote')
} else {
  // console.log('User cannot vote')
}

if (userAge >= 18 && isCitizen) {
  // console.log('User is a citizen above the age of 18 years and can vote');
} else if (userAge >= 18 && !isCitizen) {
  // console.log('User is a above the age of 18 but is not a citizen and cannot vote');
} else if (userAge < 18 && isCitizen) {
  // console.log('User is a citizen but is not above the age of 18 and cannot vote');
} else {
  // console.log('User is not a citizen and is not above the age of 18 and cannot vote');
}

// 'User is a above the age of 18 but is not a citizen and cannot vote'
// 'User is a citizen but is not above the age of 18 and cannot vote'
// 'User is not a citizen and is not above the age of 18 and cannot vote'

let username = 'username';
let password = 'Password1@';

// check if the username and password are correct, if they are correct print 'Login successful'
// if the username is correct and the password is incorrect print 'Incorrect password'
// if the username is incorrect and the password is correct print 'Incorrect username'
// if both the username and password are incorrect print 'Incorrect username and password'

let isSunday = false;
let isSaturday = true;

if (isSaturday || isSunday) {
  // console.log('It is the weekend')
} else {
  // console.log('It is a weekday')
}

let isDiscountCoupon = true;
let isVIP = true;

if (isDiscountCoupon || isVIP) {
  // console.log('You can get a discount')
} else {
  // console.log('You cannot get a discount')
}

let isLoggedIn = false; //isLoggedOut = true
// negates this --> !isLoggedIn = true
// if the user is not logged in, redirect them to the login page

if (!isLoggedIn) {
  // checking for then the user is logged out
  // console.log('Redirecting to the login page')
}

var myWorkingLocation = 'Home'; // 'Office'
// console.log(myWorkingLocation);
myWorkingLocation = 'Office';
// console.log(myWorkingLocation);

// TERNARY OPERATOR (? :)
// shorthand for if-else statements
// condition ? value1 : value2
// used:
// --> when we have simple conditions
// --> when we want to make our code concise/brief
// should not be used for complex conditions

let canDrive = userAge >= 18 ? 'You can drive' : 'You cannot drive';
// console.log(canDrive);

// nested ternary operators
// checking for multiple return values

let grade =
  score >= 70
    ? 'A'
    : score >= 60
    ? 'B'
    : score >= 50
    ? 'C'
    : score >= 40
    ? 'D'
    : score >= 0
    ? 'E'
    : 'Invalid grade';
// console.log(grade);

// LOOPS --> while, for, do-while
// --> used to repeat code multiple times --> iterating over an array, counting numbers, etc.
// --> while loop --> executes a block of code as long as the condition is true

// while (condition) {
//code to execute --> action to be performed
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// print numbers from 1 to 5
// first value, i = 1, last value, j = 5
let i = 1;

while (i <= 5) {
  // logic for printing the numbers
  // console.log(i) // 1, 2, 3, 4, 5
  i++; // increment by 1
}

// print the fruits in the array
let fruitsArr = ['apples', 'bananas', 'mangoes', 'oranges'];
let j = 0;
while (j < fruitsArr.length) {
  // at the point where j = 4, 4 < 4 --> false
  // console.log(fruitsArr[j])
  j++;
}

// for loop
// for when we know how many times we want to repeat a block of code
// syntax -->
// for (initialization; condition; increment/decrement) {
// code to execute
// }
for (let index = 1; index <= 10; index += 2) {
  // console.log(index) //1, 4, 7, 10
}

// do-while loop
// do {
//   // code to execute
//   // action to be performed
// } while (condition);

let k = 15;

do {
  // console.log(k)
  k++; // k += 1
} while (k <= 5);

// exercise --> use fruitsArr using for-loop and do-while

// FUNCTIONS
// reusable block of code that performs a specific task

function greeting() {
  // console.log('Hello, World!');
  return 'Hello, World!';
}

// console.log(greeting());
// console.log(gradeChecker(80));

function gradeChecker(score) {
  // logic for checking grades
  if (score >= 70) {
    return 'A';
  } else if (score >= 60) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else if (score >= 40) {
    return 'D';
  } else if (score >= 0) {
    return 'E';
  } else {
    return 'Invalid grade';
  }
}

// console.log(gradeChecker());
// console.log(gradeChecker(score)); // score of 72
// console.log(gradeChecker(50));
// console.log(gradeChecker(30));
// console.log(gradeChecker(70));
// console.log(gradeChecker(100));
// console.log(gradeChecker(0));
// console.log(gradeChecker(-10));

// ARROW FUNCTIONS
// console.log(myGreeting('Rodgers')); // arrow functions cannot be hoisted
const myGreeting = (name) => {
  // logic here
  // `How are you, ${name}?`
  // console.log('this will be shown in the console');
  return 'How are you, ' + name + '?'; // 'How are you, Rodgers?'
  // console.log('this will not be shown in the console');
};

// console.log(myGreeting('Rodgers')); // 'How are you, Rodgers?'

// SCOPE
// --> global scope
// --> local/function scope
// --> lexical scope
// --> block scope

// global scope

let globalVar = 'I am a global variable';

// console.log(globalVar, isStudent, isTeacher);

function accessMyGlobalVar() {
  // console.log(globalVar);
}
accessMyGlobalVar();

// local/function scope --> variables declared within a function and can only be accessed within that function
function mySecret() {
  let secretCode = '1234abcA@!';
  // console.log(secretCode);
}
mySecret();

// console.log(secretCode) // ReferenceError: secretCode is not defined

// block scope
// used with let and const keywords as they are block-scoped
// var doesn't have block scope
// they can only be accessed within the block they are declared in
// think of a block as a pair of curly braces {}
// think of a temporary meeting room where only the people in the room can access that info, and once you leave the room, everything is forgotten

if (true) {
  let blockAge = 30;
  // console.log(blockAge);
}

// console.log(blockAge); // ReferenceError: blockAge is not defined

// lexical scope

function grandParent() {
  let familySecret = 'This is our family secret';
  console.log(familySecret, 'grandParent');
  console.log(childSecret, 'grandParent');
  function parent() {
    console.log(familySecret, 'parent');
    function child() {
      console.log(familySecret, 'child');
      let childSecret = 'This is my as a secret';
    }
    child();
  }
  parent();
}

grandParent();
