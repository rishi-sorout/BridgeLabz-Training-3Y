
"use strict";

// Create booking form
document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">
        <label>Name:</label><br>
        <input type="text" id="name"><br><br>

        <label>Email:</label><br>
        <input type="text" id="email"><br><br>

        <label>Seats:</label><br>
        <input type="number" id="seats"><br><br>

        <button type="submit">Book Ticket</button>
    </form>

    <p id="message"></p>
    <pre id="ticket"></pre>
`;

document.getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const seats = Number(document.getElementById("seats").value);

        // RegExp patterns
        const namePattern = /^[A-Za-z ]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation
        if (!namePattern.test(name)) {
            document.getElementById("message").textContent =
                "Invalid name. Use alphabets only.";
            return;
        }

        if (!emailPattern.test(email)) {
            document.getElementById("message").textContent =
                "Invalid email address.";
            return;
        }

        if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
            document.getElementById("message").textContent =
                "Seats must be between 1 and 10.";
            return;
        }

        // Create booking object
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        document.getElementById("message").textContent =
            "Booking Successful!";

        document.getElementById("message").style.color = "green";

        // Display ticket details
        document.getElementById("ticket").textContent =
            `----- MOVIE TICKET -----\n` +
            `Name: ${booking.name}\n` +
            `Email: ${booking.email}\n` +
            `Seats: ${booking.seats}`;

        console.log("Booking Details:", booking);
});
