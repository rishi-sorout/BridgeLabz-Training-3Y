// DOM MANIPULATION: COUNTER, INCREMENT, DECREMENT AND CLASS TOGGLE

const incEl = document.querySelector("#inc");
const decEl = document.querySelector("#dec");
const toggleEl = document.querySelector("#toggle");
const headingEl = document.querySelector("#heading");

let count = 0;

toggleEl.addEventListener("click", () => {
    headingEl.classList.toggle("notActive");
});

incEl.addEventListener("click", () => {
    count++;
    headingEl.textContent = count;
});

decEl.addEventListener("click", () => {
    count--;
    headingEl.textContent = count;
});