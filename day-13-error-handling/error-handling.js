// Day 13 – Error Handling

// Basic
try {
  let result = 10 / 2;
  console.log("Result:", result);
} catch (error) {
  console.log("Error occurred:", error.message);
}


// Handling undefined variable error
try {
  console.log(userName); 
} catch (error) {
  console.log("Caught error:", error.message);
}

// Custom error using throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  const value = divide(10, 0);
  console.log(value);
} catch (error) {
  console.log("Custom error:", error.message);
}
-
// finally block
try {
  console.log("Trying risky code");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This always runs");
}
