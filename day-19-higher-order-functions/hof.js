// Day 19 – Higher Order Functions

// Function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log("Add:", operate(10, 5, add));
console.log("Subtract:", operate(10, 5, subtract));


// Function returning another function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));


// Custom implementation of map()
function customMap(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
}

const numbers = [1, 2, 3, 4];

const squaredNumbers = customMap(numbers, function (num) {
  return num * num;
});

console.log("Squared numbers:", squaredNumbers);

// Real-life style example
function processUser(name, formatter) {
  return formatter(name);
}

function toUpper(name) {
  return name.toUpperCase();
}

function addGreeting(name) {
  return `Hello, ${name}`;
}

console.log(processUser("priyanka", toUpper));
console.log(processUser("Priyanka", addGreeting));
