// Day 12 – Practice Day (Strings, Arrays, Objects)

// User object
const user = {
  name: "  Priyanka Kumari  ",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"]
};

// String practice

// Clean name
const cleanName = user.name.trim().toUpperCase();
console.log("Clean name:", cleanName);

// Count characters
console.log("Name length:", cleanName.length);


// Array practice

// Loop through skills
console.log("User skills:");

for (let skill of user.skills) {
  console.log(skill);
}

// Add a new skill
user.skills.push("GitHub");
console.log("Updated skills:", user.skills);


// Object + condition practice

if (user.age >= 18) {
  console.log(`${cleanName} is eligible`);
} else {
  console.log(`${cleanName} is not eligible`);
}


// Mixed logic

const knowsJS = user.skills.includes("JavaScript");

if (knowsJS) {
  console.log("User knows JavaScript");
} else {
  console.log("User does not know JavaScript");
}
