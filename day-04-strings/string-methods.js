// Day 04 – String Methods and Logic
const input = "  Hello JavaScript World  ";

// length
console.log("Length:", input.length);

// trim() removes extra spaces
const trimmedInput = input.trim();
console.log("Trimmed:", trimmedInput);

// toUpperCase() and toLowerCase()
console.log("Uppercase:", trimmedInput.toUpperCase());
console.log("Lowercase:", trimmedInput.toLowerCase());

// includes() checks if a word exists
console.log("Includes 'JavaScript':", trimmedInput.includes("JavaScript"));

// slice() extracts part of a string
console.log("Slice (0 to 5):", trimmedInput.slice(0, 5));

// replace() replaces part of a string
console.log(
  "Replace:",
  trimmedInput.replace("World", "Developer")
);

// split() converts string into an array
const words = trimmedInput.split(" ");
console.log("Split into words:", words);

// Reverse a string
const text = "JavaScript";

const reversedText = text
  .split("")
  .reverse()
  .join("");

console.log("Reversed string:", reversedText);

// Day 04 – String Methods and Logic
const input = "  Hello JavaScript World  ";

// length
console.log("Length:", input.length);

// trim() removes extra spaces
const trimmedInput = input.trim();
console.log("Trimmed:", trimmedInput);

// toUpperCase() and toLowerCase()
console.log("Uppercase:", trimmedInput.toUpperCase());
console.log("Lowercase:", trimmedInput.toLowerCase());

// includes() checks if a word exists
console.log("Includes 'JavaScript':", trimmedInput.includes("JavaScript"));

// slice() extracts part of a string
console.log("Slice (0 to 5):", trimmedInput.slice(0, 5));

// replace() replaces part of a string
console.log(
  "Replace:",
  trimmedInput.replace("World", "Developer")
);

// split() converts string into an array
const words = trimmedInput.split(" ");
console.log("Split into words:", words);

// Reverse a string
const text = "JavaScript";

const reversedText = text
  .split("")
  .reverse()
  .join("");

console.log("Reversed string:", reversedText);


