// Day 14 – JSON in JavaScript

// JavaScript object
const user = {
  name: "Priyanka",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Original object:", user);


// Convert object to JSON (stringify)
const jsonData = JSON.stringify(user);
console.log("JSON string:", jsonData);
console.log("Type:", typeof jsonData); // string

// Convert JSON back to object (parse)
const parsedData = JSON.parse(jsonData);
console.log("Parsed object:", parsedData);
console.log("Type:", typeof parsedData); // object


// Real-life example: storing data
const settings = {
  theme: "dark",
  language: "en"
};

const storedSettings = JSON.stringify(settings);
// imagine saving this to localStorage

const restoredSettings = JSON.parse(storedSettings);
console.log("Restored settings:", restoredSettings);

// Invalid JSON example (will fail)
try {
  JSON.parse("{ name: Priyanka }"); // invalid JSON
} catch (error) {
  console.log("JSON error:", error.message);
}
