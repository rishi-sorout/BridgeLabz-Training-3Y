
 // Initial salary and annual increment rate
const currentSalary = 30000;
const annualIncrementRate = 10;

let salary = currentSalary;
const salaryProjection = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {
    // Apply the annual increment
    salary += salary * annualIncrementRate / 100;

    // Round the salary to two decimal places
    salary = Math.round(salary * 100) / 100;

    // Store the yearly salary
    salaryProjection.push({
        Year: year,
        Salary: salary.toFixed(2)
    });
}

// Display the salary projection
console.table(salaryProjection);
