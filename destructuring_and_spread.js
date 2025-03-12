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
// --> do a split method
// --> returns an array which can be destructured.
const yourName = 'Hon Donald Trump'; // title, firstName, secondName
const [title, firstName, secondName] = yourName.split(' ');
// console.log(title);

const splitting = yourName.split(' ')[0];
// console.log(splitting);

// SPREAD OPERATORS
// --> merge, update or copy data in arrays and objects

// syntax (...)
// 1. working with arrays [...]
// a. copy an array
const numbers = [1, 2, 3, 4, 5];
const copiedNumbers = [...numbers];
// [1, 2, 3, 4, 5]
// console.log(numbers)
// console.log(copiedNumbers)

// b. merge arrays
// merge numbers[] and copiedNumbers[] to create mergedArr[]
const mergedArr = [...numbers, ...copiedNumbers];
// console.log(mergedArr)

// merge arr1[] and arr2[] to create merged[]
// [1, 2, 3, 4, 5, 6, 7, 8]
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const merged = [...arr1, ...arr2];
// console.log(merged);

// c. adding an element to an array
// add 0,6,7 to our numbers[1, 2, 3, 4, 5] --> [0,1,2,3,4,5,6,7]
// [0,1,2,3,4,5,6,7]
const addElements = [0, ...numbers, 6, 7]; // [...numbers, 0, 8, 10, 15] --> [1,2,3,4,5, 0, 8, 10, 15]
// console.log(addElements, numbers);

// 2. working with objects
// a. copy an object
// const student = {
//   name: 'Ken',
//   course: 'software dev',
//   age: 18,
//   isActive: true,
//   hobbies: ['coding', 'gaming', 'football', 'dancing'],
//   phoneNumber: '+254701234567',
// };

const copiedStudent = { ...student };
// const sqr = [student];
// console.log(sqr);
// console.log(copiedStudent);

// b. merging objects
// merging user{} and details{} to create userDetails that has data from both objects
const user = { name: 'vincent', age: 30 };
const details = { country: 'kenya', job: 'dev' };
const contacts = { email: 'test@example.com', phoneNumber: '+254701234567' };
const userDetails = { ...user, ...contacts, ...details }; // { name: 'vincent', age: 30, country: 'kenya', job: 'dev' }
// console.log(userDetails);

// updating data in an object
const updatedUser = {
  ...userDetails,
  age: 20,
  email: 'vincent@mail.org',
  linkedIn: 'linkedin/vincent-job',
};
// console.log(updatedUser);

// more examples on spread operator...
// cloning/copy an array
const original = ['apples', 'mangoes', 'oranges', 'bananas'];
const cloned = [...original];
// console.log(original, cloned);

// spreading an array inside objects
const students = ['alice', 'john', 'jane'];
// const beginningOfStudents = ['joseph', ...students];
// const startAndEnd = ['joseph', ...students, 'mary'];
const classData = {
  course: 'software development',
  studentsList: ['joseph', ...students, 'mary'],
};

// console.log(classData);

// merge and update objects
//update nested object (address{}) --> updating the city: 'nakuru, add postalNumber: 670
const userData = {
  name: 'john',
  age: 12,
  address: { city: 'nairobi', postalCode: '00100' }, //
};

const updateUser = {
  ...userData,
  country: 'uganda',
  hobbies: 'hiking',
  age: 24,
  address: { ...userData.address, city: 'nakuru', postalNumber: 670 },
};
// console.log(updateUser);

// remove duplicates from an array
// research on the Set() method
const duplicates = [1, 2, 2, 3, 4, 3, 6, 7, 7, 8, 10, 10, 11, 12, 20];
const uniqueNums = [...new Set(duplicates)];
// console.log(uniqueNums);

// adding objects inside an array
const StudentsList = [
  { id: 1, name: 'ken', age: 20 },
  { id: 2, name: 'mark', age: 24 },
  { id: 3, name: 'luke', age: 19 },
  { id: 4, name: 'john', age: 24 },
];

const updatedStudentsList = [
  ...StudentsList,
  { id: 3, name: 'charlie', age: 23 },
];
// console.log(updatedStudentsList);

// updating an object inside an array
const updated = StudentsList.map((student) => {
  // logic here
  // check for student with id === 2, and update their age to 34
  return student.id === 2 ? { ...student, age: 34 } : student;
});

console.log(updated);
