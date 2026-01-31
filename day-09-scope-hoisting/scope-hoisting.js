// Day 09 – Scope & Hoisting

//Global Scope 
var globalVar="I am global";

function showGlobal(){
  console.log(globalVar);  // accessible everywhere
}

showGlobal();

//Function scope
function test(){
  var functionVar="I am inside function";
  console.log(functionVar);
}

test();
//console.log(functionVar);  Error: not accessible outside

//Block scope-(let,const)
if (true) {
  let blockLet = "let inside block";
  const blockConst = "const inside block";
  var blockVar = "var inside block";
  console.log(blockLet);
  console.log(blockConst);
}

console.log(blockVar); // works (var ignores block)
// console.log(blockLet);    Error
// console.log(blockConst);  Error

// Function hoisting
greet();  // works before definition

function greet(){
  console.log("Hello from hoisted function");
}

// Variable hoisting with var
console.log(hoistedVar); // undefined (var is hoisted but not its value)
var hoistedVar = 10;

// Variable hoisting with let
// console.log(hoistedLet);  Error: Cannot access before initialization
let hoistedLet = 20;


// Function expression (not hoisted like above)
const sayHi=function (){
  console.log("Hi from a function expression");
}

sayHi();

