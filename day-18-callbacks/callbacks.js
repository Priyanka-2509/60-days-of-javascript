// Day 18 – Callbacks

// Simple callback example
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Priyanka", sayBye);

// Callback with calculation-
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Add:", calculate(5, 3, add));
console.log("Multiply:", calculate(5, 3, multiply));


// Callback with setTimeout (async)
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");


// Real-life style example
function fetchData(callback) {
  console.log("Fetching data...");
  
  setTimeout(function () {
    callback("Data received");
  }, 1500);
}

fetchData(function (message) {
  console.log(message);
});
