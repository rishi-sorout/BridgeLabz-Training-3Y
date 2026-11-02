
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to product price
    applyDiscount(discount) {
        this.price = this.price - (this.price * discount / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: Rs.${this.price}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Mobile", 25000, "Electronics")
];

// Apply 10% discount to first product
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products having price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts Above Rs.1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});
