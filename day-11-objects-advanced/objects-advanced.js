// Day 11 – Objects (Advanced)

// Creating an object
const student={
  name:"Priyanka",
  age:20,
  skills:["HTML","CSS","JAVA"],
  
  introduce() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
};

student.inroduce();

// Accessing properties
console.log(student.name);
console.log(student["age"]);

// Adding new properties
student.city="Mumbai";
student.isLearning=true;

// Updating properties
student.age=19;
console.log("Updated student age:",student.age);

// Deleting properties
delete student.isLearning;
console.log(student);

const user={
  name:"Priya",
  address:{
    city:"Mumbai",
    pincode:400001
  }
};

console.log(user.address.city);

// Looping through object properties
for (let key in student){
  console.log(key, ":", student[key]);
}

// Object destructuring
const{name,age}=student
console.log("Name":name);
console.log("age":age);

// Copying objects
const copiedStudent = { ...student };
copiedStudent.name = "Aisha";

console.log("Original name:", student.name);
console.log("Copied name:", copiedStudent.name);



