
 // Initialize the counter
let count = 0;

// Increase the counter
function increment() {
    count++;
    console.log(`Counter: ${count}`);
}

// Decrease the counter
function decrement() {
    count--;
    console.log(`Counter: ${count}`);
}

// Nested function demonstrating access to the outer count variable
function counterStatus() {
    function displayCount() {
        console.log(`Current Count: ${count}`);
    }

    displayCount();
}

// Simulate button clicks manually
increment();
increment();
increment();

decrement();

// Display the current count using the nested function
counterStatus();
