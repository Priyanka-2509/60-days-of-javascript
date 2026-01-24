// Arrow Functions

// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function equivalent
const multiplyArrow = (a, b) => {
  return a * b;
};

console.log(multiplyArrow(4, 5));

// Arrow function with implicit return
const square = num => num * num;
console.log(square(6));

// Arrow function with single parameter
const greetUser = name => `Hello ${name}`;
console.log(greetUser("Priyanka"));
