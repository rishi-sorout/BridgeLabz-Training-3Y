// JAVASCRIPT CALCULATOR: CLICK EVENTS AND KEYBOARD EVENTS

const inputEL = document.querySelector(".input");
const btnsEl = document.querySelectorAll(".btn");

btnsEl.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            let ans = eval(inputEL.value);
            inputEL.value = ans;
            return;
        }

        if (e.target.innerHTML == "CE") {
            inputEL.value = "";
            return;
        }

        inputEL.value += e.target.innerHTML;
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key == "=" || e.key == "Enter") {
        inputEL.value = eval(inputEL.value);
        return;
    }

    if (e.key == "Backspace") {
        inputEL.value = inputEL.value.slice(0, -1);
        return;
    }

    if (
        e.key == "0" ||
        e.key == "1" ||
        e.key == "2" ||
        e.key == "3" ||
        e.key == "4" ||
        e.key == "5" ||
        e.key == "6" ||
        e.key == "7" ||
        e.key == "8" ||
        e.key == "9" ||
        e.key == "+" ||
        e.key == "/" ||
        e.key == "-" ||
        e.key == "*"
    ) {
        inputEL.value += e.key;
    }
});