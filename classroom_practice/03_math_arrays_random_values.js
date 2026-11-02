// JAVASCRIPT MATH METHODS, ARRAYS, RANDOM OTP AND HEX COLOR

let a = 4.5;

console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.pow(2, 3));

// Random number examples
// let num = Math.random(); // 0.0 to 0.99999
// let num = Math.floor(Math.random() * 10); // 0-9
// let num = Math.floor(Math.random() * 200) + 1; // 1-200
// let num = Math.floor(Math.random() * 100) + 500; // 500-599
//
// let min = 5000;
// let max = 6000;
// let num = Math.floor(Math.random() * (max - min)) + min;
// console.log(`random number ${num}`);

// Generate a random OTP-like number
function generateOtp() {
    let min = 0;
    let max = 15;

    let num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
    return num;
}

// generateOtp();

// Array basics
let arr = ["hello", "hi", 12, true];

let ans = "";
for (let i = 0; i < arr.length; i++) {
    ans += arr[i] + " ";
}
console.log(ans);

for (let x of arr) {
    console.log(x);
}

console.log(arr.slice(1, 3)); // include index 1, exclude index 3
arr.unshift("apple");
console.log(arr);
arr.push("mango");
console.log(arr);
console.log(arr.indexOf("hi"));

// Generate a random hexadecimal color
function generateHexColor() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let ans = "#";

    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * 15);
        ans += arr[randomValue];
    }

    console.log(ans);
    document.body.style.backgroundColor = ans;
}

generateHexColor();

// Boolean conversion examples
// true values: non-empty strings, 1, -1, [], {}
// false values: "", 0, -0, null, undefined, NaN
let check = NaN;
console.log(Boolean(check));