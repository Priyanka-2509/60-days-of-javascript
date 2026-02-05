// Day 12 – Nested Objects & Loops

// Nested object example
const student = {
  name: "Priyanka",
  age: 22,
  address: {
    city: "Mumbai",
    pincode: 400001
  },
  skills: ["HTML", "CSS", "JavaScript"]
};

// Accessing nested data
console.log("City:", student.address.city);
console.log("First skill:", student.skills[0]);


// Looping through array inside object
console.log("Student skills:");

for (let skill of student.skills) {
  console.log(skill);
}


// Looping through object properties
console.log("Student details:");

for (let key in student) {
  console.log(key, ":", student[key]);
}


// Array of nested objects
const students = [
  {
    name: "Priyanka",
    marks: 85
  },
  {
    name: "Aisha",
    marks: 92
  },
  {
    name: "Rohan",
    marks: 76
  }
];


// Looping through array of objects
console.log("Student marks:");

for (let student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
