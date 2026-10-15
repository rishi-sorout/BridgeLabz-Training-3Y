
 // Original purchase amount
const totalAmount = 7500;

let discountPercentage;

// Select the applicable discount tier
if (totalAmount >= 10000) {
    discountPercentage = 25;
} else if (totalAmount >= 5000) {
    discountPercentage = 15;
} else if (totalAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price
const discountAmount = Math.round(
    totalAmount * discountPercentage / 100
);

const finalPrice = Math.round(totalAmount - discountAmount);

// Display the results
console.log(`Original Total: ₹${totalAmount}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount}`);
console.log(`Final Price: ₹${finalPrice}`);
