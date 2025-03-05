// functions --> code blocks that perform specific functions/duties
// function that prints a greeting
//  function that prints a dynamic greeting to a user by also having the user's name displayed
function greeting(name) {
  // console.log('How are you?')
  return `How are you, ${name}?`;
}
// console.log(greeting('Sam'));

// function that performs a summation of two numbers
function sum(num, num2) {
  return num + num2;
}
// console.log(sum(1, 2)); // 3
// console.log(sum(10, 24)); // 34

let username = 'robert';
let password = 'Password1@';
// function should achieve the following (loginValidation) when a user tries to log in:
// 1. check if the username and password are correct, if they are correct print 'Login successful'
// 2. if the username is correct and the password is incorrect print 'Incorrect username or password'
// 3. if the username is incorrect and the password is correct print 'Incorrect username or password'
// 4. if both the username and password are incorrect print 'Incorrect username or password'

const userData = [
  {
    id: 1,
    username: 'robert',
    password: 'Password1@',
  },
  {
    id: 2,
    username: 'john',
    password: 'Password1234@',
  },
  {
    id: 3,
    username: 'sharon',
    password: 'Password1!',
  },
];

// = assignment operator
// == loose equality operator // 1 and '1'
// === strict equality operator
// != loose inequality // 1 and '1'
// !== strict inequality

function loginValidation(username, password) {
  if (username === 'robert' && password === 'Password1@') {
    return 'Login successful'; // `robert, you have been logged in successfully.
  } else {
    return 'Incorrect username or password';
  }
}

console.log(loginValidation('robert', 'Password1@')); // 'Login successful'
console.log(loginValidation('robert', 'Password1234@')); // 'Incorrect username or password'
console.log(loginValidation('john', 'Password1@')); // 'Incorrect username or password'
console.log(loginValidation('roberts', 'Password1234@')); // 'Incorrect username or password'
