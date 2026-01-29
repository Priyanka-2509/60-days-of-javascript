// Day 08 – Date & Math Objects

// DATE OBJECT

// Create a Date object for current date and time
const now = new Date();
console.log("Current date and time:", now);

// Get individual parts of the date
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0-6):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());

// Create a specific date
const birthday = new Date("2003-06-15");
console.log("Birthday:", birthday);

// Calculate age (basic logic)
const currentYear = now.getFullYear();
const birthYear = birthday.getFullYear();
const age = currentYear - birthYear;
console.log("Calculated age:", age);

// MATH OBJECT

const number = 7.6;

// Rounding numbers
console.log("Math.round:", Math.round(number));
console.log("Math.floor:", Math.floor(number));
console.log("Math.ceil:", Math.ceil(number));

// Minimum and maximum
console.log("Minimum:", Math.min(10, 5, 20));
console.log("Maximum:", Math.max(10, 5, 20));

// Random number between 0 and 1
console.log("Random (0-1):", Math.random());

// Random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number (1-100):", randomNumber);
