
 // Store customer feedback
const feedback =
    "Great product! Fast delivery and amazing sound quality!";

// Split feedback into words and count them
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert feedback to lowercase for case-insensitive checks
const lowerCaseFeedback = feedback.toLowerCase();

// Check for negative keywords
const containsNegativeFeedback =
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor");

// Display the word count
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

// Classify the feedback
if (!containsNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
