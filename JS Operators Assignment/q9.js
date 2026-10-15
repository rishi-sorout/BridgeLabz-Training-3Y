
 // Create an array to store numbers from 1 to 30
const numbers = [];

for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Store each number and its classification
const results = [];

for (const number of numbers) {
    let classification;

    // Check divisibility by both 3 and 5 first
    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    // Add the result to the new array
    results.push({
        Number: number,
        Result: classification
    });
}

// Display all classifications
console.table(results);
