
 // Monthly expenses for five categories
const expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

// Calculate the total expenses
let total = 0;

for (const category in expenses) {
    total += expenses[category];
}

// Calculate the average expense
const numberOfCategories = Object.keys(expenses).length;
const average = total / numberOfCategories;

// Add 10% tax to the total
const taxRate = 10;
const taxAmount = total * taxRate / 100;
let finalAmount = total;
finalAmount += taxAmount;

// Display results rounded to two decimal places
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax Amount (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);
