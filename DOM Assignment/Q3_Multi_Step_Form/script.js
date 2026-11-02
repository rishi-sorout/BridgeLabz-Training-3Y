
const steps = document.querySelectorAll(".step");

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const summary = document.getElementById("summary");

let currentStep = 0;

// Display current step
function showStep() {

    steps.forEach(function (step, index) {

        step.hidden = index !== currentStep;
    });

    backButton.disabled = currentStep === 0;

    nextButton.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

// Validate current step
function validateStep() {

    if (currentStep === 0) {

        if (nameInput.value.trim() === "") {

            alert("Please enter your name");

            return false;
        }
    }

    else if (currentStep === 1) {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value.trim())) {

            alert("Please enter a valid email");

            return false;
        }
    }

    else if (currentStep === 2) {

        if (passwordInput.value.length < 6) {

            alert("Password must contain at least 6 characters");

            return false;
        }
    }

    return true;
}

// Next button functionality
nextButton.addEventListener("click", function () {

    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {

        currentStep++;

        showStep();
    }

    else {

        // Display final summary
        summary.innerHTML = `
            <h2>Form Completed Successfully!</h2>
            <p>Name: ${escapeHTML(nameInput.value)}</p>
            <p>Email: ${escapeHTML(emailInput.value)}</p>
            <p>Password: ${"*".repeat(passwordInput.value.length)}</p>
        `;

        document.getElementById("multiStepForm").hidden = true;
    }
});

// Back button functionality
backButton.addEventListener("click", function () {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});

// Escape user input before displaying it
function escapeHTML(value) {

    return value.replace(/[&<>"']/g, function (character) {

        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

// Display first step
showStep();
