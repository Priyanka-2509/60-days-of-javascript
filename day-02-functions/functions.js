// Day 02 – Functions in JavaScript

// Function without parameters
function sayHello() {
  return "Hello, welcome to Day 02";
}

console.log(sayHello());

// Function with parameters
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Priyanka"));

// Parameters vs Arguments
// name is a parameter
// "Priyanka" is an argument

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

// Function with default parameter
function introduce(name, course = "JavaScript") {
  return `I am ${name} and I am learning ${course}`;
}

console.log(introduce("Priyanka"));
console.log(introduce("Priyanka", "React"));
