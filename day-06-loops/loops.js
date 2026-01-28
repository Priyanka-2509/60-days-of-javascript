// FOR LOOP
// Used when the number of iterations is known

console.log("For loop: Numbers from 1 to 5");
for(let i=1; i<=5 ;i++){
  console.log(i);
}

// PRINT EVEN NUMBERS UP TO 50
for(let i=2;i<=50;i+=2){
  console.log(i);
}

// WHILE LOOP
// Used when repetition depends on a condition
console.log("While loop example:");

let count=1;

while(count<=5){
  console.log(count);
  count++;
}

// DO...WHILE LOOP
let number=1;
do{
  console.log(number);
  number++;
}while(number<=3);

// LOOP THROUGH AN ARRAY
const skills=["HTML","CSS","JAVA"];

for(let i=0; i<skills.length; i++){
  console.log(skills[i]);
}

// LOOP THROUGH A STRING
const word="Loop";
console.log("Looping through string:");

for(let char of word){
  console.log(char);
}
