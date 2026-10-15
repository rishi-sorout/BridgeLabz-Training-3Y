
 // Marks obtained in five subjects (out of 100)
const marks = [90, 85, 88, 92, 80];

// Calculate total marks
let totalMarks = 0;

for (const mark of marks) {
    totalMarks += mark;
}

// Calculate average and percentage
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
const hasFailed = marks.some(mark => mark < 35);

// Determine the result
let result;

if (hasFailed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}

// Display the result
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
