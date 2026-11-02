
"use strict";

class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to monthly salary
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Neha", "Marketing", 41000),
    new Employee(5, "Rahul", "IT", 60000)
];

// Apply 10% bonus to each employee
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Display annual salary
console.log("Employee Annual Salaries:");

employees.forEach(employee => {

    console.log(
        employee.name,
        "-",
        "Department:", employee.department,
        "- Annual Salary: Rs.",
        employee.getAnnualSalary()
    );
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => {
        return total + employee.getAnnualSalary();
    },
    0
);

console.log("\nTotal Annual Company Payout: Rs.", totalAnnualPayout);
