//Variables
let name="Priyanka"; 
const age=22;
var isLearningJS=true;  //var is the old way of declaring variables 

//Data types
console.log(typeof name);    //string
console.log(typeof age);    //number
console.log(typeof isLearningJS);    //boolean

//FUNCTION
//function that takes user as a parameter
function greet(user){
  return `Hello ${user} welcome to javascript day01`;
}
//calling the function
console.log(greet(name));

//ARRAY
const skills=["HTML","CSS","JAVASCRIPT"];
// push() adds a new element to the end of the array
skills.push("Github"); // ["HTML", "CSS", "JavaScript", "GitHub"]
// unshift() adds a new element to the beginning of the array
skills.unshift("C");    // ["C", "HTML", "CSS", "JavaScript", "GitHub"]

//Remove last element pop()
skills.pop();  // Removes "GitHub"

//splice() Removes an element from specified index
skills.splice(1, 1);
console.log(skills);  // Removes 1 element starting at index 1
skills.splice(2, 1, "Node.js");  // Replaces element at index 2
console.log(skills);

//Create a new array without changing original (
const filteredSkills=skills.filter(skill => skill!=="CSS");
console.log(filteredSkills);   //Removes CSS


