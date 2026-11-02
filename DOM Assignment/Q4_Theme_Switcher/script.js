
const themeButtons = document.querySelectorAll(".themeButton");

// Apply selected theme
function applyTheme(theme) {

    document.body.setAttribute("data-theme", theme);

    document.body.setAttribute(
        "class",
        theme + "-theme"
    );
}

// Handle theme button clicks
themeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedTheme =
            button.getAttribute("data-theme");

        applyTheme(selectedTheme);
    });
});

// Set default theme
applyTheme("light");
