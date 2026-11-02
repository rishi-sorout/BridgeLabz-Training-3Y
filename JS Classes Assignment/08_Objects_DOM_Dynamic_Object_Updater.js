
"use strict";

// Create user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Create HTML form
document.body.innerHTML = `
    <h2>Update User Details</h2>

    <form id="userForm">
        <label>Name:</label><br>
        <input type="text" id="name"><br><br>

        <label>Email:</label><br>
        <input type="email" id="email"><br><br>

        <label>Age:</label><br>
        <input type="number" id="age"><br><br>

        <button type="submit">Update</button>
    </form>

    <h3>Updated User Details:</h3>
    <pre id="output"></pre>
`;

// Display existing object values in form
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

// Display object details
function displayUser() {
    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
}

// Initial display
displayUser();

// Update object when form is submitted
document.getElementById("userForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const updatedName =
            document.getElementById("name").value.trim();

        const updatedEmail =
            document.getElementById("email").value.trim();

        const updatedAge =
            Number(document.getElementById("age").value);

        // Validate inputs
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!updatedName || !emailPattern.test(updatedEmail) ||
            !Number.isInteger(updatedAge) || updatedAge <= 0) {

            alert("Please enter valid details");
            return;
        }

        // Update existing object
        user.name = updatedName;
        user.email = updatedEmail;
        user.age = updatedAge;

        // Display updated object
        displayUser();

        console.log("Updated User:", user);
});
