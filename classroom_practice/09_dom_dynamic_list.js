// DOM MANIPULATION: TAKE INPUT AND ADD ITEMS TO A LIST

let nameEl = document.querySelector("#name");
let headEl = document.querySelector("#head");
let addEl = document.querySelector("#add");

addEl.addEventListener("click", () => {
    let item = nameEl.value.trim();

    if (item == "") {
        alert("empty item can't be add");
        return;
    }

    // First way: create an element and append it
    let liEl = document.createElement("li");
    liEl.textContent = item;
    headEl.appendChild(liEl);

    nameEl.value = "";

    // Second way: update the list using innerHTML
    // headEl.innerHTML += `<li>${item}</li>`;
});