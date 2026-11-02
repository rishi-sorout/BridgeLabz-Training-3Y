
"use strict";

// Create login form
document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">
        <label>Username:</label><br>
        <input type="text" id="username"><br>
        <small id="usernameError"></small><br><br>

        <label>Password:</label><br>
        <input type="password" id="password"><br>
        <small id="passwordError"></small><br><br>

        <button type="submit">Login</button>
    </form>

    <p id="message"></p>
`;

document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Username must contain at least 5 characters
        const usernamePattern = /^.{5,}$/;

        // Password must contain:
        // 8 characters, uppercase, lowercase, number and special character
        const passwordPattern =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        const usernameValid = usernamePattern.test(username);
        const passwordValid = passwordPattern.test(password);

        // Display username error
        document.getElementById("usernameError").textContent =
            usernameValid ? "" : "Username must have at least 5 characters.";

        // Display password error
        document.getElementById("passwordError").textContent =
            passwordValid ? "" :
            "Password must contain 8 characters, uppercase, lowercase, number and special character.";

        // Display final result
        const message = document.getElementById("message");

        if (usernameValid && passwordValid) {

            message.textContent = "Login Validation Successful!";
            message.style.color = "green";

        } else {

            message.textContent = "Please correct the errors.";
            message.style.color = "red";
        }
});
