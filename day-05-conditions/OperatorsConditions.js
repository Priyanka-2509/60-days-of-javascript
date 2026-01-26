// Day 05 – Operators & Conditional Logic
// Comparison operators
const a = 10;
const b = 20;

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);

// Logical operators
const age = 22;
const hasID = true;

// AND (&&) – both must be true
if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed to enter");
}

// OR (||) – at least one must be true
const hasTicket = false;
const isVIP = true;

if (hasTicket || isVIP) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}

// NOT (!) – reverses the condition
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}

// Grading program
const marks = 85;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 60) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Grade:", grade);


// Ternary operator
// Short form of if/else
const result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);
