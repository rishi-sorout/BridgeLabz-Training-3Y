
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class NegativeAmountError extends Error {}
class MissingDataError extends Error {}
class NullEntryError extends Error {}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        if (transaction === null) {
            throw new NullEntryError("Null transaction found");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new MissingDataError("Missing id or amount");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount found");
        }

        valid.push(transaction);
        console.log("Transaction", transaction.id, "is valid");

    } catch (error) {
        invalid.push({
            transaction: transaction,
            error: error.constructor.name,
            message: error.message
        });

        console.log("Error:", error.message);
    }
}

console.log("\n----- TRANSACTION REPORT -----");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
