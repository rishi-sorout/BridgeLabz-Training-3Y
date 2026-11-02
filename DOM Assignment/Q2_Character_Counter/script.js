
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset");

const maxCharacters = 100;

// Update remaining character count
function updateCounter() {

    const remainingCharacters =
        maxCharacters - message.value.length;

    counter.textContent = remainingCharacters;

    // Change counter color
    if (remainingCharacters === 0) {

        counter.style.color = "red";
    }

    else if (remainingCharacters <= 20) {

        counter.style.color = "yellow";
    }

    else {

        counter.style.color = "green";
    }
}

// Prevent typing after reaching 100 characters
message.addEventListener("keydown", function (event) {

    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey || event.metaKey)
    ) {

        event.preventDefault();
    }
});

// Prevent pasting more than 100 characters
message.addEventListener("paste", function (event) {

    const pastedText = event.clipboardData.getData("text");

    const selectedLength =
        message.selectionEnd - message.selectionStart;

    const availableSpace =
        maxCharacters - message.value.length + selectedLength;

    if (pastedText.length > availableSpace) {

        event.preventDefault();
    }
});

// Update counter whenever input changes
message.addEventListener("input", updateCounter);

// Reset textarea
resetButton.addEventListener("click", function () {

    message.value = "";

    updateCounter();
});

updateCounter();
