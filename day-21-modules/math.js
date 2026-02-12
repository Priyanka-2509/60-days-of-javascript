// math.js

export function calculateTotal(prices) {
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;
}

export function applyDiscount(amount, discountPercent) {
  return amount - (amount * discountPercent) / 100;
}

export function calculateAverage(numbers) {
  const total = calculateTotal(numbers);
  return total / numbers.length;
}
