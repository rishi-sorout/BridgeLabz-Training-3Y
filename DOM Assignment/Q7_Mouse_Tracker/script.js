
const mouseBox = document.getElementById("mouseBox");

const coordinates = document.getElementById("coordinates");

// Track mouse movement
mouseBox.addEventListener("mousemove", function (event) {

    const clientX = event.clientX;
    const clientY = event.clientY;

    coordinates.textContent =
        `Client X: ${clientX}, Client Y: ${clientY}`;
});

// Create red dot on double click
mouseBox.addEventListener("dblclick", function (event) {

    const boxPosition = mouseBox.getBoundingClientRect();

    // Calculate coordinates relative to box
    const x = event.clientX - boxPosition.left;

    const y = event.clientY - boxPosition.top;

    const redDot = document.createElement("div");

    redDot.style.width = "10px";
    redDot.style.height = "10px";

    redDot.style.backgroundColor = "red";

    redDot.style.borderRadius = "50%";

    redDot.style.position = "absolute";

    redDot.style.left = (x - 5) + "px";

    redDot.style.top = (y - 5) + "px";

    mouseBox.appendChild(redDot);
});
