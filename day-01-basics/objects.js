//Objects group related data
//this refers to the object
//Objects are mutable

const student={
  name:"Priyanka";
  age:22,
  course:"Computer Science",
  introduce(){
    return `hi i am ${this.name} ,I am learning ${this.course}`;
  }
};

console.log(student.name);
console.log(student.age);
console.log(student.introduce());

student.age = 23;   //Dot notation is preferred
console.log(student);
