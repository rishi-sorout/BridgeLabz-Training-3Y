
"use strict";

class Cart {

    constructor() {
        this.items = [];
        this.discount = 0;
    }

    // Add items to cart
    addItem(name, price, quantity) {

        if (!name || price < 0 || quantity <= 0 ||
            !Number.isFinite(price) || !Number.isInteger(quantity)) {
            throw new Error("Invalid product details");
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total cart amount
    getTotal() {

        return this.items.reduce((total, item) => {

            return total + (item.price * item.quantity);

        }, 0);
    }

    // Validate and apply coupon
    applyCoupon(coupon) {

        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

        const match = coupon.match(couponPattern);

        if (!match) {
            throw new Error("Invalid coupon code");
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Discount must be between 1 and 100");
        }

        this.discount = discountPercent;

        console.log("Coupon Applied:", coupon);
        console.log("Discount:", this.discount + "%");
    }

    // Calculate final amount after discount
    getFinalTotal() {

        const total = this.getTotal();

        const discountAmount = total * this.discount / 100;

        return total - discountAmount;
    }

    // Display cart details
    displayCart() {

        console.log("\n----- SHOPPING CART -----");

        this.items.forEach(item => {

            console.log(
                item.name,
                "- Price:", item.price,
                "- Quantity:", item.quantity,
                "- Total:", item.price * item.quantity
            );
        });

        console.log("\nSubtotal: Rs.", this.getTotal());

        console.log("Discount:", this.discount + "%");

        console.log(
            "Final Total: Rs.",
            this.getFinalTotal()
        );
    }
}

// Create Cart object
const cart = new Cart();

// Add products
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

try {

    // Apply coupon
    cart.applyCoupon("SAVE20");

    // Display final cart
    cart.displayCart();

} catch (error) {

    console.log("Error:", error.message);
}
