// Destructuring

// 1. objects
// order doesn't matter
// ensure that the property names match to the ones in the destructuring
const student = {
  name: 'Ken',
  course: 'software dev',
  age: 18,
  isActive: true,
  hobbies: ['coding', 'gaming', 'football', 'dancing'],
  phoneNumber: '+254701234567',
};

// const name = student.name
// const phoneNumber = student.phoneNumber
// const hobbies = student.hobbies

const { name, phoneNumber, hobbies } = student;

// console.log(name, phoneNumber, hobbies);

// 2. array --> order is important
const colors = ['white', 'black', 'green'];
// console.log(colors[0], colors[1], colors[2]);
const [zero, one, two] = colors;
// console.log(zero);
// console.log(one);
// console.log(two);

// 3. strings 
// --> order is important
// --> 
const yourName = 'Hon Donald Trump'; // title, firstName, secondName
const [title, firstName, secondName] = yourName.split(' ');
// console.log(title);

const splitting = yourName.split(' ')[0];
console.log(splitting);
