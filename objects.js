// OBJECTS
// an object is a collection of key-value pairs
// syntax -->
// const object = {
//      key: value,
//      key2: value2,
//      key3: value3
// }

// key - property
// value - data --> array, string, number, object, null, method/function

// a car has a brand, speed, YOM
const carName = 'mercedes';
const YOM = 2019;
const speed = 180;
const country = 'Germany';

const car = {
  name: 'mercedes',
  color: 'matte-black',
  YOM: 2019,
  speed: 180,
  country: 'Germany',
};

const student = {
    name: 'Trevour Ambia',
    isPaid: true,
    age: 116,
    phoneNumber: '+254701234567',
    'favorite-language': 'javascript',
    'school name': 'Moringa'
};

// access data in an object
// methods
// --> 1. dot notation
// --> 2. bracket notation []
// 1. name of our car and speed
// console.log(car.name); // 'mercedes' --> dot notation
// console.log(car['speed']); // 180 --> bracket notation

// 2. student's phone number and age
// console.log(student.phoneNumber); // '+254701234567' --> dot notation
// console.log(student['age']); // 116 --> bracket notation
// console.log(student["favorite-language"])
// console.log(student["school name"])

//traversing our object --> enables us to iterate over our objects
// we commonly use the for..in method

for (const key in student) {
    console.log(`${key} ---> ${student[key]}`)
}



