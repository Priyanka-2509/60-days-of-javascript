// Day 10 – this Keyword

// this inside an object
const student = {
  name: "Priyanka",
  age: 22,
  introduce: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
};

student.introduce(); // this refers to student object


// this inside a regular function
function showThis() {
  console.log(this);
}

showThis(); // refers to global object (window in browser)


// this inside an arrow function
const arrowExample = () => {
  console.log(this);
};

arrowExample(); // arrow function does not have its own this


// this inside nested functions
const user = {
  name: "Priyanka",
  greet: function () {
    console.log("Outer this:", this.name);

    function innerFunction() {
      console.log("Inner function this:", this);
    }

    innerFunction();
  }
};

user.greet();

// Fixing this using arrow function
const userFixed = {
  name: "Priyanka",
  greet: function () {
    const innerArrow = () => {
      console.log("Arrow function this:", this.name);
    };
    innerArrow();
  }
};

userFixed.greet();
