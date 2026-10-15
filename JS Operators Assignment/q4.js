
 // Generate an array of 8 random scores between 30 and 100
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Calculate the highest and lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate the average using reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Filter students who passed (score >= 50)
const passedScores = scores.filter(score => score >= 50);
const passedCount = passedScores.length;

// Use map() to assign a result to each score
const results = scores.map(score => ({
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

// Display individual results
console.table(results);

// Display the performance summary
console.log(`
Performance Summary
-------------------
Scores: ${scores.join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedCount}
Students Failed: ${scores.length - passedCount}
`);
