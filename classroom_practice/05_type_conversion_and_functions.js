// JAVASCRIPT TYPE CONVERSION AND FUNCTION TYPES

// Implicit conversion
// let result = "Hello" + 5;
// console.log(result); // Hello5
// console.log(typeof result); // string
//
// let result1 = 10 - "4";
// console.log(result1); // 6
// console.log(typeof result1); // number
//
// console.log(true + 3); // 4
// console.log(false + 5); // 5
//
// let result2 = "Value is " + true;
// console.log(result2); // "value is true"
// console.log(typeof result2); // string

// Explicit conversion
// String to Number
// let strNumber1 = "123";
// let num1 = Number(strNumber1);
// console.log(num1, typeof num1);
//
// let strNumber2 = "45.67";
// let num2 = parseFloat(strNumber2);
// console.log(num2, typeof num2);
//
// Number to String
// let number1 = 100;
// let str1 = String(number1);
// console.log(str1, typeof str1);
//
// let number2 = 250;
// let str2 = number2 + "";
// console.log(str2, typeof str2);
//
// Boolean to Number
// let bool1 = true;
// let num3 = Number(bool1);
// console.log(num3, typeof num3);

// Function declaration
// function add(a, b) {
//     return a + b;
// }

// Function expression
// let add = function (a, b) {
//     return a + b;
// };

// Arrow function
// let addd = (a, b) => {
//     return a + b;
// };

// Higher-order function and callback
// let mul = function (a, b) {
//     return a * b;
// };
//
// function calculate(a, b, callback) {
//     return callback(a, b);
// }
//
// let sum = calculate(10, 20, (a, b) => {
//     return a + b;
// });
// let multi = calculate(30, 40, mul);
// console.log(sum);

// Map and filter examples
let arr = [1, 2, 3, 4, 5, 6, 7];

let result = arr.map((x) => {
    return x * 2;
});
console.log(result);

let res = arr.filter((x, idx, arr) => {
    return x % 2 == 0;
});
console.log(res);

let arr1 = ["Apple", "mango", "banana", "apple", "apple"];

let arr1Res = arr1.filter((value, idx, arr1) => {
    console.log(idx);
    let ele = value.toLowerCase();
    return ele != "apple";
});

// Practice questions
// Filter fruits whose length is > 5
let arr2 = ["Apple", "mango", "banana", "apple", "apple"];

// Filter ages > 18
let arr3 = [12, 34, 9, 60, 36, 24];

// Filter fruits starting with "A" or "a"
let arr4 = ["Apple", "mango", "banana", "apple", "apple"];

// Map the square of each element into a new array
let arr5 = [1, 2, 3, 4, 5];