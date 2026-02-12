// main.js
import { calculateTotal, applyDiscount } from "./math.js";
import { user, isAdult, getCartItemCount, logout } from "./user.js";

// User checks
console.log("Is adult:", isAdult(user));
console.log("Cart items:", getCartItemCount(user));

// Cart calculations
const total = calculateTotal(user.cart);
console.log("Cart total:", total);

const finalAmount = applyDiscount(total, 10);
console.log("Final amount after discount:", finalAmount);

// Logout action
console.log(logout(user));
console.log("User logged in:", user.isLoggedIn);
