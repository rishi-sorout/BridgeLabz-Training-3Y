
 // Department names and their performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Store the evaluation results
const evaluationResults = [];

// Evaluate each department using a loop
for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];

    let performance;

    // Determine the performance category
    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    // Store the department evaluation
    evaluationResults.push({
        Department: departmentName,
        Score: score,
        Performance: performance
    });
}

// Display the evaluation report
console.table(evaluationResults);
