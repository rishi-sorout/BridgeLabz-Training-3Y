
 // Declare variables of different data types
const userName = "Rishi";
const age = 21;
const isStudent = true;
const subjects = ["Java", "HTML", "CSS"];
const student = { name: "Rishi", age: 21 };
const address = null;
let phoneNumber;

// Store labels, values, and data types in an array
const dataSummary = [
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "Age",
        Value: age,
        Type: typeof age
    },
    {
        Label: "Is Student",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Label: "Student Object",
        Value: JSON.stringify(student),
        Type: typeof student
    },
    {
        Label: "Address",
        Value: String(address),
        Type: address === null ? "null" : typeof address
    },
    {
        Label: "Phone Number",
        Value: String(phoneNumber),
        Type: typeof phoneNumber
    }
];

// Display the complete report in one table
console.table(dataSummary);
