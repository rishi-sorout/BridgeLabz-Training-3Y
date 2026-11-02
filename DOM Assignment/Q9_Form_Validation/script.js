
const registrationForm =
    document.getElementById("registrationForm");

const userName = document.getElementById("userName");

const userEmail = document.getElementById("userEmail");

const userPassword = document.getElementById("userPassword");

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Validate name
function validateName() {

    if (userName.value.trim() === "") {

        nameError.textContent = "Name is required";

        return false;
    }

    nameError.textContent = "";

    return true;
}

// Validate email
function validateEmail() {

    const emailValue = userEmail.value.trim();

    if (emailValue === "") {

        emailError.textContent = "Email is required";

        return false;
    }

    else if (!emailValue.includes("@")) {

        emailError.textContent = "Email must contain @";

        return false;
    }

    emailError.textContent = "";

    return true;
}

// Validate password
function validatePassword() {

    if (userPassword.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        return false;
    }

    passwordError.textContent = "";

    return true;
}

// Live validation while typing
userName.addEventListener("input", validateName);

userEmail.addEventListener("input", validateEmail);

userPassword.addEventListener("input", validatePassword);

// Handle form submission
registrationForm.addEventListener("submit", function (event) {

    // Prevent default form submission
    event.preventDefault();

    const isNameValid = validateName();

    const isEmailValid = validateEmail();

    const isPasswordValid = validatePassword();

    // Check all fields
    if (isNameValid && isEmailValid && isPasswordValid) {

        successMessage.textContent =
            "Form Submitted Successfully!";

        registrationForm.reset();
    }

    else {

        successMessage.textContent = "";
    }
});
