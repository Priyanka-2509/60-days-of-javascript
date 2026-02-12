// user.js
// User-related logic

export const user = {
  name: "Priyanka",
  age: 22,
  isLoggedIn: true,
  cart: [499, 299, 199] // prices
};

export function isAdult(user) {
  return user.age >= 18;
}

export function getCartItemCount(user) {
  return user.cart.length;
}

export function logout(user) {
  user.isLoggedIn = false;
  return "User logged out successfully";
}
