
"use strict";

// Create student registration form
document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">
        <label>Name:</label><br>
        <input type="text" id="name"><br>
        <small id="nameError"></small><br>

        <label>Email:</label><br>
        <input type="text" id="email"><br>
        <small id="emailError"></small><br>

        <label>Phone:</label><br>
        <input type="text" id="phone"><br>
        <small id="phoneError"></small><br>

        <label>Password:</label><br>
        <input type="password" id="password"><br>
        <small id="passwordError"></small><br>

        <button type="submit">Register</button>
    </form>

    <p id="message"></p>
`;

// Get form element
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    // Regular expressions
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    const passwordPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    // Validate fields
    const nameValid = namePattern.test(name);
    const emailValid = emailPattern.test(email);
    const phoneValid = phonePattern.test(phone);
    const passwordValid = passwordPattern.test(password);

    // Display validation result
    function showResult(id, valid, errorMessage) {
        const input = document.getElementById(id);
        const error = document.getElementById(id + "Error");

        input.style.border = valid
            ? "2px solid green"
            : "2px solid red";

        error.textContent = valid ? "Valid" : errorMessage;
        error.style.color = valid ? "green" : "red";
    }

    showResult("name", nameValid, "Only alphabets are allowed");
    showResult("email", emailValid, "Enter valid email");
    showResult("phone", phoneValid, "Enter exactly 10 digits");
    showResult("password", passwordValid,
        "Include uppercase, number and special character");

    const message = document.getElementById("message");

    if (nameValid && emailValid && phoneValid && passwordValid) {
        message.textContent = "Registration Successful!";
        message.style.color = "green";
        console.log("Student registered successfully");
    } else {
        message.textContent = "Please correct the errors";
        message.style.color = "red";
    }
});
