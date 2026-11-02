
const dropdown = document.getElementById("dropdown");

const dropdownButton = document.getElementById("dropdownButton");

const dropdownOptions = document.getElementById("dropdownOptions");

// Show and hide dropdown
dropdownButton.addEventListener("click", function () {

    dropdownOptions.hidden = !dropdownOptions.hidden;
});

// Select option using event delegation
dropdownOptions.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        dropdownButton.textContent = event.target.textContent;

        dropdownOptions.hidden = true;
    }
});

// Close dropdown using capturing phase
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {

        dropdownOptions.hidden = true;
    }

}, true);
