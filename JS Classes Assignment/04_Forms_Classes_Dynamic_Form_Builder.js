
"use strict";

// Create HTML container
document.body.innerHTML = `
    <h2>Dynamic Form Builder</h2>
    <div id="formContainer"></div>
    <pre id="output"></pre>
`;

class FormBuilder {

    constructor(fields) {
        this.fields = fields;
    }

    // Generate form dynamically
    buildForm() {

        let formHTML = `<form id="dynamicForm">`;

        this.fields.forEach(field => {

            formHTML += `
                <label>${field.label}</label><br>
                <input
                    type="${field.type}"
                    name="${field.name}"
                    required
                ><br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
        </form>
        `;

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("dynamicForm")
            .addEventListener("submit", event => {

                event.preventDefault();

                const data = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(data, null, 2);

                console.log("Form Data:", data);
            });
    }

    // Collect all entered form values
    getFormData() {

        const form = document.getElementById("dynamicForm");
        const data = {};

        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });

        return data;
    }
}

// Define form fields
const fields = [
    {
        type: "text",
        label: "Username",
        name: "username"
    },
    {
        type: "email",
        label: "Email",
        name: "email"
    },
    {
        type: "password",
        label: "Password",
        name: "password"
    }
];

// Create FormBuilder object
const formBuilder = new FormBuilder(fields);

// Generate form
formBuilder.buildForm();
