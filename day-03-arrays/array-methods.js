//Original array
const prices=[100,200,300,400];

//map()-returns a new array by modifying each element of the array
const increasedPrices=prices.map(price => {
    return price+50;        //adds 50 to every element
});

console.log("Original array",prices);
console.log("With map()",IncreasedPrices);

//filter()=returns new array with selected elements(selects elements based on a condition)
const affordablePrices=prices.filter(price => {
    return price<300;
});

console.log("Original array",prices);
console.log("With filter()",affordablePrices);

//reduce() combines all values into a single result
const totalPrice=prices.reduce((total,price)=>{
    return total+price;
})

console.log("Total price:", totalPrice);

//Real life example-apply discount, filter affordable items,calculate total
const finalAmount=prices
    .map(price=>price-20)    // apply discount
    .filter(price=>price<350)   //filter affordable items
    .reduce((sum,price)=>sum+price);  //calculate total

console.log("Final amount after chaining:", finalAmount);
