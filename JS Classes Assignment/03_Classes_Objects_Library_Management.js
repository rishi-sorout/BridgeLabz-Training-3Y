
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book
    issueBook() {
        if (this.isIssued) {
            console.log("Book is already issued");
        } else {
            this.isIssued = true;
            console.log(this.title, "issued successfully");
        }
    }

    // Return a book
    returnBook() {
        if (!this.isIssued) {
            console.log("Book is not issued");
        } else {
            this.isIssued = false;
            console.log(this.title, "returned successfully");
        }
    }
}

// Create book objects
const books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "APJ Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104")
];

// Display available books
function displayAvailableBooks() {

    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(book.title, "-", book.author, "-", book.ISBN);
    });
}

// Search book using ISBN and issue it
function searchAndIssueBook(isbn) {

    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found");
    }
}

displayAvailableBooks();

searchAndIssueBook("101");

displayAvailableBooks();
