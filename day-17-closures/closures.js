// Day 17 – Closures

// Basic closure example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter1 = createCounter();
counter1();
counter1();
counter1();


// Another closure example
function greetUser(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}

const greetPriyanka = greetUser("Priyanka");
greetPriyanka();


// Closure for data privacy
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Balance:", balance);
      }
    }
  };
}

const account = bankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(2000);
