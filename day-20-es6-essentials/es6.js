// Day 20 – ES6 Essentials

// Spread operator(arrays)
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

console.log("Numbers:", numbers);
console.log("More numbers:", moreNumbers);


// Spread operator(objects)
const user = {
  name: "Priyanka",
  age: 22
};

const updatedUser = {
  ...user,
  city: "Mumbai"
};

console.log("Updated user:", updatedUser);


// Rest operator (functions)
function sum(...values) {
  let total = 0;

  for (let num of values) {
    total += num;
  }

  return total;
}

console.log("Sum:", sum(1, 2, 3, 4));


// Array destructuring
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill] = skills;
console.log("First skill:", firstSkill);
console.log("Second skill:", secondSkill);


// Object destructuring
const student = {
  name: "Priyanka",
  age: 22,
  course: "JavaScript"
};

const { name, course } = student;
console.log("Name:", name);
console.log("Course:", course);


// Destructuring with rename
const { age: studentAge } = student;
console.log("Age:", studentAge);
