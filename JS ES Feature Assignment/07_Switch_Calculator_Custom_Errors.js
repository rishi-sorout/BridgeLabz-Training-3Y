
"use strict";

const operations = [
    "add",
    "divide",
    "power",
    "root",
    "subtract",
    "multiply"
];

const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

for (const operation of operations) {

    try {
        let result;

        switch (operation) {

            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new CalculationError(
                        "Cannot divide by zero"
                    );
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new CalculationError(
                        "Cannot calculate root of negative number"
                    );
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(
                    "Invalid operation: " + operation
                );
        }

        console.log(operation.toUpperCase(), "=", result);

    } catch (error) {
        console.log(
            operation.toUpperCase(),
            "ERROR:",
            error.name,
            error.message
        );
    }
}
