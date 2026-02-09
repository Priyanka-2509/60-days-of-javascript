// Day 16 – Execution Context & Call Stack

// Global Execution Context starts here
console.log("Start of program");

function first() {
  console.log("Inside first function");
  second();
  console.log("Back in first function");
}

function second() {
  console.log("Inside second function");
  third();
}

function third() {
  console.log("Inside third function");
}

// Function calls
first();

console.log("End of program");
