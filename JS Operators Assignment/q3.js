
 // Define the input number
const x = 16.75;

// Perform mathematical operations
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);

// Generate a random integer between 10 and 50
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display a formatted summary
console.log(`
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x^3): ${power.toFixed(2)}
Random Number (10-50): ${randomNumber}
`);
