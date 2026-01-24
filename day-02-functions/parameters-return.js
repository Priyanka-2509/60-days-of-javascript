// Day 02 – Parameters, Arguments, and Return Values

// Parameters vs Arguments
// Parameters are variables in the function definition
// Arguments are the actual values passed when calling the function

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Priyanka")); // "Priyanka" is the argument


// Multiple parameters
function calculateSum(a, b, c) {
  return a + b + c;
}

console.log(calculateSum(2, 4, 6));


// Default parameters
// If no value is passed, the default value is used

function introduce(name, course = "JavaScript") {
  return `I am ${name} and I am learning ${course}`;
}

console.log(introduce("Priyanka"));
console.log(introduce("Priyanka", "React"));


// Return vs console.log
// return sends the value back to the caller
// console.log only prints the value

function add(a, b) {
  return a + b;
}

function addAndLog(a, b) {
  console.log(a + b);
}

const result1 = add(5, 3);
const result2 = addAndLog(5, 3);

console.log(result1); // 8
console.log(result2); // undefined


// Function declaration vs function expression

// Function declaration
function multiply(a, b) {
  return a * b;
}

// Function expression
const multiplyExp = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3));
console.log(multiplyExp(2, 3));


// Callback function (basic example)
// A function passed as an argument to another function

function processUser(name, callback) {
  return callback(name);
}

function welcomeMessage(user) {
  return `Welcome ${user}`;
}

console.log(processUser("Priyanka", welcomeMessage));
