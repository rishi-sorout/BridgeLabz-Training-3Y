
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    // Whitespace-only strings are invalid as requested,
    // even though Number(" ") returns 0.
    const isBlank = typeof value === "string" && value.trim() === "";

    console.log("\nOriginal Value:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    if (!Number.isNaN(num) && !isBlank) {
        validNumbers.push(num);
        console.log("Status: Valid");
    } else {
        invalidNumbers.push(value);
        console.log("Status: Invalid");
    }
}

console.log("\n----- FINAL REPORT -----");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
