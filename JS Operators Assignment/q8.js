
 // Shopping cart containing three products
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart total using reduce()
const originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

// Calculate category-wise discounts
let discountedTotal = 0;

const discountedCart = cart.map(product => {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 10;
    } else if (product.category === "fashion") {
        discountRate = 5;
    }

    // Calculate the discounted price for this product
    const discountAmount = product.price * discountRate / 100;
    const finalPrice = product.price - discountAmount;

    // Add the discounted price to the cart total
    discountedTotal += finalPrice;

    return {
        Item: product.item,
        OriginalPrice: product.price,
        Discount: `${discountRate}%`,
        FinalPrice: finalPrice
    };
});

// Apply an additional 5% discount if the original cart total exceeds 50000
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

// Calculate the final amount payable
const finalTotal = discountedTotal - extraDiscount;

// Display product-level discounts
console.table(discountedCart);

// Display the complete cart summary
console.log(`Original Cart Total: ₹${originalTotal.toFixed(2)}`);
console.log(`After Category Discounts: ₹${discountedTotal.toFixed(2)}`);
console.log(`Extra Overall Discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final Cart Total: ₹${finalTotal.toFixed(2)}`);
