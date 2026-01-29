// Day 07 – Template Literals

const name = "Priyanka";
const age = 22;
const course = "JavaScript";

// Basic template literal
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// Using expressions inside template literals
const yearOfBirth = 2025 - age;
console.log(`I was born in ${yearOfBirth}.`);

// Multi-line strings
const intro = `
Name: ${name}
Age: ${age}
Course: ${course}
`;

console.log(intro);

// Real-life example: result message
const marks = 85;
const result = marks >= 40 ? "Pass" : "Fail";

console.log(`You scored ${marks} marks. Result: ${result}.`);

// Using template literals in loops
const skills = ["HTML", "CSS", "JavaScript"];

for (let skill of skills) {
  console.log(`I am learning ${skill}`);
}
