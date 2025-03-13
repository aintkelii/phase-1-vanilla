// getElementById
// IDs are unique
// this will return our element
const taskInput = document.getElementById('taskInput');
console.log(taskInput);

// getElementByClassName
// class names are not unique to a single element as they are used to represent elements that might share similarities and actions
// it returns a collection[] of all HTML elements with the specified class name --> HTMLCollection
const tasks = document.getElementsByClassName('task');
console.log(tasks);
