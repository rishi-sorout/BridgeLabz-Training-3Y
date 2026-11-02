// JAVASCRIPT STRICT MODE AND FUNCTION DECLARATION STYLES

"use strict";

// let a = "hello";
// console.log(a);

// Duplicate parameter names are not allowed in strict mode
// function fun(a, a) {
//     console.log("hi");
// }
// fun(10, 20);

// console.log(this);

// Function declaration
// function add(a, b) {
//     let res = a + b;
//     console.log(res);
//     return res;
// }
// let a = add(10, 30);
// console.log(a);

// Function expression
// let add = function (a, b) {
//     return a + b;
// };
// let a = add(10, 30);
// console.log(a);

// Arrow function
let add = (a, b) => a + b;

let a = add(10, 30);
console.log(a);