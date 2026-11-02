
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {

    try {
        // Convert JSON string into JavaScript object
        const user = JSON.parse(rawData[i]);

        // Check required properties
        if (user.user === undefined || user.age === undefined) {
            throw new Error("Missing user or age property");
        }

        // Convert age into number
        const age = Number(user.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        cleanData.push({
            user: user.user,
            age: age
        });

        console.log(`Line ${i + 1}: Valid JSON`);

    } catch (error) {

        const errorType = error instanceof SyntaxError
            ? "Invalid JSON"
            : "Validation Error";

        errors.push({
            line: i + 1,
            type: errorType,
            message: error.message
        });

        console.log(
            `Line ${i + 1}: ${errorType} - ${error.message}`
        );
    }
}

// Filter adult users
const adults = cleanData.filter(user => user.age >= 18);

// Filter under-18 users
const minors = cleanData.filter(user => user.age < 18);

console.log("\n----- JSON AUDIT REPORT -----");
console.log("Clean Data:", cleanData);
console.log("Adults:", adults);
console.log("Under 18:", minors);
console.log("Errors:", errors);
console.log("Valid Records:", cleanData.length);
console.log("Invalid Records:", errors.length);

// Debugging: Set breakpoint at JSON.parse().
// Watch i, user, cleanData and errors.
