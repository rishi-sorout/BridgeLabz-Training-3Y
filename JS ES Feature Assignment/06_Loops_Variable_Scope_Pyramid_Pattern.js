
"use strict";

// Default number of rows
let rows = 5;

// Take input in browser or through Node.js argument
if (typeof prompt === "function") {
    const input = prompt("Enter number of rows (default 5):");

    if (input !== null && input.trim() !== "") {
        rows = Number(input);
    }
} else if (typeof process !== "undefined" && process.argv[2]) {
    rows = Number(process.argv[2]);
}

// Validate input
if (!Number.isInteger(rows) || rows <= 0) {
    rows = 5;
}

console.log("Pyramid Pattern:");

for (let i = 1; i <= rows; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// Demonstrating var scope
function varExample() {

    for (var i = 1; i <= 3; i++) {
        console.log("Inside loop:", i);
    }

    // var is function-scoped, so i is accessible here.
    console.log("Outside loop:", i);
}

varExample();
