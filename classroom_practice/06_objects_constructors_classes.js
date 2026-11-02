// JAVASCRIPT OBJECT CREATION: OBJECT LITERALS, CONSTRUCTOR FUNCTIONS AND CLASSES

// Object literal
// let student = {
//     id: "101",
//     name: "rahul",
//     marks: 90,
//     display: () => {
//         console.log(`my name is ${this.name} and got marks${this.marks}`);
//     }
// };

// Bracket notation and dot notation
// let userName = student["name"];
// let userMarks = student.marks;
// console.log(userName);
// student.display();

// Functional constructor
// function Student(id, name, marks) {
//     this.id = id;
//     this.name = name;
//     this.marks = marks;
//
//     function display() {
//         console.log("this is method");
//     }
// }
//
// let s1 = new Student(101, "rahul", 75);
// let s2 = new Student(102, "raj", 87);
// console.log(s1);
// console.log(s2);

// Class
// class Student {
//     constructor(id, name, marks) {
//         this.id = id;
//         this.name = name;
//         this.marks = marks;
//     }
//
//     display = () => {
//         console.log("this is a student method");
//     };
//
//     getMarks = () => {
//         return this.marks;
//     };
// }
//
// let s1 = new Student(101, "raj", 89);
// let s2 = new Student(101, "rohan", 90);
// console.log(s1);
// console.log(s2);
// s2.display();

// Array of student objects
let studentArr = [
    { id: 101, name: "raj", marks: "60", gender: "male" },
    { id: 102, name: "ram", marks: "80", gender: "male" },
    { id: 103, name: "diya", marks: "55", gender: "female" },
    { id: 104, name: "yash", marks: "90", gender: "male" },
    { id: 105, name: "disha", marks: "90", gender: "female" },
    { id: 106, name: "rohan", marks: "45", gender: "male" },
];

// Q1. Print an array of student names
let studentNames = studentArr.map((x) => {
    return x.name;
});

console.log(studentNames);

// Q2. Transform student names by adding Mr./Ms. based on gender
// Expected format examples:
// { id: 101, name: "Mr raj", marks: "60", gender: "male" }
// { id: 103, name: "Ms diya", marks: "55", gender: "female" }