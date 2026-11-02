// JAVASCRIPT OBJECTS, JSON CONVERSION AND DOM EVENTS

let student = {
    id: 101,
    name: "rahul",
    isPresent: true,
    address: {
        city: "mathura",
        pincode: 12345,
    },
    display: function () {
        console.log(`my name is ${this.name}`);
    },
};

// Convert object to JSON and JSON to object
let jsonData = JSON.stringify(student);
console.log(jsonData);

let objData = JSON.parse(jsonData);
console.log(objData);

let query = "city";
student.display();

console.log(student["address"][query]);
console.log(student.address.city);

console.log(student.name); // read
console.log(student["name"]);
student.age = 24; // add
student.isPresent = false; // update
delete student.id; // delete
console.log(student);

// DOM selection examples
// let h1EL = document.getElementById("heading");
// let h1EL = document.getElementsByClassName("heading");
// h1EL.style.backgroundColor = "blue";
// h1EL.textContent = "Hello World";

let h1EL = document.querySelector("#heading");
let btnEl = document.querySelector("#btn");
let boxEl = document.querySelector(".box");

// Generate a random hexadecimal color when the box is clicked
boxEl.addEventListener("click", () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let ans = "#";

    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * 15);
        ans += arr[randomValue];
    }

    boxEl.style.backgroundColor = ans;
});

btnEl.addEventListener("click", () => {
    h1EL.style.color = "red";
});

console.log(h1EL);