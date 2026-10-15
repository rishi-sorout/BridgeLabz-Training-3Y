
 // Global variable
let bonus = 5000;

// Function to calculate the total salary
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    // Display the total salary
    console.log(`Total Salary: ₹${salary}`);
}

// Test with different employee statuses
calculateSalary(true);
calculateSalary(false);

// Demonstrate that the global bonus remains unchanged
console.log(`Global Bonus: ₹${bonus}`);
